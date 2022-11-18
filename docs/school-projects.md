---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const projects = [
  {
    avatar: 'https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg',
    name: 'Megaman 5',
    title: 'C++ & SDL',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  {
    avatar: 'https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg',
    name: 'Japanese mountain scene',
    title: 'Maya',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  {
    avatar: 'https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg',
    name: 'Environments',
    title: 'Blender',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  {
    avatar: 'https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg',
    name: 'Software raytracer',
    title: 'C++',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
  {
    avatar: 'https://wizarddojo.files.wordpress.com/2015/05/mega-man-5-gravity-man-article_image.jpg',
    name: 'Software/DirectX rasterizer',
    title: 'C++ & DirectX11',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      School projects
    </template>
    <template #lead>
      In my 2 years of education I've had some notible projects
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="projects"
  />
</VPTeamPage>
---