<script setup>
import SideButton from '@/components/sidebar/SideButton.vue'
import { ref } from 'vue'

const props = defineProps(['categories', 'hasMedia'])

const size = props.categories.length - 1
const categ = props.hasMedia ? props.categories.slice(0, size) : props.categories
const last = props.hasMedia ? props.categories[size] : null

const isHidden = ref(false)
</script>

<template>
  <div class="InfoCard" :class="{ hasMedia: hasMedia }">
    <div v-if="isHidden" class="HiddenInfo">
      <h4>&gt; {{ categ[0] }}</h4>
      <slot v-if="isHidden" name="0"></slot>
      <SideButton @click="isHidden = false">
        <p>Unfold</p>
      </SideButton>
    </div>
    <div v-if="!isHidden">
      <div v-for="(e, i) in categ" :key="i" class="InfoCardInfos">
        <h4>&gt; {{ e }}</h4>
        <slot :name="i"></slot>
      </div>
      <SideButton @click="isHidden = true">
        <p>Fold</p>
      </SideButton>
    </div>
    <div class="InfoCardInfos" v-if="hasMedia && !isHidden">
      <h4>&gt; {{ last }}</h4>
      <slot :name="size"></slot>
    </div>
  </div>
</template>

<style>
.InfoCard {
  align-self: stretch;
  background: var(--hover2);
  border: var(--border);
  padding: 32px;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  gap: 32px;
}

.InfoCard * {
  margin: 0 !important;
}

.InfoCard > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 20px;
}

.InfoCard .SideButton {
  align-self: start;
}

.InfoCard > div:first-of-type {
  flex: 1 1;
}

.InfoCardInfos {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.HiddenInfo {
  gap: 8px !important;
}

.InfoCard > div h4 {
  opacity: 0.5;
  text-align: left !important;
}
</style>
