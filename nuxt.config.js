import env from './env.js'
import { createProxyMiddleware } from 'http-proxy-middleware';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    port: process.env.PORT || 3000, // 默认 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'Ramping Up: Remote Hiring and Management Solution1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'bookmark', href: '/favicon.png' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.css',
    '@/assets/scss/variables.css',
    '@/assets/scss/main.css',
    '@/assets/icon/iconfont.css'
  ],

  serverMiddleware: [
    {
      path: '/api',
      handler: createProxyMiddleware({
        target: 'https://strapi.runworld.com.cn/api/',
        changeOrigin: true
      })
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/linkedIn-tracking.js', mode: 'client' },
    // { src: '@/plugins/i18n.js', mode: 'client' },
    // { src: '@/plugins/clearQueryParams.js', mode: 'client' },
    { src: '@/plugins/ga.js', mode: 'client' },
    { src: '@/assets/icon/iconfont.js', mode: 'client' },
    { src: '@/plugins/element-ui' },
    '@/plugins/vue-inject.js'
  ],

  env: {
    BLOG_BASE_URL: env[process.env.MODE].BLOG_BASE_URL
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@aceforth/nuxt-optimized-images'],

  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    'nuxt-precompress',
    '@/modules/sitemapTxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: {}
      }
    },
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    extractCSS: true
  },

  sitemap: {
    hostname: 'https://www.rampingup.com',
    gzip: true,
    // exclude: ['/404', '/deposits', '/invoice-process'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: async () => {
      // 获取静态路由
      const staticRoutes = getStaticRoutes(path.resolve(__dirname, 'pages'))
        .filter(route => !['/404', '/deposits', '/invoice-process'].includes(route));

      // 这里可以加上从 API 获取的动态路由，如果有的话
      const dynamicBlogsRoutes = await fetchRoutesFromBlogs();
      const dynamicCaseRoutes = await fetchRoutesFromCase();

      // 返回静态路由（如果有动态路由，请取消注释上面，并合并）
      return [...staticRoutes, ...dynamicBlogsRoutes, ...dynamicCaseRoutes];
    }
  },

  router: {
    routeNameSplitter: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },

  generate: {
    subFolders: false
  }
}

function getStaticRoutes(dir, basePath = '') {
  let routes = [];
  
  // 读取目录内容
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 如果是目录，递归获取子路由
      routes = routes.concat(getStaticRoutes(filePath, path.join(basePath, file)));
    } else if (stat.isFile()) {
      // 排除不需要的文件和路由
      if (file === '.DS_Store' || file.startsWith('_') || file === 'index.vue') return;
      
      const route = path.join(basePath, file.replace('.vue', ''));
      routes.push(route === '/index' ? '/' : route);
    }
  });
  
  return routes;
}

async function fetchRoutesFromBlogs() {
  try {
    const url = 'https://strapi.runworld.com.cn/api/blogs'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    // 假设你的 API 返回的数据格式为 { list: [...] }
    return data.data.map(item => `/blogs/${item.attributes.short_url}`);
  } catch (error) {
    console.error('Failed to fetch routes:', error);
    return [];
  }
}

async function fetchRoutesFromCase() {
  try {
    const url = 'https://strapi.runworld.com.cn/api/case-studies'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    // 假设你的 API 返回的数据格式为 { list: [...] }
    return data.data.map(item => `/case-studies/${item.attributes.short_url}`);
  } catch (error) {
    console.error('Failed to fetch routes:', error);
    return [];
  }
}
