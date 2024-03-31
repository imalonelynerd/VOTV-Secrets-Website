<script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/sidebar/SideBar.vue'
</script>

<template>
  <SideBar />
  <RouterView :key="$route.params.id" />
</template>

<style scoped></style>
