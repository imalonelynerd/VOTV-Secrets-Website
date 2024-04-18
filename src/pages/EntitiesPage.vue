<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import SoundListener from '@/components/widgets/SoundListener.vue'
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Entities')

const entitiesCategory = ['Entity', 'Behavior', 'Spawn Conditions', 'Description', 'Image']
</script>

<template>
  <h1>Entities</h1>
  <h2>Description:</h2>
  <p>
    Numerous entities exist in VOTV, surprisingly, a very small amount of these entities can be
    spawned manually, while most either spawn naturally, randomly, or have to be forced spawned.
    Here, there will be three categories: Normal, Anomaly, and Forbidden. Normal, being entities
    that you come across regularly or aren't very special at all. Anomaly being entities that are
    somewhat or pretty rare, are special, or very mysterious. Forbidden being extremely rare,
    sometimes innaccessible, or super special. Some of them have very distinct stories that play
    into the overall lore of VOTV.
  </p>
  <h2>Normal Entities</h2>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0>
      <h3 class="CardTitle" id="ab">Antibreather</h3>
    </template>
    <template #1>
      <p>Passive</p>
    </template>
    <template #2>
      <p id="1">
        Spawns near Romeo, in Antibreather Cave at night, then eventually despawns in the morning
        time.
      </p></template
    >
    <template #3
      ><p id="2">
        Antibreather (AB for short) is a quadrupedal entity that comes from a cave near the Romeo
        satellite. A Rozital-based entity, resembling a human body with stitches all around his body
        and metal legs (of which front pair look like a scythe blades). It comes every night
        (sometimes even on day) from its cave, roaming aimlessly around and illuminating it's path
        with a glowing white eyes.
      </p></template
    >
    <template #4>
      <ImageViewer src="/Images/Entities/1.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ariral">Ariral</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2>
      <p id="3">
        Can be triggered by either the
        <a href="../Events/storymodeeventswiki.html#stalker">Ariral Stalker Event</a>,
        <a href="../ConsoleCommands/consolecommandswiki.html#ariralpls">Command</a>, if the player
        steals an Ariral item, if the player touches an Ariral chest, if the player microwaves or
        woodchips an <a href="../Objects/objectswiki.html#argplush">Argemia Plush</a>, and
        <a href="../Events/storymodeeventswiki.html#ariralvent">Ariral Vent Break-in Event</a>.
      </p></template
    >
    <template #3
      ><p id="4">
        The Ariral in VOTV has two variants, one variant being a stalker where it moves when the
        player moves but stops when the player stops. The stalker variant will still attack the
        player but in a more subtle way. The other variant is aggressive where the Ariral will hunt
        down the player, pick up and throw items, and attack the player. The Ariral entity usually
        and only spawns the
        <a href="../Structures/structureswiki.html#ariraltreehouse">Ariral Treehouse Landmark</a>.
      </p>
      <SpoilerBlock>
        <p>
          The Ariral entity is representative of the Ariral race created by MrDrNose which is its
          own entire civilization.
        </p>
        <p>
          Three visit the the area that the player plays in, one short and two talls with the short
          presumably having escaped the shorts totalitarian division at some point.
        </p>
        <p>
          The two talls are the ones who mostly prank the player with slaps, item throws, and other
          events, while the short simply stays out of that business.
        </p>
        <p>
          But later the short eventually dies to one of the killer wisps after days 35-40, this is
          due to the cheap Indis suits that all three of them had on during that time.
        </p>
        <p>
          Some messages that are in the form of signals that the player can sometimes find are
          actually aimed towards the Arirals.
        </p>
        <p>
          The Arirals come and visit Earth for a specific mission, now as to what that mission is is
          currently unknown.
        </p>
        <p>The Arirals play a pretty large part to most of the events that appear in Storymode.</p>
        <p>
          More lore and info on the Arirals can be explored here:
          <a href="https://drive.google.com/drive/folders/1DQlaXJOSTuPQrVFDXgtvsl4THpBgAYL3"
            >Ariral Lore Drive</a
          >.
        </p>
      </SpoilerBlock>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/3.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="wendi">Furfur</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="5">
        Can be triggered by any toilet use at exactly 3:33 am, anywhere in the world, or anywhere in
        the
        <a href="../Worlds/anomalyworldswiki.html#untitled_83">untitled_83</a>.
      </p></template
    >
    <template #3>
      <p id="6">
        Furfur is bipedal entity with a deer skull serving as his head, appearing only when the
        player uses the toilet at exactly 3:33 am, randomly spawning in the backrooms, or when the
        player takes a picture of it in a random location in the map. When it comes in contact with
        the player, it glows red for 2 seconds, drops 2 or more bones, and then disappears shortly
        after. One way of increasing it's spawn frequency is finding it's skull either in the
        <a href="../Structures/structureswiki.html#wooded">Wooded Shack Landmark</a>, digging it
        from a <a href="../Structures/structureswiki.html#shroom">Shroom Circle</a>, or finding it
        in a random dig spot, and then from there heating or burning that skull.
      </p></template
    >
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/4.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/5.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="hangedman">Hanged Man</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="7">Located under a bridge near Oscar Satellite Dish and the Lake.</p>
    </template>
    <template #3
      ><p id="8">
        A shadow of a hanged man. Stationary, never moves. To ensure you seem him, you must enable
        shadow to 3 in render settings.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/37.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="fossil">Fossilhound</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="9">
        Fossilhound is an extremely aggressive dog-like creature, appearing at nights behind the
        fence. It will start out in a hole and eventually climb out. Charging at the player as soon
        as it sees them, it can knock you down multiple times even through the fence. It will
        continue to chase you until it has hit you. If the player attacks back, the Fossilhound will
        break apart into a bunch of bones and pieces.
      </p>
      <SpoilerBlock>
        <p>
          The Fossilhound actually originates from another yet older game that MrDrNose has made in
          the past, <a href="https://mrdrnose.itch.io/udag">UDAG</a>.
        </p>
      </SpoilerBlock>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/6.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="insomni">Insomnia Demon</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="10">Once triggered it usually spawns in the dark corners near the player.</p>
    </template>
    <template #3>
      <p id="11">
        A tall transparent figure with big white eyes that appears after players sleep goes lower
        than 10%. It will start chasing down the player if sleep goes lower than 0.5%, sending you
        into a random dream.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/7.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="wolfgang">Wolfgang</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="12">Can spawn randomly or be manually spawned by placing a pumpkin in the AB Cave.</p>
    </template>
    <template #3>
      <p id="13">
        Wolfgang is a giant centipede that isn't harmful. He's very fast and can open the bases
        doors, he can also be ridden. He is attracted to pumpkins so placing any in any part of the
        world will cause him to move towards it.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/9.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="rufus">Rufus</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="14">
        Spawned only by a
        <a href="../ConsoleCommands/consolecommandswiki.html#rufus">Console Command</a>.
      </p></template
    >
    <template #3>
      <p id="15">
        Rufus is a red 4 legged creature that has a long neck that is very flexible. It appears to
        have a face with two eyes and no other distinct features. Creepy music will play no matter
        where you are at in the world. When Rufus is near you a giant subtitle tells you to hide.
        Rufus will begin chasing you until it either catches you or you quickly enter in the
        <a href="../ConsoleCommands/consolecommandswiki.html#rf">Console Command</a>. Once it
        catches you, it used to trigger the Secret Rufus Ending, but instead now it simply
        annihilates you. Rufus can be killed used the Arir Gun and explosions of any size. Once it
        dies it can drop a <a href="../Objects/objectswiki.html#tp">Thiccfus Plush</a>. While dead
        it will just ragdoll.
      </p>
    </template>
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/10.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/11.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="thiccfus">Thiccfus</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="16">
        Spawned only by a
        <a href="../ConsoleCommands/consolecommandswiki.html#thiccfus">Console Command</a>.
      </p></template
    >
    <template #3>
      <p id="17">
        Thiccfus is a bipedal entity that is extremely fat, it has two large legs and two small
        arms. It's head barely sticks out of it's body. It appears to have a face with two eyes and
        no other distinct features. Creepy music will play no matter where you are at in the world.
        When Thiccfus encounters an obstacle like a prop or item, it will explode. When Thiccfus is
        near you a giant subtitle tells you to hide. Thiccfus will begin chasing you until it either
        catches you or you quickly enter in the
        <a href="../ConsoleCommands/consolecommandswiki.html#rf">Console Command</a>. Once it
        catches you, it will annihilate you. Thiccfus can be killed used the Arir Gun and explosions
        of any size. While dead it will just ragdoll.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/12.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="fridge">Fridge</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p id="18">Outside the barrier.</p> </template>
    <template #3>
      <p id="19">
        Fridge is a black shadow-like figure. If a player illegally gets out or noclips out of the
        barrier Fridge will chase down the player until it crashes the player's game. It is a form
        of anticheat to stop the player from exploring further out of the bounds.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/13.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="walkingtree">Walking Tree</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="20">
        A Walking Tree entity is a tree that moves. It moves when the player is not looking.
        However, looking through a camera does not count and you can see the tree move. Once it
        stops moving the entity transforms into a fully meshed out tree prop which may appear as a
        real tree when its not.
      </p></template
    >
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/14.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/15.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="liveerie">Live Erie</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2
      ><p>
        Grab
        <a href="../Objects/objectswiki.html#11">Erie Plush Object</a>
        and feed it.
      </p></template
    >
    <template #3
      ><p id="21">
        A Live Erie is an animated version of the
        <a href="../Objects/objectswiki.html#11">Erie Plush Object</a>, instead of crafting an Erie
        <a href="../Objects/objectswiki.html#omegakerfur">Kerfur Omega</a>
        this Erie will move on its own and dance a little, it can pick up things and throw them. It
        also can be fed more to increase Erie Rep but if picked up and dropped, its Erie Rep will go
        down. This entity makes little noises when moving around. This entity while not hostile to
        the player or any other entities, will be quite destructive since it can make a mess out of
        your base. So be careful where you leave it. This is yet another reference/depiction of
        <a href="https://eternitydev-games.fandom.com/wiki/Erie">Erie</a> character from AEWVS.
      </p></template
    >
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/104.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/105.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="cockroach">Cockroach</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p id="22">Triggered by any food that is left open.</p> </template>
    <template #3
      ><p id="23">
        A small bug that searches for any food out in the open, it will eat it and grow, overtime
        the food will be eaten hence making the cockroach a lot larger. It can be killed by either
        stepping over it or using the swatter prop.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/17.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="wasps">Wasps</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2> <p id="24">Dig up a waspnest, shake it, or damage it in any way.</p> </template>
    <template #3>
      <p id="25">
        A small bug that cannot be damaged or interacted, it comes in swarms and will continously
        attack the player. The best way to mitigate this is by wearing a hazmat suit. To end it you
        must destroy the wasp nest completely.
      </p></template
    >
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/18.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/19.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="drone">Drone</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p id="26">Either at Main Base or Drone starting point.</p> </template>
    <template #3
      ><p id="27">
        A flying drone that delivers items and objects from Main Base to the researchers in the
        game.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/23.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="fireflies">Fireflies</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn, at night.</p> </template>
    <template #3>
      <p id="28">A swarm of bright yellow bugs that can illuminate the darkness for you.</p>
    </template>
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/24.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/25.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0>
      <h3 class="CardTitle" id="fish">Fish</h3>
    </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p id="29">Use a fishing rod.</p> </template>
    <template #3>
      <p id="30">
        It can come in many different variations, sizes, shapes, and colors. Just flops around, is
        unkillable, and can be obtained using a fishing rod.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/86.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="kavotia">Kavotia</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="31">
        Can be spawned manually through sandbox props or can spawn naturally around The Hole
        structure during the Rozital Hole Event.
      </p>
    </template>
    <template #3>
      <p id="32">
        A Rozital-based entity that is hostile to the player, it has 3 legs, and a turret for a
        head. It can sit and move around. If it spots the player, it will begin firing purple beams
        which deal damage to the player eventually killing the player.
      </p></template
    >
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/98.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/99.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <hr />

  <h2>Anomaly Entities</h2>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="firewisp">Fire Wisp</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2>
      <p id="33">
        Random spawn, spawns once in
        <a href="../Worlds/testlevelswiki.html#133">untitled_133</a>.
      </p>
    </template>
    <template #3>
      <p id="34">
        A floating blue star-like entity that roams around the world and doesn't interact with the
        player. However, if the player were to step in its way or touch the entity the player would
        start burning up quickly causing the player's demise.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/26.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/27.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="redwisp">Red Wisp</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="35">
        A floating red star-like entity that quickly flashes between locations, it moves incredibily
        fast and is almost impossible to escape. It is very aggressive around the player, it will
        even follow and chase down the player from a map away. If this entity comes across any
        obstacles, objects, or entities it will explode, this is similar to Thiccfus' ability to
        explode.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/28.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/29.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="greenwisp">Green Wisp</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p id="36">Can spawn randomly at night.</p> </template>
    <template #3>
      <p id="37">
        The Green Wisp is another wisp variant but green. When it travels around, it will leave a
        little trail of green particles behind. The entity can chase the player but most of the
        times it usually just wanders around randomly. If the player were to interact with this
        entity, the player will be teleported randomly to any location on the map, ragdolled.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/92.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="pinkwisp">Pink Wisp</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="38">
        Spawns anywhere during
        <a href="../Events/randomeventswiki.html#pinkwisps">Pink Wisps Event</a>.
      </p>
    </template>
    <template #3>
      <p id="39">
        A floating pink orb that's wandering around. Disappears as soon as player come closer to it.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/2.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="whitewisp">White Wisp</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="40">
        White wisp is a another wisp variant except completely white. The White Wisp will chase
        after or follow the player, it moves around randomly. If the player encounters or interacts
        with this entity, it will warp and distort the players screen so much that eventually it
        causes the game to crash. There is also a scream that can be heard during this encounter.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/91.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="blackwisp">Black Wisp</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="41">
        Black wisp is a another wisp variant except completely black. It has a warping effect around
        it in the shape of a sphere. The Black Wisp will not chase after or follow the player, it
        moves around randomly. If the player encounters or interacts with this entity, it will make
        a warp sound and completely blank out the player's screen, rendering the game broken. To fix
        this you must alt+f4 to exit.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/90.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ogwisp">Orange Wisp</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="42">
        Orange wisp is a another wisp variant except completely orange and a little smaller. This
        wisp can chase and follow the player sometimes, when touched the player will teleport to a
        random location and the player's game will be set to mirrored. This can be fixed in the
        Video Settings.
      </p>
    </template>
    <template #4
      ><WidgetBundle>
        <ImageViewer src="/Images/Entities/95.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/97.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="purplewisp">Purple Wisp</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="43">
        Purple Wisp is a another wisp variant except completely purple and less intact. It will
        leave a little trail of its essence as it moves. When the entity touches the player, it will
        cause time to start moving backward and it will do this forever until the player has
        restarted their game.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/96.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/100.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/101.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="kwisp">Killer Wisp</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="44">
        Random spawn, after
        <a href="../Events/storymodeeventswiki.html#obelisk">Obelisk Event</a>.
      </p>
    </template>
    <template #3>
      <p id="45">
        A floating bright yellow star-like entity that strolls randomly in the world. Once it spots
        the player it will chase down the player, if the player is captured by this entity, the
        entity will rip apart the player causing the player's demise. This entity usually spawns at
        night and will disappear if you aren't looking at it while it is day. The Killer Wisp can
        also be found ripping apart a the undead deer corpse and usually that is it's first target.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/35.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="shadow">Shadow Man</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Random spawn, entity name is NewBlueprint5_C.</p> </template>
    <template #3>
      <p id="46">
        A black shadow-like figure that moves incredibly fast around the player, in the newer
        versions instead of moving the Shadow Man teleports in quick intervals around the player,
        while in older versions he had to run around the player. To spot him a little easier, you
        can set your fps to a very low number and have an EMF reader out since he emits an EMF
        signal, you'll be able to catch glimpses of him as you walk around.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/30.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="piramid">Piramid</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="47">
        Triggered by the
        <a href="../Events/storymodeeventswiki.html#piramid">Piramid Event</a>.
      </p>
    </template>
    <template #3>
      <p id="48">
        An updated version of the Tripod entity except with more functionality and an updated look.
        The Piramid entity, another Rozital-based entity, walks around and hunts any Killer Wisp
        that may be wandering around, once found the Piramid will suck up the Killer Wisp and once
        all Killer Wisps are hunted down the Piramid entity will simply leave and walk out. The
        Piramid is sent to "deal" with the Killer Wisp entities that was outlined as a warning
        during the
        <a href="../Events/storymodeeventswiki.html#obelisk">Obelisk Event</a>. The Piramid doesn't
        actually care about the player but instead serves protection for the
        <a href="#ariral">Arirals</a>.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/20.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/21.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/22.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="jellyfish">Jellyfish</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="49">
        Spawns during the
        <a href="../Events/randomeventswiki.html#jellyfish">Jellyfish Event</a>.
      </p></template
    >
    <template #3>
      <p id="50">
        The entity is seen as a purple flying jellyfish. Which once spawned flies around in a random
        direction until they despawn after a long while.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/16.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="deer">Deer</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2> <p>Random spawn.</p> </template>
    <template #3>
      <p id="51">
        An animal that spawns very often, the Deer can be seen strolling around the forest, however
        when you look at it or spot it the Deer will slowly fade out of existence. The Deer moves at
        a walking pace. If you were to teleport near it you'd be attacked and pushed back.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/31.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/32.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="undeaddeer">Undead Deer</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="52">
        Spawns during the
        <a href="../Events/triggerableeventswiki.html#undeaddeer">Undead Deer Event</a>.
      </p>
    </template>
    <template #3>
      <p id="53">
        After obtaining the
        <a href="../Signals/specialsigswiki.html#deer">Deer Signal</a>
        the regular <a href="#deer">Deer Entity</a> will stop spawning and instead be replaced with
        an undead version of itself, along with it's edible corpse that the player can find and eat.
        It moves at a quick pace. The Undead Deer will always be chasing down the player and
        attempting to attack the player if the player isn't looking in it's direction. To fully rid
        of this entity you must eat the dead deer corpse fully and the entity will no longer spawn.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/33.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/34.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="eg">EG</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="54">
        Random spawn, spawns once in
        <a href="../Worlds/anomalyworldswiki.html#87">untitled_87</a>.
      </p>
    </template>
    <template #3>
      <p id="55">
        A dark gray orb about the size of the ATV which emits a deep red glow underneath. Rises very
        quickly into the sky when encountered.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/38.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/39.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="soltomia">Soltomia</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="56">
        Spawns either at the bottom of the
        <a href="../Structures/structureswiki.html#thehole">The Hole</a>
        or can be seen cleaning the player's ATV during the
        <a href="../Events/storymodeeventswiki.html#sce">Soltomia Cleaning Event</a>.
      </p>
    </template>
    <template #3>
      <p id="57">
        Soltomia is a Rozital-based entity with 6 flexible, mallaeble, and stretchy metal arms. It
        moves in a graceful yet wiggly type of way and quite fast, able to outrun the player. It
        either runs away or hides away from the player.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/46.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/94.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="shpuende">Shit Duende</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="58">
        Spawns during the
        <a href="../Events/triggerableeventswiki.html#shpuende">Shit Duende Event</a>.
      </p>
    </template>
    <template #3>
      <p id="59">
        A Greys-based entity but in a sitting animation and is stationary. The entity slowly fades
        away when the player encounters it. The head moves around to follow the player.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/47.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/48.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="blackfuzzy">Black Fogling</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="60">
        Will spawn once
        <a href="../Events/randomeventswiki.html#blackfog">Black Fog Event</a>.
      </p>
    </template>
    <template #3>
      <p id="61">
        Originally an entity used to trigger the
        <a href="../Events/randomeventswiki.html#blackfog">Black Fog Event</a>, now is a black wisp
        like entity with 2 bright eyes that can be seen even through the darkest areas of the game.
        It follows the player at a distance and will circle around the player from time to time.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/84.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/85.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>

  <hr />

  <h2>Forbidden Entities</h2>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="tentacle">Tentacle Balls</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2>
      <p id="62">
        Will spawn once
        <a href="../Events/storymodeeventswiki.html#rpe">Rozital Patrol Event</a>.
      </p>
    </template>
    <template #3>
      <p id="63">
        A tall 6 legged entity with a ball made up of a glassy material and three main eyes,
        originating from the Rozitals. Its rotating components made up of the black shiny balls. Its
        eyes light up a purple glow similar to the rozitals. It moves at a running pace, with its
        steps generating debris and dust particles. When the entity encounters the player for the
        first time, it will pin the player down and almost study the player for some time before
        eventually letting go and moving on. If the player attacks or disturbs the entity on its
        underside, the entity will fire back with a powerful blast that will insta-kill the player.
      </p>
      <SpoilerBlock>
        <p>
          The Tentacle Balls are to patrol around the entire map and ensure of no more trouble from
          the <a href="#kwisp">Killer Wisps</a>.
        </p>
      </SpoilerBlock></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/93.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/87.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="lambert">Evil Lambert</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="64">
        Innaccessible, only spawns in
        <a href="../Worlds/anomalyworldswiki.html#untitled_87">untitled_87</a>.
      </p>
    </template>
    <template #3>
      <p id="65">
        An animated version of the
        <a href="../Objects/objectswiki.html#lambert">Lambert Plush</a>. It is similar to the
        <a href="#kwisp">Killer Wisp Entity</a> as it will pull apart the player and kill the
        player, however it glows red and has a red wispy material instead.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/88.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/89.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="movingman">Moving Mannequin</h3> </template>
    <template #1> <p>Neutral</p> </template>
    <template #2>
      <p id="66">
        After spawning or buying a mannequin you must wait enough time for its pole to be removed.
      </p>
    </template>
    <template #3>
      <p id="67">
        The Moving Mannequin is similar to the Dream Mannquin however it operates a little
        different, first it starts out as a inanimate mannequin prop that simply moves around the
        player from time to time while the player isn't looking at it. However, if you were to light
        it on fire it will begin moving regardless whether or not the player is looking at and begin
        attacking the player until the player is dead.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/41.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/42.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="grey">Cutout Greys</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="68">
        Innaccessible, spawns rapidly in
        <a href="../Worlds/anomalyworldswiki.html#51">Area 51</a>.
      </p>
    </template>
    <template #3>
      <p id="69">
        The Cutout Greys is exactly the same as the immovable one that you can spawn using the
        <a href="../ConsoleCommands/consolecommandswiki.html#alien">Console Command</a>, but
        animated. They are hostile to the base or objective in that world. They deal no damage or
        are hostile to the player, instead hostile to the base. They can spawn with different
        varieties of themselves including stretched out, long, short, tall, and etc. These can be
        killed using force, guns, and anything that can break wood.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/61.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="tripod">Tripod</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="70">
        Innaccessible, only spawns in
        <a href="../Worlds/anomalyworldswiki.html#untitled_87">untitled_87</a>.
      </p></template
    >
    <template #3>
      <p id="71">
        The Tripod appears to be passive, non-hostile entity that walks around the map and shakes
        the player's screen. It has a triangular pyramid for a head and three large animated legs.
        On its head is a giant purple light beam that shines light that extends for half of the map.
        The Tripod is extremely tall, wide, and very fast as it is able to even outpace the flying
        speed of a player's noclip.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/62.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/63.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="tan">Tanneul</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p>Innaccessible.</p> </template>
    <template #3>
      <p id="72">
        A type of a tree spirit, is a tall orange and brown figure that can be seen only using a
        digital or security camera. It can be found wandering around the world randomly. While the
        entity still exists within the game still wandering around in your world, it cannot be
        interacted with or by the player as it causes the entity to completely disappear. You also
        cannot take any pictures of the entity as even looking in its direction will also cause it
        to disappear. The only way to see this entity is through noclipping in storymode.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/8.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="spiderarg">Spider Argemia</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="73">
        Spawns in multiple levels and places:
        <a href="../Worlds/anomalyworldswiki.html#untitled_61">untitled_61</a>,
        <a href="../Worlds/otherworldswiki.html#tutorial3">tutorial3</a>
        (4 locations)
      </p>
    </template>
    <template #3>
      <p id="74">
        The Spider Argemia is an Argemia doll that has an elongated body, neck, and tail. It also
        has 8 limbs. The Spider Argemia is only hostile to the player once, after it lunges, chases
        and presumably attacks the player once, it will leave the player alone. However, some other
        variations will hurt the player and continue hurting the player until a gameover pops up.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/64.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="beanie">Bean Goombas</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="75">
        Innaccessible, only spawns twice in
        <a href="../Worlds/anomalyworldswiki.html#untitled_42">untitled_42</a>.
      </p>
    </template>
    <template #3>
      <p id="76">
        A 2d bean-shaped entity that moves around and if the player touches it forces the player to
        be teleported back to start. To kill it you need to jump on to it.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/65.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="ballsack">Dr Ballsack</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="77">
        Innaccessible, only spawns in
        <a href="../Worlds/testlevelswiki.html#81">untitled_81</a>.
      </p>
    </template>
    <template #3>
      <p id="78">
        An aggressive ball mesh creature that chases around the player to munch on. It moves at a
        walking pace and spits out dirt balls of all shapes and sizes every second.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/66.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/67.png" alt="VOTV Archive Image" />
      </WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="cursedarg1">Stalker Plush</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="79">
        Innaccessible, only spawns in a horde in
        <a href="../Worlds/testlevelswiki.html#18">untitled_18</a>.
      </p>
    </template>
    <template #3>
      <p id="80">
        The Stalker Plush is a Argemia plushie that follows you behind when you are not looking at
        it, it is the only entity that can be picked up and be put into the inventory. When you put
        a Cursed Argemia Plushie into your inventory and drop it, the plushie switches from sitting
        to standing position, with a gun in its hand it will start jumping towards the player,
        lunging towards the player, and firing burgers every 1.5 seconds.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/68.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/69.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="cursedarg2">Schizophreniac Plush</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="81">
        Innaccessible, only spawns twice in
        <a href="../Worlds/anomalyworldswiki.html#untitled_104">untitled_104</a>.
      </p>
    </template>
    <template #3>
      <p id="82">
        Another Argemia plushie that appears in standing form and that is cursed, except it
        teleports around the player in quick intervals, allowing you to see it for one millisecond.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/70.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="dmann">Dream Mannequin</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p id="83">Spawns rapidly in the Mannequin Dream.</p> </template>
    <template #3>
      <p id="84">
        The Dream Mannequin is exactly the same as the normal immovable ones that you find at the
        main base in Homeworld except animated. The entity will chase down the player until it
        touches or hits the player. Once it does it results in an incomplete dream for the player.
      </p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/40.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="whitem">White Mist</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="85">
        Spawns once in the
        <a href="../Dreams/dreamswiki.html#rundream">Corridor Dream</a>.
      </p>
    </template>
    <template #3>
      <p id="86">
        A white mist that chases down the player until it touches or hits the player resulting in an
        incomplete dream and sending the player back.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/43.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/44.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="anomalwat">Anomalous Water</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="87">
        Spawns once in the
        <a href="../Dreams/dreamswiki.html#drowndream">Fill Dream</a>,
        <a href="../Dreams/dreamswiki.html#climbdream">Climb Dream</a>, or
        <a href="../Dreams/dreamswiki.html#jumpdream">Jump Dream</a>.
      </p></template
    >
    <template #3>
      <p id="88">
        The Anomalous Water is an entity that fills the dream room and eventually when fully filling
        up above the players head it will result in an incomplete dream and sending the player back.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/45.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="dreamufo">Dream UFO</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="89">
        Will spawn overhead in the sky during the
        <a href="../Dreams/dreamswiki.html#ufodream">UFO Dream</a>.
      </p>
    </template>
    <template #3>
      <p id="90">A giant gray UFO that hovers over the player until the dream is ended.</p>
    </template>
    <template #4> <ImageViewer src="/Images/Entities/59.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="dreamwendi">Dream Furfur</h3> </template>
    <template #1> <p>Passive</p></template>
    <template #2>
      <p id="91">
        4 of them will spawn side by side during the
        <a href="../Dreams/dreamswiki.html#wendidream">Furfur Dream</a>.
      </p>
    </template>
    <template #3>
      <p id="92">
        Giant version of the <a href="#wendi">Furfur Entity</a> but doesn't disappear and only
        serves to scare the player.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/60.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="duende">Duende</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p id="93">Type alien in the Command Console in VOTV Gray Edition.</p> </template>
    <template #3>
      <p id="94">
        The earliest version of the Grey, representative of the Greys race within the MrDrNose
        universe. It is a gray humanoid that chases and repeatedly attacks the player, it can break
        down doors and is quite strong. It usually spawns in circular swarms. Once killed it will
        ragdoll like Rufus and Thiccfus.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/49.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/50.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/51.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/52.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/53.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="grayufo">Gray UFO</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="95">
        Replaces the Drone entity and can spawn whenever the player enters the ATV in VOTV Gray
        Edition.
      </p>
    </template>
    <template #3>
      <p id="96">
        A giant gray UFO that hovers and emits a bright green light below it. It emits a deep bassy
        sound.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/54.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/55.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/56.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="greenie">Green Alien</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="97">Replaces the <a href="#ariral">Ariral Entity</a> VOTV Gray Edition.</p>
    </template>
    <template #3>
      <p id="98">
        A green humanoid with a UFO diaper and emits warped alien baby noises. It runs significantly
        faster than an Ariral and can catch up to the player's running speed. It has relatively the
        same behaviors as the original Ariral entity.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/57.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/58.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="skeleo">SKELEO</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="99">
        Only spawns once at the end of the
        <a href="../Events/triggerableeventswiki.html#halloween">Halloween Event</a>
        upon completion.
      </p>
    </template>
    <template #3>
      <p id="100">
        A giant skull shaped entity and a halloween special entity that onces spawned will force
        open a UI in front of the player that is just a meme. The music comes from
        <a
          href="https://www.youtube.com/watch?v=EtzBncpPhc8&list=PLTLLc00CRAT7IlMAgs1EX-Tyxo34psiCA&index=3"
          >The Skull Gang - Kirby Mass Effect</a
        >.
      </p>
    </template>
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/72.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/73.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="false">
    <template #0> <h3 class="CardTitle" id="bs">BS</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="101">
        Random spawn, near
        <a href="../Structures/structureswiki.html#stonehenge">Stonehenge Landmark</a>, at night.
      </p></template
    >
    <template #3>
      <p id="102">
        The BS entity is a fast rotating black spherical entity that emits a deep bassy sound. Every
        2 seconds a red symbol of whatever shape will glow up on a random side of the entity and it
        will do this repeatedly.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/74.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/75.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Entities/76.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="headboi">Cursed Ariral Head</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2> <p id="103">Innaccessible, entity name is NewBlueprint7_C.</p> </template>
    <template #3>
      <p id="104">
        Has the head and shape of an Ariral head, however its eyes appear to be gouged out, its
        mouth carved out, its jaw elongated and stretched out, and the head is relatively large
        compared to the normal sized Ariral head. This entity moves at a swift pace, appears to fly
        a little however requires the ground to pathfind. Once spawned the entity will hunt down the
        player wherever it is at. Once located the player, the entity will latch on to the player
        almost gobbling it up and cause the game to crash.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/77.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/78.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="spider">Cursed Spider</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="105">
        Innaccessible, only appears in
        <a href="../Worlds/testlevelswiki.html#112">untitled_112</a>
        and
        <a href="../Worlds/otherworldswiki.html#tutorial3">tutorial3</a>.
      </p>
    </template>
    <template #3>
      <p id="106">
        A black 8 limbed entity that teleports around the player in quick intervals, like Shadow
        man.
      </p></template
    >
    <template #4> <ImageViewer src="/Images/Entities/79.png" alt="VOTV Archive Image" /> </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="grayboar">Gray Boar</h3> </template>
    <template #1> <p>Aggressive</p> </template>
    <template #2>
      <p id="107">
        Innaccessible, only appears in
        <a href="../Worlds/testlevelswiki.html#142">untitled_142</a>.
      </p>
    </template>
    <template #3>
      <p id="108">
        An above-ground hovering cyborg boar with stitches, a badly deformed body and face, and some
        metallic components attached to it's body. It is another Greys-based entity, however it is
        one of their many creations. It can outpace the speed of the player's sprint. It can hit
        player very hard even while the player is no-clipping and it usually takes 2 hits from the
        entity before it can kill you. When it takes damage or dies it drops a lot of blood onto the
        ground. It also makes an ATV engine noise as it's chasing the player. The entity also emits
        a faint yellow light at the bottom.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/80.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/81.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="poolrooms">Poolrooms Entity</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="109">
        Spawns only in the basic props interactivity tutorial in
        <a href="../Worlds/otherworldswiki.html#tutorial3">tutorial3</a>.
      </p>
    </template>
    <template #3>
      <p id="110">
        An invisible entity that moves things around, makes footsteps that can be heard, opens
        doors, and can break down wooden boxes. It does this at random and only does it if the
        player is out of it's view like on a ledge or somewhere else.
      </p></template
    >
    <template #4>
      <WidgetBundle>
        <ImageViewer src="/Images/Entities/82.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Entities/83.png" alt="VOTV Archive Image" /> </WidgetBundle
    ></template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="mountain">Mountain Guys</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2>
      <p id="111">
        Very rare spawn, usually spawns on the mountain range in OOB (Out of Bounds) area.
      </p></template
    >
    <template #3>
      <p id="112">Three giant figures that can be looked at from a distance.</p>
    </template>
    <template #4>
      <ImageViewer src="/Images/Entities/102.png" alt="VOTV Archive Image" />
    </template>
  </InfoCard>
  <InfoCard :categories="entitiesCategory" :has-media="true">
    <template #0> <h3 class="CardTitle" id="chimey">Chimey</h3> </template>
    <template #1> <p>Passive</p> </template>
    <template #2> <p id="113">Very rare spawn, only during thunderous rain.</p> </template>
    <template #3>
      <p id="114">
        A chime sound similar to the one heard from the
        <a href="https://www.youtube.com/playlist?list=PL6ywVNnt0-OpbUDztGZd7n6QjtADOTXY-"
          >HL2 Interloper ARG</a
        >
        will be played (this is not a reference it is only an inspiration), it will spawn within a
        radius around the player. It appears for a few moments before quickly disappearing.
        Apparently this entity has a model/visual however it has not been confirmed yet as it is
        extremely difficult getting a good look at this thing considering the conditions of its
        spawn.
      </p>
    </template>
    <template #4>
      <SoundListener> <source src="/Images/Entities/103.mp3" /> </SoundListener
    ></template>
  </InfoCard>
</template>
