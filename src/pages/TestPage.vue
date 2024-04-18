<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import SoundListener from '@/components/widgets/SoundListener.vue'
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import { changeTitle } from '@/assets/tools.js'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'
import InfoCard from '@/components/widgets/InfoCard.vue'

changeTitle('The Funny')
</script>

<template>
  <h1>Test Page</h1>
  <h2>ImageViewer</h2>
  <ImageViewer src="/Icons/Promo.png" title="Title" />
  <ImageViewer src="/awa" alt="This is an extremely long alt" />
  <h2>SoundListener</h2>
  <SoundListener title="Eek !">
    <source src="/thepenis.mp3" />
  </SoundListener>
  <h2>SpoilerBlock</h2>
  <SpoilerBlock> This is a spoiler. </SpoilerBlock>
  <h2>WidgetBundle</h2>
  <WidgetBundle orientation="column" gap="8px">
    <ImageViewer src="/Icons/folder.png" title="Title" />
    <ImageViewer src="/Icons/sound.png" title="Title" />
    <ImageViewer src="/Icons/404.png" title="Title" />
  </WidgetBundle>
  <WidgetBundle>
    <ImageViewer src="/Icons/folder.png" title="Title" />
    <ImageViewer src="/Icons/sound.png" title="Title" />
    <ImageViewer src="/Icons/404.png" title="Title" />
  </WidgetBundle>
  <h2>InfoCard</h2>
  <InfoCard :categories="['Entity', 'Behavior', 'Spawn Conditions', 'Description']">
    <template #0>
      <h3 class="CardTitle">Antibreather</h3>
    </template>
    <template #1>
      <p>Passive</p>
    </template>
    <template #2>
      <p>
        Spawns near Romeo, in Antibreather Cave at night, then eventually despawns in the morning
        time.
      </p>
    </template>
    <template #3>
      <p>
        Antibreather (AB for short) is a quadrupedal entity that comes from a cave near the Romeo
        satellite. A Rozital-based entity, resembling a human body with stitches all around his body
        and metal legs (of which front pair look like a scythe blades). It comes every night
        (sometimes even on day) from its cave, roaming aimlessly around and illuminating it's path
        with a glowing white eyes.
      </p>
    </template>
  </InfoCard>
  <InfoCard
    :categories="['Entity', 'Behavior', 'Spawn Conditions', 'Description', 'Images']"
    :has-media="true"
  >
    <template #0>
      <h3 class="CardTitle">Antibreather</h3>
    </template>
    <template #1>
      <p>Passive</p>
    </template>
    <template #2>
      <p>
        Spawns near Romeo, in Antibreather Cave at night, then eventually despawns in the morning
        time.
      </p>
    </template>
    <template #3>
      <p>
        Antibreather (AB for short) is a quadrupedal entity that comes from a cave near the Romeo
        satellite. A Rozital-based entity, resembling a human body with stitches all around his body
        and metal legs (of which front pair look like a scythe blades). It comes every night
        (sometimes even on day) from its cave, roaming aimlessly around and illuminating it's path
        with a glowing white eyes.
      </p>
    </template>
    <template #4>
      <WidgetBundle orientation="column">
        <ImageViewer src="/Icons/Promo.png" title="Title" />
        <ImageViewer src="/Icons/Promo.png" title="Title" />
      </WidgetBundle>
    </template>
  </InfoCard>
</template>
