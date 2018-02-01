// ==UserScript==
// @name     Doplňuje možnost stahování pro všechny pořady na iVysilani
// @version  1
// @grant    none
// @include http://hledani.rozhlas.cz/iradio/*
// ==/UserScript==

var action_columns = document.getElementsByClassName("column column-actions");
var current_item;
var download_url_base = "http://media.rozhlas.cz/_download/";

function generate_download_button(current_item) {
  var action_player = current_item.querySelector("div.action.action-player");
  var player_url = action_player.querySelector("a").href;
  if (!player_url.endsWith("?player=on")) {
    var media_id = player_url.split("/").pop();
    var download_url = download_url_base.concat(media_id,".mp3");
    var download_div = document.createElement("div");
    download_div.className="action action-download";
    download_div.appendChild(document.createElement("a"));
    download_div.firstChild.href = download_url;
    download_div.firstChild.download = "";
    download_div.firstChild.appendChild(document.createTextNode("Stáhnout"));
    action_player.parentNode.insertBefore(download_div, action_player.nextSibling);
  }
}

for (i=0; i < action_columns.length; i++) {
  current_item = action_columns[i];
  if (current_item.querySelector("div.action.action-download")==null) {
    generate_download_button(current_item);
  }
}
