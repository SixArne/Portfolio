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
    avatar: withBase('/environments_icon.png'),
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
    avatar: withBase('https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg'),
    name: 'Software/DirectX rasterizer',
    title: 'C++ & DirectX11',
    links: [
      { icon: 'github', link: 'https://github.com/SixArne/Rasterizer-Arne-Six-2GD-08E' },
    ],
     goto: withBase('/Projects/Software-rasterizer')
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
</VPTeamPage>
