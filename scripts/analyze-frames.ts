import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const FRAMES_DIR = '/home/z/my-project/download';
const OUTPUT_PATH = '/home/z/my-project/download/frames-analysis.md';

const PROMPT = `These are ${7} sequential frames extracted from a 13-second screen recording of a website. The website has 3 different pages/views shown in sequence.

Please analyze ALL frames TOGETHER and provide an EXTREMELY thorough analysis:

1. **OVERALL**: What kind of website is this? (dashboard, e-commerce, blog, admin panel, SaaS, landing page, etc.)

2. **PAGE-BY-PAGE BREAKDOWN**: Identify the 3 distinct pages/views shown across these frames. For EACH page describe in detail:
   - Page name/purpose (Home, Dashboard, Settings, Login, Product List, etc.)
   - Header/Navbar: logo, links, buttons, search bar, user menu
   - Sidebar (if any): menu items and icons
   - Main content: sections, cards, tables, forms, charts, lists
   - Footer (if any)
   - ALL visible TEXT (headlines, labels, button text, menu items, captions, placeholders)
   - Colors used (background, primary, accent, text - hex if possible)
   - Typography (serif/sans-serif, weight, sizes)
   - Icons and images
   - Interactive elements (buttons, inputs, dropdowns, tabs, toggles, modals)
   - Layout pattern (grid, list, columns, hero+sections)
   - Spacing density (compact vs airy)

3. **NAVIGATION FLOW**: How does the user move between the 3 pages? What triggers transitions?

4. **DESIGN SYSTEM**: Material Design / Tailwind / Bootstrap / custom? Light/dark? Rounded/sharp corners? Shadows? Glassmorphism?

5. **TECH STACK CLUES**: React, Vue, Next.js? UI library (shadcn, MUI, Ant, Chakra)? Styling?

6. **RECREATE INSTRUCTIONS**: If I had to rebuild pixel-by-pixel, what specific instructions would I need? List every component, color, layout decision.

Be EXHAUSTIVE. Mention every button, label, color, icon. Goal: recreate the website exactly.`;

async function main() {
  console.log('🚀 Initializing ZAI...');
  const zai = await ZAI.create();

  // Load all frames as base64
  const frames = [];
  for (let i = 1; i <= 7; i++) {
    const fp = path.join(FRAMES_DIR, `frame_${String(i).padStart(2, '0')}.png`);
    if (fs.existsSync(fp)) {
      const buf = fs.readFileSync(fp);
      const b64 = buf.toString('base64');
      frames.push({ idx: i, b64, size: buf.length });
      console.log(`  ✓ Loaded frame ${i} (${(buf.length/1024).toFixed(1)} KB)`);
    }
  }

  console.log(`📦 Sending ${frames.length} frames to vision API...`);

  const content: any[] = [{ type: 'text', text: PROMPT }];
  for (const f of frames) {
    content.push({
      type: 'image_url',
      image_url: { url: `data:image/png;base64,${f.b64}` },
    });
  }

  const response = await zai.chat.completions.createVision({
    messages: [{ role: 'user', content }],
    thinking: { type: 'enabled' },
  });

  const out = response.choices?.[0]?.message?.content || '(empty response)';
  fs.writeFileSync(OUTPUT_PATH, out);
  console.log(`\n✅ Analysis saved to ${OUTPUT_PATH}`);
  console.log(`Length: ${out.length} chars`);
  console.log('\n--- Preview (first 2000 chars) ---\n');
  console.log(out.slice(0, 2000));
}

main().catch((e) => {
  console.error('❌', e);
  process.exit(1);
});
