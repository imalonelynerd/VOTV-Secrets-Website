<script setup>
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Structures')

const structTitles = ['Structure', 'Description', 'Images']
</script>

<template>
  <h1>Structures</h1>
  <h2>Description:</h2>
  <p>
    In the VOTV map there are tons of structures that are placed around, each containing lots of
    interesting POI (Point of Interest) and items. Some structures are also related to some events
    as well. If you'd like the search and find some of these structures you can use the interactive
    map in order to locate them, just keep in mind that some of them may only accessed through an
    event.
  </p>

  <hr />
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="bridge">Bridge</h3> </template>
    <template #1
      ><p id="1">
        The Bridge structure is found very commonly across the map allowing the player and other
        entities cross the river without trouble.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/1.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="powerline">Powerline Pole</h3> </template>
    <template #1
      ><p id="2">
        The Powerline Pole structure is what is used to transfer power from the
        <a href="#transformer">Transformers</a> to the
        <a href="#generator">Power Generator</a> these can be found all over the map with the power
        cables attached to them. If you delete any Powerline structure you will innevitably cut off
        power from that specific Transformer.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/16.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="satellitedish">Satellite Dish</h3> </template>
    <template #1
      ><p id="3">
        The Satellite Dish is a structure that surprisingly is unrelated to catching and downloading
        signals as if deleted you are still able to function and play the game normally, each
        Satellite Dish has a server and a Command Console for you to repair and utilize if ever
        broken. The Satellite Dish structure is found all over the world in a uniform pattern that
        is squarish.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/3.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="transformer">Transformer</h3> </template>
    <template #1
      ><p id="4">
        There are only three Transformer structures on the map, inside each of these rooms you can
        find items and objects as well as the Transformer itself. On the outside usually are a
        couple benches with an open pathway.
      </p>
    </template>
    <template #2><ImageViewer src="/Images/Structures/4.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="fence">Fence</h3> </template>
    <template #1
      ><p id="5">
        The Fence structure surrounds many areas of the map including the Closed Up Forest,
        <a href="#stonehenge">Stonehenge</a>, Danger Forest, The Hole, Bomb Shelter, and the entire
        map in general. It is tall and cannot be climbed by the player except for bypassing it.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/5.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="firetower">Firetower Outpost</h3> </template>
    <template #1
      ><p id="6">
        The Firetower Outposts are giant wooden outposts that serve to keep watch of outside
        movement. The Firetower Outposts can be found outside the invisible barrier and placed
        uniformly. However in game they do not serve any purpose yet.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/6.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="radiotower">Radio Tower</h3> </template>
    <template #1
      ><p id="7">
        The Radio Tower is a very tall metallic tower with 4 bright red lights to signify where the
        Main Base is at no matter where you are in the world. This is primarily used for resetting
        the connection to the scientists in case they can't locate you. There is also a hanging
        mannequin off to the side.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/7.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/79.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="eventpole">Event Pole</h3> </template>
    <template #1
      ><p id="8">
        The Event Pole structure can be found in a lot of places, it is used to signify a possible
        event that can occur in that area.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/8.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="generator">Power Generator</h3> </template>
    <template #1
      ><p id="9">
        The structure is a giant generator that pulls power from all 3
        <a href="#transformer">Transformers</a> from across the map and generates more power for the
        base.
      </p></template
    >
    <template #2><ImageViewer src="/Images/Structures/9.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="false">
    <template #0><h3 class="CardTitle" id="bunker">Bunker</h3> </template>
    <template #1
      ><p id="10">
        The Bunker, which is a one chambered room that can only be accessed by buying or finding a
        hook, then using the hook to grab the keycard thats laying on the steps so you can always
        open the first set of doors. For the second set of doors you will need a password changer.
        Inside the chamber is a bunch of items, supply boxes, a bunch of books, metal desks and
        tables, and a lot of trash. There is a rusty door that is boarded up but essentially it will
        be replaced with another door in future versions.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/10.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/11.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Structures/12.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/13.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="false">
    <template #0><h3 class="CardTitle" id="mainbase">Main Base</h3> </template>
    <template #1
      ><p id="11">The main base is the general main area where the player resides in.</p>
      <SpoilerBlock>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/14.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/64.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="12">
          It features a ton of rooms, first of which is the Garage and the Admin room which can be
          accessed through the code 1234.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/63.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/19.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="13">
          There are several more rooms down the main hallway, one of which is a storage/equipment
          area and the other being a diner.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/18.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/30.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="14">
          On the very left is the signals room with its typical layout as well as a dedicated server
          room to the right.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/17.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/25.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="15">
          Downstairs we have the basement which includes the meat locker and the power block.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/74.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/72.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="16">
          On the top floor there are 3 rooms: one of which is an elevator access room, Kel's living
          area, and the bathroom outside. There is also an outside patio.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/75.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/73.png" alt="VOTV Archive Image" />

          <ImageViewer src="/Images/Structures/70.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/69.png" alt="VOTV Archive Image" />

          <ImageViewer src="/Images/Structures/71.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="17">
          There is also a vent system present which leads to one secret room and you can go anywhere
          throughout the base using the vents.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/65.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/68.png" alt="VOTV Archive Image" />

          <ImageViewer src="/Images/Structures/20.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="18">
          Strangely there are misplaced corpses all over the main base, mainly underneath of it and
          one nestled inside two signal terminals.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/58.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/61.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="19">
          During the older versions of VOTV there existed a deeper basement where the Brickwall
          object is located and a couple items. However, this basement has been sealed off with no
          ladder and all is left is a box.
        </p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/2.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/66.png" alt="VOTV Archive Image" />
        </WidgetBundle>
      </SpoilerBlock>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="bs">Bomb Shelter</h3> </template>
    <template #1
      ><p id="20">
        The Bomb Shelter is a small fenced structure. This structure has a lot of items and props on
        top with paper all spilled out in a huge mess, there are a couple useful tools and some
        supply boxes. It also has an impenetrable green door that, if attempted to destroy, will
        crash your game. If you are to access the bottom part, you will discover some supply boxes,
        several empty rooms, 4 bagged up corpses, and as well as a bloodied chainsaw.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/21.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/22.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="sewer">Sewer</h3> </template>
    <template #1
      ><p id="21">
        The Sewer structure is a small sewer system with some large shrimp placed uniformly across
        the small underwater chamber. Its innaccessible as you will need to delete the metal grate
        thats blocking it.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/23.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/24.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="false">
    <template #0><h3 class="CardTitle" id="thehole">The Hole</h3> </template>
    <template #1
      ><p id="22">
        Another small fenced landmark similar to the
        <a href="#bs">Bomb Shelter</a> except with a different set of items, it has some supply
        boxes, in the middle is a giant hole that used to go very deep and lead down to the
        <a href="../Entities/entitieswiki.html#soltomia">Soltomia Entity</a>. The hole as of current
        versions has two cutout parts that eventually lead down to the void. The Hole emits a deep
        bassy sound when near. It used to have an auto playing radio that would play music from Half
        Life 2 but in the newer versions the radio has since been removed. There is also a frozen
        model of a
        <a href="../Entities/entitieswiki.html#wendi">Furfur Entity</a>
        but with a modified cigar and it is painted entirely green with the text above it "Weedigo"
        towards the bottom and outside of the hole.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/78.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/59.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Structures/60.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/77.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="stonehenge">Stonehenge</h3> </template>
    <template #1
      ><p id="23">
        Stonehenge is described to be a large area completely fenced off in a thick forest, in the
        middle it has large stone slabs or columns placed somewhat uniformly to form something that
        looks like the Stonehenge from real life. There are several supply boxes including some MRES
        and a shovel sitting next to the structure. There are several bone props including a skull
        scattered all over.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/26.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="sgl">Small Graveyard</h3> </template>
    <template #1
      ><p id="24">
        The Small Graveyard has a cross and a tombstone that are both unmarked or has unknown
        recipients, if the AB or Antibreather finds you there it will aggressively attack you.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/27.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="fenceopen">Fence Opening</h3> </template>
    <template #1
      ><p id="25">
        An opening to the fence that surrounds the entirety of the general world, it allows you to
        explore further until you hit the invisible red barriers.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/28.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="circlebench">Circle of Benches</h3> </template>
    <template #1
      ><p id="26">
        The Circle of Benches structure consists of a few benches as well as a fallen over sign. It
        has a circular pathway with a light in the middle.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/29.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="guardpost">Guardpost</h3> </template>
    <template #1
      ><p id="27">
        A small building with a desk, a couple items that include gas cans, food, and a tile.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/15.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="secretstairs">Secret Staircase</h3> </template>
    <template #1
      ><p id="28">
        Stairs that lead to a seemingly empty frame of some sort, this structure has no purpose.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/31.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="scproom">SCP-432 Room</h3> </template>
    <template #1
      ><p id="29">
        A giant room full of uniformly placed
        <a href="../Objects/objectsswiki.html#scp432">SCP-432 Objects</a>
        across each side. To access you must find all 9 tiles and place them on the
        <a href="../Objects/objectswiki.html#scp432">SCP-432 Object</a>
        in the world, from there you must either noclip or glitch into the box itself so that the
        portal that is inside will teleport you inside the room.
      </p>
    </template>
    <template #2
      ><ImageViewer src="/Images/Structures/32.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="wooded">Wooded Shack</h3></template>
    <template #1
      ><p id="30">
        An delapitated wooden shack that is barred on the outside, if inside you will encounter a
        red Ariral tree with a shovel and animal skull.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/33.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="picnic">Ariral Picnic</h3> </template>
    <template #1>
      <p>
        Requires
        <a href="../Events/storymodeeventswiki.html#picnic">Ariral Picnic Event</a>
      </p>
      <p id="31">
        Consists of 2 Warp Arrows, a small picnic of 2 baskets and various food items, some notable
        items that you might find are the shrimp burger and Brynfruit.
      </p>
    </template>
    <template #2>
      <WidgetBundle>
        <ImageViewer src="/Images/Structures/34.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/35.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="ariraltreehouse">Ariral Treehouse</h3> </template>
    <template #1
      ><p>
        Requires
        <a href="../Events/storymodeeventswiki.html#ariraltreehouse">Ariral Treehouse Event</a>
      </p>
      <p id="32">
        The Ariral Treehouse structure consists of three main parts, the first one being the 2 Warp
        Arrows present, the actual treehouse itself, and the campfire which is used to signify its
        appearance in the game through the use of smoke. The treehouse will be built over a period
        of 4 days each day bringing a new stage or version of the treehouse. In the older versions
        of the game you used to be able to grab items from the various stages but that has since
        been changed to having all the special items such as night vision goggles, water pressure
        guns, posters, and some Ariral items that include the Arir phone, pillow cushions, heater,
        chest, light, and campfire canister, to spawn at the last stage.
      </p>
      <SpoilerBlock>
        <p>Stage 1</p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/37.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/38.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/39.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p>Stage 2</p>

        <ImageViewer src="/Images/Structures/40.png" alt="VOTV Archive Image" />

        <p>Stage 3</p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/41.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/42.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p>Stage 4</p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/43.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/44.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p>Stage 5</p>
        <WidgetBundle>
          <ImageViewer src="/Images/Structures/45.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/46.png" alt="VOTV Archive Image" />
          <ImageViewer src="/Images/Structures/47.png" alt="VOTV Archive Image" />
        </WidgetBundle>

        <p id="33">
          Also there is a chance that some paper alien parts and paint buckets will spawn behind the
          treehouse depending on your Ariral rep, which typically spawns or appears in lower rep
          tiers.
        </p>

        <ImageViewer src="/Images/Structures/80.png" alt="VOTV Archive Image" /> </SpoilerBlock
    ></template>
    <template #2
      ><ImageViewer src="/Images/Structures/36.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="erie">Erie and Argemia Statues</h3> </template>
    <template #1
      ><p id="34">
        Two giant unbreakable grey statues that are representations or depictions of the character
        Erie from AEWVS and Argemia from VOTV in the EternityDev Universe.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/48.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="crashedtp">Crashed Ariral Tp Chamber</h3> </template>
    <template #1
      ><p>
        Requires
        <a href="../Events/triggerableeventswiki.html#shortarirtp">Shorts Arir Tp Event</a>
      </p>
      <p id="35">
        A delapitated chamber with a teleport box inside, the structure also includes 2 decapitated
        Ariral legs, a gravity gun, and 2 shorts Ariral logos.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/49.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/50.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="false">
    <template #0><h3 class="CardTitle" id="ritual">Ritual Altar</h3> </template>
    <template #1
      ><p>
        Requires
        <a href="../Events/333ameventswiki.html#ritualwarp">Ritual Warp Event</a>
      </p>
      <p id="36">
        A small twin island that consists of a bridge, some lights, 4 obelisks for you to place the
        4 elemental
        <a href="../Objects/objectswiki.html#rune">runes</a> in, a stone altar in the back center
        with a ritual knife on top, a demonic floor in the center, a stone frame that goes across,
        and behind the stone altar is the buried
        <a href="../Objects/objectswiki.html#runeslab">Fire Rune Slab</a>. This landmark is located
        out of bounds in the direction of Victor Satellite Dish and below the tip of the corner of
        the map. If you were to fall off you will be teleported above the
        <a href="#sgl">Small Graveyard Landmark</a>.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/51.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/52.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Structures/53.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/54.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="well">Abandoned Well</h3> </template>
    <template #1
      ><p id="37">
        A boarded up abandoned well that goes very deep, has a bunch of skeleton props on the
        bottom.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/55.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/56.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="true">
    <template #0><h3 class="CardTitle" id="shroom">Shroomcircle</h3> </template>
    <template #1
      ><p id="38">
        A ring of large white mushrooms that can spawn anywhere and randomly. Inside the ring you
        can dig up a animal skull.
      </p></template
    >
    <template #2
      ><ImageViewer src="/Images/Structures/57.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="structTitles" :has-media="false">
    <template #0><h3 class="CardTitle" id="abcave">AB Cave</h3> </template>
    <template #1
      ><p id="39">
        A sealed off cave that has a skull and a burger at the beginning. To unlock it, you must
        trigger the
        <a href="../Events/triggerableeventswiki.html#wolfgang">Wolfgang Awakening Event</a>. When
        unlocked, houses two large nests as well as a deeper part of the cave,
        <a href="../Worlds/anomalyworldswiki.html#untitled_152">untitled_152</a>, that you can
        access. There are several items that you can find within the nests.
      </p></template
    >
    <template #2
      ><WidgetBundle>
        <ImageViewer src="/Images/Structures/62.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Structures/76.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Structures/67.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
</template>
