<script setup>
import RibbonContainer from '@/components/map/MapBar.vue'
import MM from '@/components/map/MapMarker.vue'
import { onMounted, ref } from 'vue'
import MapCoords from '@/components/map/MapCoords.vue'

function moveMapHorizontally(percentage) {
  let map = document.getElementById('map')
  map.style.left = `${percentage}%`
}

function ribbonAction(e) {
  alert(`Coming soon !`)
  console.log(e)
  /*
  switch (e) {
    case 0:
      moveMapHorizontally(0)
      break
    case 1:
      moveMapHorizontally(50)
      break
    default:
      moveMapHorizontally(25)
      break
  }*/
}

let allHidden = false

function toggleAllMarkers() {
  let markers = document.querySelectorAll('.MapMarker[id]')
  if (allHidden) {
    markers.forEach((e) => e.classList.remove('hidden'))
  } else {
    markers.forEach((e) => e.classList.add('hidden'))
  }
  allHidden = !allHidden
}

let activeMarkerSet = ''

const x = ref(0)
const y = ref(0)

function toggleMarkerVisibility(markerId) {
  if (markerId === 'SDmarker' || markerId === 'CSDmarker') {
    if (activeMarkerSet !== markerId) {
      let activeMarkers = document.querySelectorAll('.MapMarker[id="' + activeMarkerSet + '"]')
      activeMarkers.forEach((m) => m.classList.add('hidden'))
      let newMarkers = document.querySelectorAll('.MapMarker[id="' + markerId + '"]')
      newMarkers.forEach(function (marker) {
        marker.classList.remove('hidden')
      })
      activeMarkerSet = markerId
    } else {
      let allMarkers = document.querySelectorAll(
        '.MapMarker[id="SDmarker"], .MapMarker[id="CSDmarker"]'
      )
      allMarkers.forEach(function (marker) {
        marker.classList.add('hidden')
      })
      activeMarkerSet = ''
    }
  } else {
    let markers = document.querySelectorAll('.MapMarker[id="' + markerId + '"]')
    markers.forEach(function (marker) {
      marker.classList.toggle('hidden')
    })
  }
}

function init() {
  let map = document.getElementById('map')
  let image = document.getElementById('elem-map')
  let markers = map.querySelectorAll('.MapMarker')
  let isDragging = false
  let startCoords = { x: 0, y: 0 }
  let startScrollLeft = 0
  let startScrollTop = 0
  let minZoomLevel = 0.5
  map.addEventListener('mousedown', function (e) {
    isDragging = true
    startCoords.x = e.clientX
    startCoords.y = e.clientY
    startScrollLeft = map.scrollLeft
    startScrollTop = map.scrollTop
    e.preventDefault()
  })
  map.addEventListener('mouseup', function () {
    isDragging = false
  })
  map.addEventListener('mousemove', function (e) {
    if (!isDragging) return
    let dx = e.clientX - startCoords.x
    let dy = e.clientY - startCoords.y
    map.scrollLeft = startScrollLeft - dx
    map.scrollTop = startScrollTop - dy
  })
  map.addEventListener('mousemove', function (e) {
    let rect = map.getBoundingClientRect()
    let offsetX = e.clientX - rect.left
    let offsetY = e.clientY - rect.top
    let mapWidth = image.clientWidth
    let mapHeight = image.clientHeight
    let zoom = mapWidth / image.naturalWidth
    let mapOffsetX = mapWidth / 2 - map.scrollLeft
    let mapOffsetY = mapHeight / 2 - map.scrollTop
    let relativeX = (offsetX - mapOffsetX) / zoom
    let relativeY = (offsetY - mapOffsetY) / zoom
    let offsetXCorrection = 37
    let offsetYCorrection = -5
    let mapX = Math.round(relativeX) - offsetXCorrection
    let mapY = Math.round(relativeY) - offsetYCorrection
    x.value = Math.round(mapX * 0.437 + 2)
    y.value = Math.round(mapY * 0.437 - 2)
  })
  map.addEventListener('wheel', function (e) {
    e.preventDefault()
    let zoom = 2
    let zoomDelta = -e.deltaY * zoom
    let newWidth = image.clientWidth + zoomDelta
    let newHeight = image.clientHeight + zoomDelta
    let offsetX = e.offsetX
    let offsetY = e.offsetY
    if (
      newWidth >= map.clientWidth * minZoomLevel &&
      newHeight >= map.clientHeight * minZoomLevel
    ) {
      let scale = newWidth / image.clientWidth
      image.style.width = newWidth + 'px'
      image.style.height = newHeight + 'px'
      map.scrollLeft += (offsetX * zoomDelta) / image.clientWidth
      map.scrollTop += (offsetY * zoomDelta) / image.clientHeight
      markers.forEach(function (marker) {
        let markerTop = parseFloat(marker.style.top)
        let markerLeft = parseFloat(marker.style.left)
        let newMarkerTop = markerTop * scale + 'px'
        let newMarkerLeft = markerLeft * scale + 'px'
        marker.style.top = newMarkerTop
        marker.style.left = newMarkerLeft
      })
    }
  })
}

onMounted(() => init())
</script>

<template>
  <div id="map">
    <img id="elem-map" src="/Images/Maps/Map.png" alt="Interactive Map" />
    <MM tag="Bmarker" y="2028" x="1907" img="2">
      <span>Burger:<br />(X: -63, Y: 12)<br />Located under the bridge.</span>
    </MM>
    <MM tag="Bmarker" y="1987" x="2007" img="2">
      <span>Burger<br />(X: -12, Y: 0)<br />Located on the toilet.</span>
    </MM>
    <MM tag="Bmarker" y="2057" x="2021" img="2">
      <span>Burger<br />(X: -8, Y: 27)<br />Located on top of a server</span>
    </MM>
    <MM tag="Bmarker" x="2000" y="2020" img="2">
      <span>Burger<br />(X: 14, Y: 8)<br />Located inside of an oven.</span>
    </MM>
    <MM tag="Bmarker" x="2000" y="2016" img="2">
      <span>Burger:<br />(X: -14, Y: 9)<br />Located in a corner on the roof.</span>
    </MM>
    <MM tag="Bmarker" x="1991" y="2055" img="2">
      <span>Burger:<br />(X: -20, Y: 27)<br />Located behind stairs.</span>
    </MM>
    <MM tag="Bmarker" x="2027" y="2057" img="2">
      <span>Burger:<br />(X: -2, Y: 27)<br />Located on top of the vent cover.</span>
    </MM>
    <MM tag="Bmarker" x="2326" y="837" img="2">
      <span
        >Burger:<br />(X: 157, Y: -584)<br />(Requires: Shovel, Metal Detector) Dig in that specific
        spot.</span
      >
    </MM>
    <MM tag="Bmarker" x="724" y="843" img="2">
      <span>Burger:<br />(X: -651, Y: -587)<br />Located in the AB Cave entrance.</span>
    </MM>
    <MM tag="Bmarker" x="743" y="1956" img="2">
      <span>Burger:<br />(X: -621, Y: -28)<br />Located behind a desk in The Hole.</span>
    </MM>
    <MM tag="Bmarker" x="3345" y="2072" img="2">
      <span>Burger:<br />(X: 639, Y: 44)<br />Next to the Ship Engine.</span>
    </MM>
    <MM tag="Bmarker" x="1848" y="2396" img="2">
      <span
        >Burger:<br />(X: -100, Y: 203)<br />Located on the side of Juliett Satellite Dish's first
        level.</span
      >
    </MM>
    <MM tag="Bmarker" x="2010" y="2015" img="2">
      <span>Burger:<br />(X: -10, Y: 6)<br />Located on top of the globe.</span>
    </MM>
    <MM tag="Bmarker" x="2117" y="1978" img="2">
      <span>Burger:<br />(X: 42, Y: -12)<br />Located in the middle of grass.</span>
    </MM>
    <MM tag="Bmarker" x="2073" y="1942" img="2">
      <span
        >Burger:<br />(X: 21, Y: -29)<br />Located on top of one of the Radio Poles on top of the
        Radio Tower.</span
      >
    </MM>
    <MM tag="Bmarker" x="930" y="2493" img="2">
      <span>Burger:<br />(X: -553, Y: 238)<br />Located out in the open near TR-1.</span>
    </MM>
    <MM tag="Bmarker" x="650" y="863" img="2">
      <span
        >Burger:<br />(X: -683, Y: -581)<br />Located further up in AB Cave, next to a
        pumpkin.</span
      >
    </MM>
    <MM tag="Bmarker" x="2501" y="3128" img="2">
      <span>Burger:<br />(X: 215, Y: 541)<br />Located on top of a Stonehenge block piece.</span>
    </MM>
    <MM tag="Bmarker" x="3096" y="1547" img="2">
      <span>Burger:<br />(X: 518, Y: -213)<br />Located on top of some supply boxes.</span>
    </MM>
    <MM tag="Bmarker" x="2857" y="2040" img="2">
      <span>Burger:<br />(X: 405, Y: 24)<br />Located near the Wooded Shack.</span>
    </MM>
    <MM tag="Bmarker" x="2701" y="1334" img="2">
      <span>Burger:<br />(X: 349, Y: -344)<br />Located under some rocks in a log.</span>
    </MM>
    <MM tag="Tmarker" x="2027" y="1990" img="0">
      <span>Tile:<br />(X: -9, Y: 2)<br />Located on the secondary roof of the main base.</span>
    </MM>
    <MM tag="Tmarker" x="1890" y="2036" img="0">
      <span
        >Tile:<br />(X: -68, Y: 16)<br />Located on the left side of a bridge near the main
        base.</span
      >
    </MM>
    <MM tag="Tmarker" x="736" y="1969" img="0">
      <span
        >Tile:<br />(X: -617, Y: -24)<br />Located underneath one of the supply boxes in The
        Hole.</span
      >
    </MM>
    <MM tag="Tmarker" x="931" y="1915" img="0">
      <span>Tile:<br />(X: -525, Y: -49)<br />Next to a tree base.</span>
    </MM>
    <MM tag="Tmarker" x="1130" y="2357" img="0">
      <span>Tile:<br />(X: -464, Y: 173)<br />Located in the middle of a field.</span>
    </MM>
    <MM tag="Tmarker" x="3044" y="1977" img="0">
      <span
        >Tile:<br />(X: 500, Y: -2)<br />Located behind the top level of the Uniform Satellite
        Dish.</span
      >
    </MM>
    <MM tag="Tmarker" x="3360" y="3307" img="0">
      <span>Tile:<br />(X: 615, Y: 620)<br />Located next to Green Box.</span>
    </MM>
    <MM tag="Tmarker" x="1311" y="3376" img="0">
      <span>Tile:<br />(X: -372, Y: 702)<br />Located above the building in Guard Post.</span>
    </MM>
    <MM tag="Tmarker" x="3769" y="169" img="0">
      <span
        >Tile:<br />(X: 874, Y: -874)<br />Located on the very corner of the playable map, two
        rivers corner.</span
      >
    </MM>
    <MM tag="Smarker" x="2499" y="3148" img="9">
      <span
        >Skull:<br />(X: 213, Y: 549)<br />Located offset of the center of the Stonehenge behind one
        layer of grass.</span
      >
    </MM>
    <MM tag="Smarker" x="902" y="2624" img="9">
      <span
        >Skull:<br />(X: -569, Y: 302)<br />Located near a skeleton of bones and a radioactive
        capsule. In the Darkened Bone Pit.</span
      >
    </MM>
    <MM tag="Smarker" x="1348" y="2091" img="9">
      <span
        >Skull:<br />(X: -343, Y: 38)<br />Located near the Light Pit, it will be found outside the
        vicinity of the Light Bone Pit behind a couple bushes.</span
      >
    </MM>
    <MM tag="Smarker" x="721" y="830" img="9">
      <span
        >Skull:<br />(X: -655, Y: -600)<br />Located deep inside the AB Cave towards the cave
        barrier and on your left.</span
      >
    </MM>
    <MM tag="Smarker" x="2013" y="2030" img="9">
      <span>Skull:<br />(X: -7, Y: 12)<br />Located behind one of the boxes in the Bedroom.</span>
    </MM>
    <MM tag="Smarker" x="3340" y="2076" img="9">
      <span
        >Skull:<br />(X: 637, Y: 44)<br />(Requires: Shovel, Metal Detector) Located underneath the
        Ship Engine,<br />
        you will need to trigger the Rozital Ship Event in order to access this skull.</span
      >
    </MM>
    <MM tag="Smarker" x="2550" y="1986" img="9">
      <span
        >Skull:<br />(X: 261, Y: -6)<br />(Requires: Shovel, Metal Detector) Located near a large
        boulder you will need to dig around it in order to access a box that has a skull in
        it.</span
      >
    </MM>
    <MM tag="SDmarker" x="1006" y="1011" img="8">
      <span>Romeo<br />(X: -500, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1411" y="1400" img="8">
      <span>November<br />(X: -300, Y: -300)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2022" y="1007" img="8">
      <span>Sierra<br />(X: 0, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="3001" y="1023" img="8">
      <span>Tango<br />(X: 500, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1007" y="2018" img="8">
      <span>Yankee<br />(X: -500, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2037" y="3008" img="8">
      <span>Whiskey<br />(X: 0, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2664" y="2616" img="8">
      <span>Papa<br />(X: 300, Y: 300)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2596" y="1416" img="8">
      <span>Oscar<br />(X: 300, Y: -300)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="3045" y="1988" img="8">
      <span>Uniform<br />(X: 500, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="3093" y="3034" img="8">
      <span>Victor<br />(X: 500, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1068" y="2996" img="8">
      <span>Xray<br />(X: -500, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1456" y="2588" img="8">
      <span>Quebec<br />(X: -300, Y: 300)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2421" y="1991" img="8">
      <span>Foxtrot<br />(X: 200, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1846" y="2390" img="8">
      <span>Juliett<br />(X: -100, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2025" y="2384" img="8">
      <span>India<br />(X: 0, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2232" y="2393" img="8">
      <span>Hotel<br />(X: 100, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1825" y="1605" img="8">
      <span>Bravo<br />(X: -100, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2023" y="1610" img="8">
      <span>Charlie<br />(X: 0, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2434" y="2198" img="8">
      <span>Golf<br />(X: 200, Y: 100)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1635" y="2008" img="8">
      <span>Lima<br />(X: -200, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1633" y="1810" img="8">
      <span>Mike<br />(X: -200, Y: -100)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="1645" y="2202" img="8">
      <span>Kilo<br />(X: -200, Y: 100)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2224" y="1605" img="8">
      <span>Delta<br />(X: 100, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="SDmarker" x="2416" y="1789" img="8">
      <span>Echo<br />(X: 200, Y: -100)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1006" y="1011" img="11">
      <span>Regula<br />(X: -500, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1411" y="1400" img="11">
      <span>Noemie<br />(X: -300, Y: -300)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2022" y="1007" img="11">
      <span>Sergio<br />(X: 0, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="3001" y="1023" img="11">
      <span>Teresa<br />(X: 500, Y: -500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1007" y="2018" img="11">
      <span>Yacine<br />(X: -500, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2037" y="3008" img="11">
      <span>Walter<br />(X: 0, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2664" y="2616" img="11">
      <span>Pascale<br />(X: 300, Y: 300)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2596" y="1416" img="11">
      <span>Orell<br />(X: 300, Y: -300)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="3045" y="1988" img="11">
      <span>Ulrich<br />(X: 500, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="3093" y="3034" img="11">
      <span>Vanessa<br />(X: 500, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1068" y="2996" img="11">
      <span>Xaviera<br />(X: -500, Y: 500)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1456" y="2588" img="11">
      <span>Quirin<br />(X: -300, Y: 300)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2421" y="1991" img="11">
      <span>Fabia<br />(X: 200, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1846" y="2390" img="11">
      <span>Joelle<br />(X: -100, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2025" y="2384" img="11">
      <span>Ingo<br />(X: 0, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2232" y="2393" img="11">
      <span>Hagan<br />(X: 100, Y: 200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1825" y="1605" img="11">
      <span>Barbel<br />(X: -100, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2032" y="1610" img="11">
      <span>Caspari<br />(X: 0, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2434" y="2198" img="11">
      <span>Giotto<br />(X: 200, Y: 100)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1635" y="2008" img="11">
      <span>Lea<br />(X: -200, Y: 0)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1633" y="1810" img="11">
      <span>Marcel<br />(X: -200, Y: -100)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="1645" y="2022" img="11">
      <span>Khalid<br />(X: -200, Y: 100)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2224" y="1605" img="11">
      <span>Delaina<br />(X: 100, Y: -200)<br />Satellite Dish</span>
    </MM>
    <MM tag="CSDmarker" x="2416" y="1798" img="11">
      <span>Eggen<br />(X: 200, Y: -100)<br />Satellite Dish</span>
    </MM>
    <MM tag="Amarker" x="3270" y="1734" img="1">
      <span
        >Red Argemia:<br />(X: 626, Y: -128)<br />Located in the Deep Pit next to Uniform Satellite
        Dish, near the fence.</span
      >
    </MM>
    <MM tag="Amarker" x="1440" y="2789" img="1">
      <span
        >Blue Argemia:<br />(X: -315, Y: 398)<br />Located right next to Quebec Satellite Dish, in a
        river with bumpy beaches.</span
      >
    </MM>
    <MM tag="Amarker" x="2692" y="2854" img="1">
      <span
        >Green Argemia:<br />(X: 239, Y: 828)<br />Located on the highest point of the map, outside
        the fence, near Victor Satellite Dish.</span
      >
    </MM>
    <MM tag="Amarker" x="731" y="2413" img="1">
      <span
        >Cyan Argemia:<br />(X: -630, Y: 190)<br />(Requires: Shovel, Metal Detector) Located on top
        of a high hill between Quebec and X-ray Satellite Dishes.</span
      >
    </MM>
    <MM tag="Amarker" x="3774" y="429" img="1">
      <span
        >Orange Argemia:<br />(X: 872, Y: -793)<br />Located above the border corner tile key, on
        top of a floating invisible cube that is high up.<br />
        The only way to access this prop is getting on top of the cube and grabbing the prop.</span
      >
    </MM>
    <MM tag="Amarker" x="2103" y="1927" img="1">
      <span
        >Pink Argemia:<br />(X: 34.8, Y: -36.8)<br />Located in a hovering state, it is invisible
        (until it is touched by any object or item in the game),<br />fly a drone straight from
        these approximate coordinates until you bump into it.</span
      >
    </MM>
    <MM tag="DPTmarker" x="745" y="1956" img="3">
      <span>Diggable Spot:<br />(X: -622, Y: -31)<br />EMF Reader.</span>
    </MM>
    <MM tag="DPTmarker" x="1794" y="1925" img="3">
      <span>Diggable Spot:<br />(X: -118, Y: -41)<br />Free Box of LVL 3 Drives.</span>
    </MM>
    <MM tag="DPTmarker" x="2551" y="1983" img="3">
      <span>Diggable Spot:<br />(X: 261, Y: -6)<br />Box of Bones.</span>
    </MM>
    <MM tag="DPTmarker" x="2324" y="1979" img="3">
      <span>Diggable Spot:<br />(X: 149, Y: -10)<br />Cactis Pet.</span>
    </MM>
    <MM tag="DPTmarker" x="2979" y="1802" img="3">
      <span>Diggable Spot:<br />(X: 465, Y: -85)<br />Infinite Growing Basalt Pillars.</span>
    </MM>
    <MM tag="DPTmarker" x="901" y="2625" img="3">
      <span>Diggable Spot:<br />(X: -569, Y: 303)<br />Radioactive Capsule.</span>
    </MM>
    <MM tag="DPTmarker" x="3228" y="2473" img="3">
      <span>Diggable Spot:<br />(X: 567, Y: 237)<br />Limestone Block.</span>
    </MM>
    <MM tag="DPTmarker" x="2923" y="2546" img="3">
      <span>Diggable Spot:<br />(X: 420, Y: 265)<br />Wasp Nest.</span>
    </MM>
    <MM tag="DPTmarker" x="2761" y="1089" img="3">
      <span>Diggable Spot:<br />(X: 378, Y: -461)<br />Librarian's Candle</span>
    </MM>
    <MM tag="DPTmarker" x="2582" y="3227" img="3">
      <span>Diggable Spot:<br />(X: 252, Y: 585)<br />Furfur Altar Piece</span>
    </MM>
    <MM tag="Lmarker" x="3028" y="686" img="6">
      <span>Tombstone<br />(X: 524, Y: -672)<br />Object (Random Spawn)</span>
    </MM>
    <MM tag="Lmarker" x="3341" y="2077" img="6">
      <span>Ship Engine<br />(X: 637, Y: 44)<br />Object</span>
    </MM>
    <MM tag="Lmarker" x="3359" y="3321" img="6">
      <span>SCP-432<br />(X: 613, Y: 623)<br />Object</span>
    </MM>
    <MM tag="Lmarker" x="1673" y="670" img="6">
      <span>Fake Maxwell<br />(X: -166, Y: -665)<br />Object</span>
    </MM>
    <MM tag="Lmarker" x="2874" y="1076" img="6">
      <span>Invisible Boulder<br />(X: 437, Y: -467)<br />Object (Removed)</span>
    </MM>
    <MM tag="Lmarker" x="3374" y="831" img="6">
      <span>Green Campfire<br />(X: 680, Y: -573)<br />Object</span>
    </MM>
    <MM tag="Lmarker" x="2568" y="1321" img="6">
      <span>Hanged Man<br />(X: 280, Y: -349)<br />Object</span>
    </MM>
    <MM tag="Lmarker" x="341" y="306" img="6">
      <span>Erie and Argemia Statues<br />(X: -801, Y: -814)<br />Outside the fence.</span>
    </MM>
    <MM tag="Lmarker" x="1322" y="3375" img="6">
      <span>Guard Post<br />(X: -373, Y: 703)<br />Outside the fence.</span>
    </MM>
    <MM tag="Lmarker" x="2028" y="2014" img="6">
      <span>Main Base<br />(X: 0, Y: 0)<br />Located in the middle of the entire world.</span>
    </MM>
    <MM tag="Lmarker" x="2072" y="2055" img="6">
      <span>Bunker<br />(X: 20, Y: 25)<br />Located right beside the Main Base.</span>
    </MM>
    <MM tag="Lmarker" x="2069" y="1942" img="6">
      <span>Radio Tower<br />(X: 19, Y: -31)<br />Located right beside the Main Base.</span>
    </MM>
    <MM tag="Lmarker" x="2496" y="3130" img="6">
      <span
        >Stonehenge<br />(X: 213, Y: 541)<br />Throw and jump into ATV over the fence to
        access.</span
      >
    </MM>
    <MM tag="Lmarker" x="1332" y="2108" img="6">
      <span
        >Light Bone Pit<br />(X: -352, Y: 47)<br />Located between the Kilo and Lima Satellite
        Dishes, simply walk in between them and up.</span
      >
    </MM>
    <MM tag="Lmarker" x="901" y="2625" img="6">
      <span>Darkened Bone Pit<br />(X: -569, Y: 303)<br />Near X-ray.</span>
    </MM>
    <MM tag="Lmarker" x="3272" y="1732" img="6">
      <span
        >Deep Pit<br />(X: 626, Y: -128)<br />Near Uniform Satellite Dish and near the fence.</span
      >
    </MM>
    <MM tag="Lmarker" x="723" y="841" img="6">
      <span
        >AB Cave (Antibreather Cave)<br />(X: -651, Y: -585)<br />Near Romeo Satellite Dish, on the
        side of a giant cliff.</span
      >
    </MM>
    <MM tag="Lmarker" x="1971" y="815" img="6">
      <span
        >Ariral Picnic<br />(X: -192, Y: -500)<br />Near Sierra Satellite Dish in a valley. (Event
        specific).</span
      >
    </MM>
    <MM tag="Lmarker" x="2821" y="2806" img="6">
      <span
        >Ariral Treehouse<br />(X: 366, Y: 388)<br />Near the Stonehenge Landmark (Event
        specific).</span
      >
    </MM>
    <MM tag="Lmarker" x="743" y="1963" img="6">
      <span>The Hole<br />(X: -618, Y: -27)<br />Near Yankee Satellite Dish.</span>
    </MM>
    <MM tag="Lmarker" x="580" y="1855" img="6">
      <span>Fence Opening<br />(X: -697, Y: -80)<br />Near The Hole.</span>
    </MM>
    <MM tag="Lmarker" x="45" y="1524" img="6">
      <span
        >Secret Staircase<br />(X: 1293, Y: -223)<br />Inaccessible in Storymode,<br />location is
        outside the barrier.</span
      >
    </MM>
    <MM tag="Lmarker" x="1538" y="3963" img="6">
      <span
        >Large Bone Pit<br />(X: -265, Y: 1005)<br />Inaccessible in Storymode, location is outside
        the barrier, near Guard Post.</span
      >
    </MM>
    <MM tag="Lmarker" x="708" y="1553" img="6">
      <span
        >Crashed Ariral Tp Chamber<br />(X: -651, Y: -237)<br />Located in the bottom of the valley
        near the Fence Opening (Event specific).</span
      >
    </MM>
    <MM tag="Lmarker" x="3218" y="2543" img="6">
      <span
        >Abandoned Well<br />(X: 564, Y: 265)<br />Located between the Uniform and Victor satellite
        Dishes.</span
      >
    </MM>
    <MM tag="Lmarker" x="1296" y="843" img="6">
      <span
        >Small Graveyard<br />(X: -347, Y: -563)<br />Located on a hill above Transformer 2.</span
      >
    </MM>
    <MM tag="Lmarker" x="3321" y="1427" img="6">
      <span>Sewer<br />(X: 675, Y: -277)<br />In the river near the Danger Forest.</span>
    </MM>
    <MM tag="Lmarker" x="3114" y="993" img="6">
      <span
        >Leaking Nuclear Barrels<br />(X: 570, Y: -517)<br />In the river near the Danger
        Forest.</span
      >
    </MM>
    <MM tag="Lmarker" x="1623" y="2626" img="6">
      <span
        >Abandoned Sedan<br />(X: -209, Y: 307)<br />In the river near the Quebec Satellite
        Dish.</span
      >
    </MM>
    <MM tag="Lmarker" x="2862" y="2040" img="6">
      <span
        >Wooded Shack<br />(X: 408, Y: 22)<br />Located in a dense forest near Uniform Satellite
        Dish.</span
      >
    </MM>
    <MM tag="Lmarker" x="2073" y="3209" img="6">
      <span
        >Circle of Benches<br />(X: 12, Y: 580)<br />Located between the Whiskey Satellite Dish and
        the Bomb Shelter.</span
      >
    </MM>
    <MM tag="Lmarker" x="2175" y="3306" img="6">
      <span>Bomb Shelter<br />(X: 60, Y: 625)<br />Located near the Circle of Benches.</span>
    </MM>
    <MM tag="Lmarker" x="3245" y="788" img="6">
      <span
        >Danger Forest<br />(X: -642, Y: -586)<br />Located in the corner of land that is cut off by
        the river, near Tango Satellite Dish.</span
      >
    </MM>
    <MM tag="Lmarker" x="3094" y="1545" img="6">
      <span
        >Closed Up Forest<br />(X: 517, Y: -211)<br />Located near the Deep Pit, throw and jump into
        ATV over the fence to access.</span
      >
    </MM>
    <MM tag="Lmarker" x="3960" y="3954" img="6">
      <span
        >Ritual Altar<br />(X: 1994, Y: 1999)<br />You need to perform the Ritual Warp Event in
        order to warp to this landmark.</span
      >
    </MM>
    <MM tag="Lmarker" x="2034" y="1976" img="6">
      <span
        >Green Cabinent Room<br />(X: -1, Y: -14)<br />Innacessible in storymode, you could attempt
        to glitch or noclip inside the SCP-421 to warp there.<br />Actual landmark is located
        underneath the map.</span
      >
    </MM>
    <MM tag="Lmarker" x="2784" y="1205" img="6">
      <span>The Lake<br />(X: -1, Y: -14)<br />Giant lake.</span>
    </MM>
    <MM tag="Lmarker" x="2034" y="974" img="6">
      <span
        >Erie Zone<br />(X: 11, Y: -512)<br />Zone where you can farm and obtain Erie Plushes.</span
      >
    </MM>
    <MM tag="Gmarker" x="2869" y="2410" img="4">
      <span>Transformer 0<br />(X: 396, Y: 199)<br />Gameplay Mechanic</span>
    </MM>
    <MM tag="Gmarker" x="943" y="2485" img="4">
      <span>Transformer 1<br />(X: -548, Y: 232)<br />Gameplay Mechanic</span>
    </MM>
    <MM tag="Gmarker" x="1206" y="1058" img="4">
      <span>Transformer 2<br />(X: -397, Y: -472)<br />Gameplay Mechanic</span>
    </MM>
    <MM tag="Gmarker" x="2155" y="2125" img="4">
      <span>Power Generator<br />(X: 63, Y: 63)<br />Gameplay Mechanic</span>
    </MM>
    <MM tag="Omarker" x="342" y="266" img="7">
      <span
        >Bryn Fruit<br />(X: -785, Y: -821)<br />Located behind a tree near Erie and Argemia
        Statues.</span
      >
    </MM>
    <MM tag="Omarker" x="1904" y="1408" img="7">
      <span
        >Argemia Mug<br />(X: -58, Y: -295)<br />Located on top of the power line pole, can only be
        accessed by grabbing it, no object or prop can push it off.</span
      >
    </MM>
    <MM tag="Omarker" x="2860" y="2042" img="7">
      <span
        >Wendigo Skull<br />(X: 408, Y: 22)<br />Located within the Wooded Shack underneath an red
        ariral forest tree.</span
      >
    </MM>
    <MM tag="Omarker" x="3964" y="3958" img="7">
      <span
        >Fire Rune Slab<br />(X: 1,991, Y: 1999)<br />Will require the Ritual Warp Event, dig up the
        slab from behind ritual table and jump out the island to land safely on top of the Small
        Graveyard Landmark.</span
      >
    </MM>
    <MM tag="Omarker" x="2849" y="2397" img="7">
      <span
        >Air Rune Slab<br />(X: 387, Y:196)<br />You must grab it from the top of the Powerline
        Pole.</span
      >
    </MM>
    <MM tag="Omarker" x="2806" y="1157" img="7">
      <span>Water Rune Slab<br />(X: 418, Y: -422)<br />Dig at the deepest point of The Lake.</span>
    </MM>
    <MM tag="Omarker" x="3107" y="1620" img="7">
      <span
        >Earth Rune Slab<br />(X: 538, Y: -181)<br />Dig in exactly as the coordinates say which
        would be under a bush.</span
      >
    </MM>
    <MM tag="Omarker" x="2336" y="1032" img="7">
      <span>Fishing Gear<br />(X: 175, Y: -460)<br />Gives you a box full of fishing gear.</span>
    </MM>
    <MM tag="Omarker" x="2477" y="1373" img="7">
      <span>Barrel of MREs<br />(X: 235, Y: -323)<br />Barrel of free food.</span>
    </MM>
    <MM tag="Omarker" x="2067" y="2063" img="7">
      <span
        >Omega Kerfus Blueprint<br />(X: 17, Y: 40)<br />Crafting blueprint for Omega
        Kerfuses.</span
      >
    </MM>
    <MM tag="Omarker" x="3217" y="275" img="7">
      <span>Water Rune Box<br />(X: 627, Y: -874)<br />Farm Water Runes</span>
    </MM>
    <MM tag="Omarker" x="1407" y="2303" img="7">
      <span>Earth Rune Box<br />(X: -320, Y: 148)<br />Farm Earth Runes</span>
    </MM>
    <MM tag="Omarker" x="664" y="889" img="7">
      <span>Furfur Altar Piece<br />(X: -671, Y: -563)<br />Furfur Altar Piece</span>
    </MM>
    <MM tag="Omarker" x="2756" y="1255" img="7">
      <span
        >Pickaxe<br />(X: -391, Y: -384)<br />You can mine crystals in the cave using this.</span
      >
    </MM>
    <MM tag="Omarker" x="672" y="684" img="7">
      <span>EMF Detected Spot<br />(X: -645, Y: -645)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2813" y="2479" img="5">
      <span>EMF Detected Spot<br />(X: 373, Y: 234)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2568" y="1322" img="5">
      <span>EMF Detected Spot<br />(X: -281, Y: -347)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2105" y="2031" img="5">
      <span>EMF Detected Spot<br />(X: -7, Y: 6)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="1649" y="2019" img="5">
      <span>EMF Detected Spot<br />(X: -197, Y: 2)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="3220" y="2541" img="5">
      <span>EMF Detected Spot<br />(X: 564, Y: 265)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2862" y="2039" img="5">
      <span>EMF Detected Spot<br />(X: 409, Y: 22)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2068" y="1944" img="5">
      <span>EMF Detected Spot<br />(X: 19, Y: -31)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="3026" y="683" img="5">
      <span>EMF Detected Spot<br />(X: 524, Y: -672)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="1626" y="2608" img="5">
      <span>EMF Detected Spot<br />(X: -209, Y: 306)<br /></span>
    </MM>
    <MM tag="GDetectmarker" x="2004" y="2017" img="5">
      <span>EMF Detected Spot<br />(X: -11, Y: 19)<br /></span>
    </MM>
    <MM tag="Emarker" x="2187" y="2011" img="10">
      <span>Obelisk Event<br />(X: 77, Y: 2)<br /></span>
    </MM>
    <MM tag="Emarker" x="721" y="828" img="10">
      <span>AB Plush Event<br />(X: 409, Y: 22)<br /></span>
    </MM>
    <MM tag="Emarker" x="2069" y="1927" img="10">
      <span>Ariral Ship Tower Event<br />(X: 19, Y: -36)<br /></span>
    </MM>
    <MM tag="Emarker" x="2627" y="1905" img="10">
      <span>Ariral Ship Event<br />(X: 297, Y: -49)<br /></span>
    </MM>
    <MM tag="Emarker" x="2037" y="2011" img="10">
      <span>Ding Dong Ditch Event<br />(X: 1, Y: 6)<br /></span>
    </MM>
    <MM tag="Emarker" x="2009" y="1980" img="10">
      <span>Brownie Event<br />(X: -12, Y: -11)<br /></span>
    </MM>
    <MM tag="Emarker" x="2016" y="1988" img="10">
      <span>Vent Break Event<br />(X: -8, Y: -6)<br /></span>
    </MM>
    <MM tag="Emarker" x="2037" y="2040" img="10">
      <span>Chair Skeleton Event<br />(X: 1, Y: 18)<br /></span>
    </MM>
    <MM tag="Emarker" x="2045" y="2019" img="10">
      <span>Another Vent Broken Event<br />(X: 8, Y: 6)<br /></span>
    </MM>
    <MM tag="Emarker" x="1991" y="2047" img="10">
      <span>Poweroff Event<br />(X: -21, Y: 21)<br /></span>
    </MM>
    <MM tag="Emarker" x="1992" y="1992" img="10">
      <span>Ariral Anti-G Event<br />(X: -19, Y: 4)<br /></span>
    </MM>
    <MM tag="Emarker" x="2007" y="1985" img="10">
      <span>Reorganizing Event<br />(X: -12, Y: -9)<br /></span>
    </MM>
    <MM tag="Emarker" x="2037" y="2000" img="10">
      <span>Blue Lights Prank Event<br />(X: 1, Y: 18)<br /></span>
    </MM>
    <MM tag="Emarker" x="2008" y="1984" img="10">
      <span>Wendigo Toilet Event<br />(X: -12, Y: 0)<br /></span>
    </MM>
    <MM tag="Emarker" x="2006" y="1984" img="10">
      <span>Shit Duende Event<br />(X: -12, Y: 0)<br /></span>
    </MM>
    <MM tag="Emarker" x="2040" y="1976" img="10">
      <span>Arir Gun Event<br />(X: 7, Y: -13)<br /></span>
    </MM>
    <MM tag="Emarker" x="3080" y="2037" img="10">
      <span>Mannequin Disappearance Event<br />(X:512, Y: 23)<br /></span>
    </MM>
    <MM tag="Emarker" x="2040" y="2038" img="10">
      <span>Virus Event<br />(X: 1, Y: 18)<br /></span>
    </MM>
    <MM tag="Emarker" x="2016" y="2028" img="10">
      <span>Brickwall Event (Removed)<br />(X: -7, Y: 5)<br /></span>
    </MM>
    <MM tag="Emarker" x="3036" y="1977" img="10">
      <span>Alien Cutout Event<br />(X: 493, Y: -6)<br /></span>
    </MM>
    <MM tag="Emarker" x="2823" y="2808" img="10">
      <span>Ariral Treehouse Construction Event<br />(X: 366, Y: 388)<br /></span>
    </MM>
    <MM tag="Emarker" x="2805" y="2809" img="10">
      <span>Ariral Yogurt Event<br />(X: 366, Y: 389)<br /></span>
    </MM>
    <MM tag="Emarker" x="1973" y="817" img="10">
      <span>Ariral Picnic Event<br />(X: -192, Y: -500)<br /></span>
    </MM>
    <MM tag="Emarker" x="705" y="1550" img="10">
      <span>Short Arir Tp Event<br />(X: -651, Y: -237)<br /></span>
    </MM>
    <MM tag="Emarker" x="782" y="1263" img="10">
      <span>Bed Prank Event<br />(X: -601, Y: -365)<br /></span>
    </MM>
    <MM tag="Emarker" x="1312" y="1800" img="10">
      <span>Howl Event<br />(X: -345, Y: -103)<br /></span>
    </MM>
    <MM tag="Emarker" x="3343" y="2081" img="10">
      <span>Rozital Ship Event<br />(X: 637, Y: 44)<br /></span>
    </MM>
    <MM tag="Emarker" x="3338" y="2071" img="10">
      <span>Ship Engine Event<br />(X: 637, Y: 44)<br /></span>
    </MM>
    <MM tag="Emarker" x="2494" y="3134" img="10">
      <span>Hell Opening Event<br />(X: 213, Y: 541)<br /></span>
    </MM>
    <MM tag="Emarker" x="2494" y="3134" img="10">
      <span>Ritual Warp Event<br />(X: 408, Y: 22)<br /></span>
    </MM>
    <MM tag="Emarker" x="3963" y="3950" img="10">
      <span>Ritual Event<br />(X: 1994, Y: 1999)<br /></span>
    </MM>
    <MM tag="Emarker" x="676" y="686" img="10">
      <span>Log Event<br />(X: -645, Y: -645)<br /></span>
    </MM>
    <MM tag="Emarker" x="2810" y="2477" img="10">
      <span>Log Event<br />(X: 373, Y: 234)<br /></span>
    </MM>
    <MM tag="Emarker" x="2037" y="2038" img="10">
      <span>Looker Event<br />(X: 1, Y: 18)<br /></span>
    </MM>
    <MM tag="Emarker" x="2970" y="2415" img="10">
      <span>Blood Skeleton Event<br />(X: 450, Y: 196)<br /></span>
    </MM>
    <MM tag="Emarker" x="2032" y="2030" img="10">
      <span>Soltomia Cleaning Event<br />(X: 0, Y: 15)<br /></span>
    </MM>
    <MM tag="Emarker" x="2062" y="2005" img="10">
      <span>Tardis Event<br />(X: 16, Y: 2)<br /></span>
    </MM>
    <MM tag="Pmarker" x="1310" y="3363" img="12">
      <span>Pumpkin (Halloween Special)<br />(X: -382, Y: 695)<br />Located near Guard Post.</span>
    </MM>
    <MM tag="Pmarker" x="1843" y="2387" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: -103, Y: 199)<br />Located on the top level of the
        Juliett Satellite Dish.</span
      >
    </MM>
    <MM tag="Pmarker" x="2016" y="2026" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: -6, Y: 10)<br />Located behind some supply
        boxes.</span
      >
    </MM>
    <MM tag="Pmarker" x="2046" y="2006" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 6, Y: 0)<br />Located in front of the computer
        terminal.</span
      >
    </MM>
    <MM tag="Pmarker" x="2050" y="2041" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 10, Y: 20)<br />Located on the corner edge of the Main
        Base roof.</span
      >
    </MM>
    <MM tag="Pmarker" x="2559" y="1982" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 221, Y: -61)<br />Located on top of the boulder.</span
      >
    </MM>
    <MM tag="Pmarker" x="3045" y="636" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: -534, Y: -699)<br />Located on the fence ledge behind
        lamp post.</span
      >
    </MM>
    <MM tag="Pmarker" x="1848" y="1391" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: -192, Y: -238)<br />Located near the same powerline
        pole that the Argemia Mug sits on.</span
      >
    </MM>
    <MM tag="Pmarker" x="2086" y="1980" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 30, Y: -13)<br />Located on top of the event pole near
        the Main Base.</span
      >
    </MM>
    <MM tag="Pmarker" x="1907" y="2019" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: -64, Y: 7)<br />Located on top of the bridge.</span
      >
    </MM>
    <MM tag="Pmarker" x="2361" y="1757" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 174, Y: -127)<br />Located underwater near Echo
        Satellite Dish.</span
      >
    </MM>
    <MM tag="Pmarker" x="2043" y="3008" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 2, Y: 503)<br />Located in the base of Whiskey
        Satellite Dish.</span
      >
    </MM>
    <MM tag="Pmarker" x="3026" y="3070" img="12">
      <span
        >Pumpkin (Halloween Special)<br />(X: 466, Y: 514)<br />Located near the Victor Satellite
        Dish.</span
      >
    </MM>
    <MM tag="Nmarker" x="3301" y="703" img="13">
      <span>Flesh Rain<br />(X: 651, Y: -641)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="3095" y="1544" img="13">
      <span>Tree Test<br />(X: 518, Y: -211)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2495" y="3132" img="13">
      <span>Hell Message<br />(X: 213, Y: 541)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2170" y="3306" img="13">
      <span>Fisherman's Note<br />(X: 58, Y: 627)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2044" y="2002" img="13">
      <span>Report Example<br />(X: 5, Y: 0)<br />Note (Removed)</span>
    </MM>
    <MM tag="Nmarker" x="2006" y="2039" img="13">
      <span>Smiley Face<br />(X: -13, Y: 19)<br />Note (Removed)</span>
    </MM>
    <MM tag="Nmarker" x="2013" y="2033" img="13">
      <span>Dee's Diary<br />(X: -9, Y: 6)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2035" y="2011" img="13">
      <span>Inside Password<br />(X: 1, Y: 5)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="1983" y="2005" img="13">
      <span>Admin Password<br />(X: -14, Y: -10)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2072" y="2046" img="13">
      <span>Bunker Warning<br />(X: 20, Y: 23)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2069" y="1941" img="13">
      <span>Placeholder Test<br />(X: 19, Y: -31)<br />Note (Removed)</span>
    </MM>
    <MM tag="Nmarker" x="2069" y="2057" img="13">
      <span>Behind You<br />(X: 17, Y: 36)<br />Note (Removed)</span>
    </MM>
    <MM tag="Nmarker" x="1931" y="2017" img="13">
      <span>The Hole Preparation<br />(X: 53, Y: 6)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="1332" y="2107" img="13">
      <span>The Hole Expedition<br />(X: -351, Y: 46)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="743" y="1959" img="13">
      <span>The Hole Discovery<br />(X: -620, Y: -29)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="3273" y="1732" img="13">
      <span>Mockery<br />(X: 626, Y: -128)<br />Note (Removed)</span>
    </MM>
    <MM tag="Nmarker" x="1871" y="1817" img="13">
      <span>Paper Alien Warning<br />(X: -80, Y: -94)<br />Note (Event Specific)</span>
    </MM>
    <MM tag="Nmarker" x="2729" y="3316" img="13">
      <span>Music Warning<br />(X: 388, Y: 531)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2032" y="2059" img="13">
      <span>Figure Encounter<br />(X: -1, Y: 27)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="1212" y="1044" img="13">
      <span>Cryptomining Tips<br />(X: -394, Y: -475)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="1994" y="2048" img="13">
      <span>Rocks<br />(X: -19, Y: 19)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="1985" y="1998" img="13">
      <span>Recycling<br />(X: -23, Y: 11)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="2032" y="2019" img="13">
      <span>A Secret<br />(X: -0, Y: 22)<br />Note</span>
    </MM>
    <MM tag="Nmarker" x="743" y="1934" img="13">
      <span>A Scam<br />(X: -618, Y: -16)<br />Note (Event Specific)</span>
    </MM>
  </div>
  <RibbonContainer
    @ribbonClicked="(e) => ribbonAction(e)"
    @tabToggled="(e) => toggleMarkerVisibility(e)"
    @allTabsToggled="() => toggleAllMarkers()"
  />
  <MapCoords :x="x" :y="y" />
</template>

<style>
#map {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--background);
}

#elem-map {
  width: 4000px;
  height: 4000px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
}
</style>
