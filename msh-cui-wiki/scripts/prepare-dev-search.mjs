import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const appRoot = path.resolve(import.meta.dirname, '..');
const astroBin = path.join(appRoot, 'node_modules', 'astro', 'bin', 'astro.mjs');
const distPagefindRoot = path.join(appRoot, 'dist', 'pagefind');
const publicPagefindRoot = path.join(appRoot, 'public', 'pagefind');

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function runAstroBuild() {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [astroBin, 'build'], {
      cwd: appRoot,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`astro build exited with code ${code ?? 'unknown'}`));
    });
  });
}

async function ensureDevSearchIndex() {
  if (await exists(distPagefindRoot)) {
    return;
  }

  console.log('[dev-search] No Pagefind index found in dist/. Building one for localhost search...');
  await runAstroBuild();
}

async function publishDevSearchIndex() {
  await ensureDevSearchIndex();

  if (!(await exists(distPagefindRoot))) {
    throw new Error('Pagefind index is still missing after build.');
  }

  await fs.rm(publicPagefindRoot, { recursive: true, force: true });
  await fs.cp(distPagefindRoot, publicPagefindRoot, { recursive: true });
  console.log('[dev-search] Published dist/pagefind to public/pagefind for astro dev.');
}

publishDevSearchIndex().catch((error) => {
  console.error('[dev-search] Failed to prepare localhost search:', error);
  process.exitCode = 1;
});
