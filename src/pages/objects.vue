<script setup>import Spoiler from '@/components/Spoiler.vue'
import ImageViewer from '@/components/ImageViewer.vue'

/* TODO Cleanup steps :
* - remove useless divs
* - remove custom styling
* - replace every "Info" blocks with Spoilers (+ reformat spoiler content)
* - replace every "Sound" blocks with SoundListener
* - replace every image with "ImageViewer"
* - redo links
* - edit image paths
*/

</script>

<template>
  <h1>Objects</h1>
  <h2>Description:</h2>
  <p>Like entities, objects exist in the game, however these objects do not move, can be interacted, or are animated in
    some way. Instead they serve different purposes.</p>
  <table>
    <tr>
      <th>Object</th>
      <th>Spawn Conditions</th>
      <th>Description</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="shipengine">Ship Engine</td>
      <td id="1">Near Uniform Satellite Dish (X: 637, Y: 44)</td>
      <td id="2"> A orange capsule with a gear shaped housing. Once you trigger the
        <router-link to="/events/#rozship">Rozital Ship Event</router-link>
        , the purple laser will charge up the machine and once the player gets too close it, it will unlock some of its
        gears, spin, fly off the rocks, and then proceed to explode in a bright flash.
        <Spoiler>
          <p>The Ship Engine object is a Rozital object, it appears as though it has been lost, misplaced, or forgotten.
            The object serves as an important landmark for the
            <router-link to="/signals/#lifecrystal">Lifecrystal Signal</router-link>
            as the Rozital that we can observe is looking for the Ship Engine object. Once Rozital finds the object it
            eventually beams it and when the player encounters it, the object ultimately disappears or is destroyed.
          </p>
          <p>This is most likely the Rozitals ensuring no lost technology is left behind especially on one like
            Earth.</p></Spoiler>
      </td>
      <td>
        <ImageViewer src="/Images/Objects/1.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/2.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/3.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/4.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="scp432">SCP-432</td>
      <td id="3">Near Victor, corner of the map (X: 613, Y: 623)</td>
      <td id="4">A green metal cabinet that's locked with 9 square shaped keys. Opening it reveals a path to a
        two-storied room that's full of the same cabinets. Its supposed to represent SCP-432 from the SCP Foundation.
        It's currently impossible to enter this room by any normal means, even after opening it. Although the
        teleportation functionality is implemented it requires no-clipping as there is an invisible barrier preventing
        the player from accessing the room inside. This object is actually representative of the <a
          href="https://scp-wiki.wikidot.com/scp-432">SCP-432</a> from the SCP Foundation Universe, albeit with a couple
        modifications but still relatively the same concept.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/5.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/6.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="basalt">Basalt Pillars</td>
      <td id="5">(X: 465, Y: -85)</td>
      <td id="6">A black basalt pillar that grows out of dirt after you dig it up. They will spread really quick towards
        the player location if not destroyed.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/7.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="blackrock">Invisible Black Rock</td>
      <td id="7">Near Tango (X: 436; Y: -469)</td>
      <td id="8">A black rock that can only be seen using a digital camera or security camera. Doesn't do anything but
        triggering EMF.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/9.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="tombstone">Tombstone</td>
      <td id="9">Near Tango, closer to the river and fence</td>
      <td id="10">A tombstone with a splat of blood on it. It also triggers and EMF.</td>
      <td>
        <ImageViewer src="/Images/Objects/10.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="crosses">Crosses</td>
      <td id="11">Random</td>
      <td id="12"><a href="../Entities/entitieswiki.html#wendi">Furfur</a>, a bunch of crosses that appear out of
        nowhere will spawn near the base. A pair of bones can be found nearby that trigger an EMF.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/11.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="max">Maxwell</td>
      <td id="13">Requires <a>Console Command</a></td>
      <td id="14"> A cat like object that can be eaten by roaches. It plays music that can be heard from a relatively
        far radius. It's music has changed several times over the course of updates. In recent versions the use command,
        could be used to toggle his music or not, however in older versions it caused him to "die", after a short delay
        his model gets changed to a skeletal version of himself after which the <a
          href="https://www.youtube.com/watch?v=hkiNGPSLlrQ">Intro Guitar Riff from Bad To The Bone</a> soon after he
        explodes spontaneously.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/12.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/13.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/14.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="argem">Argemwell</td>
      <td id="15">Requires <a>Console Command</a></td>
      <td id="16">Another cat like object, similar in function to Maxwell however it plays a completely different music
        and has a different texture. While it's model is the same as Maxwell's, the use command is used to toggle
        Argem's music on or off but it used to instead causes it to explode with a ton of shrimp that despawn over 5
        seconds. The music that is played from this is actually called <a
          href="https://www.youtube.com/watch?v=dxDpdfzwuD4">Eeek! Penis</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/15.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/16.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/17.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="broomba">Broomba</td>
      <td id="17">Requires <a>Maxwell</a> and a Roomba item, place both on crafting table and craft</td>
      <td id="18">A Roomba but overlayed with the Maxwell texture and model. It also plays the Maxwell noises instead of
        the normal Roomba noises.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/12.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/18.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="physicsgun">Physics Gun</td>
      <td id="19">Requires a Gravity Gun placed inside a microwave for one minute.</td>
      <td id="20">A blue version of the gravity gun or overcharged version. It is one of the three variants of the
        physics gun which is the soft variant. Meaning it isn't very powerful. The object can be used to pick up, carry,
        and manipulate items. The Physics Gun does have a time limit on it's usage so you can charge up more energy for
        a longer duration usage with the microwave.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/19.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/20.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="abfriend">AB friend</td>
      <td>Innaccessible.</td>
      <td id="21">A small purple crystal with the ERROR overlay on it. It is able to move and jump around, there isn't
        anything that you can interact with, with this object. It makes noises similar to that of Rozitals. Extremely
        rare object, its spawning location has changed several times over the course of past updates. Its last
        spawnpoint was at Antibreather Cave at exactly 3:33 am. As of this current version the object is located in a
        hovering state below the AB cave.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/21.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="abplush">Antibreather Plush</td>
      <td id="22">A.B. Cave at 3:33 am</td>
      <td id="23">A plushie that represents a baby version of the <a>Antibreather Entity</a>. Can only be found at the
        Antibreather Cave at exactly 3:33 am.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/23.png" alt="VOTV Archive Image" height="234" />
      </td>
    </tr>
    <tr>
      <td id="unnamedrock">Unnamed Rock</td>
      <td id="24"><a>Stonehenge</a></td>
      <td id="25">A dark rock that emits a level 4 EMF signal when near, it is unnamed and doesn't appear to do
        anything. To obtain you must perform the <a href="../Events/triggerableeventswiki.html#hellopen">Hell Opening
          Event</a> and while the wormhole is going on, make sure to stay as far away as possible and wait 2 minutes
        until the wormhole disappears and the rock should appear.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/24.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/25.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="argplush">Argemia Plush</td>
      <td id="26">Anywhere, use <a>Map</a> for reference</td>
      <td id="27">A plushie that depicts Argemia, the leader of the Arirals' talls society. It has 3 variations, most
        can be found across the map. It can be fed shrimp to trigger an <a>Achievement</a>. Once fed with shrimp, the
        Argemia Plush will increase in size and once 26 shrimp has been fed the Argemia Plush will shrink back to it's
        original size and pop out an egg.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/27.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/28.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/29.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="nuclear">Nuclear Plush</td>
      <td id="28">Anywhere, use <a>Map</a> for reference</td>
      <td id="29">A plushie that depicts Argemia except eradiated, the leader of the Arirals' talls society. It has 3
        variations, all can be found across the map. It can be fed shrimp to trigger an <a>Achievement</a>. It will eat
        up both the shrimp and the shrimp package.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/30.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/31.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="secretargs">Secret Argemia Plushes</td>
      <td id="30"> Anywhere
        <Spoiler><p> To obtain the cyan one, you must put down 12 shrimp at the bottom of the base pool and use an
          explosive while under water.</p>
          <p>To obtain the magenta one, you must obtain the <a href="../Signals/specialsigswiki.html#lifecrystal">Lifecrystal
            Signal</a>. However you must not save it to your computer, from there go check the rocks near the <a
            href="#shipengine">Ship Engine Object</a>.</p>
          <p>To obtain the yellow one, you must place one shrimp at each fence corner and one shrimp in the center of
            the basement on top of the sewer. At the bottom of the basement, without looking in the direction of the
            center of the basement, wait till 00:00-1:00 am. This will be the time window for you to look and grab the
            yellow one.</p>
          <p>To obtain the gold one, you must find a golden ingot by digging and stare at it for an hour in real
            time.</p>
          <p>To obtain the black one, you are required to obtain all red, green, blue, cyan, yellow, and magenta <a>Argemia
            Plushies</a>. Then you will need to find all 7 skulls to trigger the <a
            href="../Events/triggerableeventswiki.html#hellopen">Hell Opening Event</a>. From there you will want to put
            all 6 plushies into your inventory. Stay far enough away where you can hold out against the pull of the
            wormhole but close enough that you can drop the plushies for them to be sucked in. You will trigger the <a>Hell
              Opening Event</a>. After a few seconds of the wormhole appearing, you will want to drop each of the
            plushies one by one until the wormhole eventually subsides and the black one is achieved.</p>
          <p>To obtain the white one, you are also required to obtain all 6 of the RGBCYM <a href="#argplush">Argemia
            Plushies</a>. From there you must use an industrial 3d printer to 3D print a flat hexagon surface or object
            of 5m on each side and 10m across each point. Or you can also use a physics gun and a plastic bottle to
            scale the bottle and place it solidly. The scale you’d want to use for this is between 136-150. From there
            place each of the plushies in the corner of the hexagon. If you do it correctly you will hear a loud wind
            sound and each of the plushies, one by one, will be shot with a colored laser of said plushie. After a few
            moments all 6 of them will disappear and the white one will appear from above. If you don’t get it right on
            the first try, attempt to inch and reposition the plushies more perfectly since this one requires insane
            precision.</p></Spoiler>
      </td>
      <td id="31">6 different variations, each one is unique. None of them can be fed with shrimp, are instead just
        props. All of them are obtainable in storymode. The white one floats in the air, the black one faces you
        wherever you are, the gold one is quite heavy, the yellow one has yellow colored eyes, cyan and magenta have
        different faces, and gold is very heavy.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/32.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/64.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/65.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/66.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/67.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/68.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/63.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rune">Runes</td>
      <td>Anywhere</td>
      <td id="32">4 different variations, the runes are elemental so it'll be easy to distinguish between them: fire,
        air, water, and earth. These items are required for the <a>Ritual Event</a> in order to obtain the <a>Lambert
          Plush</a>. To obtain the fire rune you must use a gascan or any explosive and bang a rock on it a few times
        until it explodes, you could also wait for the <a>Red Wisp</a> to run around and hit a random rock. To obtain
        the air rune you must attach a couple balloons to a rock and have it fly to the top of the skybox until it
        touches the very skybox. To obtain the earth rune you must use a shovel and walk over to the log at position (X:
        -320, Y: 148). To obtain the water rune you must throw a rock down the river or come near the world border on
        one of the outflowing rivers and douge a rock near the border with water. If the rock is lost or gone, it will
        flow down from the opposite side of the map river until it lands either at a log, bridge, or rocks.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/34.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/50.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/51.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/52.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/53.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="runeslab">Rune Slabs</td>
      <td>Anywhere</td>
      <td id="33">4 different variations, each one is used to help you create or find all 4 <a
        href="../Events/triggerableeventswiki.html#ritual">Ritual Event</a>. These aren't required as they are meant for
        extra help if the player cannot figure out how to obtain the <a>runes</a>. Each one can be found at their
        specified location using the <a>Interactive Map</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/35.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="lambert">Lambert</td>
      <td>Anywhere</td>
      <td id="34">A lamb animal plush that has a little healthbar like a boss but doesn't do anything. It heals the
        player when near. It is a reference to the <a href="https://www.cultofthelamb.com/">Cult of the Lamb Game</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/36.png" alt="VOTV Archive Image" height="234" />
      </td>
    </tr>
    <tr>
      <td id="brickwall">Brick Wall</td>
      <td>Removed, last at 0.6.3</td>
      <td id="35"> A spiral staircase that leads all the way down. But be warned when you enter a mysterious force will
        mess up your base and cause a huge mess to appear. The first part of the structure is very dark and you will
        hear a growl, then the second part is a very bright staircase with a light brown orangish overlay for each of
        the textures, then the third part will be the same except with a white overlay, and then the fourth part will
        have a light blue overlay but will have a barrier stopping you from going deeper. If you ragdoll or return home,
        you will be taken back to Main Base. The final part of the staircase is a small chamber with four chairs and a
        barred off pipe, going down this pipe reveals nothing and the player just falls off into the void. When it
        becomes dark the room turns kinda reddish. Do note that when it is night time or evening the spiral staircase
        will become very dark so when this happens, its best to simply stay in one spot and wait for it to get light
        again.
        <Spoiler><p>The Brickwall appears to be representative of the object <a
          href="https://scp-wiki.wikidot.com/scp-087/">SCP-087</a> from the SCP Foundation Universe.</p>
          <p>Both objects have an infinite staircase that seemingly transcends downwards infinitely. The only difference
            being the brick wall itself and the small chamber located at the bottom which don't occur with the original
            SCP.</p></Spoiler>
      </td>
      <td>
        <ImageViewer src="/Images/Objects/59.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/37.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/38.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/39.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/40.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/41.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/42.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/57.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/58.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="whited">White Door</td>
      <td>Random</td>
      <td id="36">A white door that will spawn randomly in any location, the door can be seen at times to open up into
        an optical illusion world but not much else.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/43.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/44.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ror">Rorschach Test</td>
      <td>Spawns randomly</td>
      <td id="37">A combination of black inkblots that form a shape on the wall or floor of the base. This is a
        reference to the real life pyschological experiment performed by Hermann Rorschach and is known as the <a
          href="https://en.wikipedia.org/wiki/Rorschach_test">Rorschach Test</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/45.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/46.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="tp">Thiccfus Plush</td>
      <td id="38">Kill a <a>Rufus Entity</a>.</td>
      <td id="39"><a href="../Entities/entitieswiki.html#thiccfus">Thiccfus Entity</a>, it plays Thiccfus noises when
        interacted.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/47.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/48.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="erieplush">Erie Plush</td>
      <td id="40">Bag up a gorepile, dig up a spot near Erie Zone, bury the bag, and either wait a day or look at the
        area at around 1 am.
      </td>
      <td id="41">A small plush representing or depicting the <a href="https://eternitydev-games.fandom.com/wiki/Erie">Erie</a>
        character from AEWVS. This object can also be used to summon in <a>Live Erie Entity</a>, to do this you give the
        object a pencil and paper in which it will write out what it wants to eat. After feeding it the specified food,
        you will repeat this process 3 more times until it will glow red and explode multiple times until the entity is
        spawned in.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/56.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/75.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/76.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="omegakerfur">Omega Kerfurs</td>
      <td id="42">Find the Kerfur Blueprint in the Bunker, behind some supply boxes. From there take apart two kerfuses
        and grab all the ingredients required by the blueprint.
      </td>
      <td id="43">A powerful tool that the player can use to patrol, write reports, fix servers, fix transformers, and
        more. There are 10 total variants as of now, the three main colors, Erie, Erie1, Keljoy, Manny, Keith, Argemia,
        and Alien. With Erie1, Argemia, and Alien currently unobtainable but with their own sounds. Erie1 is Erie but
        with a skimpy outfit and can only be activated once, upon deactivating, the prop disappears. Keith is the
        default skin for all Kerfurs unless Funny Mode is turned on within game settings, if funny mode is turned on,
        you can still craft him by following the blueprint but don't add any colors or other props to change it's skin.
        To obtain the Erie and Keljoy variants you need to simply replace the Kerfus Colors with either the Erie Plush
        or the Kel Plush. To obtain Manny, you need to replace the 2 plastic scraps with wooden scraps and the Kerfus
        Color with the moving mannequin prop. If the player feeds a <a>Lifecrystal Prop</a> to only the three colored
        Kerfurs, the Omega Kerfur will make distorted sounds, it'll light up a purple glow from its chest, and cannot be
        turned off. The omega kerfurs can be given clothes and wear them. Omega kerfurs can be broken by any explosion
        or hit. If broken, you can easily repair them by putting all their pieces on the crafting table and recrafting
        them.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/62.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/55.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/54.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/72.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="lifecrystal">Lifecrystal</td>
      <td id="44">Kill a <a>Fossilhound Entity</a>.</td>
      <td id="45">A small purple, shard-looking object that glows purple around it. It can be used to feed a colored
        Omega Kerfur.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/70.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="greenc">Green Campfire</td>
      <td id="46">Spawns in a fixed location at X: 680, Y: -573, at night.</td>
      <td id="47">A giant campfire that emits and is lit by a green fire. It emits an EMF level of 5. It forces the
        player's camera to always face in the same direction of the object and forces the player to walk in to the
        center point of the object. The green fire, like real fire will hurt the player. The object can be used to
        trigger the <a>Furfur Entity</a>.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/61.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="alienthingy">Alien Thing</td>
      <td id="48">Obtained through <a>Blood Skeleton Event</a>.</td>
      <td id="49">A small gray tool with a yellow light emitting the area that is magnetic. So any metal, it will be
        extremely gravitated towards. This is another piece of technology coming from the Greys race in VOTV.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/69.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="trchest">Treasure Chest</td>
      <td id="50">You can fish for it at the lake.</td>
      <td id="51">A brown chest that can be unlocked using a treasure key and will open up to a gold pile worth 1000
        points.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/33.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/71.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="boneman">Bone Man</td>
      <td id="52">Located at (X: -1906, Y: 1731)</td>
      <td id="53">A skeleton shaped man with bones and skull props. Is stationary, can't take apart.</td>
      <td>
        <ImageViewer src="/Images/Objects/73.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="furfurpaltar">Furfur Paltar Pieces</td>
      <td id="54">Grab two animal skulls, place one at the tree with MREs, burn the other, gather a gore gib (has to be
        from you), burn the gore gib and bury it at the root in the lake, wait some time or sleep, and from there you
        may dig it up from where you buried the burned gib. The two others can be find via digging and grabbing.
      </td>
      <td id="55">There are three variants, two legs and one arch. It is used for the <a>Furfur Plush Event</a>. To
        assemble them, you put the two legs right under the arch slots and everything should simply snap together.
      </td>
      <td>
        <ImageViewer src="/Images/Objects/80.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/77.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/79.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Objects/78.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="furfurplush">Furfur Plush</td>
      <td id="56">Trigger <a>Furfur Plush Event</a>.</td>
      <td id="57">A red glowing plush representing or depicting the <a>Furfur Entity</a>.</td>
      <td>
        <ImageViewer src="/Images/Objects/81.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>