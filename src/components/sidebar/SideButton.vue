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
  border: var(--border);
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: var(--background);
}

.SideButton:hover {
  background: var(--hover);
}

.SideButton:active {
  background: var(--pressed);
  border: var(--border-pressed);
}

.SideButton > p {
  margin: 0;
}

.SideButton.important > p {
  color: #ff0000;
}
</style>