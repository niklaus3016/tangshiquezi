const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = './tangshi512.png';
const resDir = './android/app/src/main/res';

const splashSizes = {
  mdpi: 240,
  hdpi: 320,
  xhdpi: 480,
  xxhdpi: 640,
  xxxhdpi: 960
};

async function generate() {
  for (const [dpi, size] of Object.entries(splashSizes)) {
    const dir = path.join(resDir, 'drawable-' + dpi);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await sharp(sourcePath)
      .resize(size, size)
      .toFile(path.join(dir, 'splash.png'));
    console.log('Generated splash ' + dpi + ': ' + size + 'x' + size);
  }
  console.log('All splash screens generated!');
}

generate();