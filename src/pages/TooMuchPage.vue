<template>
  <h1>Signal Lost</h1>
  <h2>An error occurred</h2>
  <p>You're trying to access a link that hasn't been set properly.</p>
  <p>
    If you think this is an error, please contact SquareZeb over
    <a href="https://discord.gg/vzkMs8sH2z">Discord</a>.
  </p>
</template>

<script setup>
import { changeTitle } from '@/assets/tools.js'

changeTitle('Error')
</script>
