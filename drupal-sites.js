// ==UserScript==
// @name     Odkazy na audio ze stanic ČRo používajícíh Drupal
// @description Přidává odkazy na stažení audio souborů ze stanic ČRo, které používají Drupal (Vltava, Radio Wave, Liberec
// @version  1
// @grant    none
// @include https://vltava.rozhlas.cz/*
// @include https://wave.rozhlas.cz/*
// @include https://zlin.rozhlas.cz/*
// @include https://pardubice.rozhlas.cz/*
// @include https://olomouc.rozhlas.cz/*
// @include https://liberec.rozhlas.cz/*
// @include https://hradec.rozhlas.cz/*
// @include https://brno.rozhlas.cz/*
// ==/UserScript==

var playitems = document.getElementsByClassName("sm2-col sm2-wide");
var download_name;
for (i=0; i < playitems.length; i++) {
    var audio_filename = playitems[i].childNodes[1].href.split("?")[0];
    var downlink = document.createElement("a");
    downlink.href = audio_filename;
    downlink.download = download_name;
    downlink.appendChild(document.createTextNode("Stáhnout..."));
    var anchorplayer = document.getElementsByClassName("bd sm2-main-controls")[i]
    anchorplayer.parentNode.insertBefore(downlink, anchorplayer.nextSibling);
    }
