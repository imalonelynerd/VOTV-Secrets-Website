<script setup>
import SideButton from '@/components/sidebar/SideButton.vue'
import { ref } from 'vue'

const isShown = ref(false)
</script>

<template>
  <SideButton @click="isShown = !isShown" style="width: fit-content; margin: 16px 0">
    <p>More Informations</p>
  </SideButton>
  <div class="Spoiler" v-if="isShown">
    <h1>Spoiler</h1>
    <slot></slot>
    <SideButton
      @click="isShown = !isShown"><p>Back</p></SideButton>
  </div>
</template>

<style>
.Spoiler {
  position: absolute;
  top: 64px;
  left: 64px;
  bottom: 64px;
  right: 64px;
  z-index: 100;
  padding: 16px;
  background: var(--background);
  border: var(--border);
  overflow: scroll;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
}

.Spoiler > div:last-of-type {
  align-self: center;
}
</style>