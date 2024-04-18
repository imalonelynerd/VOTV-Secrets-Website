<script setup>

</script>

<template>
<div class="TerminalTranscript">
  <slot>
  </slot>
</div>
</template>

<style scoped>
.TerminalTranscript {
  align-self: stretch;
  padding: 32px;
  background: var(--terminal-bg);
  border: var(--border);

  color: var(--terminal);
  white-space: pre-wrap;
  font-family: monospace;
  font-weight: bold;
}
</style>