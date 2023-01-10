![Vulkan mesh](/VulkanRasterizer/vulkan_end.png)

# Vulkan rasterizer [Work in progress]

Starting from the 2nd year I started to have in interest in graphics programming, this lead me to
search for API's to learn. Because we already learned DirectX11 in DAE I've decided to go and learn
the Vulkan API by Khronos.

For those that don't know: Vulkan is also known as the next generation of OpenGL, where the Khronos group
decided to give the developers full control of the API. This makes Vulkan very configurable but also hard to learn, hence
I've decided to start my journey and this is the result.

## The first 1000 lines

As this is the first Graphical API I learned I made sure to buy a course on Udemy going over creating the entire pipeline from scratch which to be honest:
It is really... really tested my patience.

The hard thing about Vulkan is that it takes a long time before anything is rendered, the nice thing about it is that
you understand almost everything that goes into the pipeline.

After writing over 1000 lines I finally had a triangle, but I couldn't stop there! I decided to make a camera that can
fly around in the world and added quads to it, and after implementing the depth buffer my first Vulkan application
was starting to look good!

![Vulkan triangle meshes](/VulkanRasterizer/basicTriangleMeshes.png)

## Textures

Ofcourse a game these days needs to be able to render textures, so the next thing to do was to add textures 
and that means.... MORE ATTACHMENTS

After writing some more code we can now render textures on our meshes

![Vulkan textured mesh](/VulkanRasterizer/vulkan_textured.png)

Finally it was time to load in a mesh and test the final result for my first Vulkan application

![Vulkan mesh](/VulkanRasterizer/vulkan_end.png)

## [Github](https://github.com/SixArne/VulkanRenderer)