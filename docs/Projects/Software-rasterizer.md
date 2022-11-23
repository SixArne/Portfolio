# Software rasterizer

In modern times we take the rasterizer in our graphic cards for granted, but what actually happens in these black boxes? That's what we learned in Graphics Programming I.

## Introduction

In the 7th week of Graphics programming we got the assignment to program a software based rasterizer with support for displaying models with textures, normal maps and shadow maps. Every week we had to expand the project with the new features.

Just like our raytracing assignment we have to optimize the code as much as possible, luckily because of my little parallel_for I managed to reach high FPS early in the project. This was the result after week 2.

![week_2_result](/rasterizer_week_2.png)

In the third week we had to implement some basic triangle clipping, everything that is outside the view frustum was not to be displayed. On top of that we had to read in the vertex data from obj files and also display textures. The end result of this week is a nice little Tuk Tuk.

![week_3_result](/rasterizer_week_3.png)

## Resources

## [Github](https://github.com/SixArne/Rasterizer-Arne-Six-2GD-08E)