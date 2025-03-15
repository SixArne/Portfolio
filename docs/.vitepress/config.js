export default {
    base: '/Portfolio/',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      // algolia: { 
      //   appId: 'M0EB8DF79K', 
      //   apiKey: '60f71fb647190f6ba5ebf1a12ca59459', 
      //   indexName: 'project' 
      // }, 
      search: {
        provider: 'local'
      },
      siteTitle: 'Six Arne Portfolio',
      nav: [
        { text: 'Projects', link: '/Projects/index.md' },
        { text: 'Guides', link: '/Guides/index.md'},

        //{ text: 'Vulkan guide', link: '/Vulkan/introduction.md' },
        //{ text: 'Computer Graphics', link: '/Software Computer Graphics/index.md' }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/SixArne' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/arne-six-a21994138/' }
      ],
      sidebar: {
        '/Projects/': [
          {
            text: '', items: [
              { text: 'Project overview', link: '/Projects/index.md'}
            ]
          },
          {
            text: 'Unreal Projects',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Super Galaxy Rugby', link: '/Projects/Unreal/SuperGalaxyRugby.md'},
              { text: 'Amber the witch', link: '/Projects/Unreal/AmberTheWitch.md' }
            ],
          },
          {
            text: 'Unity Projects',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Don\'t Drown', link: '/Projects/Unity/DontDrown.md' },
              { text: 'The Holy Grail', link: '/Projects/Unity/TheHolyGrail.md' }
            ],
          },
          {
            text: 'Engine Projects',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Fuji Game Engine', link: '/Projects/Fuji-Engine.md'},
              { text: 'Basic Vulkan rasterizer', link: '/Projects/Vulkan-rasterizer.md'},
              { text: 'Megaman', link: '/Projects/Native/Megaman.md' },
            ],
          },
          {
            text: 'School projects',
            collapsible: true,
            collapsed: false,
            items: [
              { text: 'Software raytracer', link: '/Projects/Software-raytracer.md' },
              { text: 'Software/DirectX rasterizer', link: '/Projects/Software-rasterizer.md' },
              { text: 'Megaman', link: '/Projects/Megaman.md' },
              { text: 'City Scene', link: '/Projects/City-scene.md' },
              { text: 'Unreal - Game design', link: '/Projects/CubeGame.md' },
              { text: 'Unity - Game mechanics', link: '/Projects/GrimReaper.md' },
              { text: 'Unreal - Game mechanics', link: '/Projects/FlagGame.md' },
              { text: 'Environments Scene', link: '/Projects/Environments.md' },
            ]
          },
          
        ]
        // '/Vulkan/': [
        //   {
        //     text: 'Vulkan',
        //     items: [
        //       { text: 'Introduction', link: '/Vulkan/introduction.md' },
        //       { text: 'Setup', link: '/Vulkan/setup.md'},
        //       { text: 'Concepts', link: '/Vulkan/concepts.md'}
        //     ]
        //   }
        // ],
        // '/Software Computer Graphics/': [
        //   {
        //     text: 'Raytracing',
        //     items: [
        //     ],
        //   },
        //   {
        //     text: 'Rasterizer',
        //     items: [
        //     ],
        //   },
        //   {
        //     text: 'Shaders',
        //     items: [
        //       { text: 'An introduction to shaders', link: '/Software Computer Graphics/Shaders/introduction.md' },
        //       { text: 'Blending and Textures', link: '/Software Computer Graphics/Shaders/BlendingTextures.md' }
        //     ]
        //   }
        //],
      },
      footer: {
        message: 'Made with Vitepress and Vue',
        copyright: 'Copyright @ 2022-present Six Arne'
      }
    },
}