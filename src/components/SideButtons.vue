<script setup>
import SideButton from '@/components/SideButton.vue'
</script>

<template>
  <div class="SideButtons">
    <SideButton>
      <slot name="1">

      </slot>
    </SideButton>
    <SideButton>
      <slot name="2">

      </slot>
    </SideButton>
    <SideButton>
      <slot name="3"></slot>
    </SideButton>
  </div>
</template>

<style>
.SideButtons {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  gap: 4px;
}

.SideButtons > * {
  flex-grow: 1;
}

</style>