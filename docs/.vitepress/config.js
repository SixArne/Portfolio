export default {
    themeConfig: {
      siteTitle: 'Six Arne Portfolio',
      nav: [
        { text: 'School projects', link: '/projects' },
        { text: 'Vulkan guide', link: '/Vulkan/index.md' }
      ],
      sidebar: [
        {
          text: 'School projects',
          items: [
            { text: 'Megaman', link: '/introduction' },
            { text: 'City Scene', link: '/getting-started' },
            { text: 'Software raytracer', link: '/getting-started' },
            { text: 'Software/DirectX rasterizer', link: '/getting-started' },
            { text: 'Environments Scene', link: '/getting-started' },
          ]
        }
      ]
    },
    
}