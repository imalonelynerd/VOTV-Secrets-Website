<script setup>
defineProps(['x', 'y', 'img', 'tag', 'desc'])
</script>

<template>
  <div class="MapMarker marker" :id="tag" :style="`left: ${x}px; top: ${y}px;`">
    <img :src="`/Icons/MapMarkers/${img}.png`" />
    <div>
      <slot></slot>
    </div>
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
  z-index: 94;
  height: 32px !important;
  width: 32px !important;
  transition: transform 0.2s ease-in-out;
}

.MapMarker:hover > img {
  transform: scale(1.2);
}

.MapMarker > div {
  display: none;
  z-index: 95;
}

.MapMarker:hover > div {
  display: flex;
  z-index: 95;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  min-width: 200px;
  position: absolute;
  padding: 8px;
  background-color: var(--background);
  border: var(--border);
}

.MapMarker > div > p {
  margin: 0;
}

.MapMarker.hidden {
  display: none;
}
</style>
