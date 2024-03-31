<script setup>
import SB from '@/components/sidebar/SideButton.vue'
import { computed, ref, watch } from 'vue'
import SideButtons from '@/components/sidebar/SideButtons.vue'
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import SideFolder from '@/components/sidebar/SideFolder.vue'
import { useRoute } from 'vue-router'

const isShown = ref(false)
const route = useRoute()
const name = computed(() => route.name)

watch(name, newName => isShown.value = (newName !== 'map'))
</script>

<template>
  <header class="SideBar" v-if="isShown === true">
    <div>
      <SB @click="$router.push('/')">
        <p>Home</p>
      </SB>
      <SB @click="$router.push('/objects')">
        <p>Objects</p>
      </SB>
      <SB @click="$router.push('/entities')">
        <p>Entities</p>
      </SB>
      <SideFolder title="Worlds">
        <SB>Test Levels</SB>
        <SB>Anomaly Worlds</SB>
        <SB>Other Worlds</SB>
      </SideFolder>
      <SideFolder title="Signals">
        <SB>Deep Space Signals</SB>
        <SB>Planet Signals</SB>
        <SB>Special Signals</SB>
        <SB>Sig Gen Signals</SB>
        <SB>Other Signals</SB>
      </SideFolder>
      <SideFolder title="Events">
        <SB>Storymode Events</SB>
        <SB>Ariral Rep Events</SB>
        <SB>Triggerable Events</SB>
        <SB>Random Events</SB>
        <SB>3:33 AM Events</SB>
      </SideFolder>
      <SB>
        <p>Structures</p>
      </SB>
      <SB>
        <p>Console Commands</p>
      </SB>
      <SB>
        <p>Dreams</p>
      </SB>
      <SB>
        <p>Achievements</p>
      </SB>
      <SB>
        <p>Game Endings</p>
      </SB>
      <SB @click="$router.push('/map')">
        <p>Map of Everything</p>
      </SB>
    </div>
    <div>
      <SB important="true">
        <p>Last updated : <b>0.7.0</b></p> <!-- fetchable ? -->
      </SB>
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
      <SB
        @click="isShown = false">
        <p> &lt&lt&lt </p>
      </SB>
    </div>
  </header>
  <SB
    class="revertHide"
    v-if="isShown === false"
    @click="isShown = true">
    <p> &gt&gt&gt </p>
  </SB>
</template>

<style>
.SideBar {
  z-index: 98;
  height: 100vh;
  min-width: 220px;
  box-sizing: border-box;
  padding: 8px;
  background-color: var(--background);
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
  z-index: 99;
  position: absolute;
  bottom: 8px;
  left: 8px;
}
</style>