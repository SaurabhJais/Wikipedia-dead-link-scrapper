const { default: axios } = require("axios");

function getLinks(id) {
  var url = "https://hi.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    format: "json",
    prop: "extlinks",
    pageids: id,
    ellimit: "250",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  return axios.get(url);
}

module.exports = getLinks;
