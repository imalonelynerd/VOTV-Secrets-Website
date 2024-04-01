<script setup>
defineProps(['src', 'alt', 'title'])
import SideButton from '@/components/sidebar/SideButton.vue'
import { ref } from 'vue'

const isShown = ref(false)
const hasError = ref(false)

const x = ref(0)
const y = ref(0)

function getSize(img) {
  x.value = img.naturalWidth
  y.value = img.naturalHeight
}
</script>

<template>
  <div class="ImageView" @click="isShown = !hasError">
    <img v-if="!hasError" :src="src" :alt="alt" @error="hasError = true" />
    <img v-if="hasError" src="/Icons/404.png" alt="404" />
    <img v-if="!hasError" src="/Icons/expand.png" alt="Expand..." />
  </div>
  <div class="ImageViewer" v-if="isShown">
    <img :src="src" :alt="alt" ref="image" @load="getSize($refs.image)" />
    <p>Title : {{ title === undefined || title === '' ? src : title }}, Size : {{ x }} x {{ y }}</p>
    <SideButton @click="isShown = false"><p>Back</p></SideButton>
  </div>
</template>

<style>
.ImageView {
  width: 150px;
  height: 150px;
  border: var(--border);
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}

.ImageView > img:first-of-type {
  flex-grow: 1;
  object-fit: cover;
  object-position: top;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
}

.ImageView > img:nth-of-type(2) {
  background: var(--background);
  border: var(--border);
  position: relative;
  height: 16px;
  width: 16px;
  left: 122px;
  bottom: 32px;
}

.ImageView:hover > img:last-of-type {
  background: var(--hover);
}

.ImageView:active {
  border: var(--border-pressed);
}

.ImageView:active > img:last-of-type {
  border: var(--border-pressed);
  background: var(--pressed);
}

.ImageViewer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  padding: 64px;
  background: var(--trans);
  overflow: scroll;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.ImageViewer > img {
  min-height: 80%;
  max-height: 100%;
  max-width: 100%;
}

.ImageViewer > p {
  margin: 0;
}

.ImageViewer > div:last-of-type {
  align-self: center;
}
</style>
