// OPTIONAL, for later: Cloudflare Worker that keeps your secret API key off the phone/browser.
// Add the key in Cloudflare dashboard > Worker > Settings > Variables > Secret named API_KEY.
const CORS={'Access-Control-Allow-Origin':'https://YOUR-NAME.github.io','Access-Control-Allow-Headers':'content-type'};
export default{async fetch(req,env){
 if(req.method==='OPTIONS')return new Response(null,{headers:CORS});
 const path=new URL(req.url).pathname,body=await req.json().catch(()=>({}));
 if(!env.API_KEY)return new Response(JSON.stringify({error:'No API_KEY set'}),{status:501,headers:CORS});
 // Connect providers here, e.g. /api/image, /api/video, /api/tts:
 // const r=await fetch('PROVIDER_URL',{method:'POST',headers:{Authorization:'Bearer '+env.API_KEY,'content-type':'application/json'},body:JSON.stringify(body)});
 return new Response(JSON.stringify({error:path+' not implemented yet'}),{status:501,headers:CORS});}};
