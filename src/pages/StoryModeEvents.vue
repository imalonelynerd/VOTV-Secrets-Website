<script setup>
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'

changeTitle('Story Mode Events')
</script>

<template>
  <h1>Storymode Events</h1>
  <h2>Description:</h2>
  <p>
    In VOTV there are different gamemodes that you can select and choose to play in, such modes
    include Story, Infinite, Sandbox, and more. In storymode there are certain scripted events that
    can occur that do not occur in other modes. These events can have a couple triggers but most of
    them are usually triggered by the day count.
  </p>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="shootingstars">Shooting Stars Event</td>
      <td id="1">
        Very early on day 2 you can observe the streaks of shooting stars across the night sky.
      </td>
      <td id="2">Day 2</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/1.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="poweroff">Poweroff Event</td>
      <td id="3">
        On day 3, all power switches will be switched to off, while power will still be supplied to
        the base through the transformers and generators you will need to manually switch the power
        yourself in order to continue functioning as normal.
      </td>
      <td id="4">Day 3</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/3.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ventcrawler">Vent Crawler Event</td>
      <td id="5">
        On day 5, at night, you will hear a series of crawling noises in the vents above you. This
        lasts for 30 seconds.
      </td>
      <td id="6">Day 5</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/36.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="picnic">Ariral Picnic Event</td>
      <td id="7">
        On this day is when two Warp Arrows and a small picnic of cookies, burgers, soda cans,
        bottles, some shrimp, cups, and two baskets will appear. There will also be 2 figurine toys
        of the Warp Arrows which you can grab. When you first approach this structure/event an
        invisible
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        will be heard running away from you. In the older versions, along with all the items listed
        here, there used to be a Brynfruit and a Shrimp Burger that could spawn. This is the first
        encounter with Arirals, as they are checking out the area. Also during this you can catch 2
        signals from them. After a few days the two warp arrows and picnic will disappear.
      </td>
      <td id="8">Day 8</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/6.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/7.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="asse">Ariral Ship Scan Event</td>
      <td id="9">
        While this event has been removed from the newer versions of the game nevertheless it still
        exists within it. It used to exist in the older versions of VOTV at around 0.3.0 and earlier
        but was removed in 0.5.0. it would have a Warp Arrow teleport in front of the Main Base and
        begin scanning the entire environment around it. This also causes your emergency sirens to
        flare up. The Warp Arrow will continously scan until enough time has passed and it will fly
        out and teleport creating a massive bright blue wave across the entire map. The Arirals are
        scanning the environment to ensure of no hazards around. This was supposed to be the event
        that would first introduce Arirals to the player or first encounter with them. However this
        was later replaced with the Ariral Picnic Event.
      </td>
      <td id="10">Day 12, removed</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/9.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/10.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/11.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/12.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ventknocker">Vent Knocker Event</td>
      <td id="11">
        On day 12, at night, you will hear a series of knocking noises to the very right of you
        above the server room vents.
      </td>
      <td id="12">Day 12</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/37.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ariralshipevent">Ariral Ship Event</td>
      <td id="13">
        During the night you can observe a floating Warp Arrow that is just hovering in the
        distance. Once you approach it or get close it will warp out of existence. The Arirals are
        leaving, it is unknown where they go to but its possible that they could be heading back to
        their homeplanet or an outpost grabbing supplies and materials for whats to come next.
        During this event, you can catch one more signal from them.
      </td>
      <td id="14">Day 14</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/13.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/14.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ariraltreehouse">Ariral Treehouse Event</td>
      <td id="15">
        On day 16 you can observe smoke coming from an area between the Papa Satellite Dish and
        Victor Satellite Dish, once approached you can discover two Warp Arrows, a campfire, some
        items, and the foundation for the treehouse. Starting from this point and on each day
        afterwards, the treehouse will be built up in stages, with each stage supplying different
        items and objects. The Arirals, after a little more than a week, come back with supplies and
        construct a treehouse to live at the area. They do this for several days until they are
        fully settled in.
      </td>
      <td id="16">Days 16-20</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/32.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="aliencutout">Alien Cutout Event</td>
      <td id="17">
        When you enter inside Uniform Satellite Dish either to fix, hash, or calibrate the satellite
        you will hear 2 series of footsteps running up the stairs underneath you and eventually stop
        midway through. When you step outside you can find two completely unique alien cutout boards
        on one of the corners of the stairs.
      </td>
      <td id="18">Day 30+</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/33.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="bte">Brownie Trail Event</td>
      <td id="19">
        A series of footsteps will be heard, if you are to observe from the outside, you will spot
        brownies being dropped in a path. If you were to follow the path of brownies you will
        eventually discover an entire pile of them plus a note, now depending on which Ariral Rep
        Tier you are on you will get a certain note for each one. There are four unique notes you
        can get.
      </td>
      <td id="20">Days 25-28</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/34.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/35.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/36.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="droppedarir">Dropped ArirGun Event</td>
      <td id="21">
        An Ariral scream will be heard outside the main base and after entering outside you can
        discover a free Arirgun in the bushes next to the front entrance of the base. This gun is
        the first variant of the prop meaning it can't be used by the player. The Ariral in question
        either has tripped or fallen hence dropping the gun by accident. Strangely the Ariral doesnt
        come back to pick it up, most likely to keep itself hidden from the player and ensure it's
        secrecy.
      </td>
      <td id="22">Days 25-28</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/31.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="obelisk">Obelisk Event</td>
      <td id="23">
        A loud boom can be heard in the distance, soon a fast moving object crashes into the ground
        knocking out the player no matter where it's at. It will also cause some damage to the
        surrounding area, soon the object which is an Obelisk will pop up a bright red screen
        warning the player of the
        <a href="../Entities/entitieswiki.html#kwisp">Killer Wisp Entities</a>
        which will soon spawn and continue spawning from this point on. The Obelisk and the sign is
        actually supposed to be warning for the Arirals, not the player. As depicted in the drawings
        it is an Ariral with it's figure, the Rozitals who are behind this situation sent this
        obelisk to protect the Arirals in the short term before they send in their Piramid to take
        care of the Killer Wisps.
      </td>
      <td id="24">Day 31</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/43.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/44.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="sunblackout">Sun Blackout Event</td>
      <td id="25">
        The sun including all of it's natural light will disappear completely leaving the entire
        world in darkness. Dr Bao will send you an email stating to keep going. This will stay like
        this for another 30 seconds before it returns again. You will receive two emails, one from
        Bao stating it was strange and the other being from the Arirals who are apologizing.
      </td>
      <td id="26">Day 31</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/45.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/46.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/47.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/48.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="looker">Looker Event</td>
      <td id="27">
        This event occurs over the span of a day and causes 5 signals to appear in a specific
        sequence. The signals affected are:
        <a href="../Signals/specialsigswiki.html#looker_sky">Looker Sky</a>,
        <a href="../Signals/specialsigswiki.html#looker_window">Looker Window</a>,
        <a href="../Signals/specialsigswiki.html#looker_vent">Looker Vent</a>,
        <a href="../Signals/specialsigswiki.html#looker_locker">Looker Locker</a>, and
        <a href="../Signals/specialsigswiki.html#looker_behind">Looker Behind</a>. These signals can
        be caught in order of these times: 20:00 (Day 39), 22:00 (Day 39), 00:00 (Day 40), 02:00
        (Day 40), and 04:00 (Day 40). When encountering the 4th one, you will have a popup telling
        you not to look but when you look it will spawn a black box inside and cause your game to
        crash. While the 1st, 2nd, 3rd, and 5th ones don't do anything for now. Also all the other
        looker signals don't have any effect or are not part of this event.
      </td>
      <td id="28">Days 33</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/27.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/28.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/29.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/30.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/60.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="piramid">Piramid Event</td>
      <td id="29">
        When entering the main base at the specified time the
        <a href="../Entities/entitieswiki.html#piramid">Piramid Entity</a>
        will first spawn in the direction of the Tango Satellite Dish, from there the Piramid entity
        will begin walking within the bounds of the play area looking for any
        <a href="../Entities/entitieswiki.html#kwisp">Killer Wisps</a>
        which once caught it will pick the entity and disintegrate it, once all
        <a href="../Entities/entitieswiki.html#kwisp">Killer Wisps</a>
        have been caught the Piramid entity will walk off bounds and disappear. As stated in the
        Obelisk Event, the Piramid is only here to protect the Arirals and take care of the Killer
        Wisps.
      </td>
      <td id="30">Day 35-36, 18:00</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/50.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/51.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/52.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rpe">Rozital Patrol Event</td>
      <td id="31">
        At night, several
        <a href="../Entities/entitieswiki.html#tbe">Tentacle Ball Entities</a>, will spawn and roam
        around the map. The event will last an entire day as they will patrol all over the map and
        eventually disappear. The entities who are scout-like entities patrol to ensure no further
        trouble with the Killer Wisps.
      </td>
      <td id="32">Day 37</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/53.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="sce">Soltomia Cleaning Event</td>
      <td id="33">
        At night, a
        <a href="../Entities/entitieswiki.html#soltomia">Soltomia Entity</a>
        will spawn near the ATV in garage and begin it's cleaning animation. When the player walks
        into the main room of Main Base, a bright spark or flash can be seen for a split second.
        Then front entrance door will be broken or will not open fully. When the player walks into
        the garage, the
        <a href="../Entities/entitieswiki.html#soltomia">Soltomia Entity</a>
        will quickly fly off and eventually disappear, leaving the sponge behind, and ending the
        event.
      </td>
      <td id="34">Day 39</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/54.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rozitborg">RozitBorg Event</td>
      <td id="35">
        A giant Rozital cubed ship with moving wires underneath will fly over from one side of the
        map to the other, this event lasts for several minutes.
      </td>
      <td id="36">Day 42</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/2.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/4.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rhe">Rozital Hole Event</td>
      <td id="37">
        4 purple Rozital beacons will shoot up to the sky, all positioned semitrically around The
        Hole Landmark, numerous Kavotia entities will spawn around the Hole defending it. Inside The
        Hole Landmark, the metal grate is shredded and contains another Rozital Beacon but a giant
        yellow laser pointing straight down. This laser will kill you if you aren't being careful.
        If you were to go straight down you'll find that the bottom part of the hole has spawned a
        small chambered structure with little to nothing in it other than clumps of trash.
      </td>
      <td id="38">Day 42</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/16.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/17.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/18.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/19.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/20.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="gde">Grays Dumping Event</td>
      <td id="39">
        Starting on day 45, at night one Gray UFO will fly over the Main Base and dump a random
        object. It will do this continually every day at night until day 48. Two bodies and a
        exploded car will drop in a triangular manner. You could combine all three events by simply
        waiting outside the Main Base and on Day 48 you can trigger all three of them at once when
        walking into the signals room.
      </td>
      <td id="40">Days 45-48</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/24.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/23.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/StorymodeEvents/22.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/StorymodeEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="arirstopitpls">ArirGun Repossession (Removed)</td>
      <td id="41">
        An
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        will come over and break in, however in search of the Ariral gun it dropped earlier and once
        it has obtained it, it will quickly run away and eventually disappear. This is not an Ariral
        prank and instead the Ariral comes and finds the lost ArirGun it lost way earlier back in
        the Dropped ArirGun Event. The Ariral is taking back the gun to ensure the humans don't have
        access to that technology.
      </td>
      <td id="42">Day 46-47</td>
      <td>
        <ImageViewer src="/Images/Events/StorymodeEvents/55.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>
