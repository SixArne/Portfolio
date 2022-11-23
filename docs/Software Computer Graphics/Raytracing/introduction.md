# What is Raytracing

These days most people know of the term ray-tracing but don't actually know what it does and how it works.

::: tip INFO
Ray tracing is just an algorithm. That is all it is in the end.
:::

Before I start to explain what ray tracing does let me first explain what it is and why it works.

![schema](/public/Graphics/ray-tracing-schema.png)

In a ray-tracing application we have a camera that will shoot rays through every pixel on our screen, in doing so we will covert these camera -> screen/raster rays to view space rays, when a ray misses we render nothing and when we hit something we sample the material of the object and render that 1 pixel.

::: danger REMARK
This is why ray-tracing is computationally expensive to execute, for every pixel it has to shoot a ray through and see if it hit something in out scene.

On top of that we have to check if it collided or not and if it does get the right color value etc...

There are ways to excelerate this process but typically ray-tracing always takes more time than Rasterizing.

But if that is the case, why do we want to use ray-tracing at all?
:::

At some point you will notice that ray-tracing is more straight forward to do and is also more realistic as with ray-tracing we essentially simulate real light, so rendering shadows and reflections will always look better in a ray-tracer.

These days we luckily have graphic cards (RTX series) that speed up ray-tracing a lot, mainly because of the neural nework inside the card.

Most game engines these days use a combination of ratserizing and ray-tracing, as a fully raytraced game with be almost unplayable.
