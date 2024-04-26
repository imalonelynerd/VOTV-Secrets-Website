<template>
  <h1>Signal Lost</h1>
  <h2>An error occurred</h2>
  <p>You managed to land on a page that doesn't exists.</p>
  <p>
    If you think this is an error or maybe you wish to add a new page to the archive, please contact
    SquareZeb over <a href="https://discord.gg/vzkMs8sH2z">Discord</a>.
  </p>
</template>

<script setup>
import { changeTitle } from '@/assets/tools.js'

changeTitle('Error')
</script>
