<template>
  <h1>Signals</h1>
  <h2>Master Folder</h2>
  <h3>Please select a location :</h3>
  <ul>
    <li>
      <router-link to="/DeepSpaceSignals">Deep Space Signals</router-link>
    </li>
    <li>
      <router-link to="/PlanetSignals">Planet Signals</router-link>
    </li>
    <li>
      <router-link to="/SpecialSignals">Special Signals</router-link>
    </li>
    <li>
      <router-link to="/SigGenSignals">Sig Gen Signals</router-link>
    </li>
    <li>
      <router-link to="/OtherSignals">Other Signals</router-link>
    </li>
  </ul>
</template>

<script setup>
import { changeTitle } from '@/assets/tools.js'

changeTitle('[DIR] Signals')
</script>
