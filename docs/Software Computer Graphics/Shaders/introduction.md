# What are shaders?

Shaders are code that is running on your GPU, there are many different types of shaders that you can create.

If we look at the typical graphics pipeline we can already make a small list, note that all user defined input needs to be passed along the pipeline.

![Pipeline](/Graphics/pipeline.svg)

- <b>Vertex shader</b>

    :::info
	
    A vertex shader is a graphics processing function used to add special effects to objects in a 3D environment by performing mathematical operations on the objects' vertex data. Each vertex can be defined by many different variables
    :::

    In this stage we get the data in model space, the vertex shader then needs to output these vertices in normalised screen coordinates. This is done by applying the MVP (Model view projection) matrix on it.

- <b>Fragment shader</b>

    :::info
    The next step is determining what fragments lie within the fragment, this is what the fragment shader will work on. This shader will in the end return a color for each fragment in the triangle.
    :::

    This shader is being ran per pixel in the triangle, this shader is mainly
    used to color the geometry.

- <b>Geometry shader</b>

    ::: info
    Between the vertex and the fragment shader there is an optional shader stage called the geometry shader. A geometry shader takes as input a set of vertices that form a single primitive e.g. a point or a triangle. The geometry shader can then transform these vertices as it sees fit before sending them to the next shader stage. What makes the geometry shader interesting is that it is able to convert the original primitive (set of vertices) to completely different primitives, possibly generating more vertices than were initially given.
    :::

    This shader can be used to modify geoemtry, a good example is ocean waves.

- <b>Compute shader</b>

    This shader does nothing on the visual side, but is used for e.g. A Raytracer.


## Structure of a shader

A shader file consists out of multiple parts


- properties, these could be `colors, values, textures, meshes, matrices    etc... `. 

- SubShader
    -   Pass

        - Vertex shader
        - Fragment shader

## Outro

This guide will go over different shaders, instead of using a graphics API like Vulkan or DirectX I will be using Unity as it uses a language close to `hlsl`. So to follow along with this guide: Go and install the Unity Game engine!

::: tip Special thanks
A lot of content was taken from `Freya Holmer`. This guide was also a learning experience for me as I wanted to specialize myself in rendering.
:::

## Sources

- https://shader-tutorial.dev/basics/
- https://www.youtube.com/watch?v=kfM-yu0iQBk