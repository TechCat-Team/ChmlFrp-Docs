// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme, UserConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import { NProgress } from 'nprogress-v2/dist/index.js'
import 'nprogress-v2/dist/index.css'
import './style.css'

// 导入自定义组件
import Giscus from './components/Giscus.vue'
import CommentLayout from './components/CommentLayout.vue'

// 主题配置
const themeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Giscus)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Giscus', Giscus)
    app.component('CommentLayout', CommentLayout)
    app.component('vImageViewer', vImageViewer)

    if (typeof window !== 'undefined') {
      NProgress.configure({ showSpinner: false })
      
      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      
      router.onAfterRouteChanged = () => {
        NProgress.done()
      }
    }
  },
  setup() {
    const route = useRoute()
    
    if (typeof window !== 'undefined') {
      imageViewer(route)
    }
  }
} satisfies Theme

export default {
  ...themeConfig,
  markdown: {
    image: {
      lazyLoading: true
    }
  }
} satisfies UserConfig & Theme