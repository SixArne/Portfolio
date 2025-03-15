# Group project: Don't Drown

<iframe width="700" height="315" src="https://www.youtube.com/embed/RKF26AGI6zs?si=3qwgt7NyYTEm_klB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


A project made for the Subject Group projects over the span of a few months. The customer wanted an VR application for the Expo around Testerep.

## Summary

Don't Drown was a collaborative project developed by a team of four artists and two programmers (myself included) for an expo focused on the drowned city/region of Testerep, located near the current area of Oostende. The goal of the game was to immerse players in the experience of living in a region that had been slowly flooded, emphasizing survival rather than victory. The player cannot win — they can only survive for as long as possible against the rising waters.

### Game Overview:
The game is a virtual reality (VR) experience built using Unity. Players are tasked with defending their home as water levels gradually increase. To survive, they must gather various objects like chairs, tables, barrels, and other debris scattered around their environment and use them to reinforce their house. Players can barricade doors and windows with planks and seal any holes caused by rising water using unconventional items such as sticks, stones, wooden duckies, and even fish (yes, you read that correctly).

In the end, players’ scores are saved to a Firebase database and displayed publicly, adding a competitive element to the game. This feature was implemented to create excitement and engagement, especially since the game was to be showcased at an expo with a live audience.

### Challenges and Optimization:
While the production itself was a rewarding creative endeavor, the most challenging part of the development process was optimization. As the game was designed for standalone VR on the Meta Quest 2, optimizing performance was crucial. The presence of dynamic water in the game, which used a depth map for realism, added complexity by introducing an extra pass in the render pipeline. This significantly increased the time required to render each frame, making optimization even more critical to ensure a smooth and immersive experience for the player.

To overcome these challenges, we carefully planned out asset management, graphics rendering, and other performance-enhancing techniques to ensure that the game ran as smoothly as possible on the Meta Quest 2 while maintaining a high level of visual fidelity.

### Technical Details:
- Engine: Unity
- Programming Language: C#
- Platform: Meta Quest 2 (Standalone VR)
- Backend: Firebase (for saving and displaying player scores)

This project was an exciting opportunity to work on VR development, with a focus on optimizing a resource-intensive experience for a standalone platform. I gained valuable experience working within the constraints of VR hardware while collaborating with a talented team to create a memorable and impactful experience for expo attendees.

