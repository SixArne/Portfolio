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

const guides = [
  {
    avatar: withBase('/Guides/RTG/cover.jpg'),
    name: 'Runtime Terrain Generation',
    title: 'Unreal Engine & C++',
    links: [
      { icon: 'github', link: '' },
    ],
    goto: withBase('/Guides/RTG/index')
  }
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Guides
    </template>
    <template #lead>
      Here are some guides of my personal projects going more in depth
    </template>
  </VPTeamPageTitle>
  <CustomProjectCards
    size="medium"
    :projects="guides"
  />
</VPTeamPage>
