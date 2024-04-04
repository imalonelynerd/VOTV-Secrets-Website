<script setup>
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import SoundListener from '@/components/widgets/SoundListener.vue'
import { changeTitle } from '@/assets/tools.js'

changeTitle('Planet Signals')
</script>

<template>
  <h1>Planet Signals</h1>
  <h2>Description:</h2>
  <p>
    A lot of the signals in VOTV are signals of real life planets, exoplanets, and objects that can
    be found in space and have been observed by us. These signals are actual live audio sounds of
    said objects. While some of these signals are references to some medias.
  </p>
  <p>
    For each signal audio sound there will be a little button click or notification, that is to
    signify the start of the signal audio.
  </p>
  <table>
    <tr>
      <th>Signal</th>
      <th>Raw Text/Description</th>
      <th>Event Triggers</th>
      <th>Audio</th>
      <th>Image</th>
      <th>Visualization Image</th>
    </tr>
    <tr>
      <td id="1">Venus</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/1.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/1.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/1.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="2">Neptune</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/2.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/2.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/2.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="3">Iapetus</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/3.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/3.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>None</td>
    </tr>
    <tr>
      <td id="4">Iapetus 0</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/4.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/4.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/3.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="5">Ceres 0</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/5.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/5.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/4.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="6">Ceres</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/6.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/6.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>None</td>
    </tr>
    <tr>
      <td id="7">Jupiter</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/7.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/7.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/5.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="8">Marsbday</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/8.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/8.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/6.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="9">Retroplanet</td>
      <td id="40">come play with me im coming wait for me :)</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/9.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/9.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/7.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="10">Enceladus</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/10.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/10.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/8.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="11">Fard</td>
      <td id="45">
        None

        <SpoilerBlock>
          <p>Fart sound effect but reversed.</p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/11.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/11.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/9.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="12">Eris</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/12.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/12.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/10.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="13">Dione</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/13.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/13.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/11.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="14">Mercury</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/14.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/14.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/12.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="15">Bennu</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/15.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/15.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/13.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="16">Saturn</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/16.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/16.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/14.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="17">Uranus</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/17.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/17.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/15.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="18">Mars</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/18.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/18.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/16.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="19">Hilero</td>
      <td id="44">
        None

        <SpoilerBlock>
          <p>
            This appears to be a reference to a
            <a href="https://en.wikipedia.org/wiki/Slow-scan_television">SSTV</a> transmission, it
            is impossible to decode the message as the alternating waves overlay it.
          </p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/19.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/19.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/17.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="20">Treasure Planet</td>
      <td id="43">
        None

        <SpoilerBlock>
          <p>
            -Reference to the movie produced in 2002 by Disney,
            <a href="https://en.wikipedia.org/wiki/Treasure_Planet">Treasure Planet</a>.
          </p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/20.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/20.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/18.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="21">Vesta</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/21.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/21.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/19.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="22">Amazur</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/22.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/22.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/20.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="23">Rhea</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/23.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/23.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>None</td>
    </tr>
    <tr>
      <td id="24">Rhea 0</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/24.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/24.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/21.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="25">Makemake</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/25.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/25.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/22.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="26">Iris</td>
      <td id="42">
        een days si#ce last#supply arrive. waiting anot..........ell da##ge# hav# fix
        t#i..........#.#..............#.......s a#d i do not have too many tape and plastic, do not
        have bur#e# this no# good #nough# hope # surv#ve when suppl#......#
        <SpoilerBlock>
          <p>
            -This is a reference to the Iris entity in
            <a href="https://www.youtube.com/@GEMINIHOMEENTERTAINMENT">Gemini Home Entertainment</a
            >.
          </p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/26.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/26.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/23.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="27">Vion</td>
      <td id="41">
        .....S OBJECT AT ALL COST# AVOID THIS OB#E#T AT ALL COSTS food AVOI# ##IS OBJECT AT AL#
        C#STS#A#O## THIS OBJECT AT#A#L COSTS#AVOID#THIS OB#ECT AT ALL COSTS AV#ID#THIS food OBJECT
        AT ALL COSTS AV#ID THIS#OBJECT#AT ALL C#STS AVOID come THIS OB#ECT AT A## CO.....
        <SpoilerBlock>
          <p>
            A warning from another civilization to avoid the Evil object and not spread its
            influence.
          </p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/27.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/27.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/24.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="28">Aburan</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/28.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/28.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/25.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="29">Mimas</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/29.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/29.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/26.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="30">Io</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/30.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/30.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/27.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="31">Ironlung</td>
      <td id="40">
        None

        <SpoilerBlock>
          <p>
            Reference to the game
            <a href="https://store.steampowered.com/app/1846170/Iron_Lung/">Iron Lung</a>.
          </p>
        </SpoilerBlock>
      </td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/31.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/31.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/28.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="32">Mardad</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/32.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/32.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/29.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="33">Oscular</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/33.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/33.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/30.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="34">Europa</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/34.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/34.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/31.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="35">Moon</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/35.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/35.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/32.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="36">Blance</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/36.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/36.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/33.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="37">Phobos</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/37.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/37.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/34.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="38">Friante</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/38.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/38.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/35.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
    <tr>
      <td id="39">Tethys</td>
      <td>None</td>
      <td>None</td>
      <td>
        <SoundListener>
          <source src="/Images/Signals/SignalAudio/PlanetSignals/39.mp3" type="audio/mpeg" />
        </SoundListener>
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalPictures/PlanetSignals/39.png"
          alt="VOTV Archive Image"
        />
      </td>
      <td>
        <ImageViewer
          src="/Images/Signals/SignalVisuals/PlanetSignals/36.png"
          alt="VOTV Archive Image"
        />
      </td>
    </tr>
  </table>
</template>
