export const fetch=z1=>z2=>z3=>{
  console.log(`abc`);
  return z2.ASSETS.fetch (z1);
};
export default {
  // eslint-disable-next-line @typescript-eslint/max-params
  fetch: (z1, z2, z3)=>fetch (z1) (z2) (z3),
};
