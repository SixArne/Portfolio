# Environments

![final result](/environments_end.gif)

## Introduction

In the 1st semester of the 2nd year, we had another 3D-related subject called environments, for this assignment we had to create a modular asset pack and make a big level in Unreal Engine 5. The result was a full 3D level with small interactions.

For the first part, we had to start with making a blockout for a corridor or a small room. I've decided to go for a small room, my end idea was to make an ominous factory.

## Feedback

Every week we got feedback on our scenes from our talented teachers, and the biggest piece of advice I still remember is this wonderful phrase: "Slap shit on walls".
It sounds funny when you read it but it was genuine advice, an empty wall looks boring in the end.

So I will note down any feedback I got with this format

::: danger FEEDBACK
This is the feedback
:::


## Progress


So naturally, my first step was to create a block out for my scene, as stated before I wanted to go for a factory/industrial-like scene, first, we had to create a block out of the level, I went through a few iterations but decided to stick with the following block out to start with.

![environments blockout](/environment_blockout.png)

::: danger FEEDBACK
"It's no use to put geometry on the floor as normal maps will take care of that, and I want you to do something with that big open gap."

"Also please remove the 'Radioactive stuff' While It's true that unreal 5 supports lighting through emissive materials I wouldn't advise only lighting your scene with those."
:::

After making the block out the trick was to gradually add more props and make a more interesting scene overall. I've decided to expand the big black gap to give it a more interesting vibe... A mysterious air shaft.

And after adding some more props and filing my scene it started to look like this:

![environments blockout](/environments_update_1.png)
::: danger FEEDBACK
It's nice that you have some boxes but don't over use them just to fill your scene, the vent is a nice feature that draws the player's attention.

I would look into your lighting settings, you have some smearing going on there.
:::

At this point, my assets weren't that grid-based yet, and the models themselves were rather basic, so my next step involved upgrading my basic meshes to something more sophisticated.

![environments blockout](/environments_update_2.png)
::: danger FEEDBACK
Currently, the lighting is coming out of nowhere, make sure that the lights themselves are placed logically, also try to already use trim textures in your scene.
:::

Now that my models look a bit better it was time to texture them, initially I had this ladder to go down to the mysterious airshaft, but I decided to scratch that idea and go for a staircase instead which meant... My scene needed to become bigger.

![environments blockout](/environments_update_3.png)
::: danger FEEDBACK
I like what you have done with your panel textures, the floor aso looks interesting but might have to change later on. 

Personally I am not a big fan of detailing your pipes with trim textures, just a normal scratched paint texture will make this a lot better.

Finally: Please do get rid of those white beams.
:::

Now, I was already planning to get rid of those beams but after hearing about the wall panels I decided to make some new ones that would fit it better, and I decided to reduce the amount of pipes in my scene.

Now at this point I already changed most of the critique points and asked feedback from my "Game mechanics" teachers who have experience releasing their own game called Tri-Fox. And I got some extra feedback from them as wel.

::: danger FEEDBACK
Disable Unreal's exposure settings and exposure bias, make sure that your scene is using the same values ingame as in the editor.

I see you have a lot of lights but it's too much, if you are going for this scary scene you should have some dark pockets in between the lights. Look into the construction script for your lights, that allows you to set the emmisive and light color in 1 setting.

Also you have these hard transitions in your walls with the ceiling, those look unrealistic, cover them up with another mash to actually cover up the transitions.
:::

And finally, they told me about some post-processing and exponential fog, and after enabling all of that this was the result.

![environments blockout](/environments_update_4.png)

However that floor took me too long to make, I had to make 11 different floor pieces to make sure it fitted, and even then there were still noticible mistakes. So I just decided to redo my floor and texture the final pieces before the next feedback session arrived.

![environments blockout](/environments_update_4.5.png)
::: danger FEEDBACK
The theme is a lot clearer now but you flipped the balance a bit. The walls could use a bit more depth and noise and the pillars a bit less.
The floor also needs a bit more variation.
The pipe needs a texture to make it fit a bit better into your scene.

And you lose a lot of visibility in the ceiling, making it a bit lighter.
:::

## End results

### Gameplay video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ucF97maQ2xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Cinematic Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZhSA4JnORIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## [Github](https://github.com/SixArne/Environ)