<script setup>
const props = defineProps(['categories','hasMedia'])

const size = props.categories.length - 1
const categ = props.hasMedia ?  props.categories.slice(0, size) : props.categories
const last = props.hasMedia ? props.categories[size] :null
</script>

<template>
  <div class="InfoCard" :class="{'hasMedia': hasMedia}">
    <div>
      <div v-for="(e, i) in categ" :key="i">
        <h4>&gt; {{ e }}</h4>
        <slot :name="i"> </slot>
      </div>
    </div>
    <div v-if="hasMedia">
      <h4>&gt; {{ last }}</h4>
      <slot :name="size"></slot>
    </div>
  </div>
</template>

<style scoped>
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
  margin: 0;
}

.InfoCard > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.InfoCard > div:first-of-type {
  flex: 1 1;
}

.InfoCard > div > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.InfoCard > div h4 {
  opacity: 0.5;
  text-align: left !important;
}

.InfoCard > h4 {
  text-align: left;
}

.InfoCard.hasMedia > div:last-of-type {
  float: right;
}
</style>
