# Vulkan Rasterizer

![Vulkan mesh](/VulkanRasterizer/vulkan_end.png)


My interest in graphics programming started in my second year, which led me to explore different APIs to expand my knowledge. After learning DirectX 11 at DAE, I decided to dive into Vulkan, the modern graphics API developed by Khronos.

For those unfamiliar, Vulkan is often seen as the next generation of OpenGL. It gives developers complete control over the rendering pipeline, which makes it incredibly powerful but also much harder to learn. This challenge is what ultimately drew me in, and here’s what I’ve accomplished so far.

The First 1000 Lines
Since Vulkan was the first graphical API I worked with, I knew it was important to have a solid foundation. To help me get started, I purchased a comprehensive Udemy course that walked through creating the entire pipeline from scratch. Honestly, it really tested my patience—Vulkan is a very low-level API, and it takes a significant amount of work before you see anything rendered. But the rewarding part is that you gain a deep understanding of how everything fits together in the pipeline.

After writing over 1000 lines of code, I finally managed to render a triangle on screen. But of course, I didn’t stop there. I decided to take things further by implementing a camera system to navigate the world and adding quads to the scene. Then, after adding a depth buffer, my first Vulkan application was really starting to take shape.

![Vulkan triangle meshes](/VulkanRasterizer/basicTriangleMeshes.png)


Adding Textures
As any game developer knows, textures are a core feature for modern visuals. So, the next challenge was to add texture mapping. This required implementing more attachments and handling additional complexity in the pipeline.

After writing even more code, I was finally able to render textured meshes, bringing a new level of realism and visual depth to the scene.

![Vulkan textured mesh](/VulkanRasterizer/vulkan_textured.png)


The Final Result
With the textures in place, I moved on to testing with a more complex mesh. After more refinement, my first Vulkan application was complete, and it was exciting to see the progress firsthand.

![Vulkan mesh](/VulkanRasterizer/vulkan_end.png)


You can check out the full project and code on my GitHub.

## [Github](https://github.com/SixArne/MultiRenderer)
