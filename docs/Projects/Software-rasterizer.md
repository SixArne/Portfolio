<iframe width="720" height="480" src="https://www.youtube.com/embed/q-QW6NCtMHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br/>

# Software rasterizer

In modern times we take the rasterizer in our graphic cards for granted, but what happens in these black boxes? That's what we learned in Graphics Programming I.

## Introduction

In the 7th week of Graphics programming, we got the assignment to program a software-based rasterizer with support for displaying models with textures, normal maps, and shadow maps. Every week we had to expand the project with new features.

Just like our raytracing assignment, we have to optimize the code as much as possible, luckily because of my little parallel_for I managed to reach high FPS early in the project. This was the result after week 2.

![week_2_result](/rasterizer_week_2.png)

In the third week, we had to implement some basic triangle clipping, everything that is outside the view frustum was not to be displayed. On top of that, we had to read the vertex data from obj files and also display textures. The result of this week is a nice little Tuk Tuk.

![week_3_result](/rasterizer_week_3.png)

## End assignment

Doing this on the CPU is great to learn, but not really practical as things run a `LOT` slower than on the GPU.
The end assignment of this subject was simple: `'Make an application that can switch the renderer between DirectX11 and the CPU'`.

So after spending some time on polymorphing the code it can now switch between the 2 renderers! By making a base render class and overriding the
base methods you can easily switch the renderers without much issue. However how the mesh is rendered is very different between DirectX and the CPU, So
I decided to abstract the mesh location and transforms away and just pass their pointers to the specific meshes instead.

```cpp
class BaseRenderer
{
public:
	BaseRenderer(SDL_Window* pWindow, Camera* pCamera);
	...

	virtual void Update(Timer* pTimer) {};
	virtual void Render() {};

protected:
    // Shared data
	...
};

class DirectX_Renderer: public BaseRenderer
{
public:
    // external mesh data 
	DirectX_Renderer(SDL_Window* pWindow, Camera* pCamera, std::vector<MeshData*> pMeshes);
	...

	virtual void Update(Timer* pTimer) override;
	virtual void Render() override;

private:
	// Specific DirectX members
    std::vector<DirectXMeshes*> m_pMeshes{};
	...
};

class DirectXMesh
{
public:
	DirectXMesh(ID3D11Device* pDevice, MeshData* meshData);
	...

private:
    // Shared data like transforms
	MeshData* m_pMeshData{};

    // Dx11 properties
	...
};

```

After writing a bridge to switch between the 2 Renderers we have the following result, and as a bonus
I also added a Vulkan renderer on top of it.

![Rasterizer end](/rasterizer_end.png)

## Resources

## [Github](https://github.com/SixArne/Rasterizer-Arne-Six-2GD-08E)