// Static file server for yldzmuhammed.com
const SITE_DIR = import.meta.dir;
const PORT = 8767;

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    
    // Default to index.html
    if (path === '/') path = '/index.html';
    
    // Try exact file
    let file = Bun.file(`${SITE_DIR}${path}`);
    if (await file.exists()) {
      return new Response(file, {
        headers: { 'Content-Type': getContentType(path) },
      });
    }
    
    // Try with .html extension
    file = Bun.file(`${SITE_DIR}${path}.html`);
    if (await file.exists()) {
      return new Response(file, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    
    // Try index.html in directory
    file = Bun.file(`${SITE_DIR}${path}/index.html`);
    if (await file.exists()) {
      return new Response(file, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    
    // 404
    const notFound = Bun.file(`${SITE_DIR}/404.html`);
    if (await notFound.exists()) {
      return new Response(notFound, {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    
    return new Response('Not Found', { status: 404 });
  },
});

function getContentType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  const types: Record<string, string> = {
    html: 'text/html; charset=utf-8',
    css: 'text/css; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    webp: 'image/webp',
    ico: 'image/x-icon',
    woff: 'font/woff',
    woff2: 'font/woff2',
    ttf: 'font/ttf',
    pdf: 'application/pdf',
  };
  return types[ext || ''] || 'application/octet-stream';
}

console.log(`📄 yldzmuhammed.com serving on http://localhost:${PORT}`);
