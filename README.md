# VOTV-Secrets-Website

An attempt at remaking this [website](https://squarezeb.github.io/VOTV-Secrets-Website) with Vue.js.

## Test it !

```bash
npm install
npm run dev
#vite
```

## Page Cleanup steps (deprecated):
1. remove custom styling (beware IntelliJ's regex match !)
2. edit image paths ([Page]/Images -> Images/[Page])
3. replace every "Info" blocks with Spoilers (+ reformat spoiler content)
4. replace every "Sound" blocks with SoundListener
5. replace every image with "ImageViewer"
6. remove useless divs
7. redo links

## Tasks for contributors
- [ ] replace every table with InfoCard (long !)
    - Objects
    - Entities
    - Endings
    - Achievements
    - Dreams
    - Commands
    - Structures
- [ ] redo links
- [ ] add back custom styling

## TODO
- [x] finish placing all the markers
- [x] change header title on page change
- [x] change SoundListener's appearance
- [x] change ImageViewer appearance
- [x] redo SoundListener's source bloc
- [x] check for arbo errors
- [x] add image grouping (with divs)
- [x] general lint check
- [ ] reimplement the "search" module
- [ ] reimplement alignment buttons
- [ ] remake markers icons
- [x] terminal component
- [x] redo credits
- [ ] change CardInfo fold behaviour


- **For Nerd, check your Notion for rest :3**