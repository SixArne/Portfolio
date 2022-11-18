import {UserConfig} from 'vitepress'



export default {
    themeConfig: {
      siteTitle: 'Six Arne Portfolio',
      nav: [
        { text: 'Projects', link: '/projects' },
        { text: 'Vulkan guide', link: '/Vulkan/index.md' }
      ],
      sidebar: [
        {
          text: 'School projects',
          items: [
            { text: 'Software raytracer', link: '/getting-started' },
            { text: 'Software/DirectX rasterizer', link: '/getting-started' },
            { text: 'Megaman', link: '/introduction' },
            { text: 'City Scene', link: '/getting-started' },
            { text: 'Environments Scene', link: '/getting-started' },
          ]
        },
        {
          text: 'Personal projects',
          items: [
            { text: 'Vulkan rasterizer', link: '/Projects/Vulkan-rasterizer.md'},
            { text: 'Vulkan raytracer', link: '/Projects/Vulkan-raytracer.md'},
          ],
        },
        {
          text: 'Vulkan',
          items: [
            { text: 'Introduction', link: '/Vulkan/introduction.md' }
          ]
        }
      ],
    },
    
}