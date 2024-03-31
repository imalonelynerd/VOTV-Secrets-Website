<script setup>
defineProps(['src', 'alt'])
import SideButton from '@/components/sidebar/SideButton.vue'
import { ref } from 'vue'

const isShown = ref(false)
</script>

<template>
  <img class="ImageView" @click="isShown = !isShown" :src="src" :alt="alt" />
  <div class="ImageViewer" v-if="isShown">
    <img :src="src" :alt="alt" />
    <SideButton
      @click="isShown = !isShown"><p>Back</p></SideButton>
  </div>
</template>

<style>
.ImageView {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: var(--border);
}

.ImageView:active{
  border: var(--border-pressed);
}

.ImageViewer {
  position: absolute;
  top: 64px;
  left: 64px;
  bottom: 64px;
  right: 64px;
  z-index: 100;
  padding: 16px 64px;
  background: var(--background);
  border: var(--border);
  overflow: scroll;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.ImageViewer > img {
  width: 100%;
}

.ImageViewer > div:last-of-type {
  align-self: center;
}
</style>