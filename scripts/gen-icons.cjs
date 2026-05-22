const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = './tangshi512.png';
const resDir = './android/app/src/main/res';

const iconSizes = {
  mdpi: 48,
  hdpi: 72,
  xhdpi: 96,
  xxhdpi: 144,
  xxxhdpi: 192
};

const foregroundSize = 108;

const splashSizes = {
  mdpi: 240,
  hdpi: 320,
  xhdpi: 480,
  xxhdpi: 640,
  xxxhdpi: 960
};

async function generate() {
  // Generate mipmap icons
  for (const [dpi, size] of Object.entries(iconSizes)) {
    const dir = path.join(resDir, 'mipmap-' + dpi);

    await sharp(sourcePath)
      .resize(size, size)
      .toFile(path.join(dir, 'ic_launcher.png'));
    console.log('Generated ' + dpi + ' ic_launcher: ' + size + 'x' + size);

    await sharp(sourcePath)
      .resize(size, size)
      .toFile(path.join(dir, 'ic_launcher_round.png'));
    console.log('Generated ' + dpi + ' ic_launcher_round: ' + size + 'x' + size);

    const fgSize = Math.round(size * 0.8889);
    await sharp(sourcePath)
      .resize(fgSize, fgSize)
      .toFile(path.join(dir, 'ic_launcher_foreground.png'));
    console.log('Generated ' + dpi + ' ic_launcher_foreground: ' + fgSize + 'x' + fgSize);
  }

  // Generate mipmap-anydpi-v26 foreground
  await sharp(sourcePath)
    .resize(foregroundSize, foregroundSize)
    .toFile(path.join(resDir, 'mipmap-anydpi-v26/ic_launcher_foreground.png'));
  console.log('Generated mipmap-anydpi-v26/ic_launcher_foreground: ' + foregroundSize + 'x' + foregroundSize);

  // Generate splash screens
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

  console.log('All icons generated successfully!');
}

generate();