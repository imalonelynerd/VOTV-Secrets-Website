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
  align-items: center;
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

.PageRenderer h4 {
  font-size: 1.1em;
  margin: 16px 0;
  color: var(--h4);
  text-align: center;
}

.PageRenderer p,
.PageRenderer a {
  font-size: 20px;
}

.PageRenderer table {
  align-self: stretch;
  background: var(--hover2);
}

.PageRenderer td {
  font-size: 20px;
  padding: 16px;
  border: var(--border);
}

.PageRenderer tr {
  font-size: 16px;
}

.PageRenderer th {
  background: var(--background);
  border: var(--border);
}

.PageRenderer ul {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  gap: 16px;
}

.PageRenderer hr {
  width: 75%;
}

.PageRenderer pre {
  align-self: stretch;
  white-space: pre-wrap;
  font-family: monospace;
  font-weight: bold;
  padding: 32px;
  background: var(--terminal-bg);
  border: var(--border);
  color: var(--terminal);
}
</style>
