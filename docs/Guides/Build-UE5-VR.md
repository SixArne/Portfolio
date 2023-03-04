# Getting started

Before building anything in UE5 here are some tools that are neccesary.

- (Android studio 4.0)[https://developer.android.com/studio/archive]
- (Java SDK 17-19)[https://www.oracle.com/be/java/technologies/downloads/]

:::info
This one might not be neccesary but helped me
:::
- (Java SDK 11)[https://www.oracle.com/be/java/technologies/downloads/#java11]

## Android studio

After installing android studio 4.0 also install the command line tools.

![Android studio](/android_studio.png)

Go to `Configure > SDK manager > SDK tools` and select `Android SDK command line tools, and NDK`.

## Setting up UE5

Go to the installation folder of UE5, this is typically found in `C:/Program Files/Epic Games/[UE VERSION]`.
Then go to `Engine/Extras/Android` and run the `SetupAndroid.bat` file.

This bat file will install the right SDK and NDK's required for building.

:::danger
If this fails it will probably say something like `The version can only read files until version xx`.

This happens because the JAVA_HOME path in your system is referring to the wrong JRE version.
Locate the correct JAVA JRE and replace the JAVA_HOME environment variable in windows.
:::

## Problems while testing VR with UE5

Change the RHI in the project settings to use either `DirectX11` or `Vulkan`, and preferably vulkan.

## Building

If the building still fails you might have to set up the `Android` data in the `Project Settings`.
The SDK and NDK should refer to `Android studios` location, and the JAVA should refer to the SDK in your windows.
(The one you downloaded earlier).