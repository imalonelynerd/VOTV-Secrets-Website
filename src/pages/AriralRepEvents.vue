<script setup>
import ImageViewer from '@/components/ImageViewer.vue'
</script>

<template>
  <h1>Ariral Rep Events</h1>
  <h2>Description:</h2>
  <p>
    While there are storymode events that occur on scripted/triggerable timelines, there is an
    Ariral Rep system or Ariral Reputation system which boils down to your relationship with your
    Ariral neighbors at their treehouse.
  </p>
  <p>
    There are a total of 5 tiers with -100 to 100 as the range. Each tier encapsulates 50 rep
    points. The tiers from lowest to highest being: mean, inconvenient, normal, good, and loyal. You
    can either gain or lose points depending on certain actions. For an example, giving shrimp the
    Arirals will give you 20 points. To lose points, actions will include: setting explosions at the
    treehouse, stealing items, erasing Ariral graffiti drawings, and microwaving or damaging an
    Argemia Plush.
  </p>
  <p>
    Throughout storymode you will encounter certain events that can only be triggered by certain rep
    tiers or points. Technically speaking there are 5 stories or playthroughs that you can perform
    in storymode. These events while rep based, could occur on only certain days.
  </p>

  <hr />

  <h2>Tier 1 (Mean Tier):</h2>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Possible Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="paperaliencar">Paper Alien Car Event</td>
      <td id="1">
        A custom built wooden cart with a spotlight and a paper alien prop on it will roll from the
        hill down in front of the Main Base.
      </td>
      <td id="2">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/27.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="paperaliencatapult">Paper Alien Catapult Event</td>
      <td id="3">
        A custom built wooden catapult will spawn inside the garage with a paper alien locked and
        loaded. The catapult will trigger as soon as the player enters through the garage door.
      </td>
      <td id="4">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="paperalienarrival">Paper Alien Arrival Event</td>
      <td id="5">
        At night, you'll recieve an email from Bao stating the nuclear reactor is restarting and
        some things may not work correctly. The garage door sparks and is broken and you have to
        climb to the top of the Radio Tower to fix some this issue. While you head outside you can
        observe three paper alien statues outside the main entrance door.
      </td>
      <td id="6">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/9.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="trasher">Trasher Event</td>
      <td id="7">
        Piles of trash will spawn in front of the main entrance doorway, Kel's room patio doorway,
        and the garage doorway.
      </td>
      <td id="8">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/10.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="stalker">Ariral Stalker Event</td>
      <td id="9">
        Two
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        stalkers will spawn at the Ariral Treehouse Landmark and begin making their way to you, once
        they reach you and presumably attack you once they will leave. This appears to be another
        Ariral prank as they come in and give the player a slap and throw some items at him.
      </td>
      <td id="10">Day 14</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/24.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="rockthrower">Rock Thrower Event</td>
      <td id="11">Two Arirals will come and throw some rocks at the main window.</td>
      <td id="12">Day 17</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/28.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ariralanti">Ariral Anti-Grav Event</td>
      <td id="13">
        An Warp Arrow will appear above the garage section of the Main Base, effectively flickering
        in and out of appearance. What will happen is all of the objects and items except yourself
        will begin floating up as if gravity weren't there. It will do this for a couple of minutes.
      </td>
      <td id="14">Day 18</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/18.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/19.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="explodingcookies">Exploding Cookies Event</td>
      <td id="15">
        A box will appear outside your main entrance door, if you were to open it, it will explode.
      </td>
      <td id="16">Day 19</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/2.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/29.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="ariralvent">Ariral Vent Break-In Event</td>
      <td id="17">
        An
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        will spawn on top of the vent that is on the opposite section of the Console Command vent,
        the vent will break with the Ariral frantically searching and picking up items and objects
        around it. It will also attack the player a couple of times before running away with an item
        that it has grabbed back to the Ariral Treehouse.
      </td>
      <td id="18">Day 21</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/31.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="tacks">Tacks Event</td>
      <td id="19">
        An Ariral will come and throw down some tacks, that hurt and trip the player, all over the
        Main Base.
      </td>
      <td id="20">Day 25</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/7.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/30.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="21">Brownie Trail Event Note</td>
      <td id="22">
        Arirals hate you, warns of an impending violence. This prank is the ATV Boobytrap Event.
      </td>
      <td id="23">N/A</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/14.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="boobytrap">ATV Boobytrap Event</td>
      <td id="24">
        The ATV will be taken and placed outside on the bridge. With more than normal fuel of 314,
        if you were to enter in it and start it up, the ATV will explode losing all its fuel and
        health.
      </td>
      <td id="25">Day 27</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/20.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/21.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/AriralRepEvents/36.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Tier 2 (Inconvenient Tier):</h2>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Possible Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="26">Paper Alien Car Event</td>
      <td id="27">
        A custom built wooden cart with a spotlight and a paper alien prop on it will roll from the
        hill down in front of the Main Base.
      </td>
      <td id="28">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/27.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="29">Paper Alien Catapult Event</td>
      <td id="30">
        A custom built wooden catapult will spawn inside the garage with a paper alien locked and
        loaded. The catapult will trigger as soon as the player enters through the garage door.
      </td>
      <td id="31">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="32">Paper Alien Arrival Event</td>
      <td id="33">
        At night, you'll recieve an email from Bao stating the nuclear reactor is restarting and
        some things may not work correctly. The garage door sparks and is broken and you have to
        climb to the top of the Radio Tower to fix some this issue. While you head outside you can
        observe three paper alien statues outside the main entrance door.
      </td>
      <td id="34">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/9.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="35">Trasher Event</td>
      <td id="36">
        Piles of trash will spawn in front of the main entrance doorway, Kel's room patio doorway,
        and the garage doorway.
      </td>
      <td id="37">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/10.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/8.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="fakedrives">Fake Drives Event</td>
      <td id="38">
        Drives with levels 1-3 will spawn either in the garage or the main entrance door. When put
        in and accessed it will explode.
      </td>
      <td id="39">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/34.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/35.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="bedprank">Bed Prank Event</td>
      <td id="40">
        Whenever you are sleeping during this day, your bed, mattress, and yourself will be pulled
        or teleported into a area near the Sierra Satellite Dish. Appears to be another of the
        Ariral's pranks, but this time they drag you from your base to the wild.
      </td>
      <td id="41">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/25.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="42">Ariral Anti-Grav Event</td>
      <td id="43">
        An Warp Arrow will appear above the garage section of the Main Base, effectively flickering
        in and out of appearance. What will happen is all of the objects and items except yourself
        will begin floating up as if gravity weren't there. It will do this for a couple of minutes.
      </td>
      <td id="44">Day 18</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/18.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/19.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="45">Ariral Vent Break-In Event</td>
      <td id="46">
        An
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        will spawn on top of the vent that is on the opposite section of the Console Command vent,
        the vent will break with the Ariral frantically searching and picking up items and objects
        around it. It will also attack the player a couple of times before running away with an item
        that it has grabbed back to the Ariral Treehouse. This is also another one of the many
        Ariral pranks.
      </td>
      <td id="47">Day 21</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/31.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="gascanprank">Gascan Prank Event</td>
      <td id="48">
        Two exploding gascans will be spawned outside the front entrance door and garage door. When
        opened the gascan will explode immediately.
      </td>
      <td id="49">Day 21</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/3.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/4.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="arirtower">Ariral Ship Tower Event</td>
      <td id="50">
        If you visit the Radio Tower during night you can encounter a Warp arrow hovering right next
        to you for a few seconds before disappearing. Either another prank by the Arirals or just a
        coincidence as their ship is passing by.
      </td>
      <td id="51">Day 24</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="52">Brownie Trail Event Note</td>
      <td id="53">
        Normal note, warns of an impending prank. This prank is one of the paper alien events that
        will occur in 4 days.
      </td>
      <td id="54">N/A</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Tier 3 (Normal Tier):</h2>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Possible Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="55">Paper Alien Car Event</td>
      <td id="56">
        A custom built wooden cart with a spotlight and a paper alien prop on it will roll from the
        hill down in front of the Main Base.
      </td>
      <td id="57">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/27.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="58">Paper Alien Catapult Event</td>
      <td id="59">
        A custom built wooden catapult will spawn inside the garage with a paper alien locked and
        loaded. The catapult will trigger as soon as the player enters through the garage door.
      </td>
      <td id="60">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="61">Paper Alien Arrival Event</td>
      <td id="62">
        At night, you'll recieve an email from Bao stating the nuclear reactor is restarting and
        some things may not work correctly. The garage door sparks and is broken and you have to
        climb to the top of the Radio Tower to fix some this issue. While you head outside you can
        observe three paper alien statues outside the main entrance door.
      </td>
      <td id="63">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/9.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="dingdong">Ding Dong Ditch Event</td>
      <td id="64">
        A series of knocks on the entrance door can be heard, after which you can find a strange egg
        outside the entrance door.
      </td>
      <td id="65">Day 21</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/32.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="66">Ariral Ship Tower Event</td>
      <td id="67">
        If you visit the Radio Tower during night you can encounter a Warp arrow hovering right next
        to you for a few seconds before disappearing. Either another prank by the Arirals or just a
        coincidence as their ship is passing by.
      </td>
      <td id="68">Day 24</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/22.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="weirdchoco">Weird Chocolate Event</td>
      <td id="69">
        A stick of chocolate will be found outside the main entrance door that when eaten will cause
        your character food poisoning.
      </td>
      <td id="70">Day 22</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/33.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="71">Brownie Trail Event Note</td>
      <td id="72">
        Normal note, warns of an impending prank. This prank is one of the paper alien events that
        will occur in 4 days.
      </td>
      <td id="73">N/A</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/15.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Tier 4 (Good Tier):</h2>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Possible Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="74">Paper Alien Car Event</td>
      <td id="75">
        A custom built wooden cart with a spotlight and a paper alien prop on it will roll from the
        hill down in front of the Main Base.
      </td>
      <td id="76">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/27.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="77">Paper Alien Catapult Event</td>
      <td id="78">
        A custom built wooden catapult will spawn inside the garage with a paper alien locked and
        loaded. The catapult will trigger as soon as the player enters through the garage door.
      </td>
      <td id="79">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/26.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="80">Paper Alien Arrival Event</td>
      <td id="81">
        At night, you'll recieve an email from Bao stating the nuclear reactor is restarting and
        some things may not work correctly. The garage door sparks and is broken and you have to
        climb to the top of the Radio Tower to fix some this issue. While you head outside you can
        observe three paper alien statues outside the main entrance door.
      </td>
      <td id="82">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/9.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/5.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="arirgraffiti">Ariral Graffiti Event</td>
      <td id="83">
        Arirals will come to a random piece of wall and draw a random graffiti art on it. Erasing
        this using a sponge causes you to lose rep points.
      </td>
      <td id="84">Days 8-50</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/42.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/43.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="85">Ding Dong Ditch Event</td>
      <td id="86">
        A series of knocks on the entrance door can be heard, after which you can find a strange egg
        outside the entrance door.
      </td>
      <td id="87">Day 21</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/32.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="cookies">Cookies Event</td>
      <td id="88">
        A box will appear outside your main entrance door. It will be filled with 47-50 cookies
        inside.
      </td>
      <td id="89">Day 22</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/1.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="90">Ariral Stalker Event</td>
      <td id="91">
        Two
        <a href="../Entities/entitieswiki.html#ariral">Ariral Entity</a>
        stalkers will spawn at the Ariral Treehouse Landmark and begin making their way to you, once
        they reach you and presumably attack you once they will leave. This appears to be another
        Ariral prank as they come in and give the player a slap and throw some items at him.
      </td>
      <td id="92">Day 22</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/24.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="93">Brownie Trail Event Note</td>
      <td id="94">Arirals are chill with you, no conflict. Nothing more.</td>
      <td id="95">N/A</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/16.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>

  <hr />

  <h2>Tier 5 (Loyal Tier):</h2>
  <table>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Possible Day Triggers</th>
      <th>Image</th>
    </tr>
    <tr>
      <td id="vaccine">Ariral Vaccine Event</td>
      <td id="96">
        A box with a note and vaccine on top will appear outside the main entrance door. The note
        contains instructions, persuading you to inject yourself with the vaccine. When you do, you
        trigger an effect known as AriralSex which makes your screen very blurry and your character
        becomes dizzy. This effect will last for days.
      </td>
      <td id="97">Days 8-30</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/6.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/13.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="yogurt">Yogurt Ariral Event</td>
      <td id="98">
        With barely just enough hunger to sleep and little to no sleep you can sleep anywhere what
        will happen is overtime you will notice that your hunger will be filled up and when you wake
        up you will discover some Ariral yogurts around you and a spoon, presumably used to feed you
        while sleeping. A shrimp will also spawn at every single location you sleep in. This may not
        be a prank but rather a helping hand from the Arirals, it is unclear as to what happens when
        you ingest their food.
      </td>
      <td id="99">Days 8-50+</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/41.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="treehouse">Treehouse Teleport Event</td>
      <td id="100">
        Whenever you sleep on this day, you will end up inside the Ariral Treehosue Landmark on top
        of some cushions.
      </td>
      <td id="101">Day 17</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/38.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="102">Cookies Event</td>
      <td id="103">
        A box will appear outside your main entrance door. It will be filled with 47-50 cookies
        inside.
      </td>
      <td id="104">Day 22</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/1.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="atvrepair">Ariral ATV Repair Event</td>
      <td id="105">
        An Ariral can be seen using a toolbox to repair your ATV, however once you encounter it, it
        will begin running away. The toolbox is dropped.
      </td>
      <td id="106">Day 23</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/40.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="atvfuel">Ariral ATV Fuelup Event</td>
      <td id="107">
        Similar to the Ariral ATV Repair Event, but this time an Ariral will be seen fueling your
        ATV.
      </td>
      <td id="108">Day 24</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/39.png" alt="VOTV Archive Image" />
      </td>
    </tr>
    <tr>
      <td id="109">Brownie Trail Event Note</td>
      <td id="110">
        Arirals like you, if you go to the treehouse you will get a free doll plus a warning note
        from one Ariral, named Esraniki.
      </td>
      <td id="111">N/A</td>
      <td>
        <ImageViewer src="/Images/Events/AriralRepEvents/17.png" alt="VOTV Archive Image" />
        <ImageViewer src="/Images/Events/AriralRepEvents/37.png" alt="VOTV Archive Image" />

        <ImageViewer src="/Images/Events/AriralRepEvents/12.png" alt="VOTV Archive Image" />
      </td>
    </tr>
  </table>
</template>
