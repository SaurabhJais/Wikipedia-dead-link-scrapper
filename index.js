let getLinks = require("./getUrls");
let isUrlValid = require("./urlFilter");
let em = require("events");
let eventEmmiter = new em.EventEmitter();
let saveToFile = require("./saveToFile");

function findLinks(ids) {
  getLinks(ids.join("|")).then((result) => {
    let res = result.data;
    let store = [];

    for (let id of ids) {
      let urls = res["query"]["pages"][id]["extlinks"];

      if (urls) {
        urls.forEach((item) => {
          if (isUrlValid(item["*"])) {
            if (item["*"].includes("http")) {
              let url = item["*"].split("://")[1].split("/")[0];
              if (!store.includes(url)) {
                store.push(url);
              }
            }
          }
        });
      }
    }


    console.log(store)
    if (store.length) {
      saveToFile(store);
    }

    console.log(
      "---------------------Page - " + ids[0] + " to " + ids[ids.length - 1] + " Done-------------------"
    );

    eventEmmiter.emit("pageDone");
  });
}



let from = 1000001;
let to = 2000000;

findLinks([from]);

eventEmmiter.on("pageDone", () => {
  if (from < to) {
    let ids = [];

    for (let i = from; i < from + 50; i++) {
      ids.push(i);
    }
    from = from + 50;
    findLinks(ids);
  }
});
