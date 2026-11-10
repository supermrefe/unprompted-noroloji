/* Unprompted Tıp — çevrimdışı kabuk. Önce ağ, olmazsa önbellek.
   Sürüm değişince eski önbellek silinir; yeni dosya eklenince CACHE'i artır. tests/run-all.js bu listeyi terms/ ile karşılaştırır. */
const CACHE = 'upt-v2';
const BRANCH_FILES = ['noroloji'];
const SHELL = ['./', 'index.html', 'styles.css', 'scoring.js', 'app.js', 'terms/index.js', ...BRANCH_FILES.map(b => `terms/${b}.js`), 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined)))
  );
});
