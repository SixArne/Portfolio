---
next:
  text: 'Height'
  link: '/Guides/RTG/height.md'
---

# Runtime Terrain Generation

## Drawing the vertices 

Before we get started it is important to realise how a 3D mesh is build in the first place.
You have Vertices and Triangles. The Vertices (singular Vertex) is just a 3D point. You need a total
of 3 vertices to create a triangle.

:::danger
The order of these vertices is important!
:::

Lets first discuss on how to generate these individual points. By using a double for loop we can create the points in the X and Y direction.

```cpp
uint32_t xVertexCount{5};
uint32_t yVertexCount{2};
uint32_t cellSize{100};

TArray<FVector> vertices{};
TArray<FVector> triangles{};

for (uint32_t currentYIndex{}; currentYIndex < yVertexCount; ++yVertexCount)
{
    for (uint32_t currentXIndex{}; currentXIndex < xVertexCount; ++xVertexCount)
    {
        FVector vertex{
            currentXIndex * cellSize, // x
            currentYIndex * cellSize, // y
            0                         // z
        }

        vertices.Add(vertex);
        // display point
    }
}
```

![points](/Guides/RTG/points.png)

## Creating the triangles 

Now that we have these points we want to start creating triangles. But lets go over the creation order first.

![points](/Guides/RTG/point-direction.png)

:::info
First it creates the X row and then it jumps 1 Y Column
:::

Now lets look and the index and winding order of a triangle in this example. `Note that from now on we will treat this as a 1D array`

![points](/Guides/RTG/point-indices.png)

Looking closer we can deduce that we need 3 points. [0, 5, 1] to make a triangle, again: `ORDER IS IMPORTANT` it needs to be `counter clockwise`.
We can deduce the following result from this.

:::info
- point 1 is always the current point.
- point 2 is always the current point + xVertexCount.
- point 3 is always the current point + 1.
:::

But, if we were to execute this it would also go over the most right column of points and the top row. We don't want that as this would not work. So we need
to exclude these points from the algorithm.

A simple way to exclude these is to loop over again but stop 1 index sooner in the width and height.

```cpp
for (uint32_t currentYIndex{}; currentYIndex < yVertexCount - 1; ++yVertexCount)
{
    for (uint32_t currentXIndex{}; currentXIndex < xVertexCount - 1; ++xVertexCount)
    {
        uint32_t current1DIndex{currentYIndex * xVertexCount + currentXIndex};

        triangles.Add(current1DIndex);                  // [!code ++]
        triangles.Add(current1DIndex + xVertexCount);   // [!code ++]
        triangles.Add(current1DIndex + 1);              // [!code ++]
        // display point
    }
}

// Add vertices and triangles to Procedural mesh.
```

![points](/Guides/RTG/points-triangle.png)

Now the only thing left to do is to fill in the gaps. It's the same principle with the other points.

:::info
- point 1 is always the current point.
- point 2 is always the current point + xVertexCount.
- point 3 is always the current point + 1.
- point 4 is always the current point + 1.
- point 5 is always the current point + xVertexCount.
- point 5 is always the current point + xVertexCount + 1.
:::

When we change the code now taking the new points into account we get this.

![points](/Guides/RTG/triangles.png)

Now we can change our parameters and see the result!

