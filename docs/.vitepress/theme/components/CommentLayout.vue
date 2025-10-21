<template>
    <div class="comment-layout">
      <slot name="page-content" />
      <Giscus />
    </div>
  </template>
  
  <script setup>
  import Giscus from './Giscus.vue'
  </script>
  
  <style scoped>
  .comment-layout {
    max-width: 100%;
  }
  </style>