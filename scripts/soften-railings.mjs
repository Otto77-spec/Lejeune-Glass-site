import sharp from 'sharp';
import { readdir, writeFile, readFile } from 'fs/promises';
import { join } from 'path';

const dir = 'public/images/projects/railings';
const files = (await readdir(dir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Processing ${files.length} railings images...`);

for (const file of files) {
  const filePath = join(dir, file);

  // Read into buffer first so sharp has no file handle open during write
  const inputBuf = await readFile(filePath);

  const outputBuf = await sharp(inputBuf)
    .rotate()                          // auto-fix EXIF rotation
    .blur(0.6)                         // gentle Gaussian blur — kills harsh phone-sharpening
    .modulate({ saturation: 0.92, brightness: 1.02 }) // slight desaturation, lift brightness
    .sharpen({ sigma: 0.4, m1: 0, m2: 1 }) // subtle re-sharpen for clarity without crispness
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  await writeFile(filePath, outputBuf);
  console.log(`✓ ${file}`);
}

console.log('Done.');
