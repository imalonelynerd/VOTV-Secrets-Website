# VOTV-Secrets-Website

An attempt at remaking this [website](https://squarezeb.github.io/VOTV-Secrets-Website) with Vue.js.

## Test it !

```bash
npm install
npm run dev #vite
```

## Page Cleanup steps :
1. remove custom styling (beware IntelliJ's regex match !)
2. edit image paths ([Page]/Images -> Images/[Page])
3. replace every "Info" blocks with Spoilers (+ reformat spoiler content)
4. replace every "Sound" blocks with SoundListener
5. replace every image with "ImageViewer"
6. remove useless divs
7. redo links

## TODO
- [x] finish placing all the markers
- [x] change header title on page change
- [x] change SoundListener's appearance
- [x] change ImageViewer appearance
- [x] redo SoundListener's source bloc
- [ ] reduce big message blocks (with span)
- [ ] add back custom styling
- [x] check for arbo errors
- [ ] add image grouping (with divs)
- [x] general lint check
- [ ] redo links
- [ ] reimplement the "search" module
- [ ] reimplement alignment buttons
- [ ] remake markers icons