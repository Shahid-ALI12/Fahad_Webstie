import ZAI from '/home/z/.bun/install/global/node_modules/z-ai-web-dev-sdk/dist/index.js';
import fs from 'fs';
import path from 'path';

const VIDEO_PATH = '/home/z/my-project/upload/10.07.2026_14.35.09_REC.mp4';
const OUTPUT_DIR = '/home/z/my-project/download';

const PROMPT = `This is a screen recording of a website that has 3 pages. Please analyze it VERY DEEPLY and THOROUGHLY. I need to recreate this website, so provide an extremely detailed analysis. Cover ALL of the following:

1. **Overall Website Theme & Purpose**: What kind of website is this? (e-commerce, dashboard, portfolio, SaaS, blog, etc.) What is its main purpose?

2. **Page-by-Page Breakdown (3 pages)**:
   - For EACH of the 3 pages shown in the recording:
     * Page name/URL (if visible)
     * Page purpose
     * Full layout structure (header, sidebar, hero, sections, footer)
     * Every visible component (navbars, buttons, cards, forms, tables, lists, modals, etc.)
     * Exact text content visible (headlines, labels, button text, menu items)
     * Icons used and their placement
     * Images/media shown

3. **Navigation Flow**: How does the user navigate between the 3 pages? What clicks/interactions happen? In what order?

4. **Visual Design System**:
   - Primary colors (give hex codes if you can estimate them)
   - Secondary/accent colors
   - Background colors
   - Typography style (serif/sans-serif, bold/regular, sizes)
   - Spacing and padding patterns
   - Border radius (rounded? sharp?)
   - Shadow usage
   - Overall style (modern/minimalist/material/flat/neumorphic/etc.)

5. **UI Components Detail**: List every distinct UI component type you see (dropdowns, tabs, breadcrumbs, search bars, filters, pagination, badges, avatars, charts, etc.)

6. **Responsive Behavior**: Any visible responsive design hints?

7. **Interactions & Animations**: Any hover effects, transitions, dropdowns opening, modals appearing, etc.?

8. **Branding**: Logo? Brand name? Tagline?

9. **Content/Data**: What kind of data/content is displayed? (products, users, stats, articles, etc.)

Please be EXHAUSTIVE. I need every visible detail to recreate this website accurately.`;

async function analyzeWithVideo() {
  try {
    const zai = await ZAI.create();

    const videoBuffer = fs.readFileSync(VIDEO_PATH);
    const base64Video = videoBuffer.toString('base64');
    const dataUrl = `data:video/mp4;base64,${base64Video}`;
    console.log(`Video size: ${(videoBuffer.length / 1024 / 1024).toFixed(2)} MB`);

    const messages = [
      {
        role: 'user',
        content: [
          { type: 'text', text: PROMPT },
          { type: 'video_url', video_url: { url: dataUrl } }
        ]
      }
    ];

    console.log('Sending vision request...');
    const response = await zai.chat.completions.createVision({
      model: 'glm-4.6v',
      messages,
      thinking: { type: 'enabled' }
    });

    const reply = response.choices?.[0]?.message?.content;
    const outputPath = path.join(OUTPUT_DIR, 'video-analysis.md');
    fs.writeFileSync(outputPath, reply ?? JSON.stringify(response, null, 2));
    console.log('=== ANALYSIS SAVED TO:', outputPath, '===');
    console.log('\n--- ANALYSIS ---\n');
    console.log(reply ?? 'No reply');
  } catch (err) {
    console.error('Video understanding failed:', err?.message || err);
    process.exit(1);
  }
}

analyzeWithVideo();
