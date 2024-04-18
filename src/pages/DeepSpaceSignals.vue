<script setup>
import SpoilerBlock from '@/components/widgets/SpoilerBlock.vue'
import SoundListener from '@/components/widgets/SoundListener.vue'
import ImageViewer from '@/components/widgets/ImageViewer.vue'
import { changeTitle } from '@/assets/tools.js'
import InfoCard from '@/components/widgets/InfoCard.vue'
import WidgetBundle from '@/components/widgets/WidgetBundle.vue'

changeTitle('Deep Space Signals')

const hasDesc = ['Signal', 'Raw Text/Description', 'Audio', 'Images']
const hasNoDesc = ['Signal', 'Audio', 'Images']
const hasNoSound = ['Signal', 'Raw Text/Description', 'Images']
</script>

<template>
  <h1>Deep Space Signals</h1>
  <h2>Description:</h2>
  <p>
    A lot of the signals in VOTV will be signals with an image of just outer space and it may not
    seem much, heck even the properties can tell the same story. But don't be fooled, some of these
    "empty" signals have some meaning or could hide some very interesting surprises.
  </p>
  <p>
    For each signal audio sound there will be a little button click or notification, that is to
    signify the start of the signal audio.
  </p>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="1">Hairy</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/1.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/1.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/1.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="2">Wormy</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/2.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle
        ><ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/2.png"
          alt="VOTV Archive Image" /><ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/2.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="3">Mettus</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/3.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/3.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/3.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="4">Wooshes</h3> </template>
    <template #1
      ><SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/4.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/4.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/4.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="5">Dnoose</h3></template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/5.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/5.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/5.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="6">Gargle</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/6.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/6.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/6.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="7">Poem</h3> </template>
    <template #1
      ><SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/7.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/7.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/7.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="8">Shiffler1</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/8.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/8.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/8.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="9">Birbies</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/9.mp3" />
      </SoundListener>
    </template>
    <template #2>
      <WidgetBundle
        ><ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/9.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/9.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="10">Basser1</h3></template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/10.mp3" />
      </SoundListener>
    </template>
    <template #2>
      <WidgetBundle
        ><ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/10.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/10.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="11">Nev1</h3></template>
    <template #1>
      <p id="33">
        Hoborg thought this world would make him happy. #ut it make him - sad. #alking around his
        b#g, *#eau#iful* new wor#d make h#m feel #l# alone.
      </p>
      <SpoilerBlock>
        <p>
          This is a reference to the
          <a href="https://neverhood.fandom.com/wiki/The_Neverhood">Neverhood Game</a>.
        </p>
      </SpoilerBlock></template
    >
    <template #2>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/11.mp3" /> </SoundListener
    ></template>
    <template #3>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/11.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/11.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="12">Flesh</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/12.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/12.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/12.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="13">Crisps</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/13.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/13.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/13.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="14">Booer</h3> </template>
    <template #1>
      <p id="32">
        ...ad Zone Dead Z#ne D#ad Zone Leave Leave Leav# L#ave Closer Close# Closer Cl#ser Close#
        Soo...
      </p></template
    >
    <template #2>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/14.mp3" /> </SoundListener
    ></template>
    <template #3>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/14.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/14.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="15">Fesh</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/15.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/15.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/15.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="16">Eeh</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/16.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/16.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/16.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="17">Woowoo</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/17.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/17.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/17.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="18">Faces</h3></template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/18.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/18.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/18.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="19">Ha</h3></template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/19.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/19.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/19.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="20">Lizard</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/20.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/20.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/20.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoSound" :has-media="true">
    <template #0> <h3 class="CardTitle" id="21">Spooky</h3> </template>
    <template #1>
      <SpoilerBlock>
        <p>
          -This signal was a placeholder for the
          <a href="../Signals/specialsigswiki.html#evil">Evil Signal</a>.
        </p>
      </SpoilerBlock></template
    >
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/21.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/21.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="22">Roz0</h3> </template>
    <template #1>
      <SpoilerBlock>
        <p>A Rozital reference, this appears to be some noises they make.</p>
      </SpoilerBlock></template
    >
    <template #2>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/21.mp3" /> </SoundListener
    ></template>
    <template #3>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/22.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="23">Zzzuu</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/22.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/23.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="24">Shots</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/23.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/24.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/22.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="25">Waves</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/24.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/25.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="26">Wubbes</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/25.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/26.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/23.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="27">Seeker</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/26.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/27.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/24.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="28">Hisses</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/27.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/28.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/25.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="29">Monty</h3> </template>
    <template #1> <p id="31">.............come here.....</p> </template>
    <template #2>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/28.mp3" />
      </SoundListener>
    </template>
    <template #3>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/29.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/26.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
  <InfoCard :categories="hasNoDesc" :has-media="true">
    <template #0> <h3 class="CardTitle" id="30">Curiosity</h3> </template>
    <template #1>
      <SoundListener>
        <source src="/Images/Signals/SignalAudio/DeepSpaceSignals/29.mp3" /> </SoundListener
    ></template>
    <template #2>
      <WidgetBundle>
        <ImageViewer
          src="/Images/Signals/SignalPictures/DeepSpaceSignals/30.png"
          alt="VOTV Archive Image" />
        <ImageViewer
          src="/Images/Signals/SignalVisuals/DeepSpaceSignals/27.png"
          alt="VOTV Archive Image"
      /></WidgetBundle>
    </template>
  </InfoCard>
</template>
