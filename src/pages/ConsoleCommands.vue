<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'

changeTitle('Console Commands')
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
  <table>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="max">Maxwell</td>
      <td id="24">
        The command "maxwell", will spawn a
        <a href="../Objects/objectswiki.html#max">Maxwell Object</a>
        anywhere in the world except for out of bounds, hard to reach, or glitchy spots. The spawn
        location will be completely random for each time you type in this command.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/1.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="argem">Argemwell</td>
      <td id="25">
        The command "argemwell", will spawn a
        <a href="../Objects/objectswiki.html#argem">Argemwell Object</a>
        anywhere in the world except for out of bounds, hard to reach, or glitchy spots. The spawn
        location will be completely random for each time you type in this command.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/2.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="alien">Alien</td>
      <td id="26">
        The command "alien", used to spawn an alien cutout prop right behind you in the older
        versions, but instead now it spawns the prop behind a any random door that you open. Meaning
        if you were to spam the command a bunch, you will be able to trigger and spawn the prop
        behind every door in the world. It will have an output message of "Err; try again"
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/3.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/4.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="area51">Execute_duende51</td>
      <td id="27">
        The command "execute_duende51" is no longer in use hence making it unusable, however in
        previous versions of the game it had the ability to teleport the player into the
        <a href="../Worlds/anomalyworldswiki.html#51">51 Map</a> in which the Defenders minigame
        will start. In the current and newer versions of the game the command now tells you that
        "Aliens are dead".
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="1">Ariral</td>
      <td id="28">
        The command "ariral", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        near where the Ariral Treehouse Landmark would spawn. However, in newer versions of the
        game, the command would no longer spawn an Ariral entity instead only prompting you that
        they are "busy""
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/6.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ariralpls">Ariral.pls</td>
      <td id="29">
        The command "ariral.pls", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        near where the Ariral Treehouse Landmark would spawn. This command essentially replaces the
        Ariral command in the newer versions.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/6.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="2">Llama.saatana</td>
      <td id="30">
        The command "llama.saatana", would spawn a Llama plush prop behind you. As soon as you
        approach the prop the prop will scream, glow red, and jump towards you. Once through you the
        prop will stop glowing red and return to normalcy. The command can only be ran once
        otherwise it will give you a message stating that "the llama soul is out there."
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/7.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rufus">Gooseworx.rufus</td>
      <td id="31">
        The command "gooseworx.rufus", would spawn an
        <a href="../Entities/entitieswiki.html#rufus">Rufus Entity</a>
        near the
        <a href="../Objects/objectswiki.html#scp432">SCP 432 Object</a>. Once it is spawned, creepy
        music will play. The music that is played is a reference to the
        <a href="https://www.youtube.com/watch?v=fJIhjGSD3-0">FNAF 1 Ambience track</a>.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/9.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="thiccfus">Gooseworx.thiccfus</td>
      <td id="32">
        The command "gooseworx.thiccfus", would spawn an
        <a href="../Entities/entitieswiki.html#ariral">Thiccfus Entity</a>
        near the
        <a href="../Objects/objectswiki.html#scp432">SCP 432 Object</a>. Once it is spawned, creepy
        music will play. The music that is played is a reference to the
        <a href="https://www.youtube.com/watch?v=fJIhjGSD3-0">FNAF 1 Ambience track</a>.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/10.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rf">Rufus.fuckoff</td>
      <td id="33">
        The command "rufus.fuckoff", will kill any
        <a href="../Entities/entitieswiki.html#ariral">Rufus</a> or
        <a href="../Entities/entitieswiki.html#ariral">Thiccfus Entity</a>
        that exists in your world and it will stop the creepy music generated from it.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/11.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rd">Rep.debug</td>
      <td id="49">
        The command will display your current Ariral Rep statistics, including tier and amount.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/35.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Miscellaneous Secret Text Commands:</h2>
  <table>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="3">Boobs</td>
      <td id="34">The command "boobs", will output a text of "(.)(.)".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/12.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="4">Ariral.boobs</td>
      <td id="35">The command "ariral.boobs", will output a text of "(.)(.) (.)(.) (.)(.)".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/13.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="5">Sex</td>
      <td id="36">The command "sex", will output a text of "no sex :(".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/14.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="6">Ariral.sex</td>
      <td id="37">
        The command "ariral.sex", will output a text of "cout>>(get.vaccine("Kel")) console out:
        false".
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="7">Get.vaccine</td>
      <td id="38">The command "get.vaccine", will output a text of "no :)".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/16.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="8">Impulse</td>
      <td id="39">The command "impulse", will output a text of "objection: shoot them".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/17.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="9">Noclip</td>
      <td id="40">The command "noclip", will output a text of "nobitches".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/18.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="10">Cake</td>
      <td id="41">The command "cake", will output a text of "is a lie" in red text.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/19.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="11">Sv.cheats</td>
      <td id="42">The command "sv.cheats", will output a text of "lmao no".</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/20.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Miscellaneous Image Commands:</h2>
  <table>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="12">Floppa</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/21.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="13">Sogga</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="14">Bingus</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/23.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="15">Argemia</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/24.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="16">Vargfren</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/25.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="17">Amongus</td>
      <td></td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Hidden Subcommands:</h2>
  <table>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="18">Sv.target alpha</td>
      <td id="43">Targets a server at point X: -3.50, Y: -0.50.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/27.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="19">Sv.target chair</td>
      <td id="44">Targets a server at point X: -4.25, Y: -0.50.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/28.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="20">Sv.target root</td>
      <td id="45">Targets a server at point X: -4.25, Y: -0.25.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/29.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="21">Sv.target zulu</td>
      <td id="46">Targets a server at point X: 9987.82, Y: 8021.53.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/30.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/31.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="22">Sv.target maxwell</td>
      <td id="47">Targets a server at the Fake Maxwell Landmark.</td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/32.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/ConsoleCommands/33.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="23">Tr.reset</td>
      <td id="48">
        The command in earlier versions of 0.6.0 used to reset Transformers remotely without having
        the need for the player to run up and reset it in-person. But ever since 0.6.0a the command
        no longer has any effect other than being accepted by the terminal.
      </td>
      <td>
        <ImageViewer src="/Images/ConsoleCommands/34.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>
