<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'

changeTitle('3:33 AM Events')

const morningTitles = ['Event', 'Description', 'Tips', 'Image']
</script>

<template>
  <h1>3:33 AM Events</h1>
  <h2>Description:</h2>
  <p>
    There are very few events in VOTV that can be triggered by the simple timing of 3:33 am or witch
    hour. These events can occur on any day and on any condition as long as the clock shows 3:33.
  </p>
  <InfoCard :categories="morningTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="abplush">AB Plush Event</h3> </template>
    <template #1>
      <p id="1">
        In the AB Cave you can access a special plush that is a depiction or representation of the
        <a href="../Entities/entitieswiki.html#ab">AAB Entity</a>.
      </p></template
    >
    <template #2>
      <p id="2">
        You will want to have triggered the
        <a href="../Events/triggerableeventswiki.html#wolfgang">Wolfgang Awakening Event</a>, from
        there inside the cave, just wait for the plush to spawn on the furthest nest.
      </p></template
    >
    <template #3>
      <ImageViewer src="/Images/Events/333amEvents/1.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="morningTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="furfurtoilet">Furfur Toilet Event</h3> </template>
    <template #1>
      <p id="3">
        Spawns the
        <a href="../Entities/entitieswiki.html#wendi">Furfur</a> near the toilet.
      </p></template
    >
    <template #2> <p id="4">Just use the toilet exactly at 3:33 am.</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/333amEvents/2.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="morningTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="brickwall">Brickwall Event (Removed)</h3> </template>
    <template #1>
      <p id="5">
        The
        <a href="../Objects/objectswiki.html#brickwall">Brickwall Object</a>
        will open up revealing an infinite spiral staircase.
      </p></template
    >
    <template #2>
      <p id="6">
        Wait at the bathroom floor, this next part will require a lot of precision, as soon as it
        hits 3:32 wait half a second and jump straight down the hole. After ragdolling and turning
        around the Brickwall should be opened.
      </p></template
    >
    <template #3>
      <ImageViewer src="/Images/Events/333amEvents/3.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="morningTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ritualwarp">Ritual Warp Event</h3> </template>
    <template #1>
      <p id="7">
        The Red Ariral Tree will have a black warp spawn inside of it, step in to teleport into the
        <a href="../Structures/structureswiki.html#ritual">Ritual Altar</a>.
      </p></template
    >
    <template #2>
      <p id="8">
        Wait inside the
        <a href="../Structures/structureswiki.html#wooded">Wooded Shack Landmark</a>
        at around 3:20 am and just stand there. From there just wait for the warp to spawn and you
        should be able to enter it. This one is actually triggered at 3:30 am as opposed to 3:33am
        like all the others here.
      </p></template
    >
    <template #3>
      <ImageViewer src="/Images/Events/333amEvents/4.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="morningTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="fml">Furfur Meat Locker Event</h3> </template>
    <template #1>
      <p id="9">
        The meat locker in the Main Base basement will be glowing red as a
        <a href="../Entities/entitieswiki.html#wendi">Furfur</a>
        spawns for a quick moment.
      </p></template
    >
    <template #2> <p id="10">Come down to the basement at exactly 3:30 am.</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/333amEvents/5.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
</template>
