<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import Error from '@/components/states/ErrorPage.vue'
import Credits from '@/components/states/NoticePage.vue'
import Loading from '@/components/states/LoadingPage.vue'

const route = useRoute()

function scrollToId(bookmark) {
  if (bookmark != '') {
    let e = document.getElementById(bookmark)
    let w = document.querySelector('.PageRenderer')
    if (e && w) {
      w.scrollTo({
        top: e.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}

const Page = defineAsyncComponent({
  loader: () => import(`@/pages/${route.params.id}.vue`),
  loadingComponent: Loading,
  delay: 0,
  errorComponent: Error,
  timeout: 5000
})

setTimeout(() => scrollToId(route.hash.slice(1)), 250)
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
  gap: 32px;
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
  margin: 0;
}

.PageRenderer a {
  color: greenyellow;
}

.CardTitle {
  font-size: 40px !important;
  margin: 0 !important;
  color: var(--h1) !important;
  text-align: left !important;
  font-style: normal !important;
}
</style>
