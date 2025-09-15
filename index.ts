export const fetch=z1=>z2=>async z3=>{
  // If you have a binding that returns a Response (typical for assets)
  const assetResponse = await z2.ASSETS.getAsset(z1); // or env.ASSETS.getAsset(...)
  if (!assetResponse) return new Response('Not found', { status: 404 });

  console.log(`abc`);

  // Return the Response as-is OR re-create it from ArrayBuffer so you can set headers
  const buf = await assetResponse.arrayBuffer();
  return new Response(buf, {
    status: assetResponse.status,
    headers: {
      // Set content-type including correct charset if you know it
      // e.g. 'text/plain; charset=windows-1252' or the actual type
      'Content-Type': assetResponse.headers.get('content-type') || 'application/octet-stream',
      // Copy other headers you need:
      'Cache-Control': assetResponse.headers.get('cache-control') || 'public, max-age=31536000',
    },
  });
};
export default {
  // eslint-disable-next-line @typescript-eslint/max-params
  fetch: async (z1, z2, z3)=>await fetch (z1) (z2) (z3),
};
