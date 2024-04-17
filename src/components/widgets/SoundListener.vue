<script setup>
defineProps(['title'])
import { ref } from 'vue'

const isPlaying = ref(false)
const progression = ref('0%')

function play(audioPlayer) {
  if (!isPlaying.value) {
    audioPlayer.play()
    audioPlayer.addEventListener('timeupdate', () => {
      progression.value = Math.round((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%'
      if (audioPlayer.ended) {
        audioPlayer.currentTime = 0
        isPlaying.value = false
      }
    })
    isPlaying.value = true
  } else {
    audioPlayer.pause()
    audioPlayer.currentTime = 0
    isPlaying.value = false
  }
}
</script>

<template>
  <div class="SoundCover" @click="play($refs.theSound)" :class="{ playing: isPlaying }">
    <img src="/Icons/sound.png" alt="Play button" />
    <p>{{ isPlaying ? 'Stop' : title !== undefined && title !== '' ? title : 'Play' }}</p>
    <audio ref="theSound">
      <slot></slot>
      Error
    </audio>
  </div>
</template>

<style>
.SoundCover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100px;
  height: 100px;
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
  max-height: 100px;
  border: var(--border);
  background: var(--background);
}

.SoundCover > audio {
  display: none;
}

.SoundCover.playing {
  background: linear-gradient(
    to right,
    var(--hover2) v-bind(progression),
    var(--background) v-bind(progression)
  );
}

.SoundCover.playing:hover {
  background: linear-gradient(
    to right,
    var(--hover2) v-bind(progression),
    var(--hover) v-bind(progression)
  );
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
