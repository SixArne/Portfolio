# Vulkan rasterizer

Starting from the 2nd year I started to have in interest in graphics programming, this lead me to
search for API's to learn. Because we already learned DirectX11 in DAE I've decided to go and learn
the Vulkan API by Khronos.

For those that don't know: Vulkan is also known as the next generation of OpenGL, where the Khronos group
decided to give the developers full control of the API. This makes Vulkan very configurable but also hard to learn, hence
I've decided to start my journey and this is the result.

```cpp
VkSurfaceCreateInfo createInfo{}
createInfo.sType = VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO;
```