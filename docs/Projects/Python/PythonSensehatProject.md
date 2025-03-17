# Python SenseHat project

![banner](/raspberrypi.jpg)

As I own a raspberry PI at home I thought it would only be fair to turn this into a small portfolio project. When reading the documentation the sensehat comes armed with different environmental sensors.

- Temperature
- Humidity
- Pressure
- Rotation
- Acceleration
- Orientation
- Magnatic Field

The goal of this starting project is simple. Turn the raspberry PI into a weather station that captures the data and makes it available through an API to other devices. We will also display the data on a web page hosted on the same LAN network.

For the database we will use MongoDB and Flask as a backend system as both are light weight (In all fairness if we truely had to go full light weight I would have opted for SQLite).

Furthermore we have an 8x8 pixel display, we can use this to show some data e.g. the current day of the month and a color code for the type of weather.

In the furture we will also add a camera module so we can do some image processing on this with OpenCV.

## Scheduling measurements

We don't want to take measurements just once, we want to take multiple measurements a day so we have enough data points. For that we will use a scheduling library. The scheduled task will then ask the measurements from the sensehat and insert them into a mongodb database.

```py
if __name__ == '__main__':
    mongo_handle = mongo.MongoInterface()
    schedule.every(30).seconds.do(lambda: process_data(mongo_handle))

    ...
    run_scheduler()

def run_scheduler():
    while True:
        schedule.run_pending()
        time.sleep(1)
```

## Taking measurements

Collecting the data is fairly easy with the sensehat, it has a nice API to request everything, the temperature needs a bit more processing though as the sensor itself is close to the CPU, and the heat of the CPU influences the actual room temperature readings.

Finally we add a timestamp so we can easily filter this data by time entry later with MongoDB.

```py
def collect_data():
    sense = sense_utils.get_sense()
    temp = sense_utils.get_temperature_measurement()

    data = {
        "temperature": temp,
        "gyroscope": sense.get_gyroscope(),
        "accelerometer": sense.get_accelerometer(),
        "barometric_pressure": sense.get_pressure(),
        "humidity": sense.get_humidity(),
        "timestamp": datetime.datetime.now()
    }

    return data
```

## Saving measurements

After that the measurements are saved in an online MongoDB cloud database. And the sensehat will flash green if it succeeded, or red when it failed to insert the data in the database.

```py
def process_data(mongo_handle):
    data = collect_data()

    has_inserted = mongo_handle.insert_weather_data(data)

    invalid_color = [255, 0, 0]
    valid_color = [0, 255, 0]
    duration = 0.1

    if not has_inserted:
        sense_utils.flash_light(invalid_color, duration)
    else:
        sense_utils.flash_light(valid_color, duration)
```

```json
{
  "_id": {
    "$oid": "67d8053a1492150eb9a1cdca"
  },
  "temperature": 24.265875032213,
  "gyroscope": {
    "roll": 0.06164485849774516,
    "pitch": 358.41833490816913,
    "yaw": 358.89041357121664
  },
  "accelerometer": {
    "roll": 0.12196478035842685,
    "pitch": 358.4125966954927,
    "yaw": 358.89056170094426
  },
  "barometric_pressure": 1034.896728515625,
  "humidity": 33.48392868041992,
  "timestamp": {
    "$date": "2025-03-17T11:19:22.469Z"
  }
}
```

## Requesting the measurements

Finally we implement a webserver with Flask that allows 3rd parties to access our data and use our filters. However, Python by default is a single threaded language and using Flask as it is would block the main worker thread.

So to circumvent that we use the threading library to run our web server on a different thread.

```py
@flask_handle.route('/daily-average', methods=['POST'])
def daily_average():
    ...

if __name__ == '__main__':
    ...

    flask_thread = threading.Thread(target=run_flask)
    flask_thread.daemon = True
    flask_thread.start()

    ...
```

## Creating and processing filters

Just simply getting a single point of entry or all points will do little. Now we can add a POST request route that will accept a timestamp, we will take all temperatures of that day and return the average to the user with our API!

We will make sure that the user can input a timestamp. we wil then parse it into a format that MongoDB can use.

```py
def daily_average():
    try:
        data = request.get_json()
        timestamp_str = data.get('timestamp')
        if not timestamp_str:
            return jsonify({"error": "Timestamp is required"}), 400
        
        timestamp = datetime.datetime.strptime(timestamp_str, '%Y-%m-%d %H:%M:%S')
        average_temp = mongo_handle.get_daily_average_temp(timestamp)
        
        if average_temp is not None:
            return jsonify({"average_temperature": average_temp, "date": timestamp.date()}), 200
        else:
            return jsonify({"error": "No data available for this day"}), 404

    except ValueError:
        return jsonify({"error": "Invalid timestamp format. Use 'YYYY-MM-DD HH:MM:SS'."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500
```

Finally we create a query for MongoDB and filter the documents. Then we average the results and we return that to the user.

```py
def get_daily_average_temp(self, timestamp):
        start_of_day = datetime(timestamp.year, timestamp.month, timestamp.day, 0, 0, 0)
        end_of_day = datetime(timestamp.year, timestamp.month, timestamp.day, 23, 59, 59, 999999)
        
        query = {"timestamp": {"$gte": start_of_day, "$lte": end_of_day}}
        documents = self.weather_col.find(query)
        
        total_temp = 0
        count = 0
        
        for doc in documents:
            if 'temperature' in doc:
                total_temp += doc['temperature']
                count += 1
        
        if count == 0:
            return None
        
        average_temp = total_temp / count
        return average_temp
```


[Github page](https://github.com/SixArne/WeatherStation)