<script setup>
import ImageViewer from '@/components/ImageViewer.vue'
import SoundListener from '@/components/SoundListener.vue'
import SpoilerBlock from '@/components/SpoilerBlock.vue'
</script>

<template>
  <h1>Test Page</h1>
  <h2>ImageViewer</h2>
  <ImageViewer src="/Icons/Promo.png" title="Title" />
  <ImageViewer src="/awa" alt="This is an extremely long alt" />
  <h2>SoundListener</h2>
  <SoundListener src="/thepenis.mp3" title="Eek !" />
  <h2>SpoilerBlock</h2>
  <SpoilerBlock> This is a spoiler. </SpoilerBlock>
</template>

<style scoped></style>
