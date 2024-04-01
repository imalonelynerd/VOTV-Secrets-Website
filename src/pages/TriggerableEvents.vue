<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
</script>

<template>
  <h1>Triggerable Events</h1>
  <h2>Description:</h2>
  <p>
    A very few amount of events in VOTV can be triggered manually either by the player doing
    something specific or following a specific action.
  </p>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="rozship">Rozital Ship Event</td>
      <td id="1">
        At midnight, a bright and very loud purple laser will be shot down from above hitting the
        <a href="../Objects/objectswiki.html#shipengine">Ship Engine Object</a>, it will do this for
        30 seconds. The Rozital that is showcased here is looking for a lost ship engine that is
        either misplaced or moved. After finding it, the Rozital shoots down a purple beam. The
        Rozitals for being an advanced race is most likely trying to protect their technology from
        humans.
      </td>
      <td id="2">
        You must obtain the
        <a href="../Signals/specialsigswiki.html#lifecrystal">Lifecrystal Signal</a>, process it to
        level, and send it off to the researchers. From there you will need to wait until midnight.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/1.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/2.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="shipengine">Ship Engine Event</td>
      <td id="3">
        The
        <a href="../Objects/objectswiki.html#shipengine">Ship Engine Object</a>
        will begin rotating it's gears, once it locks up it begins to hover and fly off the 2 rocks,
        and soon it slowly builds up a purple energy that eventually climaxes at a large bright
        purple explosion. This event is linked to the Rozital Ship Event, after the Rozital fires
        the purple beam at the object its charged. Once fully charged either the object disappears
        or is destroyed, presumably the Rozital having accomplished its mission.
      </td>
      <td id="4">
        You must perform or trigger the
        <a href="#rozship">Rozital Ship Event</a> in order to trigger this one.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/3.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/4.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="hellopen">Hell Opening Event</td>
      <td id="5">
        The 7 skulls will begin moving around slightly, eventually with enough time they will pick
        up the pace and start moving around quickly in a circular motion. Afterwards, with enough
        momentum they will begin floating until all 7 of them hit a specific point. With enough time
        passed a black hole will spawn in, sucking in all of the skulls. The black hole's
        gravitional pull and size will increase with every second passed. If you were to fall into
        or be pulled into the black hole you will be teleported into untitled_9999 world. If you
        were to stay as far away as possible and wait out the black hole which will take a couple of
        minutes to despawn, the Unnamed Rock Object will be spawned for you to have access to.
      </td>
      <td id="6">
        You must collect all 7 skulls and place them in the very darkened spot of the
        <a href="../Structures/structureswiki.html#stonehenge">Stonehenge</a>. You must perform or
        trigger the <a href="#rozship">Rozital Ship Event</a> and
        <a href="#shipengine">Ship Engine Event</a> in order to obtain the 7th skull which is
        located underneath the
        <a href="../Objects/objectswiki.html#shipengine">Ship Engine Object</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/6.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/7.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/8.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/9.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/10.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="evil">The Evil Event</td>
      <td id="7">
        In the span of a few milliseconds, the entire world will be overlayed with the evil texture
        and abruptly end your game, give the worst ending, and game over. The Evil manages to
        transport itself or at least a seed of it through the signal that you accept. From there, it
        immediately converts everything within the immediate area. Soon it infests and converts
        everything on Earth instantly.
      </td>
      <td id="8">
        You must obtain the
        <a href="../Signals/specialsigswiki.html#evil">Evil Signal</a>, process it to level 3, send
        it off to the researchers, and wait some time.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/11.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="badsun">Bad Sun Event</td>
      <td id="9">
        The sun is censored with a black square, the natural brightness of the world increases
        significantly, and if you step outside in the range of the censored sun's rays you will take
        damage. The event lasts for the entire duration of the day until the sun goes down and it is
        night.
      </td>
      <td id="10">Can be triggered on the 24th day of any real life month and it's also random.</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/12.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/13.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/14.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="undeaddeer">Undead Deer Event</td>
      <td id="11">
        The
        <a href="../Entities/entitieswiki.html#undeaddeer">Undead Deer Entity</a>
        will effectively replace the normal
        <a href="../Entities/entitieswiki.html#deer">Deer Entity</a>
        and a dead deer corpse can be found anywhere. If you eat all of it you are able to despawn
        the
        <a href="../Entities/entitieswiki.html#undeaddeer">Undead Deer Entity</a>
        for good.
      </td>
      <td id="12">
        Must obtain the
        <a href="../Signals/specialsigswiki.html#deer">Deer Signal</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/16.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="shortarirtp">Shorts Arir Tp Event</td>
      <td id="13">
        A bright cyan flash will flash the whole world, then a stasis chamber of some kind will
        spawn in valley near the
        <a href="../Structures/structureswiki.html#fenceopen">Fence Opening Landmark</a>. It will
        drop two decapitated Ariral Legs as well as the Gravity Gun. There's also the shorts society
        logo which you can g
      </td>
      <td id="14">
        Must obtain the
        <a href="../Signals/specialsigswiki.html#shortarir">ShortarirTp Signal</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/17.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/18.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="virus">Virus Event</td>
      <td id="15">
        All the screens on all the terminals will flip a red skull and effectively be glitching out
        which would then result in the entire base losing all its power. From there you would wait a
        couple seconds before you can flip the switches again. You'll also recieve an email giving
        you strong a critique of your training.
      </td>
      <td id="16">
        Must obtain the
        <a href="../Signals/othersigswiki.html#virus">Virus Signal</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/19.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="shtduende">Shit Duende Event</td>
      <td id="17">
        If you were to enter into the bathroom you will notice the
        <a href="../Entities/entitieswiki.html#shtduende">Shit Duende Entity</a>
        sitting on the toilet before it phases out of existence.
      </td>
      <td id="18">
        Must obtain the
        <a href="../Signals/specialsigswiki.html#shtduende">Shitduende Signal</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/20.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="howl">Howl Event</td>
      <td id="19">You can hear a loud howl coming from some unknown entity or origin.</td>
      <td id="20">Walk to these exact approximate coordinates (X: -345, Y: -103).</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/21.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="well">Abandoned Well Sleep Event</td>
      <td id="21">
        At the bottom of the
        <a href="../Structures/structureswiki.html#well">Abandoned Well</a>, as soon as your sleep
        meter reaches 0 and your character attempts to sleep the game will teleport you into the
        <a href="../Worlds/anomalyworldswiki.html#untitled_129">untitled_129</a>.
      </td>
      <td id="22">Completely zero out your sleep at the bottom.</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ritual">Ritual Event</td>
      <td id="23">
        After placing all four
        <a href="../Objects/objectswiki.html#rune">runes</a> into the correct places and stabbing
        yourself with the ritual knife, a
        <a href="../Objects/objectswiki.html#lambert">Lambert Plush</a>
        will spawn on top of the altar for you to grab.
      </td>
      <td id="24">
        You need to obtain all four
        <a href="../Objects/objectswiki.html#rune">runes</a> that include fire, water, earth, and
        air. After obtaining them and warping over to the
        <a href="../Structures/structureswiki.html#ritual">Ritual Altar</a>, place all of the runes
        in the correct spots then stab yourself using the knife provided on the altar.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/24.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/25.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="logevent">Log Event</td>
      <td id="25">
        Once through the log, you will teleport to the other log that is similar to the one you just
        entered. You are able to effectively teleport between two completely different points on the
        map like walking through a portal.
      </td>
      <td id="26">
        You have to walk through an any angled log that is sitting on top of some rocks at 6:00 am.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/28.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/29.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="bse">Blood Skeleton Event</td>
      <td id="27">
        A bloodied skeleton with corroded bones will spawn and spill some blood on the ground. A
        metallic device known as the
        <a href="../Objects/objectswiki.html#alienthingy">Alien Thing</a>
        will spawn in the ribcage or fall out.
      </td>
      <td id="28">
        Must obtain the
        <a href="../Signals/specialsigswiki.html#18">Process Signal</a>, afterwards it will be
        located near TR_0 Transformer.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/30.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="halloween">Halloween Event</td>
      <td id="29">
        An entirely seperate gamemode that lasts for a few days on the real life date of October
        31st and onward. Features a red colored world with 13 glowing pumpkins and multiple entities
        that rapidly spawn. Some of these entities which are considered "Halloween Special" include:
        <a href="../Entities/entitieswiki.html#blackfuzzy">Black Fogling</a>,
        <a href="../Entities/entitieswiki.html#insomni">Insomnia Demon</a>, and
        <a href="../Entities/entitieswiki.html#wendi">Furfur</a>. If there more of this kind, they
        will be added to later versions of the Halloween Special. The goal is for you to collect all
        13 glowing pumpkins which change throughout Halloween Special versions to trigger the
        ending. The ending which has the player collect one signal, download, and save it which will
        trigger or spawn in the <a href="../Entities/entitieswiki.html#skeleo">SKELEO Entity</a>.
      </td>
      <td id="30">Occurs on the 31st of October and a few days after in real life time.</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/31.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/32.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/33.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/34.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/35.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/36.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="tardis">Tardis Event</td>
      <td id="31">
        A reference to the Tardis Box from Doctor Who, the actual box itself will spawn in front of
        the main base and after a minute will disappear.
      </td>
      <td id="32">Must obtain the Tardis Signal.</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/37.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="wolfgang">Wolfgang Awakening Event</td>
      <td id="33">
        The Wolfgang entity will run around looking for any pumpkins, during that time the barrier
        inside AB Cave will unlock.
      </td>
      <td id="34">Must place down pumpkin near AB Cave.</td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/38.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/39.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="furfurplush">Furfur Plush Event</td>
      <td id="35">
        The
        <a href="../Objects/objectswiki.html#furfurplush">Furfur Plush</a>
        will spawn right underneath the
        <a href="../Objects/objectswiki.html#furfurpaltar">Furfur Paltar Object</a>.
      </td>
      <td id="36">
        You need to obtain all three
        <a href="../Objects/objectswiki.html#furfurpaltar">Furfur Paltar Pieces</a>
        and assemble them, then warping over to
        <a href="../Structures/structureswiki.html#ritual">Ritual Altar</a>, you will place the
        object on top of the table. From, there taking a knife, grab one gore gib and burn it. While
        it is burning place it underneath the bridge of the object.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/40.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/41.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/TriggerableEvents/42.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/TriggerableEvents/43.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="spaceman">Spaceman Event (Removed)</td>
      <td id="35">
        A spaceman prop will spawn alongside a satellite prop on top of the roof of the base, next
        to the globe. This used to occur in older versions of VOTV in D03 but ever since then its
        been removed and the signal no longer does anything.
      </td>
      <td id="36">
        You must obtain the
        <a href="../Signals/othersigswiki.html#8">Amogus Signal</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Events/TriggerableEvents/44.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>
