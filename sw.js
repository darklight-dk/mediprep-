// ============================================
// SERVICE WORKER — MediPrep Smart
// Modo offline: cachea todos los recursos
// ============================================

const CACHE_NAME = 'mediprep-smart-v2';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/app.js',
    '/manifest.json',
    // Datos de preguntas
    '/preguntas.js',
    '/preguntas-premedicina.js',
    '/examen.js',
    // Módulos de estudio
    '/conceptos-salud.js',
    '/planimetria.js',
    '/sistema-nervioso.js',
    '/sistema-endocrino.js',
    '/biologia-celular.js',
    '/modulos.js',
    // Juegos
    '/signos-sintomas-data.js',
    '/diagnosticos-data.js',
];

// Instalación: cachear todo
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activación: limpiar caches viejas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
            ))
            .then(() => self.clients.claim())
    );
});

// Fetch: Cache First para archivos estáticos
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Solo interceptar mismo origen
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request)
            .then((cached) => {
                // Actualizar cache en segundo plano
                const network = fetch(event.request).then((res) => {
                    if (res.ok) {
                        caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
                    }
                    return res;
                }).catch(() => null);

                return cached || network || new Response('Sin conexión', { status: 503 });
            })
    );
});
