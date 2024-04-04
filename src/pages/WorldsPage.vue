<script setup>
import { changeTitle } from '@/assets/tools.js'

changeTitle('[DIR] Worlds')
</script>

<template>
  <h1>Worlds</h1>
  <h2>Master Folder</h2>
  <h3>Please select a location :</h3>
  <ul>
    <li>
      <router-link to="/TestLevels">Test Levels</router-link>
    </li>
    <li>
      <router-link to="/AnomalyWorlds">Anomaly Worlds</router-link>
    </li>
    <li>
      <router-link to="/OtherWorlds">Other Worlds</router-link>
    </li>
  </ul>
</template>
