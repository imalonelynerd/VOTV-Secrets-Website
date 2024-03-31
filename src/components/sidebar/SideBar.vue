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

watch(name, (newName) => (isShown.value = newName !== 'map'))
</script>

<template>
  <header class="SideBar" v-if="isShown === true">
    <div>
      <SB @click="$router.push('/')">
        <p>Home</p>
      </SB>
      <SB @click="$router.push('/ObjectsPage')">
        <p>Objects</p>
      </SB>
      <SB @click="$router.push('/EntitiesPage')">
        <p>Entities</p>
      </SB>
      <SideFolder title="Worlds">
        <SB @click="$router.push('/WorldsPage')">[DIR]</SB>
        <SB @click="$router.push('/TestLevels')">Test Levels</SB>
        <SB @click="$router.push('/AnomalyWorlds')">Anomaly Worlds</SB>
        <SB @click="$router.push('/OtherWorlds')">Other Worlds</SB>
      </SideFolder>
      <SideFolder title="Signals">
        <SB @click="$router.push('/SignalsPage')">[DIR]</SB>
        <SB @click="$router.push('/DeepSpaceSignals')">Deep Space Signals</SB>
        <SB @click="$router.push('/PlanetSignals')">Planet Signals</SB>
        <SB @click="$router.push('/SpecialSignals')">Special Signals</SB>
        <SB @click="$router.push('/SigGenSignals')">Sig Gen Signals</SB>
        <SB @click="$router.push('/OtherSignals')">Other Signals</SB>
      </SideFolder>
      <SideFolder title="Events" >
        <SB @click="$router.push('/EventsPage')">[DIR]</SB>
        <SB @click="$router.push('/StoryModeEvents')">Storymode Events</SB>
        <SB @click="$router.push('/AriralRepEvents')">Ariral Rep Events</SB>
        <SB @click="$router.push('/TriggerableEvents')">Triggerable Events</SB>
        <SB @click="$router.push('/RandomEvents')">Random Events</SB>
        <SB @click="$router.push('/333amEvents')">3:33 AM Events</SB>
      </SideFolder>
      <SB @click="$router.push('/StructuresPage')">
        <p>Structures</p>
      </SB>
      <SB @click="$router.push('/ConsoleCommands')">
        <p>Console Commands</p>
      </SB>
      <SB @click="$router.push('/DreamsPage')">
        <p>Dreams</p>
      </SB>
      <SB @click="$router.push('/AchievementsPage')">
        <p>Achievements</p>
      </SB>
      <SB @click="$router.push('/GameEndings')">
        <p>Game Endings</p>
      </SB>
      <SB @click="$router.push('/InteractiveMap')">
        <p>Map of Everything</p>
      </SB>
    </div>
    <div>
      <SB important="true">
        <p>Last updated : <b>0.7.0</b></p>
        <!-- fetchable ? -->
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
      <SB @click="isShown = false">
        <p>&lt;&lt;&lt;</p>
      </SB>
    </div>
  </header>
  <SB class="revertHide" v-if="isShown === false" @click="isShown = true">
    <p>&gt;&gt;&gt;</p>
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

.revertHide {
  z-index: 99;
  position: absolute;
  bottom: 8px;
  left: 8px;
}
</style>
