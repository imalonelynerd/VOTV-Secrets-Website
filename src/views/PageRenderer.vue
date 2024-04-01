<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import Error from '@/components/states/ErrorPage.vue'
import Credits from '@/components/states/CreditsPage.vue'
import Loading from '@/components/states/LoadingPage.vue'

const route = useRoute()

const Page = defineAsyncComponent({
  loader: () => import(`@/pages/${route.params.id}.vue`),
  loadingComponent: Loading,
  delay: 0,
  errorComponent: Error,
  timeout: 5000
})
</script>

<template>
  <div class="PageRenderer">
    <Page />
    <Credits />
  </div>
</template>

<style>
.PageRenderer {
  box-sizing: border-box;
  height: 100vh;
  padding: 32px 64px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  overflow: scroll;
  gap: 16px;
  background: url('/Images/Home.png') no-repeat center center;
  background-size: cover;
}

.PageRenderer h1 {
  font-size: 80px;
  margin: 16px 0;
  color: var(--h1);
  text-align: center;
}

.PageRenderer h2 {
  font-size: 37px;
  text-align: center;
  color: var(--h2);
  margin: 16px 0;
}

.PageRenderer h3 {
  font-size: 26px;
  margin: 16px 0;
  color: var(--h3);
  font-style: oblique;
  text-align: center;
}

.PageRenderer p,
.PageRenderer a,
.PageRenderer tr {
  font-size: 20px;
}

.PageRenderer table {
  background: #202020;
  font-size: 16px;
}

.PageRenderer td {
  padding: 16px;
  border: var(--border);
}

.PageRenderer th {
  background: var(--background);
  border: var(--border);
}
</style>
