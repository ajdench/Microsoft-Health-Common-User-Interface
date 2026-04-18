import chokidar from 'chokidar';
import path from 'node:path';
import { syncRepoToDocs } from './sync-llm-wiki.mjs';

const appRoot = path.resolve(import.meta.dirname, '..');
const repoRoot = path.resolve(appRoot, '..');

const watchTargets = [
  path.join(repoRoot, 'index.md'),
  path.join(repoRoot, 'README.md'),
  path.join(repoRoot, 'AGENTS.md'),
  path.join(repoRoot, 'log.md'),
  path.join(repoRoot, 'wiki'),
  path.join(repoRoot, 'derived'),
  path.join(repoRoot, 'raw', 'metadata'),
  path.join(repoRoot, 'raw', 'manifests'),
];

let syncTimer;
let syncInFlight = Promise.resolve();

function queueSync(reason) {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncInFlight = syncInFlight
      .catch(() => undefined)
      .then(async () => {
        try {
          const result = await syncRepoToDocs();
          console.log(`[watch-content] Synced after ${reason} at ${result.generatedAt}`);
        } catch (error) {
          console.error('[watch-content] Sync failed:', error);
        }
      });
  }, 150);
}

await syncRepoToDocs();
console.log('[watch-content] Watching canonical LLM Wiki sources for changes...');

const watcher = chokidar.watch(watchTargets, {
  ignored: [
    /(^|[/\\])\../,
    /[/\\]msh-cui-wiki[/\\]/,
    /[/\\]node_modules[/\\]/,
    /[/\\]dist[/\\]/,
    /[/\\]\.git[/\\]/,
    /[/\\]\.jj[/\\]/,
    /[/\\]\.playwright-cli[/\\]/,
    /[/\\]derived[/\\]extracted-text[/\\].+\.txt$/,
  ],
  ignoreInitial: true,
});

watcher.on('add', (filePath) => queueSync(`add:${path.relative(repoRoot, filePath)}`));
watcher.on('change', (filePath) => queueSync(`change:${path.relative(repoRoot, filePath)}`));
watcher.on('unlink', (filePath) => queueSync(`unlink:${path.relative(repoRoot, filePath)}`));
watcher.on('addDir', (filePath) => queueSync(`addDir:${path.relative(repoRoot, filePath)}`));
watcher.on('unlinkDir', (filePath) => queueSync(`unlinkDir:${path.relative(repoRoot, filePath)}`));
watcher.on('error', (error) => console.error('[watch-content] Watcher error:', error));
