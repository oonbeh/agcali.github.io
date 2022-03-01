const getDbDirectLink = async ()=>{
  let dbDirectLink = "https://control-ads.nasrulloh83.repl.co/setting.json";
  return new Promise((resolve,reject)=>{
    fetch(dbDirectLink)
    .then(response => response.json())
    .then(function (data) {
      resolve(data["db-direct-link"]);
    });
  });
};

const getDbAds = async ()=>{
  let dbDirectLink = "https://control-ads.nasrulloh83.repl.co/setting.json";
  return new Promise((resolve,reject)=>{
    fetch(dbDirectLink)
    .then(response => response.json())
    .then(function (data) {
      resolve(data["db-ads"]);
    });
  });
};

const injectDataAds = async (url)=>{
  return new Promise((resolve,reject)=>{
    let elInAds = document.createElement("script");
    elInAds.setAttribute("src",url);
    elInAds.onload = ()=>{
      resolve("ok");
    };
    elInAds.onerror = ()=>{
      resolve("err");
    };
    document.body.append(elInAds);
  });
};

const getRandomArr = (arr)=>{
  return arr[parseInt(Math.random() * arr.length)];
};