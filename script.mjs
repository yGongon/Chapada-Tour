import fs from 'fs';

let toursContent = fs.readFileSync('src/data/tours.ts', 'utf-8');
const imageUrl = 'https://ik.imagekit.io/ozcvccl1z/Pacotes%20de%201%20dia/Burac%C3%A3o%20e%20fumacinha/WhatsApp%20Image%202026-07-17%20at%2019.54.03.jpeg';

// The tours are exported as an array `export const tours: Tour[] = [ { ... }, { ... } ];`
// We need to parse each object or just do regex replacements.
// Since it's a TS file with full content, we can use a regex to match each tour block,
// check if it mentions 'fumacinha' (case insensitive), and if so, insert the image URL as the first item in the images array.

let newToursContent = toursContent.replace(/\{\s*id:\s*['"][\s\S]*?(?=\n  \}(,|\n\]))/g, (tourBlock) => {
  if (tourBlock.toLowerCase().includes('fumacinha')) {
    // Check if the image array already has it
    if (!tourBlock.includes(imageUrl)) {
      // Find the images array and insert the image at the top
      return tourBlock.replace(/images:\s*\[/, `images: [\n      "${imageUrl}",`);
    } else {
      // If it already has it, we need to make sure it's the first one. Let's just remove it and re-add at the top.
      let withoutImage = tourBlock.replace(new RegExp(`\\s*"${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",?`, 'g'), '');
      return withoutImage.replace(/images:\s*\[/, `images: [\n      "${imageUrl}",`);
    }
  }
  return tourBlock;
});

fs.writeFileSync('src/data/tours.ts', newToursContent, 'utf-8');
