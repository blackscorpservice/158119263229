var totalBalance = 0;
var totalBalanceTest = 0;
function setValueZero() {
    totalBalance = 0;
    totalBalanceTest = 0;
    //alert(totalBalanceTest);
}

function MG_getAccountBalance(user) {
    sendData("api/mg/api.aspx", "action=AccountBalance&accountNumber=x" + user, MG_displayAccountBalance);
}

function MG_displayAccountBalance(myOutput) {
    var tempBalanceMG = checkBalanceOutput(myOutput, "mg")
    if (tempBalanceMG != "Maintenance" && tempBalanceMG != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceMG);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("mg_balance").innerHTML = checkBalanceOutput(myOutput, "mg");

    var walletTotalAmount = walletTotal2(myOutput);
}
//Playstar
function PLAYSTAR_getAccountBalance(user) {
    sendData("api/playstar/api.aspx", "action=AccountBalance&username=x" + user, playstar_displayAccountBalance);
}

function playstar_displayAccountBalance(myOutput) {
    document.getElementById("playstar_balance").innerHTML = checkBalanceOutput(myOutput, "playstar");
    if (document.contains(document.getElementById("playstar_balance2"))) {
        document.getElementById("playstar_balance2").innerHTML = checkBalanceOutput(myOutput, "playstar");
    }

    var walletTotalAmount = walletTotal2(myOutput);
}
//GSS
function GSS_getAccountBalance(user) {
    sendData("api/gss/api.aspx", "action=AccountBalance&username=x" + user, GSS_displayAccountBalance);
}

function GSS_displayAccountBalance(myOutput) {
    document.getElementById("gss_balance").innerHTML = checkBalanceOutput(myOutput, "gss");
    if (document.contains(document.getElementById("gss_balance2"))) {
        document.getElementById("gss_balance2").innerHTML = checkBalanceOutput(myOutput, "gss");


    }

    var walletTotalAmount = walletTotal2(myOutput);
}
function H4D_getAccountBalance(user) {
    sendData("api/h4d/api.aspx", "action=AccountBalance&username=x" + user, H4D_displayAccountBalance);
}
function GENESIS_getAccountBalance(user) {
    sendData("api/genesis/api.aspx", "action=AccountBalance&username=x" + user, GENESIS_displayAccountBalance);
}

function GENESIS_displayAccountBalance(myOutput) {
    var tempBalanceGenesis = checkBalanceOutput(myOutput, "genesis");
    //if (tempBalanceGenesis != "Maintenance" && tempBalanceGenesis != "Error!") {
    //    totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGenesis);
    //    document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    //}
    document.getElementById("genesis_balance").innerHTML = checkBalanceOutput(myOutput, "genesis");
}
function H4D_displayAccountBalance(myOutput) {
    var tempBalanceH4D = checkBalanceOutput(myOutput, "newasia")
    if (tempBalanceH4D != "Maintenance" && tempBalanceH4D != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceH4D);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("h4d_balance").innerHTML = checkBalanceOutput(myOutput, "4d");

    var walletTotalAmount = walletTotal2(myOutput);
}
//MrSlotty
function MRSLOTTY_getAccountBalance(user) {
    sendData("api/mrslotty/api.aspx", "action=AccountBalance&username=x" + user, MRSLOTTY_displayAccountBalance);
}

function MRSLOTTY_displayAccountBalance(myOutput) {
    var tempBalanceMRSLOTTY = checkBalanceOutput(myOutput, "mrslotty")
    if (tempBalanceMRSLOTTY != "Maintenance" && tempBalanceMRSLOTTY != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceMRSLOTTY);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("mrslotty_balance").innerHTML = checkBalanceOutput(myOutput, "mrslotty");

    var walletTotalAmount = walletTotal2(myOutput);
}
//function OSG_getAccountBalance(user) {
//    sendData("api/osg/api.aspx", "action=AccountBalance&username=x" + user, OSG_displayAccountBalance);
//}

//function OSG_displayAccountBalance(myOutput) {
//    document.getElementById("osg_balance").innerHTML = checkBalanceOutput(myOutput, "osg");
//}

function QT_getAccountBalance(user) {
    sendData("api/qt/api.aspx", "action=AccountBalance&username=x" + user, QT_displayAccountBalance);
}

function QT_displayAccountBalance(myOutput) {
    var tempBalanceQT = checkBalanceOutput(myOutput, "qt")
    if (tempBalanceQT != "Maintenance" && tempBalanceQT != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceQT);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("qt_balance").innerHTML = checkBalanceOutput(myOutput, "qt");

    var walletTotalAmount = walletTotal2(myOutput);
}


function OSG88_getAccountBalance(user) {
    sendData("api/osg88/api.aspx", "action=AccountBalance&username=x" + user, OSG88_displayAccountBalance);
}

function OSG88_displayAccountBalance(myOutput) {
    var tempBalanceOSG88 = checkBalanceOutput(myOutput, "osg88")
    if (tempBalanceOSG88 != "Maintenance" && tempBalanceOSG88 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceOSG88);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("osg88_balance").innerHTML = checkBalanceOutput(myOutput, "osg88");

    var walletTotalAmount = walletTotal2(myOutput);
}





function OSG88_transferAllBackWallet(osg88_username) {
    var osg88_ta_balance = parseFloat(document.getElementById("osg88_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(osg88_ta_balance)) {
        osg88_ta_balance = "Not available!";
    }
    else {
        
        if (osg88_ta_balance != 0) {
            document.getElementById("osg88_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_osg88&xferTo=to_wallet&providerusername=" + osg88_username + "&txt_amount=" + osg88_ta_balance, OSG88_getAccountBalance);
        }
    }
}

function WFT_getAccountBalance(user) {
    sendData("api/wft/api.aspx", "action=AccountBalance&username=x" + user, WFT_displayAccountBalance);
}


function WFT_displayAccountBalance(myOutput) {
    var tempBalanceWFT = checkBalanceOutput(myOutput, "wft")
    if (tempBalanceWFT != "Maintenance" && tempBalanceWFT != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceWFT);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("wft_balance").innerHTML = checkBalanceOutput(myOutput, "wft");

    var walletTotalAmount = walletTotal2(myOutput);
}

function WFT_transferAllBackWallet(wft_username) {
    var wft_ta_balance = parseFloat(document.getElementById("wft_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(wft_ta_balance)) {
        wft_ta_balance = "Not available!";
    }
    else {
        
        if (wft_ta_balance != 0) {
            document.getElementById("wft_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_wft&xferTo=to_wallet&providerusername=" + wft_username + "&txt_amount=" + wft_ta_balance, WFT_getAccountBalance);
        }


    }
}

function AG_getAccountBalance(user) {
    sendData("api/ag/api.aspx", "action=AccountBalance&username=x" + user, AG_displayAccountBalance);
}

function AG_displayAccountBalance(myOutput) {
    var tempBalanceAG = checkBalanceOutput(myOutput, "agin")
    if (tempBalanceAG != "Maintenance" && tempBalanceAG != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceAG);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("ag_balance").innerHTML = checkBalanceOutput(myOutput, "agin");

    var walletTotalAmount = walletTotal2(myOutput);
}

function AG_transferAllBackWallet() {
    var ag_ta_balance = parseFloat(document.getElementById("ag_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(ag_ta_balance)) {
        ag_ta_balance = "Not available!";
    }
    else {
        
        if (ag_ta_balance != 0) {
            document.getElementById("ag_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_ag&xferTo=to_wallet&providerusername=x&txt_amount=" + ag_ta_balance, AG_getAccountBalance);
        }

    }
}
//AMEBA
function AMEBA_getAccountBalance(user) {
    sendData("api/ameba/api.aspx", "action=AccountBalance&username=x" + user, AMEBA_displayAccountBalance);
}

function AMEBA_displayAccountBalance(myOutput) {
    document.getElementById("ameba_balance").innerHTML = checkBalanceOutput(myOutput, "ameba");
    if (document.contains(document.getElementById("ameba_balance2"))) {
        document.getElementById("ameba_balance2").innerHTML = checkBalanceOutput(myOutput, "ameba");
    }

    var walletTotalAmount = walletTotal2(myOutput);
}
function XPRO_getAccountBalance(user) {
    sendData("api/xpro/api.aspx", "action=AccountBalance&username=x" + user, XPRO_displayAccountBalance);
}

function XPRO_displayAccountBalance(myOutput) {
    var tempBalanceXpro = checkBalanceOutput(myOutput, "xpro")
    if (tempBalanceXpro != "Maintenance" && tempBalanceXpro != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceXpro);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("xpro_balance").innerHTML = checkBalanceOutput(myOutput, "xpro");

    var walletTotalAmount = walletTotal2(myOutput);
}

function XPRO_transferAllBackWallet(xpro_username) {
    var xpro_ta_balance = parseFloat(document.getElementById("xpro_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(xpro_ta_balance)) {
        xpro_ta_balance = "Not available!";
    }
    else {
        
        if (xpro_ta_balance != 0) {
            document.getElementById("xpro_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_xpro&xferTo=to_wallet&providerusername=" + xpro_username + "&txt_amount=" + xpro_ta_balance, XPRO_getAccountBalance);
        }
        //XPRO_getAccountBalance(xpro_username);
    }
}

function PT_getAccountBalance(user) {
    
    sendData("api/pt/api.aspx", "action=AccountBalance&username=x" + user, PT_displayAccountBalance);
}

function PT_displayAccountBalance(myOutput) {
    var tempBalancePT = 0;
     tempBalancePT = checkBalanceOutput(myOutput, "pt")
    if (tempBalancePT != "Maintenance" && tempBalancePT != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalancePT);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("pt_balance").innerHTML = checkBalanceOutput(myOutput, "pt");

    var walletTotalAmount = walletTotal2(myOutput);
}

function PT_transferAllBackWallet() {
    var pt_ta_balance = parseFloat(document.getElementById("pt_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(pt_ta_balance)) {
        pt_ta_balance = "Not available!";
    }
    else {
        
        if (pt_ta_balance != 0) {
            document.getElementById("pt_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_pt&xferTo=to_wallet&providerusername=x&txt_amount=" + pt_ta_balance, PT_getAccountBalance);
        }

    }
}

function NT_getAccountBalance(user) {
    sendData("api/nt/api.aspx", "action=AccountBalance&username=x" + user, NT_displayAccountBalance);
}

function NT_displayAccountBalance(myOutput) {
    var tempBalanceNT = checkBalanceOutput(myOutput, "nt")
    if (tempBalanceNT != "Maintenance" && tempBalanceNT != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceNT);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("nt_balance").innerHTML = checkBalanceOutput(myOutput, "nt");

    var walletTotalAmount = walletTotal2(myOutput);
}

function NETENT_getAccountBalance(user) {
    sendData("api/netent/api.aspx", "action=AccountBalance&username=x" + user, NETENT_displayAccountBalance);
}

function NETENT_displayAccountBalance(myOutput) {
    var tempBalanceNETENT = checkBalanceOutput(myOutput, "netent")
    if (tempBalanceNETENT != "Maintenance" && tempBalanceNETENT != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceNETENT);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("netent_balance").innerHTML = checkBalanceOutput(myOutput, "netent");

    var walletTotalAmount = walletTotal2(myOutput);
}

function CoinDragon_getAccountBalance(user) {
    sendData("api/coindragon/api.aspx", "action=AccountBalance&username=x" + user, CoinDragon_displayAccountBalance);
}

function CoinDragon_displayAccountBalance(myOutput) {
    var tempBalanceCD = checkBalanceOutput(myOutput, "coilingdragons")
    if (tempBalanceCD != "Maintenance" && tempBalanceCD != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceCD);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("coilingdragons_balance").innerHTML = checkBalanceOutput(myOutput, "coilingdragons");

    var walletTotalAmount = walletTotal2(myOutput);
}

function NewAsia_getAccountBalance(user) {
    sendData("api/NewAsia/api.aspx", "action=AccountBalance&username=x" + user, NewAsia_displayAccountBalance);
}

function NewAsia_displayAccountBalance(myOutput) {
    var tempBalanceNewAsia = checkBalanceOutput(myOutput, "newasia")
    if (tempBalanceNewAsia != "Maintenance" && tempBalanceNewAsia != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceNewAsia);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("newasia_balance").innerHTML = checkBalanceOutput(myOutput, "newasia");

    var walletTotalAmount = walletTotal2(myOutput);
}
function Kiss918_getAccountBalance(user) {
    sendData("api/kiss918/api.aspx", "action=AccountBalance&username=x" + user, Kiss918_displayAccountBalance);
}

function Kiss918_displayAccountBalance(myOutput) {
    var tempBalanceKiss918 = checkBalanceOutput(myOutput, "kiss918")
    if (tempBalanceKiss918 != "Maintenance" && tempBalanceKiss918 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceKiss918);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("kiss918_balance").innerHTML = checkBalanceOutput(myOutput, "kiss918");

    var walletTotalAmount = walletTotal2(myOutput);
}
function DREAMTECH_getAccountBalance(user) {
    sendData("api/dreamtech/api.aspx", "action=AccountBalance&username=x" + user, DREAMTECH_displayAccountBalance);
}

function DREAMTECH_displayAccountBalance(myOutput) {
    var tempBalanceDreamtech = checkBalanceOutput(myOutput, "dreamtech")
    if (tempBalanceDreamtech != "Maintenance" && tempBalanceDreamtech != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceDreamtech);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("dreamtech_balance").innerHTML = checkBalanceOutput(myOutput, "dreamtech");

    var walletTotalAmount = walletTotal2(myOutput);
}

function GAMEART_getAccountBalance(user) {
    sendData("api/gameart/api.aspx", "action=AccountBalance&username=x" + user, GAMEART_displayAccountBalance);
}

function GAMEART_displayAccountBalance(myOutput) {
    var tempBalanceGameArt = checkBalanceOutput(myOutput, "gameart")
    if (tempBalanceGameArt != "Maintenance" && tempBalanceGameArt != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGameArt);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("gameart_balance").innerHTML = checkBalanceOutput(myOutput, "gameart");

    var walletTotalAmount = walletTotal2(myOutput);
}

function Kiss918_getAccountBalance(user) {
    sendData("api/kiss918/api.aspx", "action=AccountBalance&username=x" + user, Kiss918_displayAccountBalance);
}

function Kiss918_displayAccountBalance(myOutput) {
    var tempBalanceKiss918 = checkBalanceOutput(myOutput, "kiss918")
    if (tempBalanceKiss918 != "Maintenance" && tempBalanceKiss918 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceKiss918);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("kiss918_balance").innerHTML = checkBalanceOutput(myOutput, "kiss918");

    var walletTotalAmount = walletTotal2(myOutput);
}

function SPADE_getAccountBalance(user) {
    sendData("api/spade/api.aspx", "action=AccountBalance&username=x" + user, SPADE_displayAccountBalance);
}


function SPADE_displayAccountBalance(myOutput) {
    var tempBalanceSpade = checkBalanceOutput(myOutput, "spade")
    if (tempBalanceSpade != "Maintenance" && tempBalanceSpade != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceSpade);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("spade_balance").innerHTML = checkBalanceOutput(myOutput, "spade");

    var walletTotalAmount = walletTotal2(myOutput);
}

function HO_getAccountBalance(user) {

    sendData("api/ho/api.aspx", "action=AccountBalance&username=x" + user, HO_displayAccountBalance);
}

function HO_displayAccountBalance(myOutput) {
    var tempBalanceHO = checkBalanceOutput(myOutput, "ho")
    if (tempBalanceHO != "Maintenance" || tempBalanceHO != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceHO);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("ho_balance").innerHTML = checkBalanceOutput(myOutput, "ho");

    var walletTotalAmount = walletTotal2(myOutput);

}

function W88_getAccountBalance(user) {
    sendData("api/w88/api.aspx", "action=AccountBalance&username=x" + user, W88_displayAccountBalance);
}

function W88_displayAccountBalance(myOutput) {
    var tempBalanceW88 = checkBalanceOutput(myOutput, "w88")
    if (tempBalanceW88 != "Maintenance" && tempBalanceW88 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceW88);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("w88_balance").innerHTML = checkBalanceOutput(myOutput, "w88");

    var walletTotalAmount = walletTotal2(myOutput);
}


function W88_transferAllBackWallet() {
    var gp_ta_balance = parseFloat(document.getElementById("w88_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(gp_ta_balance)) {
        gp_ta_balance = "Not available!";
    }
    else {
        
        if (gp_ta_balance != 0) {
            document.getElementById("w88_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_w88&xferTo=to_wallet&providerusername=x&txt_amount=" + gp_ta_balance, W88_getAccountBalance);
        }

    }
}

function YY_getAccountBalance(user) {
    sendData("api/yy/api.aspx", "action=AccountBalance&username=x" + user, YY_displayAccountBalance);
}

function YY_displayAccountBalance(myOutput) {
    document.getElementById("yy_balance").innerHTML = checkBalanceOutput(myOutput, "yy");

    var walletTotalAmount = walletTotal2(myOutput);
}

function L4D_getAccountBalance(user) {
    sendData("api/l4d/api.aspx", "action=AccountBalance&username=x" + user, L4D_displayAccountBalance);
}

function L4D_displayAccountBalance(myOutput) {
    document.getElementById("l4d_balance").innerHTML = checkBalanceOutput(myOutput, "l4d");

    var walletTotalAmount = walletTotal2(myOutput);
}

function CT_getAccountBalance(user) {
    sendData("api/ct/api.aspx", "action=AccountBalance&username=x" + user, CT_displayAccountBalance);
}

function CT_displayAccountBalance(myOutput) {
    //alert(myOutput);
    document.getElementById("ct_balance").innerHTML = checkBalanceOutput(myOutput, "ct");

    var walletTotalAmount = walletTotal2(myOutput);
}

function SBO_getAccountBalance(user) {
    sendData("api/sbo/api.aspx", "action=AccountBalance&username=x" + user, SBO_displayAccountBalance);
}

function SBO_displayAccountBalance(myOutput) {
    document.getElementById("sbo_balance").innerHTML = checkBalanceOutput(myOutput, "sbo");

    var walletTotalAmount = walletTotal2(myOutput);
}


// Added For Lotto 
function Lotto_getAccountBalance(user) {
    sendData("api/Lotto/api.aspx", "action=AccountBalance&username=x" + user, Lotto_displayAccountBalance);
}

function Lotto_displayAccountBalance(myOutput) {
    document.getElementById("Lotto_balance").innerHTML = checkBalanceOutput(myOutput, "Lotto");

    var walletTotalAmount = walletTotal2(myOutput);
}

//allbet
function AB_getAccountBalance(user) {
    sendData("api/ab/api.aspx", "action=AccountBalance&username=x" + user, AB_displayAccountBalance);
}

function AB_displayAccountBalance(myOutput) {
    var tempBalanceAB = checkBalanceOutput(myOutput, "ab")
    if (tempBalanceAB != "Maintenance" && tempBalanceAB != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceAB);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("ab_balance").innerHTML = checkBalanceOutput(myOutput, "ab");

    var walletTotalAmount = walletTotal2(myOutput);
}
function AB_transferAllBackWallet() {
    var ab_ta_balance = parseFloat(document.getElementById("ab_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(ab_ta_balance)) {
        ab_ta_balance = "Not available!";
    }
    else {
        if (ab_ta_balance != 0) {
            document.getElementById("ab_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_ab&xferTo=to_wallet&providerusername=x&txt_amount=" + ab_ta_balance, AB_getAccountBalance);
        }
    }
}

//BBIN
function BBIN_getAccountBalance(user) {
    sendData("api/bbin/api.aspx", "action=AccountBalance&username=x" + user, BBIN_displayAccountBalance);
}

function BBIN_displayAccountBalance(myOutput) {
    var tempBalanceBBin = checkBalanceOutput(myOutput, "bbin")
    if (tempBalanceBBin != "Maintenance" && tempBalanceBBin != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceBBin);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("bbin_balance").innerHTML = checkBalanceOutput(myOutput, "bbin");

    var walletTotalAmount = walletTotal2(myOutput);
}

//EVO
function EVO_getAccountBalance(user) {
    sendData("api/evo/api.aspx", "action=AccountBalance&username=x" + user, EVO_displayAccountBalance);
}

function EVO_displayAccountBalance(myOutput) {
    document.getElementById("evo_balance").innerHTML = checkBalanceOutput(myOutput, "evo");

    var walletTotalAmount = walletTotal2(myOutput);
}

//KENO
function KENO_getAccountBalance(user) {
    sendData("api/keno/api.aspx", "action=AccountBalance&username=x" + user, KENO_displayAccountBalance);
}

function KENO_displayAccountBalance(myOutput) {
    document.getElementById("keno_balance").innerHTML = checkBalanceOutput(myOutput, "keno");

    var walletTotalAmount = walletTotal2(myOutput);
}

//IBC sports
function IBC_getAccountBalance(user) {
    
    sendData("api/ibc/api.aspx", "action=AccountBalance&username=x" + user, IBC_displayAccountBalance);
}

function IBC_displayAccountBalance(myOutput) {
    var tempBalanceIBC = checkBalanceOutput(myOutput, "ibc")
    if (tempBalanceIBC != "Maintenance" && tempBalanceIBC != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceIBC);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("ibc_balance").innerHTML = checkBalanceOutput(myOutput, "ibc");

    var walletTotalAmount = walletTotal2(myOutput);
}

function IBC_transferAllBackWallet() {
    var ibc_ta_balance = parseFloat(document.getElementById("ibc_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(ibc_ta_balance)) {
        ibc_ta_balance = "Not available!";
    }
    else {
        if (ibc_ta_balance != 0) {
            document.getElementById("ibc_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_ibc&xferTo=to_wallet&providerusername=x&txt_amount=" + ibc_ta_balance, IBC_getAccountBalance);
        }
    }
}

//AGIN
function AGIN_getAccountBalance(user) {
    sendData("api/agin/api.aspx", "action=AccountBalance&username=x" + user, AGIN_displayAccountBalance);
}

function AGIN_displayAccountBalance(myOutput) {
    var tempBalanceAGin = checkBalanceOutput(myOutput, "agin")
    if (tempBalanceAGin != "Maintenance" || tempBalanceAGin != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceAGin);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("agin_balance").innerHTML = checkBalanceOutput(myOutput, "agin");

    var walletTotalAmount = walletTotal2(myOutput);
}


//uc8
function UC8_getAccountBalance(user) {
    sendData("api/uc8/api.aspx", "action=AccountBalance&username=x" + user, UC8_displayAccountBalance);
}

function UC8_displayAccountBalance(myOutput) {
    var tempBalanceUC8 = checkBalanceOutput(myOutput, "uc8")
    if (tempBalanceUC8 != "Maintenance" && tempBalanceUC8 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceUC8);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("uc8_balance").innerHTML = checkBalanceOutput(myOutput, "uc8");

    var walletTotalAmount = walletTotal2(myOutput);
}

//Suncity
function SUNCITY_getAccountBalance(user) {

    sendData("api/suncity/api.aspx", "action=AccountBalance&username=x" + user, SUNCITY_displayAccountBalance);
}

function SUNCITY_displayAccountBalance(myOutput) {
    var tempBalanceSuncity = checkBalanceOutput(myOutput, "tgpsuncity")
    if (tempBalanceSuncity != "Maintenance" && tempBalanceSuncity != "Error!") {
      
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceSuncity);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("suncity_balance").innerHTML = checkBalanceOutput(myOutput, "tgpsuncity");

    var walletTotalAmount = walletTotal2(myOutput);
}

//SA Gaming
function SAGAMING_getAccountBalance(user) {
    sendData("api/sagaming/api.aspx", "action=AccountBalance&username=x" + user, SAGAMING_displayAccountBalance);
}

function SAGAMING_displayAccountBalance(myOutput) {
    var tempBalanceSaGaming = checkBalanceOutput(myOutput, "sagaming")
    if (tempBalanceSaGaming != "Maintenance" && tempBalanceSaGaming != "Error!") {
        
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceSaGaming);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("sa_balance").innerHTML = checkBalanceOutput(myOutput, "sagaming");

    var walletTotalAmount = walletTotal2(myOutput);
}


//GSOPUS
function GSOPUS_getAccountBalance(user) {
    sendData("api/gsopus/api.aspx", "action=AccountBalance&username=x" + user, GSOPUS_displayAccountBalance);
}

function GSOPUS_displayAccountBalance(myOutput) {
    var tempBalanceGSOPUS = checkBalanceOutput(myOutput, "gsopus")
    if (tempBalanceGSOPUS != "Maintenance" && tempBalanceGSOPUS != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGSOPUS);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("gsopus_balance").innerHTML = checkBalanceOutput(myOutput, "gsopus");

    var walletTotalAmount = walletTotal2(myOutput);
}

function GSOPUS_transferAllBackWallet() {
    var gsopus_ta_balance = parseFloat(document.getElementById("gsopus_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(gsopus_ta_balance)) {
        gsopus_ta_balance = "Not available!";
    }
    else {
        if (opus_ta_balance != 0) {
            document.getElementById("gsopus_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_gsopus&xferTo=to_wallet&providerusername=x&txt_amount=" + gsopus_ta_balance, GSOPUS_getAccountBalance);
        }
    }
}

//gsbb
function GSBB_getAccountBalance(user) {
    sendData("api/gsbb/api.aspx", "action=AccountBalance&username=x" + user, GSBB_displayAccountBalance);
}

function GSBB_displayAccountBalance(myOutput) {
    var tempBalanceGSBB = checkBalanceOutput(myOutput, "gsbb")
    if (tempBalanceGSBB != "Maintenance" && tempBalanceGSBB != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGSBB);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("gsbb_balance").innerHTML = checkBalanceOutput(myOutput, "gsbb");

    var walletTotalAmount = walletTotal2(myOutput);
}


//ggfish
function GGFISH_getAccountBalance(user) {
    sendData("api/ggfish/api.aspx", "action=AccountBalance&username=x" + user, GGFISH_displayAccountBalance);
}

function GGFISH_displayAccountBalance(myOutput) {
    var tempBalanceGGfish = checkBalanceOutput(myOutput, "ggfish")
    if (tempBalanceGGfish != "Maintenance" && tempBalanceGGfish != "Error!")
    {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGGfish);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("ggfish_balance").innerHTML = checkBalanceOutput(myOutput, "ggfish");

    var walletTotalAmount = walletTotal2(myOutput);
    
}

//Sansing
function SANSING_getAccountBalance(user) {
    sendData("api/sansing/api.aspx", "action=AccountBalance&username=x" + user, SANSING_displayAccountBalance);
}

function SANSING_displayAccountBalance(myOutput) {
    var tempBalanceSansing = checkBalanceOutput(myOutput, "sansing")
    if (tempBalanceSansing != "Maintenance" && tempBalanceSansing != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceSansing);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("sansing_balance").innerHTML = checkBalanceOutput(myOutput, "sansing");

    var walletTotalAmount = walletTotal2(myOutput);

}


//CNLOTTO
function CNLotto_getAccountBalance(user) {
    sendData("api/cnlotto/api.aspx", "action=AccountBalance&username=x" + user, CNLotto_displayAccountBalance);
}

function CNLotto_displayAccountBalance(myOutput) {
    var tempBalanceCBlotto = checkBalanceOutput(myOutput, "cnlotto")
    if (tempBalanceCBlotto != "Maintenance" && tempBalanceCBlotto != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceCBlotto);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("cnlotto_balance").innerHTML = checkBalanceOutput(myOutput, "cnlotto");

    var walletTotalAmount = walletTotal2(myOutput);
}




//PSBET
function PSBET_getAccountBalance(user) {
    sendData("api/psbet/api.aspx", "action=AccountBalance&username=x" + user, PSBET_displayAccountBalance);
}

function PSBET_displayAccountBalance(myOutput) {
    document.getElementById("psbet_balance").innerHTML = checkBalanceOutput(myOutput, "psbet");

    var walletTotalAmount = walletTotal2(myOutput);
}

function PSBET_transferAllBackWallet() {
    var psbet_ta_balance = parseFloat(document.getElementById("psbet_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(psbet_ta_balance)) {
        psbet_ta_balance = "Not available!";
    }
    else {
        if (psbet_ta_balance != 0) {
            document.getElementById("psbet_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_psbet&xferTo=to_wallet&providerusername=x&txt_amount=" + psbet_ta_balance, PSBET_getAccountBalance);
        }
    }
}

//poker8
function Poker8_getAccountBalance(user) {
    sendData("api/poker8/api.aspx", "action=AccountBalance&username=x" + user, Poker8_displayAccountBalance);
}

function Poker8_displayAccountBalance(myOutput) {
    document.getElementById("poker8_balance").innerHTML = checkBalanceOutput(myOutput, "poker8");

    var walletTotalAmount = walletTotal2(myOutput);
}

function Poker8_transferAllBackWallet() {
    var Poker8_ta_balance = parseFloat(document.getElementById("poker8_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(Poker8_ta_balance)) {
        Poker8_ta_balance = "Not available!";
    }
    else {
        if (Poker8_ta_balance != 0) {
            document.getElementById("poker8_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_Poker8&xferTo=to_wallet&providerusername=x&txt_amount=" + Poker8_ta_balance, Poker8_getAccountBalance);
        }
    }
}


//OPUS
function OPUS_getAccountBalance(user) {
    sendData("api/opus/api.aspx", "action=AccountBalance&username=x" + user, OPUS_displayAccountBalance);
}

function OPUS_displayAccountBalance(myOutput) {
    document.getElementById("opus_balance").innerHTML = checkBalanceOutput(myOutput, "opus");
    if (document.contains(document.getElementById("opus_balance"))) {
        document.getElementById("opus_balance").innerHTML = checkBalanceOutput(myOutput, "opus");
    }

    var walletTotalAmount = walletTotal2(myOutput);
}

function OPUS_transferAllBackWallet() {
    var opus_ta_balance = parseFloat(document.getElementById("opus_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(opus_ta_balance)) {
        opus_ta_balance = "Not available!";
    }
    else {
        if (opus_ta_balance != 0) {
            document.getElementById("opus_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_opus&xferTo=to_wallet&providerusername=x&txt_amount=" + opus_ta_balance, OPUS_getAccountBalance);
        }
    }
}

//VIVO
function VIVO_getAccountBalance(user) {
    sendData("api/vivo/api.aspx", "action=AccountBalance&accountNumber=x" + user, VIVO_displayAccountBalance);
}

function VIVO_displayAccountBalance(myOutput) {
    document.getElementById("vivo_balance").innerHTML = checkBalanceOutput(myOutput, "vivo");
    if (document.contains(document.getElementById("vivo_balance"))) {
        document.getElementById("vivo_balance").innerHTML = checkBalanceOutput(myOutput, "vivo");
    }

    var walletTotalAmount = walletTotal2(myOutput);
}


function VIVO_transferAllBackWallet() {
    var vivo_ta_balance = parseFloat(document.getElementById("vivo_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(vivo_ta_balance)) {
        vivo_ta_balance = "Not available!";
    }
    else {
        if (vivo_ta_balance != 0) {
            document.getElementById("vivo_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_vivo&xferTo=to_wallet&providerusername=x&txt_amount=" + vivo_ta_balance, VIVO_getAccountBalance);
        }
    }
}
//GSGP
function GSGP_getAccountBalance(user) {
    sendData("api/gsgp/api.aspx", "action=AccountBalance&username=x" + user, GSGP_displayAccountBalance);
}

function GSGP_displayAccountBalance(myOutput) {
    var tempBalanceGSGP = checkBalanceOutput(myOutput, "gsgp")
    if (tempBalanceGSGP != "Maintenance" && tempBalanceGSGP != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGSGP);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }

    var walletTotalAmount = walletTotal2(myOutput);
    document.getElementById("gsgp_balance").innerHTML = checkBalanceOutput(myOutput, "gsgp");

}



//joker
function JOKER_getAccountBalance(user) {
    sendData("api/joker/api.aspx", "action=AccountBalance&username=x" + user, JOKER_displayAccountBalance);
}

function JOKER_displayAccountBalance(myOutput) {
    var tempBalanceJOKER = checkBalanceOutput(myOutput, "joker")
    if (tempBalanceJOKER != "Maintenance" && tempBalanceJOKER != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceJOKER);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }

    var walletTotalAmount = walletTotal2(myOutput);
    document.getElementById("joker_balance").innerHTML = checkBalanceOutput(myOutput, "joker");

}


function JOKER_transferAllBackWallet() {
    var joker_ta_balance = parseFloat(document.getElementById("joker_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(joker_ta_balance)) {
        joker_ta_balance = "Not available!";
    }
    else {
        if (joker_ta_balance != 0) {
            document.getElementById("joker_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_joker&xferTo=to_wallet&providerusername=x&txt_amount=" + joker_ta_balance, JOKER_getAccountBalance);
        }
    }
}

//poker6
function Poker6_getAccountBalance(user) {
    sendData("api/poker6/api.aspx", "action=AccountBalance&accountNumber=x" + user, Poker6_displayAccountBalance);
}

function Poker6_displayAccountBalance(myOutput) {
    var tempBalancePoker6 = checkBalanceOutput(myOutput, "poker6")
    if (tempBalancePoker6 != "Maintenance" && tempBalancePoker6 != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalancePoker6);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    var walletTotalAmount = walletTotal2(myOutput);
    document.getElementById("poker6_balance").innerHTML = checkBalanceOutput(myOutput, "poker6");

    var walletTotalAmount = walletTotal2(myOutput);
    if (document.contains(document.getElementById("poker6_balance"))) {
        document.getElementById("poker6_balance").innerHTML = checkBalanceOutput(myOutput, "poker6");
    }
}


function Poker6_transferAllBackWallet() {
    var poker6_ta_balance = parseFloat(document.getElementById("poker6_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(poker6_ta_balance)) {
        poker6_ta_balance = "Not available!";
    }
    else {
        if (poker6_ta_balance != 0) {
            document.getElementById("poker6_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_poker6&xferTo=to_wallet&providerusername=x&txt_amount=" + poker6_ta_balance, poker6_getAccountBalance);
        }
    }
}



//asialong
function ASIALONG_getAccountBalance(user) {
    sendData("api/asialong/api.aspx", "action=AccountBalance&accountNumber=x" + user, ASIALONG_displayAccountBalance);
}

function ASIALONG_displayAccountBalance(myOutput) {
    var tempBalanceAsialong = checkBalanceOutput(myOutput, "asialong")
    if (tempBalanceAsialong != "Maintenance" && tempBalanceAsialong != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceAsialong);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }

    var walletTotalAmount = walletTotal2(myOutput);
    document.getElementById("asialong_balance").innerHTML = checkBalanceOutput(myOutput, "asialong");
    if (document.contains(document.getElementById("asialong_balance"))) {
        document.getElementById("asialong_balance").innerHTML = checkBalanceOutput(myOutput, "asialong");
    }
}


function ASIALONG_transferAllBackWallet() {
    var asialong_ta_balance = parseFloat(document.getElementById("asialong_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(asialong_ta_balance)) {
        asialong_ta_balance = "Not available!";
    }
    else {
        if (asialong_ta_balance != 0) {
            document.getElementById("asialong_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_asialong&xferTo=to_wallet&providerusername=x&txt_amount=" + asialong_ta_balance, ASIALONG_getAccountBalance);
        }
    }
}

//CNYGame
function CNYGame_getAccountBalance(user) {
    sendData("api/cnygame/api.aspx", "action=AccountBalance&username=x" + user, CNYGame_displayAccountBalance);
}
function CNYGame_displayAccountBalance(myOutput) {
    var tempBalanceCNYGame = checkBalanceOutput(myOutput, "cnygame")
    if (tempBalanceCNYGame != "Maintenance" && tempBalanceCNYGame != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceCNYGame);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("cnygame_balance").innerHTML = checkBalanceOutput(myOutput, "cnygame");
    if (document.contains(document.getElementById("cnygame_balance"))) {
        document.getElementById("cnygame_balance").innerHTML = checkBalanceOutput(myOutput, "cnygame");
    }
}
//aioME
function aioME_getAccountBalance(provider, user) {
    sendData("api/aioME/api.aspx", "action=AccountBalance&username=x" + user, aioME_displayAccountBalance);
}
function aioME_displayAccountBalance(myOutput) {
    var tempBalanceaioME = checkBalanceOutput(myOutput, "aiome")
    if (tempBalanceaioME != "Maintenance" && tempBalanceaioME != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceaioME);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("aiome_balance").innerHTML = checkBalanceOutput(myOutput, "aiome");
    if (document.contains(document.getElementById("aiome_balance"))) {
        document.getElementById("aiome_balance").innerHTML = checkBalanceOutput(myOutput, "aiome");
    }

    //document.getElementById("aioME_balance").innerHTML = checkBalanceOutput(myOutput, "aioME");
}

//aioXE
function aioXE_getAccountBalance(provider, user) {
    sendData("api/aioXE/api.aspx", "action=AccountBalance&username=x" + user, aioXE_displayAccountBalance);
}
function aioXE_displayAccountBalance(myOutput) {
    var tempBalanceaioXE = checkBalanceOutput(myOutput, "aioxe")
    if (tempBalanceaioXE != "Maintenance" && tempBalanceaioXE != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceaioXE);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("aioxe_balance").innerHTML = checkBalanceOutput(myOutput, "aioxe");
    if (document.contains(document.getElementById("aioxe_balance"))) {
        document.getElementById("aioxe_balance").innerHTML = checkBalanceOutput(myOutput, "aioxe");
    }

}
//aioWM
function aioWM_getAccountBalance(provider, user) {
    sendData("api/aiowm/api.aspx", "action=AccountBalance&username=x" + user, aioWM_displayAccountBalance);
}
function aioWM_displayAccountBalance(myOutput) {
    var tempBalanceAIOWM = checkBalanceOutput(myOutput, "aiowm")
    if (tempBalanceAIOWM != "Maintenance" && tempBalanceAIOWM != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceAIOWM);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }
    document.getElementById("aiowm_balance").innerHTML = checkBalanceOutput(myOutput, "aiowm");
    var walletTotalAmount = walletTotal2(myOutput);

    //document.getElementById("aiowm_balance").innerHTML = checkBalanceOutput(myOutput, "aiowm");
}


//GSMiniGame
function GSMiniGame_getAccountBalance(user) {
    sendData("api/gsminigame/api.aspx", "action=AccountBalance&accountNumber=x" + user, GSMiniGame_displayAccountBalance);
}
function GSMiniGame_displayAccountBalance(myOutput) {
    var tempBalance = checkBalanceOutput(myOutput, "gsminigame")
    if (tempBalance != "Maintenance" && tempBalance != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalance);
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    }

    var walletTotalAmount = walletTotal2(myOutput);
    document.getElementById("gsminigame_balance").innerHTML = checkBalanceOutput(myOutput, "gsminigame");
    if (document.contains(document.getElementById("gsminigame_balance"))) {
        document.getElementById("gsminigame_balance").innerHTML = checkBalanceOutput(myOutput, "gsminigame");
    }
}
function GSMiniGame_transferAllBackWallet() {
    var gsminigame_ta_balance = parseFloat(document.getElementById("gsminigame_balance").innerHTML.replaceAll(",", ""));
    if (isNaN(gsminigame_ta_balance)) {
        gsminigame_ta_balance = "Not available!";
    }
    else {
        if (gsminigame_ta_balance != 0) {
            document.getElementById("gsminigame_balance").innerHTML = 'loading...';
            sendData("transfer_fund_proc.aspx", "transferAll=1&xferFrom=from_gsminigame&xferTo=to_wallet&providerusername=x&txt_amount=" + gsminigame_ta_balance, GSMiniGame_getAccountBalance);
        }
    }
}



function walletTotal2(myOutput) {
    if (isNaN(myOutput)) {
        if (myOutput.indexOf("aintenance") > -1) {
            myOutput = "Maintenance";
        }
        else {
            myOutput = "Error!";
        }
    }
    else {
        totalBalanceTest = parseFloat(totalBalanceTest) + parseFloat(myOutput);
        document.getElementById("total_balancetest").innerHTML = parseFloat(totalBalanceTest).formatMoney(2);
    }
}


function wallet_addToTotal(myOutput) {
    var tempBalanceWallet = checkBalanceOutput(myOutput, "wallet")

    var walletTotalAmount = walletTotal2(myOutput);
    if (tempBalanceWallet != "Maintenance" && tempBalanceWallet != "Error!") {
        totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceWallet);
        
        document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2);
    }

}



function checkBalanceOutput(myOutput, my3rdParty) {
    if (isNaN(myOutput)) {
        if (myOutput.indexOf("aintenance") > -1) {
            myOutput = "Maintenance";
        }
        else {
            myOutput = "Error!";
        }
    }
    else {

        if (document.getElementById("xferFrom")) {
            var myFromOptions = document.getElementById("xferFrom").options;
            var myToOptions = document.getElementById("xferTo").options;
            for (var i = 0; i < myFromOptions.length; i++) {
                if (my3rdParty != "gsminigame") {
                    if (myFromOptions[i].value == "from_" + my3rdParty) myFromOptions[i].disabled = false;
                }

                if (my3rdParty != "poker8" && my3rdParty != "poker6" && my3rdParty != "cnygame" && my3rdParty != "gsminigame") {
                    if (myToOptions[i].value == "to_" + my3rdParty) myToOptions[i].disabled = false;
                }
            }
        }
        myOutput = parseFloat(myOutput).formatMoney(2, ',', '.');
    }
    return myOutput;
}


function wallet_getAccountBalance() {

    sendData("api/wallet/api.aspx", "action=AccountBalance", wallet_displayAccountBalance);
}

function wallet_displayAccountBalance(myOutput) {
    var balance = parseFloat(myOutput).formatMoney(2, ',', '.');
    var balanceItems = myOutput.split("|")
    var floatingBalance = balanceItems[0];
    var actualBalance = balanceItems[1];


    document.getElementById("wallet_balance").innerHTML = balance;
    clearTimeout(balanceTimer);
    balanceTimer = window.setTimeout("wallet_getAccountBalance()", 10000);
}
var balanceTimer;

function wallet_timerGetAccountBalance() {
    balanceTimer = window.setTimeout("wallet_getAccountBalance()", 10000);
}

