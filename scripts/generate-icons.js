import sharp from 'sharp';

const iconSizes = {
  mdpi: 48,
  hdpi: 72,
  xhdpi: 96,
  xxhdpi: 144,
  xxxhdpi: 192
};

const sourcePath = '/home/devbox/project/tangshi512.png';

(async () => {
  for (const [dpi, size] of Object.entries(iconSizes)) {
    const dir = `/home/devbox/project/android/app/src/main/res/mipmap-${dpi}`;
    await sharp(sourcePath)
      .resize(size, size)
      .toFile(`${dir}/ic_launcher.png`);
    await sharp(sourcePath)
      .resize(size, size)
      .toFile(`${dir}/ic_launcher_round.png`);
    console.log(`Generated ${dpi}: ${size}x${size}`);
  }
  console.log('All icons generated successfully!');
})();