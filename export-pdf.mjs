import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire('C:/Users/mvran/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.js');
const { chromium } = require('playwright');

const browser = await chromium.launch({ headless: true, executablePath: process.env.BROWSER_PATH });
const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
await page.goto(`file:///${resolve('index.html').replaceAll('\\', '/')}`, { waitUntil: 'networkidle' });
await page.pdf({ path: 'export/PDF_Comercial_RanTech.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
