import sharp from 'sharp'
import { renameSync, unlinkSync } from 'node:fs'

const NAVY = '#0A0E27'
const NAVY_RGB = [
  [10, 14, 39],
  [6, 13, 31],
  [11, 37, 69],
  [26, 47, 79],
  [20, 42, 72],
]
const TOLERANCE = 22

async function makeBackgroundTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]

    const isNavyBg = NAVY_RGB.some(([nr, ng, nb]) => {
      const dist = Math.sqrt((r - nr) ** 2 + (g - ng) ** 2 + (b - nb) ** 2)
      return dist <= TOLERANCE
    })

    if (isNavyBg) {
      data[i + 3] = 0
    }
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath)
}

const navLogo = 'public/images/dnbridge-logo-nav.png'
const tmp = 'public/images/dnbridge-logo-nav.tmp.png'

await makeBackgroundTransparent(navLogo, tmp)
renameSync(tmp, navLogo)

await sharp(navLogo)
  .resize(32, 32, { fit: 'contain', background: NAVY })
  .png()
  .toFile('app/icon.png')

await sharp(navLogo)
  .resize(180, 180, { fit: 'contain', background: NAVY })
  .png()
  .toFile('app/apple-icon.png')

console.log('Nav logo background removed; favicons regenerated with', NAVY)
