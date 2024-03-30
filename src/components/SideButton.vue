<script setup>
defineProps([
  'important'
])
</script>

<template>
  <div class="SideButton" :class="{'important' : important}">
    <slot>

    </slot>
  </div>
</template>

<style>
.SideButton {
  border: 2px outset #808080;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #333333;
}

.SideButton:hover {
  background: #444444;
}

.SideButton:active {
  background: #404040;
  border: 2px inset #808080;
}

.SideButton > p {
  margin: 0;
}

.SideButton.important > p {
  color: #ff0000;
}
</style>