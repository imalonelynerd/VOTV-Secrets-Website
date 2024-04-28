<script setup>
import { BASE_URL } from '@/assets/tools.js'
import { ref } from 'vue'

defineProps({
  x: {
    required: true,
    type: String
  },
  y: {
    required: true,
    type: String
  },
  img: {
    required: true,
    type: String
  },
  tag: {
    required: true,
    type: String
  },
  desc: {
    required: false,
    type: String,
    default: ''
  }
})

const isVisible = ref(false)
</script>

<template>
  <div class="MapInfo" v-if="isVisible" @click="isVisible = false">
    <slot></slot>
  </div>
  <div class="MapMarker" :id="tag" :style="`left: ${x}px; top: ${y}px;`">
    <img :src="`${BASE_URL}/Icons/MapMarkers/${img}.png`" @click="isVisible = !isVisible" />
  </div>
</template>

<style>
.MapMarker {
  position: absolute;
  cursor: pointer;
  pointer-events: auto;
  transform: translate(-50%, -50%);
}

.MapMarker > img {
  height: 36px;
  transition: transform 0.2s ease-in-out;
}

.MapMarker:hover > img {
  transform: scale(1.2);
}

.MapInfo {
  position: fixed;
  top: 8px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  display: flex;
  z-index: 100;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  min-width: 200px;
  padding: 8px;
  background-color: var(--background);
  border: var(--border);
}

.MapInfo > p {
  margin: 0;
}

.MapMarker.hidden {
  display: none;
}
</style>
