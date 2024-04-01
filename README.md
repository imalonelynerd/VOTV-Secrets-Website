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
- [ ] finish placing all the markers
- [ ] change header title on page change
- [x] change SoundListener's appearance
- [x] change ImageViewer appearance
- [ ] check for arbo errors
- [x] general lint check
- [ ] redo links