
var v = new Array();
var vDisp = new Array();
var jpCount = 1;
var jackpotTimer;
var secondToReload = 1200;
var msecToBlink = 300;
var msecLoaded = 0;

function increaseJackpot() {        
    for (i = 0; i < jpCount; i++) {
        if (isNaN(vDisp[i])) {

        }
        else {
            vDisp[i] += 0.01;
        }
            
        displayJackpotValues("jp_" + i, vDisp[i]);
    }
}

function getJackpotValues(myValues) {

    var d = new Date();
    var year = d.getFullYear().toString().length == 1 ? "0" + d.getFullYear().toString() : d.getFullYear().toString();
    var month = d.getMonth().toString().length == 1 ? "0" + d.getMonth().toString() : d.getMonth().toString();
    var date = d.getDate().toString().length == 1 ? "0" + d.getDate().toString() : d.getDate().toString();
    var hour = d.getHours().toString().length == 1 ? "0" + d.getHours().toString() : d.getHours().toString();
    var min = d.getMinutes().toString().length == 1 ? "0" + d.getMinutes().toString() : d.getMinutes().toString();
    var dateOffset = month + date + hour + min;

    for (i = 0; i < jpCount; i++) {            
        if (isNaN(myValues.split(";")[i])) {
            vDisp[i] = myValues.split(";")[i];
        }
        else {
            v[i] = parseInt(myValues.split(";")[i]) + parseInt(dateOffset);
            vDisp[i] = v[i];
        }
    }

    if (msecLoaded == 0) jackpotTimer = window.setTimeout(increaseJackpot, msecToBlink);
}

function displayJackpotValues(myID, myVal) {

    msecLoaded += msecToBlink

    if (isNaN(myVal)) {
        document.getElementById(myID).innerHTML = myVal;
    }
    else {
        document.getElementById(myID).innerHTML = parseFloat(myVal).formatMoney(2, ',', '.');
    }

    if ((secondToReload * 1000) <= msecLoaded) {
        msecLoaded = 1;
        window.clearTimeout(jackpotTimer);
        //loadJackpot();
        jackpotTimer = window.setTimeout(increaseJackpot, msecToBlink);
    }
    else {
        window.clearTimeout(jackpotTimer);
        jackpotTimer = window.setTimeout(increaseJackpot, msecToBlink);
    }
}



