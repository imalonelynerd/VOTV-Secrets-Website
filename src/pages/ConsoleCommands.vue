<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Console Commands')

const secretCommands = ['Command', 'Description', 'Image']
const miscCommands = ['Command', 'Image']
</script>

<template>
  <h1>Console Commands</h1>
  <h2>Description:</h2>
  <p>
    The command console is a console in which you can enter in certain commands to perform different
    functions and actions. In the top right of the console will give you a list of the common and
    important commands that you would be using throughout your gameplay however there are secret and
    hidden commands that perform specific actions. This webpage only lists the hidden and secret
    commands, not the common ones that you can find easily.
  </p>
  <h2>Secret Commands:</h2>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="max">Maxwell</h3> </template>
    <template #1>
      <p id="24">
        The command "maxwell", will spawn a
        <a href="../Objects/objectswiki.html#max">Maxwell Object</a>
        anywhere in the world except for out of bounds, hard to reach, or glitchy spots. The spawn
        location will be completely random for each time you type in this command.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/1.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="argem">Argemwell</h3> </template>
    <template #1>
      <p id="25">
        The command "argemwell", will spawn a
        <a href="../Objects/objectswiki.html#argem">Argemwell Object</a>
        anywhere in the world except for out of bounds, hard to reach, or glitchy spots. The spawn
        location will be completely random for each time you type in this command.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/2.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="alien">Alien</h3> </template>
    <template #1>
      <p id="26">
        The command "alien", used to spawn an alien cutout prop right behind you in the older
        versions, but instead now it spawns the prop behind a any random door that you open. Meaning
        if you were to spam the command a bunch, you will be able to trigger and spawn the prop
        behind every door in the world. It will have an output message of "Err; try again"
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/ConsoleCommands/3.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/4.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="area51">Execute_duende51</h3> </template>
    <template #1>
      <p id="27">
        The command "execute_duende51" is no longer in use hence making it unusable, however in
        previous versions of the game it had the ability to teleport the player into the
        <a href="../Worlds/anomalyworldswiki.html#51">51 Map</a> in which the Defenders minigame
        will start. In the current and newer versions of the game the command now tells you that
        "Aliens are dead".
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/5.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="1">Ariral</h3> </template>
    <template #1>
      <p id="28">
        The command "ariral", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        near where the Ariral Treehouse Landmark would spawn. However, in newer versions of the
        game, the command would no longer spawn an Ariral entity instead only prompting you that
        they are "busy""
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/6.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ariralpls">Ariral.pls</h3> </template>
    <template #1>
      <p id="29">
        The command "ariral.pls", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        near where the Ariral Treehouse Landmark would spawn. This command essentially replaces the
        Ariral command in the newer versions.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/6.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="2">Llama.saatana</h3> </template>
    <template #1>
      <p id="30">
        The command "llama.saatana", would spawn a Llama plush prop behind you. As soon as you
        approach the prop the prop will scream, glow red, and jump towards you. Once through you the
        prop will stop glowing red and return to normalcy. The command can only be ran once
        otherwise it will give you a message stating that "the llama soul is out there."
      </p></template
    >
    <template #2>
      <WidgetBundle>
        <ImageViewer src="/Images/ConsoleCommands/7.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/8.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="rufus">Gooseworx.rufus</h3> </template>
    <template #1>
      <p id="31">
        The command "gooseworx.rufus", would spawn an
        <a href="../Entities/entitieswiki.html#rufus">Rufus Entity</a>
        near the
        <a href="../Objects/objectswiki.html#scp432">SCP 432 Object</a>. Once it is spawned, creepy
        music will play. The music that is played is a reference to the
        <a href="https://www.youtube.com/watch?v=fJIhjGSD3-0">FNAF 1 Ambience track</a>.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/9.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="thiccfus">Gooseworx.thiccfus</h3> </template>
    <template #1>
      <p id="32">
        The command "gooseworx.thiccfus", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Thiccfus Entity</a>
        near the
        <a href="../Objects/objectswiki.html#scp432">SCP 432 Object</a>. Once it is spawned, creepy
        music will play. The music that is played is a reference to the
        <a href="https://www.youtube.com/watch?v=fJIhjGSD3-0">FNAF 1 Ambience track</a>.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/10.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="rf">Rufus.fuckoff</h3> </template>
    <template #1>
      <p id="33">
        The command "rufus.fuckoff", will kill any
        <a href="../Entities/entitieswiki.html#ariral">Rufus</a> or
        <a href="../Entities/entitieswiki.html#ariral">Thiccfus Entity</a>
        that exists in your world and it will stop the creepy music generated from it.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/11.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="rd">Rep.debug</h3> </template>
    <template #1>
      <p id="49">
        The command will display your current Ariral Rep statistics, including tier and amount.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/35.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <hr />

  <h2>Miscellaneous Secret Text Commands:</h2>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="3">Boobs</h3> </template>
    <template #1> <p id="34">The command "boobs", will output a text of "(.)(.)".</p> </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/12.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="4">Ariral.boobs</h3> </template>
    <template #1>
      <p id="35">The command "ariral.boobs", will output a text of "(.)(.) (.)(.) (.)(.)".</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/13.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>

  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="5">Sex</h3> </template>
    <template #1> <p id="36">The command "sex", will output a text of "no sex :(".</p> </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/14.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="6">Ariral.sex</h3> </template>
    <template #1>
      <p id="37">
        The command "ariral.sex", will output a text of "cout>>(get.vaccine("Kel")) console out:
        false".
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/15.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="7">Get.vaccine</h3> </template>
    <template #1>
      <p id="38">The command "get.vaccine", will output a text of "no :)".</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/16.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="8">Impulse</h3> </template>
    <template #1>
      <p id="39">The command "impulse", will output a text of "objection: shoot them".</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/17.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="9">Noclip</h3> </template>
    <template #1>
      <p id="40">The command "noclip", will output a text of "nobitches".</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/18.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="10">Cake</h3> </template>
    <template #1>
      <p id="41">The command "cake", will output a text of "is a lie" in red text.</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/19.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="11">Sv.cheats</h3> </template>
    <template #1>
      <p id="42">The command "sv.cheats", will output a text of "lmao no".</p>
    </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/20.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>

  <hr />

  <h2>Miscellaneous Image Commands:</h2>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="12">Floppa</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/21.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="13">Sogga</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/22.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="14">Bingus</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/23.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="15">Argemia</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/24.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="16">Vargfren</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/25.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="miscCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="17">Amongus</h3> </template>
    <template #1>
      <ImageViewer src="/Images/ConsoleCommands/26.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>

  <hr />

  <h2>Hidden Subcommands:</h2>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="18">Sv.target alpha</h3> </template>
    <template #1> <p id="43">Targets a server at point X: -3.50, Y: -0.50.</p> </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/27.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="19">Sv.target chair</h3> </template>
    <template #1> <p id="44">Targets a server at point X: -4.25, Y: -0.50.</p> </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/28.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="20">Sv.target root</h3> </template>
    <template #1> <p id="45">Targets a server at point X: -4.25, Y: -0.25.</p> </template>
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/29.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="21">Sv.target zulu</h3> </template>
    <template #1> <p id="46">Targets a server at point X: 9987.82, Y: 8021.53.</p> </template>
    <template #2>
      <WidgetBundle>
        <ImageViewer src="/Images/ConsoleCommands/30.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/31.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="22">Sv.target maxwell</h3> </template>
    <template #1> <p id="47">Targets a server at the Fake Maxwell Landmark.</p> </template>
    <template #2>
      <WidgetBundle>
        <ImageViewer src="/Images/ConsoleCommands/32.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/33.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="secretCommands" :has-media="true">
    <template #0> <h3 class="CardTitle" id="23">Tr.reset</h3> </template>
    <template #1>
      <p id="48">
        The command in earlier versions of 0.6.0 used to reset Transformers remotely without having
        the need for the player to run up and reset it in-person. But ever since 0.6.0a the command
        no longer has any effect other than being accepted by the terminal.
      </p></template
    >
    <template #2>
      <ImageViewer src="/Images/ConsoleCommands/34.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
</template>
