import sharp from 'sharp';

const iconSizes = {
  mdpi: 48,
  hdpi: 72,
  xhdpi: 96,
  xxhdpi: 144,
  xxxhdpi: 192
};

const foregroundSize = 108;
const sourcePath = '/home/devbox/project/tangshi512.png';
const resDir = '/home/devbox/project/android/app/src/main/res';

(async () => {
  for (const [dpi, size] of Object.entries(iconSizes)) {
    const dir = `${resDir}/mipmap-${dpi}`;

    await sharp(sourcePath)
      .resize(size, size)
      .toFile(`${dir}/ic_launcher.png`);
    await sharp(sourcePath)
      .resize(size, size)
      .toFile(`${dir}/ic_launcher_round.png`);

    const foreground = Math.round(size * 0.8889);
    await sharp(sourcePath)
      .resize(foreground, foreground)
      .toFile(`${dir}/ic_launcher_foreground.png`);

    console.log(`Generated ${dpi}: ${size}x${size} icons, foreground: ${foreground}x${foreground}`);
  }

  await sharp(sourcePath)
    .resize(foregroundSize, foregroundSize)
    .toFile(`${resDir}/mipmap-anydpi-v26/ic_launcher_foreground.png`);

  const splashSizes = {
    mdpi: 240,
    hdpi: 320,
    xhdpi: 480,
    xxhdpi: 640,
    xxxhdpi: 960
  };

  for (const [dpi, size] of Object.entries(splashSizes)) {
    const dir = `${resDir}/drawable-${dpi}`;
    await sharp(sourcePath)
      .resize(size, size)
      .toFile(`${dir}/splash.png`);
    console.log(`Generated splash ${dpi}: ${size}x${size}`);
  }

  console.log('All icons generated successfully!');
})();