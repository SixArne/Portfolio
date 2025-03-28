---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import { withBase } from 'vitepress'

const projects = [
  {
    avatar: withBase('/VulkanRasterizer/vulkan_end.png'),
    name: 'Vulkan rasterizer',
    title: 'C++ & Vulkan',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/VulkanRenderer' },
    ],
      goto: withBase('/Projects/Vulkan-rasterizer')
  },
  {
    avatar: withBase('/dontdrown.png'),
    name: 'Don\'t Drown',
    title: 'Unity & C#',
    goto: withBase('/Projects/Unity/DontDrown')
  },
  {
    avatar: withBase('/theholygrail.png'),
    name: 'The Holy Grail',
    title: 'Unity & C#',
    goto: withBase('/Projects/Unity/TheHolyGrail')
  },
  {
    avatar: withBase('/supergalaxyrugbybanner.png'),
    name: 'Super Galaxy Rugby',
    title: 'Unreal & C++',
    goto: withBase('/Projects/Unreal/SuperGalaxyRugby')
  },
]

const schoolProjects = [
  {
    avatar: withBase('/megaman.png'),
    name: 'Megaman',
    title: 'C++ & SDL',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/MegamanGravityMan' },
    ],
    goto: withBase('/Projects/Megaman')
  },
  {
    avatar: withBase('/city_scene.png'),
    name: 'City Scene',
    title: 'Maya',
    links: [
      { icon: 'github', link: 'https://sketchfab.com/3d-models/the-cursed-mountainside-b638e77721064f7da91574406c89aa51' },
    ],
    goto: withBase('/Projects/City-scene')
  },
  {
    avatar: withBase('/environments_update_4.png'),
    name: 'Environments',
    title: 'Blender & Unreal engine',
    links: [
      { icon: 'github', link: 'https://sketchfab.com/3d-models/the-cursed-mountainside-b638e77721064f7da91574406c89aa51' },
    ],
     goto: withBase('/Projects/Environments')
  },
  {
    avatar: withBase('/raytracer_icon.png'),
    name: 'Software raytracer',
    title: 'C++',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/Raytracer-Arne-Six-2GD-08E' },
    ],
    goto: withBase('/Projects/Software-raytracer')
  },
  {
    avatar: withBase('/rasterizer_end_thumbnail.png'),
    name: 'Software/DirectX rasterizer',
    title: 'C++, DirectX11 & Vulkan',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/Rasterizer-Arne-Six-2GD-08E' },
    ],
     goto: withBase('/Projects/Software-rasterizer')
  },
  
  {
    avatar: withBase('/unity.png'),
    name: 'Game Mechanics',
    title: 'Unity',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/Fuji' },
    ],
     goto: withBase('/Projects/GrimReaper')
  },
  {
    avatar: withBase('/unreal.png'),
    name: 'Game Mechanics',
    title: 'Unreal',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/Fuji' },
    ],
     goto: withBase('/Projects/CubeGame')
  },
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Projects
    </template>
    <template #lead>
      In my 2 years of education I've had some notible projects
    </template>
  </VPTeamPageTitle>
  <CustomProjectCards
    size="medium"
    :projects="projects"
  />
  <VPTeamPageTitle>
    <template #title>
      School projects
    </template>
    <template #lead>
      The following projects were all made for school assignments
    </template>
  </VPTeamPageTitle>
  <CustomProjectCards
    size="medium"
    :projects="schoolProjects"
  />
</VPTeamPage>
