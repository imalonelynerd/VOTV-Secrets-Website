<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Random Events')

const randomTitles = ['Event', 'Description', 'Rarity', 'Image']
</script>

<template>
  <h1>Random Events</h1>
  <h2>Description:</h2>
  <p>
    A lot of the events in VOTV are scripted story events, however some events that exist in the
    game are either not scripted but rather are completely random.
  </p>
  <InfoCard :categories="randomTitles" :has-media="false">
    <template #0> <h3 class="CardTitle" id="blackfog">Black Fog Event</h3> </template>
    <template #1>
      <p id="1">
        A creepy noise can be heard from across the map, soon the world will begin to grow darker
        and foggier with each second passing until it eventually becomes so dark and so foggy that
        you can't see 20 meters in front of you. This event usually lasts 3-4 minutes and isn't very
        threatening.
      </p></template
    >
    <template #2> <p id="2">Common</p></template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/1.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/RandomEvents/2.png" alt="VOTV Archive Image" />

        <ImageViewer
          src="/Images/Events/RandomEvents/3.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="redsky">Red Sky Event</h3> </template>
    <template #1>
      <p id="3">
        At night the sky will turn completely bright red instead of the usual dark black color and
        it will stay like this for some time until it eventually disappears.
      </p></template
    >
    <template #2> <p id="4">Uncommon</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/4.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="gears">Gears Event</h3> </template>
    <template #1>
      <p id="5">
        7-12 giant gears can be seen and heard from across the map, these gears are animated and
        seen spinning around, however they have no collision and are stationary. This lasts for some
        time before the giant gears disappear.
      </p></template
    >
    <template #2> <p id="6">Very Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/5.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ghost">Ghost Graffiti Event</h3> </template>
    <template #1>
      <p id="7">A drawing or graffiti will show up on a base of a random satellite dish.</p>
    </template>
    <template #2> <p id="8">Common</p></template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/6.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="chair">Chair Skeleton Event</h3> </template>
    <template #1>
      <p id="9">
        After walking and exploring for a while and upon returning back to base, you may encounter a
        a bunch of bone props that is organized and spawned in a skeleton shape and is sitting on
        the main chair. You can take apart the bones, however do note that the skull cannot be used
        for the Hell Opening Event.
      </p></template
    >
    <template #2> <p id="10">Common</p></template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/7.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="jellyfish">Jellyfish Event</h3> </template>
    <template #1>
      <p id="11">
        A bunch of jellyfish will spawn and begin flying in the sky, they will do this for a long
        time before eventually flying out of bounds.
      </p></template
    >
    <template #2> <p id="12">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/8.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="roar">Roar Event</h3> </template>
    <template #1>
      <p id="13">
        In the older versions of VOTV, the roar event is supposed to signify the end of the game and
        demo completion, this was usually triggered upon day 35. But since then in the newer
        versions the event appears to be completely random. It may have a chance of appearing on day
        48-50 in storymode but its very unlikely.
      </p></template
    >
    <template #2> <p id="14">Super Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/9.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="possessedkerfus">Possessed Kerfus Event</h3> </template>
    <template #1>
      <p id="15">
        Kerfus despite being off will move on its own in a random location and after some time will
        drop a ball of flesh on the ground.
      </p></template
    >
    <template #2> <p id="16">Extremely Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/10.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="possessedtv">Possessed TV Event</h3> </template>
    <template #1>
      <p id="17">
        A TV prop will randomly spawn in any part of the world and will be autoplaying an error
        video. If you were to interact with it the TV will break off into bloody body parts and
        spill some blood all over.
      </p></template
    >
    <template #2> <p id="18">Extremely Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/11.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/12.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="lighttube">Light Tube Event</h3> </template>
    <template #1>
      <p id="19">
        A light tube prop with a bright blue light emitting will spawn high above player, randomly
        in any part of the forest. It will quickly fall down and shatter, you can attempt to catch
        the prop and keep it as extra light.
      </p></template
    >
    <template #2> <p id="20">Very Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/13.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="pinkwisps">Pink Wisps Event</h3> </template>
    <template #1>
      <p id="21">
        <a href="../Entities/entitieswiki.html#pinkwisp">Pink Wisp Entities</a>
        will spawn all over the world.
      </p></template
    >
    <template #2> <p id="22">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/14.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/15.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="fleshrain">Flesh Rain Event</h3> </template>
    <template #1>
      <p id="23">
        A loud shaking roar will be heard all over the world, then the flesh mesh balls will start
        dropping for 1-2 minutes all around but will consolidate around the player. This gives the
        player tons of free flesh.
      </p></template
    >
    <template #2> <p id="24">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/18.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0>
      <h3 class="CardTitle" id="mannequindisappearance">Mannequin Disappearance Event</h3>
    </template>
    <template #1>
      <p id="25">
        All mannequins in your base will disappear. However, they can all be found laying in the
        small patch of gravel near the Uniform Satellite Dish.
      </p></template
    >
    <template #2> <p id="26">Uncommon</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/19.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/20.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="mannequinmoving">Mannequin Moving Event</h3> </template>
    <template #1>
      <p id="27">
        One per day, mannequins will first take off their standing pole and begin moving around.
        They usually move towards the player and while they don't do anything initially, if they are
        lit on fire they will begin attacking, hurting, and knocking down the player.
      </p></template
    >
    <template #2> <p id="28">Uncommon</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/28.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/29.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="false">
    <template #0>
      <h3 class="CardTitle" id="mannequinreorganize">Mannequin Reorganize Event</h3>
    </template>
    <template #1>
      <p id="29">
        A posed mannequin will be blocking the main entrance hallway, another posed mannequin
        looking through Kel's room window , and 6 cups stacked on each other either on the table or
        on the floor.
      </p></template
    >
    <template #2> <p id="30">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/23.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/RandomEvents/27.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/RandomEvents/26.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/42.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="false">
    <template #0> <h3 class="CardTitle" id="bluelight">Blue Light Prank Event</h3> </template>
    <template #1>
      <p id="31">
        All power switches will be switched off just like Poweroff Event, however this time there
        will be extremely bright light blue tubes lighting certain parts of the base. The entity
        radar will detect these as entities, however they are extremely fragile so be very careful
        when handling them.
      </p></template
    >
    <template #2> <p id="32">Common</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/21.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/RandomEvents/24.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/RandomEvents/25.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/30.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="passwordattempt">Password Attempt Event</h3> </template>
    <template #1>
      <p id="33">
        Throughout the day, you may hear or encounter a mysterious invisible force attempting to
        guess the password to the keylocks.
      </p></template
    >
    <template #2> <p id="34">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/22.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="brokenvent">Broken Vent Event</h3> </template>
    <template #1>
      <p id="35">
        The vent either above the Signal room or Kel's room will break open and fall off.
      </p></template
    >
    <template #2> <p id="36">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/31.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/32.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="enakindness">Ena's Kindness Event</h3> </template>
    <template #1>
      <p id="37">Ena will send you some crossiants and a supportive note.</p>
    </template>
    <template #2> <p id="38">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/35.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/34.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="misplacedsushi">Misplaced Sushi Event</h3> </template>
    <template #1>
      <p id="39">A box of sushi and a note detailing its accidental delivery.</p>
    </template>
    <template #2> <p id="40">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/36.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/37.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0>
      <h3 class="CardTitle" id="radiotower">Radiotower Disappearance Event</h3>
    </template>
    <template #1>
      <p id="41">The Radiotower Structure will disappear completely for a day or two.</p>
    </template>
    <template #2> <p id="42">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/33.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="grungeoil">Grunge Oils Event</h3> </template>
    <template #1>
      <p id="43">
        Spills of oil will spawn in front of the main entrance doorway, Kel's room patio doorway,
        below Radiotower base, and the garage doorway.
      </p></template
    >
    <template #2> <p id="44">Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/38.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/39.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="security">Security Breach</h3> </template>
    <template #1>
      <p id="45">
        On the command terminal, you will notice some random user typing out commands, supposed
        trying to shut something down. Luckily, none of the commands work and the user eventually
        leaves.
      </p></template
    >
    <template #2> <p id="46">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/40.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="furfur">Furfur Locker Head</h3> </template>
    <template #1>
      <p id="47">
        When opening a locker anywhere in the Main Base, there is a chance a Furfur head can pop out
        and jumpscare.
      </p></template
    >
    <template #2> <p id="48">Rare</p> </template>
    <template #3>
      <ImageViewer src="/Images/Events/RandomEvents/41.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="teleportbase">Cursed Mirror Base Event</h3> </template>
    <template #1>
      <p id="49">
        While in Main Base, there is a very small chance that you'll be teleported outside the
        barrier and map into a another version of the Main Base, however very dark and foggy with no
        doors or props anywhere. As soon as you fall off the parking lot you get teleported back
        into the main map.
      </p></template
    >
    <template #2> <p id="50">Extremely Rare</p> </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer src="/Images/Events/RandomEvents/43.png" alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Events/RandomEvents/44.png"
          alt="VOTV Archive Image"
        /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="randomTitles" :has-media="true">
    <template #0> <h3 class="CardTitle" id="imposter">Imposter Event</h3> </template>
    <template #1>
      <p id="51">
        While in Main Base, there is a very small chance an imposter prop will spawn in the bedroom
        vent with the bedroom vent broken.
      </p></template
    >
    <template #2> <p id="52">Extremely Rare</p> </template>
    <template #3>
      <p>
        <ImageViewer src="/Images/Events/RandomEvents/45.png" alt="VOTV Archive Image" /></p
    ></template>
  </InfoCard>
</template>
