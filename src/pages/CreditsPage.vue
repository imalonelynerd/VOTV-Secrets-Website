<script setup>
import SideButton from '@/components/sidebar/SideButton.vue'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
import { changeTitle, locationHref } from '@/assets/tools.js'
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Credits')
</script>

<template>
  <h1>Credits</h1>
  <h2>Game</h2>
  <p>
    <a href="https://mrdrnose.itch.io/votv">Voices of the Void</a>
    by
    <a href="https://mrdrnose.itch.io/">MrDrNose (EternityDev)</a>.
  </p>
  <h2>Website</h2>
  <p>Original website &amp; Interactive Map by <b>SquareZeb</b></p>
  <WidgetBundle>
    <SideButton @click="locationHref('https://github.com/SquareZeb')">
      <GitHubIcon c="#FFFFFF" s="1.25em" />
      <p>GitHub</p>
    </SideButton>
    <SideButton @click="locationHref('https://www.youtube.com/channel/UCSPSGIg3wWMowzCL-1tc_Hg')">
      <YouTubeIcon c="#FFFFFF" s="1.25em" />
      <p>YouTube</p>
    </SideButton>
    <SideButton @click="locationHref('https://discord.gg/vzkMs8sH2z')">
      <DiscordIcon c="#FFFFFF" s="1.25em" />
      <p>Discord</p>
    </SideButton>
  </WidgetBundle>
  <p>VueJS "remake" by <b>Nerd</b></p>
  <WidgetBundle>
    <SideButton @click="locationHref('https://github.com/imalonelynerd')">
      <GitHubIcon c="#FFFFFF" s="1.25em" />
      <p>GitHub</p>
    </SideButton>
    <SideButton @click="$router.push('TestPage')">
      <img src="/Icons/folder.png" style="height: 1.25em; width: 1.25em" />
      <p>The Funny</p>
    </SideButton>
  </WidgetBundle>
  <h2>Assets</h2>
  <p><b>Folder</b>, <b>Sound</b>, <b>404</b> icons by <b>Nerd</b>.</p>
  <p>
    <b>GitHub</b>, <b>YouTube</b>, <b>Discord</b> icons by <a href="https://icons8.com/">Icons8</a>.
  </p>
  <p>All the other icons are ripped from the game.</p>
</template>
