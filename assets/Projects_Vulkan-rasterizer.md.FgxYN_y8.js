import{_ as t,o as a,c as r,R as n,ak as e,al as i,am as s}from"./chunks/framework.L_KMPG9f.js";const _=JSON.parse('{"title":"Vulkan Rasterizer","description":"","frontmatter":{},"headers":[],"relativePath":"Projects/Vulkan-rasterizer.md","filePath":"Projects/Vulkan-rasterizer.md"}'),o={name:"Projects/Vulkan-rasterizer.md"},l=n('<h1 id="vulkan-rasterizer" tabindex="-1">Vulkan Rasterizer <a class="header-anchor" href="#vulkan-rasterizer" aria-label="Permalink to &quot;Vulkan Rasterizer&quot;">​</a></h1><p><img src="'+e+'" alt="Vulkan mesh"></p><p>My interest in graphics programming started in my second year, which led me to explore different APIs to expand my knowledge. After learning DirectX 11 at DAE, I decided to dive into Vulkan, the modern graphics API developed by Khronos.</p><p>For those unfamiliar, Vulkan is often seen as the next generation of OpenGL. It gives developers complete control over the rendering pipeline, which makes it incredibly powerful but also much harder to learn. This challenge is what ultimately drew me in, and here’s what I’ve accomplished so far.</p><p>The First 1000 Lines Since Vulkan was the first graphical API I worked with, I knew it was important to have a solid foundation. To help me get started, I purchased a comprehensive Udemy course that walked through creating the entire pipeline from scratch. Honestly, it really tested my patience—Vulkan is a very low-level API, and it takes a significant amount of work before you see anything rendered. But the rewarding part is that you gain a deep understanding of how everything fits together in the pipeline.</p><p>After writing over 1000 lines of code, I finally managed to render a triangle on screen. But of course, I didn’t stop there. I decided to take things further by implementing a camera system to navigate the world and adding quads to the scene. Then, after adding a depth buffer, my first Vulkan application was really starting to take shape.</p><p><img src="'+i+'" alt="Vulkan triangle meshes"></p><p>Adding Textures As any game developer knows, textures are a core feature for modern visuals. So, the next challenge was to add texture mapping. This required implementing more attachments and handling additional complexity in the pipeline.</p><p>After writing even more code, I was finally able to render textured meshes, bringing a new level of realism and visual depth to the scene.</p><p><img src="'+s+'" alt="Vulkan textured mesh"></p><p>The Final Result With the textures in place, I moved on to testing with a more complex mesh. After more refinement, my first Vulkan application was complete, and it was exciting to see the progress firsthand.</p><p><img src="'+e+'" alt="Vulkan mesh"></p><p>You can check out the full project and code on my GitHub.</p><h2 id="github" tabindex="-1"><a href="https://github.com/SixArne/MultiRenderer" target="_blank" rel="noreferrer">Github</a> <a class="header-anchor" href="#github" aria-label="Permalink to &quot;[Github](https://github.com/SixArne/MultiRenderer)&quot;">​</a></h2>',14),d=[l];function h(p,c,m,u,g,f){return a(),r("div",null,d)}const w=t(o,[["render",h]]);export{_ as __pageData,w as default};
