<script setup>
defineProps(['src'])
import SideButton from '@/components/sidebar/SideButton.vue'
import { ref } from 'vue'

const isShown = ref(false)
</script>

<template>
  <SideButton @click="isShown = !isShown" style="width: fit-content; margin: 16px 0">
    <p>Play sound</p>
  </SideButton>
  <div class="SoundListener" v-if="isShown">
    <audio controls>
      <source :src="src" type="audio/mpeg">
    </audio>
    <SideButton
      @click="isShown = !isShown"><p>Back</p></SideButton>
  </div>
</template>

<style>

.SoundListener {
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

.SoundListener > img {
  width: 100%;
}

.SoundListener > div:last-of-type {
  align-self: center;
}
</style>