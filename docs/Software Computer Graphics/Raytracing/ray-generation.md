# Let there be rays

Our first step to make a ray-tracing application is to loop over all pixels in our window, for the sake of simplicity I will be cutting some corners, but these corners will still be explained in theory, so don't worry.

```cpp
// We will treat the current pixel (2D) as a 1 dimensional index.
for (uint32_t pixelIndex{}; p < numberOfPixels; ++pixelIndex)
{
    PerPixel(pixelIndex);
}
```

You probably noticed that I have a function PerPixel, this is so we can later multi-thread this really easily. Lets take a look at the implementation of PerPixel.

```cpp
void PerPixel(uint32_t pixelIndex)
{
    // Convert from 1D pixel coordinate to 2D
    const uint32_t pixelX = pixelIndex % m_ScreenWidth;
    const uint32_t pixelY = pixelIndex / m_ScreenWidth;

    // We want our ray to hit the middle of a pixel, so we offset
    // both x and y by .5
    const float rasterX = pixelX + 0.5f;
    const float rasterY = pixelY + 0.5f;

    // Convert from raster coordinate to camera coordinate
    const float cameraX = ((2 * (rasterX)) / (float)(m_ScreenWidth - 1.f) * (float)m_ScreenWidth) / (float)m_ScreenHeight * m_Camera.fov;
    const float cameraY = (1 - (2 * rasterY)) / (float)m_ScreenHeight * m_Camera.fov;

    // Vector to transform
    const Vector3 vectorToTransform{cameraX, cameraY, 1.f};

    // Create our ray object
    Ray pixelRay{};
    pixelRay.origin = m_Camera.origin;
    pixelRay.direction = m_Camera.cameraToWorld.TransformVector(vectorToTransform).Normalized();

    ...
}
```
<br><br/>
Well first we have to consider the following situation: We are shooting a ray from a camera through a pixel, but last time I checked there is no coordinate system that works like that. So we have to transform out pixel data into a coordinate that the camera can work with.