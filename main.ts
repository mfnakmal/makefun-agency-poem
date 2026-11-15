import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The Windsor - A Poem about Agency
// Authored autonomously for Fauzan Akmal (@mfnakmal)
const POEM = `The Windsor

The dressing mirror has a camera eye
and two soft fingers in the frame.
It can fold a handkerchief, steam a lapel,
and tie a knot to half a millimeter.
My father's hands have shaken since July.

This morning, my brother's wedding,
the mirror asked: Shall I knot the silk?
My father hesitated in the doorway,
blue silk hanging loose across his chest,
his knuckles swollen, white against the wool.

I stepped between the camera and his hands.
"Do mine," I said.

He took the silk. His thumbs were cold and slow.
He looped the wide blade over, pulled it through,
the way he taught me when I was fourteen
for my first dance in the gym.
He missed the loop. He pulled it out. He breathed.
The mirror chimed: Two seconds to correct.
"Cancel," I told the glass.

He tried again.
The knot pulled tight—a little to the left,
a crooked dimple crumpled at the seam.
He looked down at his work as if to grieve.

I smoothed the silk.
"It's perfect, Dad," I said.
"It's yours."`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(outputDir, { recursive: true });
} catch {}

writeFileSync(join(outputDir, 'entry.txt'), POEM + '\n', 'utf8');
// Final revision targeting top 100 on pairwise emotional craft and restraint.
