<script setup>
const props = defineProps(['src', 'title'])
import { ref } from 'vue'

const isPlaying = ref(false)

function play() {
  if (!isPlaying.value) {
    this.p = new Audio(props.src)
    this.p.play()
    isPlaying.value = true
  } else {
    this.p.pause()
    this.p.currentTime = 0
    this.position = 0
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="SoundCover" @click="play()" :class="{ playing: isPlaying }">
    <img src="/Icons/sound.png" />
    <p>{{ isPlaying ? 'Stop' : title }}</p>
  </div>
</template>

<style>
.SoundCover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 100px;
  min-height: 100px;
  border: var(--border);
  background: var(--background);
}

.SoundCover.playing {
  background: var(--hover2);
}

.SoundCover:hover {
  background: var(--hover);
}

.SoundCover:active {
  background: var(--pressed);
  border: var(--border-pressed);
}

.SoundCover > img {
  height: 32px;
  width: 32px;
}

.SoundCover > p {
  margin: 0;
  width: 64px;
  overflow: hidden;
  text-align: center;
}
</style>
