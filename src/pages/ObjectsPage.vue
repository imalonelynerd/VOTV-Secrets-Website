<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Objects')

const objectsCategory = ['Object', 'Spawn Conditions', 'Description', 'Image']
</script>

<template>
  <h1>Objects</h1>
  <h2>Description:</h2>
  <p>
    Like entities, objects exist in the game, however these objects do not move, can be interacted,
    or are animated in some way. Instead they serve different purposes.
  </p>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="shipengine">Ship Engine</h3> </template>
    <template #1> <p id="1">Near Uniform Satellite Dish (X: 637, Y: 44)</p> </template>
    <template #2
      ><p id="2">
        A orange capsule with a gear shaped housing. Once you trigger the
        <a href="../Events/triggerableeventswiki.html#rozship">Rozital Ship Event</a>, the purple
        laser will charge up the machine and once the player gets too close it, it will unlock some
        of its gears, spin, fly off the rocks, and then proceed to explode in a bright flash.
      </p>
      <SpoilerBlock>
        <p>
          The Ship Engine object is a Rozital object, it appears as though it has been lost,
          misplaced, or forgotten. The object serves as an important landmark for the
          <a href="../Signals/specialsigswiki.html#lifecrystal">Lifecrystal Signal</a>
          as the Rozital that we can observe is looking for the Ship Engine object.
        </p>
        <p>
          Once Rozital finds the object it eventually beams it and when the player encounters it,
          the object ultimately disappears or is destroyed. This is most likely the Rozitals
          ensuring no lost technology is left behind especially on one like Earth.
        </p>
      </SpoilerBlock></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/1.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/2.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/3.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/4.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="scp432">SCP-432</h3> </template>
    <template #1> <p id="3">Near Victor, corner of the map (X: 613, Y: 623)</p> </template>
    <template #2>
      <p id="4">
        A green metal cabinet that's locked with 9 square shaped keys. Opening it reveals a path to
        a two-storied room that's full of the same cabinets. Its supposed to represent SCP-432 from
        the SCP Foundation. It's currently impossible to enter this room by any normal means, even
        after opening it. Although the teleportation functionality is implemented it requires
        no-clipping as there is an invisible barrier preventing the player from accessing the room
        inside. This object is actually representative of the
        <a href="https://scp-wiki.wikidot.com/scp-432">SCP-432</a> from the SCP Foundation Universe,
        albeit with a couple modifications but still relatively the same concept.
      </p>
    </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/5.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/6.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="basalt">Basalt Pillars</h3> </template>
    <template #1> <p id="5">(X: 465, Y: -85)</p> </template>
    <template #2>
      <p id="6">
        A black basalt pillar that grows out of dirt after you dig it up. They will spread really
        quick towards the player location if not destroyed.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/7.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/8.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="blackrock">Invisible Black Rock</h3> </template>
    <template #1> <p id="7">Near Tango (X: 436; Y: -469)</p> </template>
    <template #2>
      <p id="8">
        A black rock that can only be seen using a digital camera or security camera. Doesn't do
        anything but triggering EMF.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/9.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="tombstone">Tombstone</h3> </template>
    <template #1> <p id="9">Near Tango, closer to the river and fence</p> </template>
    <template #2>
      <p id="10">A tombstone with a splat of blood on it. It also triggers and EMF.</p>
    </template>
    <template #3> <ImageViewer src="/Images/Objects/10.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="crosses">Crosses</h3> </template>
    <template #1> <p id="11">Random</p> </template>
    <template #2>
      <p id="12">
        Once you find or trigger a
        <a href="../Entities/entitieswiki.html#wendi">Furfur</a>, a bunch of crosses that appear out
        of nowhere will spawn near the base. A pair of bones can be found nearby that trigger an
        EMF.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/11.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="max">Maxwell</h3> </template>
    <template #1>
      <p id="13">
        Requires
        <a href="../ConsoleCommands/consolecommandswiki.html#max">Console Command</a>
      </p>
    </template>
    <template #2>
      <p id="14">
        A cat like object that can be eaten by roaches. It plays music that can be heard from a
        relatively far radius. It's music has changed several times over the course of updates. In
        recent versions the use command, could be used to toggle his music or not, however in older
        versions it caused him to "die", after a short delay his model gets changed to a skeletal
        version of himself after which the
        <a href="https://www.youtube.com/watch?v=hkiNGPSLlrQ"
          >Intro Guitar Riff from Bad To The Bone</a
        >
        soon after he explodes spontaneously.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/12.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/13.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/14.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="argem">Argemwell</h3> </template>
    <template #1>
      <p id="15">
        Requires
        <a href="../ConsoleCommands/consolecommandswiki.html#argem">Console Command</a>
      </p></template
    >
    <template #2>
      <p id="16">
        Another cat like object, similar in function to Maxwell however it plays a completely
        different music and has a different texture. While it's model is the same as Maxwell's, the
        use command is used to toggle Argem's music on or off but it used to instead causes it to
        explode with a ton of shrimp that despawn over 5 seconds. The music that is played from this
        is actually called
        <a href="https://www.youtube.com/watch?v=dxDpdfzwuD4">Eeek! Penis</a>.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/15.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/16.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/17.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="broomba">Broomba</h3> </template>
    <template #1>
      <p id="17">
        Requires <a href="#max">Maxwell</a> and a Roomba item, place both on crafting table and
        craft
      </p></template
    >
    <template #2>
      <p id="18">
        A Roomba but overlayed with the Maxwell texture and model. It also plays the Maxwell noises
        instead of the normal Roomba noises.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/12.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/18.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="physicsgun">Physics Gun</h3> </template>
    <template #1>
      <p id="19">Requires a Gravity Gun placed inside a microwave for one minute.</p>
    </template>
    <template #2>
      <p id="20">
        A blue version of the gravity gun or overcharged version. It is one of the three variants of
        the physics gun which is the soft variant. Meaning it isn't very powerful. The object can be
        used to pick up, carry, and manipulate items. The Physics Gun does have a time limit on it's
        usage so you can charge up more energy for a longer duration usage with the microwave.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/19.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/20.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="abfriend">AB friend</h3> </template>
    <template #1> <p>Innaccessible.</p> </template>
    <template #2>
      <p id="21">
        A small purple crystal with the ERROR overlay on it. It is able to move and jump around,
        there isn't anything that you can interact with, with this object. It makes noises similar
        to that of Rozitals. Extremely rare object, its spawning location has changed several times
        over the course of past updates. Its last spawnpoint was at Antibreather Cave at exactly
        3:33 am. As of this current version the object is located in a hovering state below the AB
        cave.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/21.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/22.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="abplush">Antibreather Plush</h3> </template>
    <template #1> <p id="22">A.B. Cave at 3:33 am</p> </template>
    <template #2>
      <p id="23">
        A plushie that represents a baby version of the
        <a href="../Entities/entitieswiki.html#ab">Antibreather Entity</a>. Can only be found at the
        Antibreather Cave at exactly 3:33 am.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/23.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="unnamedrock">Unnamed Rock</h3> </template>
    <template #1>
      <p id="24">
        <a href="../Structures/structureswiki.html#stonehenge">Stonehenge</a>
      </p></template
    >
    <template #2>
      <p id="25">
        A dark rock that emits a level 4 EMF signal when near, it is unnamed and doesn't appear to
        do anything. To obtain you must perform the
        <a href="../Events/triggerableeventswiki.html#hellopen">Hell Opening Event</a>
        and while the wormhole is going on, make sure to stay as far away as possible and wait 2
        minutes until the wormhole disappears and the rock should appear.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/24.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/25.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/26.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="argplush">Argemia Plush</h3> </template>
    <template #1>
      <p id="26">
        Anywhere, use
        <a href="../InteractiveMap/interactablemap.html">Map</a> for reference
      </p></template
    >
    <template #2>
      <p id="27">
        A plushie that depicts Argemia, the leader of the Arirals' talls society. It has 3
        variations, most can be found across the map. It can be fed shrimp to trigger an
        <a href="../Achievements/achievementswiki.html#feedargem">Achievement</a>. Once fed with
        shrimp, the Argemia Plush will increase in size and once 26 shrimp has been fed the Argemia
        Plush will shrink back to it's original size and pop out an egg.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/27.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/28.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/29.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="nuclear">Nuclear Plush</h3> </template>
    <template #1>
      <p id="28">
        Anywhere, use
        <a href="../InteractiveMap/interactablemap.html">Map</a> for reference
      </p></template
    >
    <template #2>
      <p id="29">
        A plushie that depicts Argemia except eradiated, the leader of the Arirals' talls society.
        It has 3 variations, all can be found across the map. It can be fed shrimp to trigger an
        <a href="../Achievements/achievementswiki.html#saa">Achievement</a>. It will eat up both the
        shrimp and the shrimp package.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/30.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/31.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="secretargs">Secret Argemia Plushes</h3> </template>
    <template #1>
      <p id="30">Anywhere</p>
      <SpoilerBlock>
        <p>
          To obtain the cyan one, you must put down 12 shrimp at the bottom of the base pool and use
          an explosive while under water.
        </p>
        <p>
          To obtain the magenta one, you must obtain the
          <a href="../Signals/specialsigswiki.html#lifecrystal">Lifecrystal Signal</a>.
        </p>
        <p>
          However you must not save it to your computer, from there go check the rocks near the
          <a>Ship Engine Object</a>.
        </p>

        <p>
          To obtain the yellow one, you must place one shrimp at each fence corner and one shrimp in
          the center of the basement on top of the sewer. At the bottom of the basement, without
          looking in the direction of the center of the basement, wait till 00:00-1:00 am. This will
          be the time window for you to look and grab the yellow one.
        </p>

        <p>
          To obtain the gold one, you must find a golden ingot by digging and stare at it for an
          hour in real time.
        </p>

        <p>
          To obtain the black one, you are required to obtain all red, green, blue, cyan, yellow,
          and magenta <a href="#argplush">Argemia Plushies</a>.
        </p>
        <p>
          Then you will need to find all 7 skulls to trigger the
          <a href="../Events/triggerableeventswiki.html#hellopen">Hell Opening Event</a>.
        </p>
        <p>From there you will want to put all 6 plushies into your inventory.</p>
        <p>
          Stay far enough away where you can hold out against the pull of the wormhole but close
          enough that you can drop the plushies for them to be sucked in.
        </p>
        <p>
          You will trigger the
          <a href="../Events/triggerableeventswiki.html#hellopen">Hell Opening Event</a>.
        </p>
        <p>
          After a few seconds of the wormhole appearing, you will want to drop each of the plushies
          one by one until the wormhole eventually subsides and the black one is achieved.
        </p>

        <p>
          To obtain the white one, you are also required to obtain all 6 of the RGBCYM
          <a>Argemia Plushies</a>.
        </p>
        <p>
          From there you must use an industrial 3d printer to 3D print a flat hexagon surface or
          object of 5m on each side and 10m across each point. Or you can also use a physics gun and
          a plastic bottle to scale the bottle and place it solidly. The scale you’d want to use for
          this is between 136-150. From there place each of the plushies in the corner of the
          hexagon.
        </p>
        <p>
          If you do it correctly you will hear a loud wind sound and each of the plushies, one by
          one, will be shot with a colored laser of said plushie. After a few moments all 6 of them
          will disappear and the white one will appear from above. If you don’t get it right on the
          first try, attempt to inch and reposition the plushies more perfectly since this one
          requires insane precision.
        </p>
      </SpoilerBlock></template
    >
    <template #2>
      <p id="31">
        6 different variations, each one is unique. None of them can be fed with shrimp, are instead
        just props. All of them are obtainable in storymode. The white one floats in the air, the
        black one faces you wherever you are, the gold one is quite heavy, the yellow one has yellow
        colored eyes, cyan and magenta have different faces, and gold is very heavy.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/32.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/64.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/65.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/66.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/67.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/68.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/63.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="rune">Runes</h3> </template>
    <template #1> <p>Anywhere</p> </template>
    <template #2>
      <p id="32">
        4 different variations, the runes are elemental so it'll be easy to distinguish between
        them: fire, air, water, and earth. These items are required for the
        <a href="../Events/triggerableeventswiki.html#ritual">Ritual Event</a>
        in order to obtain the <a href="#lambert">Lambert Plush</a>. To obtain the fire rune you
        must use a gascan or any explosive and bang a rock on it a few times until it explodes, you
        could also wait for the
        <a href="../Entities/entitieswiki.html#redwisp">Red Wisp</a>
        to run around and hit a random rock. To obtain the air rune you must attach a couple
        balloons to a rock and have it fly to the top of the skybox until it touches the very
        skybox. To obtain the earth rune you must use a shovel and walk over to the log at position
        (X: -320, Y: 148). To obtain the water rune you must throw a rock down the river or come
        near the world border on one of the outflowing rivers and douge a rock near the border with
        water. If the rock is lost or gone, it will flow down from the opposite side of the map
        river until it lands either at a log, bridge, or rocks.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/34.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/50.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/51.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/52.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/53.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="runeslab">Rune Slabs</h3> </template>
    <template #1> <p>Anywhere</p> </template>
    <template #2>
      <p id="33">
        4 different variations, each one is used to help you create or find all 4
        <a href="#rune">runes</a> for the
        <a href="../Events/triggerableeventswiki.html#ritual">Ritual Event</a>. These aren't
        required as they are meant for extra help if the player cannot figure out how to obtain the
        <a href="#rune">runes</a>. Each one can be found at their specified location using the
        <a href="../InteractiveMap/interactablemap.html">Interactive Map</a>.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/35.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="lambert">Lambert</h3> </template>
    <template #1> <p>Anywhere</p> </template>
    <template #2>
      <p id="34">
        A lamb animal plush that has a little healthbar like a boss but doesn't do anything. It
        heals the player when near. It is a reference to the
        <a href="https://www.cultofthelamb.com/">Cult of the Lamb Game</a>.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/36.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="brickwall">Brick Wall</h3> </template>
    <template #1> <p>Removed, last at 0.6.3</p> </template>
    <template #2>
      <p id="35">
        A spiral staircase that leads all the way down. But be warned when you enter a mysterious
        force will mess up your base and cause a huge mess to appear. The first part of the
        structure is very dark and you will hear a growl, then the second part is a very bright
        staircase with a light brown orangish overlay for each of the textures, then the third part
        will be the same except with a white overlay, and then the fourth part will have a light
        blue overlay but will have a barrier stopping you from going deeper. If you ragdoll or
        return home, you will be taken back to Main Base. The final part of the staircase is a small
        chamber with four chairs and a barred off pipe, going down this pipe reveals nothing and the
        player just falls off into the void. When it becomes dark the room turns kinda reddish. Do
        note that when it is night time or evening the spiral staircase will become very dark so
        when this happens, its best to simply stay in one spot and wait for it to get light again.
      </p>
      <SpoilerBlock>
        <p>
          The Brickwall appears to be representative of the object
          <a href="https://scp-wiki.wikidot.com/scp-087/">SCP-087</a> from the SCP Foundation
          Universe. Both objects have an infinite staircase that seemingly transcends downwards
          infinitely. The only difference being the brick wall itself and the small chamber located
          at the bottom which don't occur with the original SCP.
        </p>
      </SpoilerBlock>
    </template>
    <template #3
      ><WidgetBundle>
        <ImageViewer src="/Images/Objects/59.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/37.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/38.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/39.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/40.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/41.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/42.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/57.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/58.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="whited">White Door</h3> </template>
    <template #1> <p>Random</p> </template>
    <template #2>
      <p id="36">
        A white door that will spawn randomly in any location, the door can be seen at times to open
        up into an optical illusion world but not much else.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/43.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/44.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ror">Rorschach Test</h3> </template>
    <template #1> <p>Spawns randomly</p> </template>
    <template #2>
      <p id="37">
        A combination of black inkblots that form a shape on the wall or floor of the base. This is
        a reference to the real life pyschological experiment performed by Hermann Rorschach and is
        known as the
        <a href="https://en.wikipedia.org/wiki/Rorschach_test">Rorschach Test</a>.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/45.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/46.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="tp">Thiccfus Plush</h3> </template>
    <template #1>
      <p id="38">
        Kill a
        <a href="../Entities/entitieswiki.html#rufus">Rufus Entity</a>.
      </p>
    </template>
    <template #2>
      <p id="39">
        A small plush representing or depicting the
        <a href="../Entities/entitieswiki.html#thiccfus">Thiccfus Entity</a>, it plays Thiccfus
        noises when interacted.
      </p>
    </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/47.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/48.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="erieplush">Erie Plush</h3> </template>
    <template #1>
      <p id="40">
        Bag up a gorepile, dig up a spot near Erie Zone, bury the bag, and either wait a day or look
        at the area at around 1 am.
      </p></template
    >
    <template #2>
      <p id="41">
        A small plush representing or depicting the
        <a href="https://eternitydev-games.fandom.com/wiki/Erie">Erie</a> character from AEWVS. This
        object can also be used to summon in
        <a href="../Entities/entitieswiki.html#liveerie">Live Erie Entity</a>, to do this you give
        the object a pencil and paper in which it will write out what it wants to eat. After feeding
        it the specified food, you will repeat this process 3 more times until it will glow red and
        explode multiple times until the entity is spawned in.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/56.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/75.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/76.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="omegakerfur">Omega Kerfurs</h3> </template>
    <template #1>
      <p id="42">
        Find the Kerfur Blueprint in the Bunker, behind some supply boxes. From there take apart two
        kerfuses and grab all the ingredients required by the blueprint.
      </p></template
    >
    <template #2>
      <p id="43">
        A powerful tool that the player can use to patrol, write reports, fix servers, fix
        transformers, and more. There are 10 total variants as of now, the three main colors, Erie,
        Erie1, Keljoy, Manny, Keith, Argemia, and Alien. With Erie1, Argemia, and Alien currently
        unobtainable but with their own sounds. Erie1 is Erie but with a skimpy outfit and can only
        be activated once, upon deactivating, the prop disappears. Keith is the default skin for all
        Kerfurs unless Funny Mode is turned on within game settings, if funny mode is turned on, you
        can still craft him by following the blueprint but don't add any colors or other props to
        change it's skin. To obtain the Erie and Keljoy variants you need to simply replace the
        Kerfus Colors with either the Erie Plush or the Kel Plush. To obtain Manny, you need to
        replace the 2 plastic scraps with wooden scraps and the Kerfus Color with the moving
        mannequin prop. If the player feeds a
        <a href="#lifecrystal">Lifecrystal Prop</a> to only the three colored Kerfurs, the Omega
        Kerfur will make distorted sounds, it'll light up a purple glow from its chest, and cannot
        be turned off. The omega kerfurs can be given clothes and wear them. Omega kerfurs can be
        broken by any explosion or hit. If broken, you can easily repair them by putting all their
        pieces on the crafting table and recrafting them.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/62.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/55.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/54.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/72.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="lifecrystal">Lifecrystal</h3> </template>
    <template #1>
      <p id="44">
        Kill a
        <a href="../Entities/entitieswiki.html#fossil">Fossilhound Entity</a>.
      </p></template
    >
    <template #2>
      <p id="45">
        A small purple, shard-looking object that glows purple around it. It can be used to feed a
        colored Omega Kerfur.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/70.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="greenc">Green Campfire</h3> </template>
    <template #1>
      <p id="46">Spawns in a fixed location at X: 680, Y: -573, at night.</p>
    </template>
    <template #2>
      <p id="47">
        A giant campfire that emits and is lit by a green fire. It emits an EMF level of 5. It
        forces the player's camera to always face in the same direction of the object and forces the
        player to walk in to the center point of the object. The green fire, like real fire will
        hurt the player. The object can be used to trigger the
        <a href="../Entities/entitieswiki.html#wendi">Furfur Entity</a>.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/61.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="alienthingy">Alien Thing</h3> </template>
    <template #1>
      <p id="48">
        Obtained through
        <a href="../Events/triggerableeventswiki.html#bse">Blood Skeleton Event</a>.
      </p></template
    >
    <template #2>
      <p id="49">
        A small gray tool with a yellow light emitting the area that is magnetic. So any metal, it
        will be extremely gravitated towards. This is another piece of technology coming from the
        Greys race in VOTV.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/69.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="trchest">Treasure Chest</h3> </template>
    <template #1> <p id="50">You can fish for it at the lake.</p> </template>
    <template #2>
      <p id="51">
        A brown chest that can be unlocked using a treasure key and will open up to a gold pile
        worth 1000 points.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/33.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/71.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="boneman">Bone Man</h3> </template>
    <template #1> <p id="52">Located at (X: -1906, Y: 1731)</p> </template>
    <template #2>
      <p id="53">
        A skeleton shaped man with bones and skull props. Is stationary, can't take apart.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/73.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="furfurpaltar">Furfur Paltar Pieces</h3> </template>
    <template #1>
      <p id="54">
        Grab two animal skulls, place one at the tree with MREs, burn the other, gather a gore gib
        (has to be from you), burn the gore gib and bury it at the root in the lake, wait some time
        or sleep, and from there you may dig it up from where you buried the burned gib. The two
        others can be find via digging and grabbing.
      </p></template
    >
    <template #2>
      <p id="55">
        There are three variants, two legs and one arch. It is used for the
        <a href="../Events/triggerableeventswiki.html#furfurplush">Furfur Plush Event</a>. To
        assemble them, you put the two legs right under the arch slots and everything should simply
        snap together.
      </p></template
    >
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Objects/80.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/77.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Objects/79.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/78.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="objectsCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="furfurplush">Furfur Plush</h3> </template>
    <template #1>
      <p id="56">
        Trigger
        <a href="../Events/triggerableeventswiki.html#furfurplush">Furfur Plush Event</a>.
      </p></template
    >
    <template #2>
      <p id="57">
        A red glowing plush representing or depicting the
        <a href="../Entities/entitieswiki.html#wendi">Furfur Entity</a>.
      </p></template
    >
    <template #3> <ImageViewer src="/Images/Objects/81.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
</template>
