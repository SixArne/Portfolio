# Fuji Engine [Work in progress]

## About this project

After writing the Multi-Renderer as a school project it became clear to me that I don't fully
understand how to structure a big project and to abstract the code. A mesh shouldn't have to know
what renderer is being used to render it to the screen.

So I decided to make a game engine to learn how to structure these kind of projects better, as a reference
I will be looking at the `Kohi Game Engine` and `Hazel Game Engine`.

## Building the project

Only after watching some reference videos and actually implementing them I learned a lot about
abstraction. The game engine, editor, and build all need to be seperate so this brought me to the fun
activity of splitting up the projects. In this case the `Fuji Engine` will be a `dll` and will be included
in `Editor` and `Game`.

I also needed to make sure that the project was platform independant, for this I decided to use `Premake`.

:::tip What is premake?

Premake is a project generation tool that can be configured to generate solution files for
different platforms. It allows you to script the behavior in `Lua` and abstracts the annoying stuff away
from the developer.

When adding a new library you just need to add them to the premake and regenerate the 
solution files for your platform.
:::

:::details EXAMPLE
```lua
workspace "Fuji"
    architecture "x64"
    configurations { 
        "Debug", 
        "Release",
        "Dist" 
    }

outputDir = "%{cfg.buildcfg}-%{cfg.system}-%{cfg.architecture}"

project "Fuji"
    location "Fuji"
    kind "SharedLib"
    language "C++"

    targetdir ("bin/" .. outputDir .. "/%{prj.name}")
    objdir ("bin-int/" .. outputDir .. "/%{prj.name}")

    files
    {
        "%{prj.name}/src/**.h",
        "%{prj.name}/src/**.cpp",
    }

    includedirs
    {
        "Fuji/vendor/spdlog/include",
        -- Vulkan include
        "C:\\VulkanSDK\\1.3.231.1\\Include"
    }

    filter "system:windows"
        cppdialect "C++17"
        staticruntime "On"
        systemversion "latest"

        defines
        {
            "FU_PLATFORM_WINDOWS",
            "FU_BUILD_DLL"
        }

        postbuildcommands
        {
            ("{COPY} %{cfg.buildtarget.relpath} ../bin/" .. outputDir .. "/Sandbox")
        }

    filter "configurations:Debug"
        defines "FU_DEBUG"
        symbols "On"

    filter "configurations:Release"
        defines "FU_RELEASE"
        symbols "On"
  
    filter "configurations:Dist"
        defines "FU_DIST"
        optimize "On"


project "Sandbox"
    location "Sandbox"
    kind "ConsoleApp"
    language "C++"

    targetdir ("bin/" .. outputDir .. "/%{prj.name}")
    objdir ("bin-int/" .. outputDir .. "/%{prj.name}")

    files
    {
        "%{prj.name}/src/**.h",
        "%{prj.name}/src/**.cpp",
    }

    includedirs
    {
        "Fuji/vendor/spdlog/include",
        "Fuji/src"
    }

    links
    {
        "Fuji"
    }

    filter "system:windows"
        cppdialect "C++17"
        staticruntime "On"
        systemversion "latest"

        defines
        {
            "FU_PLATFORM_WINDOWS"
        }

    filter "configurations:Debug"
        defines "FU_DEBUG"
        symbols "On"

    filter "configurations:Release"
        defines "FU_RELEASE"
        symbols "On"

    filter "configurations:Dist"
        defines "FU_DIST"
        optimize "On"

```

:::

## [Github](https://github.com/SixArne/Fuji)