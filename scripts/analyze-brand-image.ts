import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const IMG = '/home/z/my-project/upload/pasted_image_1783679550493.png';

const PROMPT = `Analyze this image EXTREMELY thoroughly. This is a design reference / brand screenshot from a user. Provide:

1. **WHAT IS SHOWN**: Describe everything visible — UI elements, text, colors, fonts, layout, logos, icons, illustrations, gradients, patterns.

2. **ALL TEXT**: List every single word, letter, number visible in the image (verbatim, preserving case).

3. **COLORS**: Identify every color used. Give approximate hex codes. Note backgrounds, foregrounds, accents, gradients.

4. **TYPOGRAPHY**: Describe the fonts used. Are they serif/sans-serif/script/handwritten? Bold/regular/light? Italic? Any distinctive letterforms?

5. **LAYOUT**: How is the content arranged? Cards, columns, hero, grid? Padding, spacing density?

6. **BRAND ELEMENTS**: Any logo, brand mark, tagline, or specific brand identifier visible?

7. **PURPOSE**: What is this image — a logo design, a landing page mockup, a brand guide, a typography sample, a hero section, something else?

8. **RECREATE INSTRUCTIONS**: If I had to recreate this exact design in code (HTML/CSS), what specific instructions would I need? Be exhaustive.

Be EXTREMELY detailed. The user wants to use this as the brand reference for their website.`;

async function main() {
  console.log('🚀 Initializing ZAI...');
  const zai = await ZAI.create();

  const buf = fs.readFileSync(IMG);
  const b64 = buf.toString('base64');
  console.log(`📦 Image loaded: ${(buf.length / 1024).toFixed(1)} KB`);

  const response = await zai.chat.completions.createVision({
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: PROMPT },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
      ],
    }],
    thinking: { type: 'enabled' },
  });

  const out = response.choices?.[0]?.message?.content || '(empty)';
  fs.writeFileSync('/home/z/my-project/download/brand-image-analysis.md', out);
  console.log(`\n✅ Analysis saved (${out.length} chars)\n`);
  console.log(out);
}

main().catch((e) => { console.error('❌', e); process.exit(1); });
