<script setup>
import { ref } from 'vue'

defineProps(['title'])

const isHovered = ref(false)
</script>

<template>
  <div class="SideFolder" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div>
      <img src="/Icons/folder.png" />
      <p>{{ title }}</p>
    </div>
    <div v-if="isHovered">
      <slot> </slot>
    </div>
  </div>
</template>

<style>
.SideFolder {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  border: var(--border);
  padding: 8px;
  cursor: pointer;
  background: var(--background);
  gap: 8px;
}

.SideFolder > div:first-of-type {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.SideFolder > div:first-of-type > p {
  margin: 0;
}

.SideFolder > div:first-of-type > img {
  height: 1.25em;
}

.SideFolder:hover {
  background: var(--hover2);
}

.SideFolder:active {
  background: var(--pressed2);
}

.SideFolder > div:first-of-type > p {
  margin: 0;
}

.SideFolder > div:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 4px;
}
</style>
