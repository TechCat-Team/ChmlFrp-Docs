<template>
    <div id="giscus-container" class="giscus-container" />
  </template>
  
  <script setup>
  import { onMounted, watch } from 'vue'
  import { useRoute } from 'vitepress'
  
  const route = useRoute()
  
  // Giscus 配置
  const giscusConfig = {
    repo: 'TechCat-Team/ChmlFrp-Docs',
    repoId: 'R_kgDOOo5DCw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOOo5DC84Cwhnv',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'preferred_color_scheme',
    lang: 'zh-CN',
    loading: 'lazy'
  }
  
  // 初始化 Giscus
  const initGiscus = () => {
    // 清除现有评论
    const container = document.getElementById('giscus-container')
    if (container) {
      container.innerHTML = ''
    }
  
    // 创建 script 元素
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repoId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', giscusConfig.mapping)
    script.setAttribute('data-strict', giscusConfig.strict)
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
    script.setAttribute('data-input-position', giscusConfig.inputPosition)
    script.setAttribute('data-theme', giscusConfig.theme)
    script.setAttribute('data-lang', giscusConfig.lang)
    script.setAttribute('data-loading', giscusConfig.loading)
    script.crossOrigin = 'anonymous'
    script.async = true
  
    // 添加到容器
    if (container) {
      container.appendChild(script)
    }
  }
  
  // 页面加载时初始化
  onMounted(() => {
    initGiscus()
  })
  
  // 监听路由变化
  watch(() => route.path, () => {
    // 延迟加载以确保页面已完全切换
    setTimeout(() => {
      initGiscus()
    }, 300)
  })
  </script>
  
  <style scoped>
  .giscus-container {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--vp-c-divider);
  }
  </style>