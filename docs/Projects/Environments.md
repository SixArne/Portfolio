# Environments

## Introduction

In the 1st semester of the 2nd year we had another 3D related subject called environments, for this assignment we had to create an modular asset pack and make a big level in Unreal Engine 5. The end result was a full 3D level with small interactions.

For the first part we had to start with making a blockout for a corridor or a small room. I've decided to go for a small room, my end idea was to make an ominous facotry.

## Feedback

Every week we got feedback on our scenes by our talented teachers, and the biggest advice I still remember is this wonderfull phrase: "Slap shit on walls".
It sounds funny when you read it but it was genuine advice, an empty wall looks boring in the end.

So I will note down any feedback I got with this format

::: danger FEEDBACK
This is the feedback
:::


## Progress


So naturally my first step was to create a blockout for my scene, as stated before I wanted to go for a factory/industrial like scene, first we had to create a blockout of the level, I went through a few iterations but decided to stick with the following blockout to start with.

![environments blockout](/environment_blockout.png)

::: danger FEEDBACK
"It's no use to put geometry on the floor as normal maps will take care of that, and I want you to do something with that big open gap."

"Also please remove the 'Radioactive stuff' While It's true that unreal 5 supports lighting through emmisive materials I wouldn't advice only lighting your scene with those."
:::

After making the blockout the trick was to gradually add more props and make a more interesting scene overal. I've decided to expand the big black gap to give it a more interesting vibe... A mysterious air shaft.

And after adding some more props and filing my scene it started to look like this:

![environments blockout](/environments_update_1.png)
::: danger FEEDBACK
It's nice that you have some boxes but don't over use them just to fill your scene, the vent is a nice feature that draws the player's attention.

I would look into your lighting settings, you have some smearing going on there.
:::

At this point my assets weren't that grid based yet, and the models themselves were rather basic, so my next step involved in upgrading my basic meshes to something more sophisticated.

![environments blockout](/environments_update_2.png)
::: danger FEEDBACK
Currently the lighting is coming out of nowehere, make sure that the lights itself are placed logically, also try to already use trim textures in your scene.
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

And finally they told me about some post processing and exponential fog, and after enabling all of that this was the result.

![environments blockout](/environments_update_4.png)

However that floor took me too long to make, I had to make 11 different floor pieces to make sure it fitted and even then there were stil noticible mistakes. So I just decided to redo my floor and texture the final pieces before the next feedback session arrived.

![environments blockout](/environments_update_4.5.png)

## [Github](https://github.com/SixArne/Environ)