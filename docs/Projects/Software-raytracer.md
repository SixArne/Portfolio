![Raytraced bunny](/raytracer_week_5.png)

# Software raytracer

In the 1st week of Graphics Programming I We got the assignment of making a software based raytracer which we had to finish around week 5. Every week we had to expand the project by adding more features and for the grading there was a twist: The teacher would take the highest FPS as a baseline to grade the other projects on performance.

Of course me and my classmates had a friendly competition to optimize everything as much as possible, I searches a large part of the web on the most optimized way to detect a ray-triangle collision and to minimize render calls. In the end the biggest optimization was this tiny simple line of code...

<br><br/>

```cpp
// Cause of course -_-
concurrency::parallel_for(0u, numPixels, [=, this](int i) {
    PerPixel(pScene, i, camera.fov, as, camera, lights, materials);
});
```

<br><br/>

The end result can render PBR materials and triangle meshes with vertex indices. The FPS on this project is even with all the optimizations really low. (around 15 FPS on the bunny scene).

But it was still an amazing assignment to learn the theory and implementation of ray-tracing.
This project also awakened by interest for graphics programming, and so it started my journey to learn about the Vulkan graphics API.

<br><br/>

::: info
I will try to recreate this project but properly. And with properly I mean with Vulkan. My end goal is to write a nice raytracer that can run at a stable 60 FPS with support for reflections, soft shadows and indirect illumination.
:::

## Resources

- [TheCherno](https://www.youtube.com/watch?v=gfW1Fhd9u9Q&list=PLlrATfBNZ98edc5GshdBtREv5asFW3yXl)
- [ScratchaPixel](https://www.scratchapixel.com)
- [NamePointer](https://www.youtube.com/watch?v=A61S_2swwAc)

## [Github](https://github.com/SixArne/Raytracer-Arne-Six-2GD-08E)