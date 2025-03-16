# Vulkan Shader Processor

This is a small tool I developed while working on my own rendering engine. When using Vulkan, GLSL files need to be compiled into SPIR-V. In most tutorials, this is done by manually adding source files to a script and running it periodically.

To simplify this process, I created a processing library that automatically detects the shader type based on its naming convention and compiles the GLSL code into SPIR-V. This eliminates the need for manual compilation, saving time and streamlining the workflow.

The project was built with CMake and C++20 in mind. All dependencies are fetched from external repositories, keeping the source code lightweight when pulled from GitHub.

## Source

[github](https://github.com/SixArne/vsp)
