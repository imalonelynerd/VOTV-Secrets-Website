<script setup>
defineProps({
  important: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="SideButton" :class="{ isImportant: important }">
    <slot></slot>
  </div>
</template>

<style>
.SideButton {
  border: var(--border);
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
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

.SideButton.isImportant > p {
  color: #ff0000;
}
</style>
