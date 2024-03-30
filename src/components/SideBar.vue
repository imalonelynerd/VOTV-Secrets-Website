<script setup>

import SideButton from '@/components/SideButton.vue'
import { ref } from 'vue'
import SideButtons from '@/components/SideButtons.vue'
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

const isShown = ref(true)
</script>

<template>
  <header class="SideBar" v-if="isShown">
    <div>
      <SideButton>
        <p>Home</p>
      </SideButton>
      <SideButton>
        <p>Objects</p>
      </SideButton>
      <SideButton>
        <p>Entities</p>
      </SideButton>
      <SideButton>
        <p>Worlds</p>
      </SideButton>
      <SideButton>
        <p>Signals</p>
      </SideButton>
      <SideButton>
        <p>Events</p>
      </SideButton>
      <SideButton>
        <p>Structures</p>
      </SideButton>
      <SideButton>
        <p>Console Commands</p>
      </SideButton>
      <SideButton>
        <p>Dreams</p>
      </SideButton>
      <SideButton>
        <p>Achievements</p>
      </SideButton>
      <SideButton>
        <p>Game Endings</p>
      </SideButton>
      <SideButton>
        <p>Map of Everything</p>
      </SideButton>
    </div>
    <div>
      <SideButton important="true">
        <p>Last updated : <b>0.7.0</b></p> <!-- fetchable ? -->
      </SideButton>
      <SideButtons>
        <template #1>
          <GitHubIcon c="#FFFFFF" s="1em" />
        </template>
        <template #2>
          <YouTubeIcon c="#FFFFFF" s="1em" />
        </template>
        <template #3>
          <DiscordIcon c="#FFFFFF" s="1em" />
        </template>
      </SideButtons>
      <SideButton
        @click="isShown = false">
        <p> &lt&lt&lt </p>
      </SideButton>
    </div>
  </header>
  <SideButton
    class="revertHide"
    v-if="!isShown"
    @click="isShown = true">
    <p> &gt&gt&gt </p>
  </SideButton>
</template>

<style>
.SideBar {
  height: 100vh;
  min-width: 200px;
  box-sizing: border-box;
  padding: 8px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 32px;
}

.SideBar > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.SideBar > div:first-of-type {
  overflow: scroll;
}

.SideButton.revertHide {
  position: absolute;
  bottom: 8px;
  left: 8px;
}
</style>