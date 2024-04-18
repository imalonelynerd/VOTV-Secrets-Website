<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'

changeTitle('Achievements')

const achievementsTitles = ['Achievements', 'How to obtain', 'Image']
</script>

<template>
  <h1>Achievements</h1>
  <h2>Description:</h2>
  <p>
    In VOTV, exists many achievements that mark the player's accomplishments and as well as
    progress. Some achievements are hidden or unobtainable, while some can be earned throughout the
    player's gameplay. Then there are advancements which only exist within the playable saves as
    opposed to the main data save of the game.
  </p>
  <h3>Achievements</h3>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="1">Launch tutorial level</h3> </template>
    <template #1> <p id="18">Launch the tutorial level for the first time.</p> </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/1.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="2">Demo player</h3> </template>
    <template #1>
      <p id="19">
        Launch up your first infinite, ambient, or storymode save on any version before 0.6.3.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/2.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="saa">Sandbox ariral</h3> </template>
    <template #1>
      <p id="20">
        Feed any
        <a href="../Objects/objectswiki.html#nuclear">Nuclear Plush</a>
        69 shrimp to obtain Ariral props in sandbox.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/3.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="3">Sandbox unlocked</h3> </template>
    <template #1>
      <p id="21">Play storymode for at least 31 days to unlock sandbox mode.</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/4.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="democ">Demo completed</h3> </template>
    <template #1>
      <p id="22">
        Complete the entire game by playing through all 40+ days in storymode. This will unlock all
        of the usable props in the game.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/5.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="counter">Counter</h3> </template>
    <template #1>
      <p id="23">
        Counter achievement test. Can only be obtained by teleporting or opening up the
        <a href="../Worlds/testlevelswiki.html#30">untitled_30</a>.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/6.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="thehole">The hole</h3> </template>
    <template #1>
      <p id="24">
        Find
        <a href="../Structures/structureswiki.html#thehole">The Hole Landmark</a>.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/7.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="4">Where do you think youre going?</h3> </template>
    <template #1>
      <p id="25">
        Find the
        <a href="../Structures/structureswiki.html#fenceopen">Fence Opening Landmark</a>.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/8.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="5">Mannequin dream</h3> </template>
    <template #1>
      <p id="26">
        Complete the
        <a href="../Dreams/dreamswiki.html#manndream">Mannequin Dream</a>
        by surving the onslaught of
        <a href="../Entities/entitieswiki.html#dmann">Dream Mannequins</a>
        for at least 2 minutes.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/9.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="6">Burger dream</h3> </template>
    <template #1>
      <p id="27">
        Collect all 10 burgers in the
        <a href="../Dreams/dreamswiki.html#burgerdream">Burger Dream</a>
        without falling off into the void or restarting.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/10.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="7">Worst ending</h3> </template>
    <template #1>
      <p id="28">
        Obtain the
        <a href="../Signals/specialsigswiki.html#evil">Evil Signal</a>, process it to level 3, send
        it off to the researchers, and end the world.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/11.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="feedargem">Feed argemia</h3> </template>
    <template #1>
      <p id="29">
        Feed either the green, red, or blue
        <a href="../Objects/objectswiki.html#argplush">Argemia Plushies</a>
        100 shrimp.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/12.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="8">Super burger finder</h3> </template>
    <template #1> <p id="30">Find all 21 chicken burgers in the world.</p> </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/13.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="9">Miracle</h3> </template>
    <template #1>
      <p id="31">
        During the
        <a href="../Events/storymodeeventswiki.html#piramid">Piramid Event</a>, get captured by a
        <a href="../Entities/entitieswiki.html#kwisp">Killer Wisp</a>
        but afterwards get saved by the Piramid.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/14.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="10">Bad Sun</h3> </template>
    <template #1>
      <p id="32">
        Survive the
        <a href="../Events/triggerableeventswiki.html#badsun">Bad Sun Event</a>
        without dying or restarting.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/15.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="11">You have seen everything</h3> </template>
    <template #1>
      <p id="33">
        During the
        <a href="../Events/triggerableeventswiki.html#badsun">Bad Sun Event</a>, you must die in the
        Bad Sun in order to obtain this achievement and ending.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/16.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="12">Object in the woods</h3> </template>
    <template #1>
      <p id="34">
        During the
        <a href="../Events/storymodeeventswiki.html#picnic">Ariral Picnic Event</a>, you must visit
        the
        <a href="../Structures/structureswiki.html#picnic">Ariral Picnic Landmark</a>
        and grab one of the Warp Arrow toys.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/17.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="13">Halloween begin</h3> </template>
    <template #1>
      <p id="35">Play the halloween gamemode which occurs on october 29-31 on any year.</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/21.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="14">Pre-alpha player</h3> </template>
    <template #1>
      <p id="36">
        Launch up your first infinite, ambient, or storymode save on any version beyond 0.6.3.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/22.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="40">WOO!</h3> </template>
    <template #1>
      <p id="41">Kick a drive into any drive slot in one kick. Can only be done in storymode.</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/23.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="42">Pre-alpha completed</h3> </template>
    <template #1>
      <p id="43">
        Finish all 49 days of storymode. Similar to the
        <a href="#democ">Demo Completed Achievement</a>.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/24.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>

  <h3>Advancements</h3>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="15">Argemia</h3> </template>
    <template #1>
      <p id="37">
        Find all 3
        <a href="../Objects/objectswiki.html#argplush">Argemia Plushies</a>: green, blue, and red.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/Achievements/18.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="16">Burger?</h3> </template>
    <template #1> <p id="38">Find all 21 chicken burgers in the world.</p> </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/19.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="achievementsTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="17">We are not alone</h3> </template>
    <template #1>
      <p id="39">
        Witness the
        <a href="../Events/storymodeeventswiki.html#asse">Ariral Ship Scan Event</a>.
      </p>
    </template>
    <template #2>
      <ImageViewer src="/Images/Achievements/20.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
</template>
