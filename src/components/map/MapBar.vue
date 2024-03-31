<script setup>

import SB from '@/components/sidebar/SideButton.vue'

defineEmits(['ribbonClicked', 'tabToggled'])
</script>

<template>
  <div class="MapBar">
    <!--
    <div class="RibbonContainer">
      <SB @click="$emit('ribbonClicked', 0)">
        <img src="/icons/ribbon/left.png">
      </SB>
      <SB @click="$emit('ribbonClicked',2)">
        <img src="/icons/ribbon/center.png">
      </SB>
      <SB @click="$emit('ribbonClicked', 1)">
        <img src="/icons/ribbon/right.png">
      </SB>
    </div>
    <hr />
    -->
    <div id="TabContainer">
      <SB @click="$emit('tabToggled','Bmarker')">
        <img src="/Icons/TabMarkers/2.png">
      </SB>
      <SB @click="$emit('tabToggled','Tmarker')">
        <img src="/Icons/TabMarkers/0.png">
      </SB>
      <SB @click="$emit('tabToggled','Smarker')">
        <img src='/Icons/TabMarkers/9.png'>
      </SB>
      <SB @click="$emit('tabToggled','SDmarker')">
        <img src='/Icons/TabMarkers/8.png'>
      </SB>
      <SB @click="$emit('tabToggled','CSDmarker')">
        <img src="/Icons/TabMarkers/11.png">
      </SB>
      <SB @click="$emit('tabToggled','Amarker')">
        <img src='/Icons/TabMarkers/1.png'>
      </SB>
      <SB @click="$emit('tabToggled','DPTmarker')">
        <img src="/Icons/TabMarkers/3.png">
      </SB>
      <SB @click="$emit('tabToggled','Lmarker')">
        <img src="/Icons/TabMarkers/6.png">
      </SB>
      <SB @click="$emit('tabToggled','Gmarker')">
        <img src="/Icons/TabMarkers/4.png">
      </SB>
      <SB @click="$emit('tabToggled','Omarker')">
        <img src="/Icons/TabMarkers/7.png">
      </SB>
      <SB @click="$emit('tabToggled','GDetectmarker')">
        <img src="/Icons/TabMarkers/5.png">
      </SB>
      <SB @click="$emit('tabToggled','Emarker')">
        <img src="/Icons/TabMarkers/10.png">
      </SB>
      <SB @click="$emit('tabToggled','Pmarker')">
        <img src="/Icons/TabMarkers/12.png">
      </SB>
      <SB @click="$emit('tabToggled','Nmarker')">
        <img src="/Icons/TabMarkers/13.png">
      </SB>
    </div>
  </div>

</template>

<style>
.MapBar {
  background: var(--background);
  padding: 8px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  overflow: scroll;
  gap: 2px;
}

.MapBar > div {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  gap: 4px;
}

.MapBar img {
  height: 2em;
}

.MapBar > hr {
  width: 50%;
}
</style>