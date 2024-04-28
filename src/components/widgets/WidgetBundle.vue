<script setup>
defineProps({
  gap: {
    type: String,
    default: '16px'
  },
  orientation: {
    type: String,
    default: 'row',
    validator(value) {
      return ['column', 'row'].includes(value)
    }
  },
  position: {
    type: String,
    default: 'start',
    validator(value) {
      return ['start', 'center', 'end', 'stretch'].includes(value)
    }
  }
})
</script>

<template>
  <div class="WidgetBundle">
    <slot></slot>
  </div>
</template>

<style>
.WidgetBundle {
  display: flex;
  flex-direction: v-bind(orientation);
  justify-content: v-bind(position);
  align-items: center;
  gap: v-bind(gap);
  flex-wrap: wrap;
}

.WidgetBundle > * {
  margin: 0;
}
</style>
