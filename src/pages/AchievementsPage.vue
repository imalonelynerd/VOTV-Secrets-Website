<script setup>
import ImageViewer from '@/components/ImageViewer.vue'
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
  <table>
    <tr>
      <th>Achievements</th>
      <th>How to obtain</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="1">Launch tutorial level</td>
      <td id="18">Launch the tutorial level for the first time.</td>
      <td>
        <ImageViewer src="/Images/Achievements/1.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="2">Demo player</td>
      <td id="19">
        Launch up your first infinite, ambient, or storymode save on any version before 0.6.3.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/2.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="saa">Sandbox ariral</td>
      <td id="20">
        Feed any
        <a href="../Objects/objectswiki.html#nuclear">Nuclear Plush</a>
        69 shrimp to obtain Ariral props in sandbox.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/3.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="3">Sandbox unlocked</td>
      <td id="21">Play storymode for at least 31 days to unlock sandbox mode.</td>
      <td>
        <ImageViewer src="/Images/Achievements/4.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="democ">Demo completed</td>
      <td id="22">
        Complete the entire game by playing through all 40+ days in storymode. This will unlock all
        of the usable props in the game.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="counter">Counter</td>
      <td id="23">
        Counter achievement test. Can only be obtained by teleporting or opening up the
        <a href="../Worlds/testlevelswiki.html#30">untitled_30</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/6.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="thehole">The hole</td>
      <td id="24">
        Find
        <a href="../Structures/structureswiki.html#thehole">The Hole Landmark</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/7.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="4">Where do you think youre going?</td>
      <td id="25">
        Find the
        <a href="../Structures/structureswiki.html#fenceopen">Fence Opening Landmark</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="5">Mannequin dream</td>
      <td id="26">
        Complete the
        <a href="../Dreams/dreamswiki.html#manndream">Mannequin Dream</a>
        by surving the onslaught of
        <a href="../Entities/entitieswiki.html#dmann">Dream Mannequins</a>
        for at least 2 minutes.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/9.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="6">Burger dream</td>
      <td id="27">
        Collect all 10 burgers in the
        <a href="../Dreams/dreamswiki.html#burgerdream">Burger Dream</a>
        without falling off into the void or restarting.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/10.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="7">Worst ending</td>
      <td id="28">
        Obtain the
        <a href="../Signals/specialsigswiki.html#evil">Evil Signal</a>, process it to level 3, send
        it off to the researchers, and end the world.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/11.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="feedargem">Feed argemia</td>
      <td id="29">
        Feed either the green, red, or blue
        <a href="../Objects/objectswiki.html#argplush">Argemia Plushies</a>
        100 shrimp.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/12.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="8">Super burger finder</td>
      <td id="30">Find all 21 chicken burgers in the world.</td>
      <td>
        <ImageViewer src="/Images/Achievements/13.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="9">Miracle</td>
      <td id="31">
        During the
        <a href="../Events/storymodeeventswiki.html#piramid">Piramid Event</a>, get captured by a
        <a href="../Entities/entitieswiki.html#kwisp">Killer Wisp</a>
        but afterwards get saved by the Piramid.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/14.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="10">Bad Sun</td>
      <td id="32">
        Survive the
        <a href="../Events/triggerableeventswiki.html#badsun">Bad Sun Event</a>
        without dying or restarting.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="11">You have seen everything</td>
      <td id="33">
        During the
        <a href="../Events/triggerableeventswiki.html#badsun">Bad Sun Event</a>, you must die in the
        Bad Sun in order to obtain this achievement and ending.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/16.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="12">Object in the woods</td>
      <td id="34">
        During the
        <a href="../Events/storymodeeventswiki.html#picnic">Ariral Picnic Event</a>, you must visit
        the
        <a href="../Structures/structureswiki.html#picnic">Ariral Picnic Landmark</a>
        and grab one of the Warp Arrow toys.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/17.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="13">Halloween begin</td>
      <td id="35">Play the halloween gamemode which occurs on october 29-31 on any year.</td>
      <td>
        <ImageViewer src="/Images/Achievements/21.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="14">Pre-alpha player</td>
      <td id="36">
        Launch up your first infinite, ambient, or storymode save on any version beyond 0.6.3.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="40">WOO!</td>
      <td id="41">Kick a drive into any drive slot in one kick. Can only be done in storymode.</td>
      <td>
        <ImageViewer src="/Images/Achievements/23.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="42">Pre-alpha completed</td>
      <td id="43">
        Finish all 49 days of storymode. Similar to the
        <a href="#democ">Demo Completed Achievement</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/24.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
  <h3>Advancements</h3>
  <table>
    <tr>
      <th>Advancements</th>
      <th>How to obtain</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="15">Argemia</td>
      <td id="37">
        Find all 3
        <a href="../Objects/objectswiki.html#argplush">Argemia Plushies</a>: green, blue, and red.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/18.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="16">Burger?</td>
      <td id="38">Find all 21 chicken burgers in the world.</td>
      <td>
        <ImageViewer src="/Images/Achievements/19.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="17">We are not alone</td>
      <td id="39">
        Witness the
        <a href="../Events/storymodeeventswiki.html#asse">Ariral Ship Scan Event</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Achievements/20.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>
