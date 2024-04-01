<script setup>
defineProps(['x', 'y'])
</script>

<template>
  <div class="MapCoords">
    <p>X : {{ x }}, Y : {{ y }}</p>
  </div>
</template>

<style scoped>
.MapCoords {
  z-index: 97;
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--background);
  padding: 8px;
  border: var(--border);
}

.MapCoords > p {
  margin: 0;
}
</style>
