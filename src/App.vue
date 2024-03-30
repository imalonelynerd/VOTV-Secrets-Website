<script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
    <SideBar />
    <RouterView class="Content"/>
</template>

<style scoped>
</style>
