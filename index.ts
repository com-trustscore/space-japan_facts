export const fetch=z1=>z2=>z3=>{
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>日本語テスト</title></head><body><h1>こんにちは、世界！</h1><p>ここに日本語のテキストがあります。</p></body></html>`;

  return new Response(html, {
    headers: {
      [`Content-Type`]: `text/html; charset=utf-8`
    }
  });
};
export default {
  // eslint-disable-next-line @typescript-eslint/max-params
  fetch: (z1, z2, z3)=>fetch (z1) (z2) (z3),
};
