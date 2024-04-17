<script setup>
const props = defineProps(['gap', 'orientation', 'position'])

const fGap = props.gap === undefined ? '16px' : props.gap
const fOri = props.orientation === undefined ? 'row' : props.orientation
const fPos = props.position === undefined ? 'start' : props.position
</script>

<template>
  <div class="WidgetBundle">
    <slot> </slot>
  </div>
</template>

<style>
.WidgetBundle {
  display: flex;
  flex-direction: v-bind(fOri);
  justify-content: v-bind(fPos);
  align-items: center;
  gap: v-bind(fGap);
  flex-wrap: wrap;
}

.WidgetBundle > * {
  margin: 0;
}
</style>
