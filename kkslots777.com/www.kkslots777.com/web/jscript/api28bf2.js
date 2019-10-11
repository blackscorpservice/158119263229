var totalBalance2 = 0;

//AMEBA
function AMEBA_getAccountBalance2(user) {
    sendData("api/ameba/api.aspx", "action=AccountBalance&username=x" + user, AMEBA_displayAccountBalance2);
}

function AMEBA_displayAccountBalance2(myOutput) {
    document.getElementById("ameba_balance2").innerHTML = checkBalanceOutput(myOutput, "ameba");
  
}
//Playstar
function PLAYSTAR_getAccountBalance2(user) {
    sendData("api/playstar/api.aspx", "action=AccountBalance&username=x" + user, playstar_displayAccountBalance2);
}

function playstar_displayAccountBalance2(myOutput) {
    if (document.contains(document.getElementById("playstar_balance2"))) {
        document.getElementById("playstar_balance2").innerHTML = checkBalanceOutput(myOutput, "playstar");
    }
}
function MG_getAccountBalance2(user) {
    sendData("api/mg/api.aspx", "action=AccountBalance&username=x" + user, MG_displayAccountBalance2);
}

function MG_displayAccountBalance2(myOutput) {
    var tempBalanceMG = checkBalanceOutput2(myOutput, "mg")
    if (tempBalanceMG != "Maintenance" && tempBalanceMG != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceMG);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("mg_balance2").innerHTML = checkBalanceOutput2(myOutput, "mg");
}

//function OSG_getAccountBalance2(user) {
//    sendData("api/osg/api.aspx", "action=AccountBalance&username=x" + user, OSG_displayAccountBalance2);
//}

//function OSG_displayAccountBalance2(myOutput) {
//    document.getElementById("osg_balance2").innerHTML = checkBalanceOutput2(myOutput, "osg");
//}
//GSS
function GSS_getAccountBalance2(user) {
    sendData("api/gss/api.aspx", "action=AccountBalance&username=x" + user, GSS_displayAccountBalance2);
}

function GSS_displayAccountBalance2(myOutput) {
    var tempBalanceGSS = checkBalanceOutput2(myOutput, "gss")
    if (tempBalanceGSS != "Maintenance" && tempBalanceGSS != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGSS);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("gss_balance2").innerHTML = checkBalanceOutput2(myOutput, "gss");
}

//MRSLOTTY
function MRSLOTTY_getAccountBalance2(user) {
    sendData("api/mrslotty/api.aspx", "action=AccountBalance&username=x" + user, MRSLOTTY_displayAccountBalance2);
}

function MRSLOTTY_displayAccountBalance2(myOutput) {
    var tempBalanceMRSLOTTY = checkBalanceOutput2(myOutput, "mrslotty")
    if (tempBalanceMRSLOTTY != "Maintenance" && tempBalanceMRSLOTTY != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceMRSLOTTY);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("mrslotty_balance2").innerHTML = checkBalanceOutput2(myOutput, "mrslotty");
}

function QT_getAccountBalance2(user) {
    sendData("api/qt/api.aspx", "action=AccountBalance&username=x" + user, QT_displayAccountBalance2);
}

function QT_displayAccountBalance2(myOutput) {
    var tempBalanceQT = checkBalanceOutput2(myOutput, "qt")
    if (tempBalanceQT != "Maintenance" && tempBalanceQT != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceQT);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("qt_balance2").innerHTML = checkBalanceOutput(myOutput, "qt");
}


function OSG88_getAccountBalance2(user) {
    sendData("api/osg88/api.aspx", "action=AccountBalance&username=x" + user, OSG88_displayAccountBalance2);
}

function OSG88_displayAccountBalance2(myOutput) {
    var tempBalanceOSG88 = checkBalanceOutput2(myOutput, "osg88")
    if (tempBalanceOSG88 != "Maintenance" && tempBalanceOSG88 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceOSG88);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("osg88_balance2").innerHTML = checkBalanceOutput2(myOutput, "osg88");
}

function WFT_getAccountBalance2(user) {
    sendData("api/wft/api.aspx", "action=AccountBalance&username=x" + user, WFT_displayAccountBalance2);
}

function WFT_displayAccountBalance2(myOutput) {
    var tempBalanceWFT = checkBalanceOutput2(myOutput, "wft")
    if (tempBalanceWFT != "Maintenance" && tempBalanceWFT != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceWFT);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("wft_balance2").innerHTML = checkBalanceOutput2(myOutput, "wft");
}


function AG_getAccountBalance2(user) {
    sendData("api/ag/api.aspx", "action=AccountBalance&username=x" + user, AG_displayAccountBalance2);
}

function AG_displayAccountBalance2(myOutput) {
    var tempBalanceAG = checkBalanceOutput2(myOutput, "agin")
    if (tempBalanceAG != "Maintenance" && tempBalanceAG != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAG);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("ag_balance2").innerHTML = checkBalanceOutput2(myOutput, "ag");
}

function XPRO_getAccountBalance2(user) {
    sendData("api/xpro/api.aspx", "action=AccountBalance&username=x" + user, XPRO_displayAccountBalance2);
}

function XPRO_displayAccountBalance2(myOutput) {
    document.getElementById("xpro_balance2").innerHTML = checkBalanceOutput2(myOutput, "xpro");
}

function PT_getAccountBalance2(user) {
    sendData("api/pt/api.aspx", "action=AccountBalance&username=x" + user, PT_displayAccountBalance2);
}

function PT_displayAccountBalance2(myOutput) {
    var tempBalancePT = checkBalanceOutput2(myOutput, "pt")
    if (tempBalancePT != "Maintenance" && tempBalancePT != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalancePT);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("pt_balance2").innerHTML = checkBalanceOutput2(myOutput, "pt");
}

function NT_getAccountBalance2(user) {
    sendData("api/nt/api.aspx", "action=AccountBalance&username=x" + user, NT_displayAccountBalance2);
}

function NT_displayAccountBalance2(myOutput) {
    var tempBalanceNT = checkBalanceOutput2(myOutput, "nt")
    if (tempBalanceNT != "Maintenance" && tempBalanceNT != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceNT);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("nt_balance2").innerHTML = checkBalanceOutput2(myOutput, "nt");
}

function NETENT_getAccountBalance2(user) {
    sendData("api/netent/api.aspx", "action=AccountBalance&username=x" + user, NETENT_displayAccountBalance2);
}

function NETENT_displayAccountBalance2(myOutput) {
    var tempBalanceNETENT = checkBalanceOutput2(myOutput, "netent")
    if (tempBalanceNETENT != "Maintenance" && tempBalanceNETENT != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceNETENT);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("netent_balance2").innerHTML = checkBalanceOutput2(myOutput, "netent");
}

function HO_getAccountBalance2(user) {
    sendData("api/ho/api.aspx", "action=AccountBalance&username=x" + user, HO_displayAccountBalance2);
}

function HO_displayAccountBalance2(myOutput) {
    document.getElementById("ho_balance2").innerHTML = checkBalanceOutput2(myOutput, "ho");
}

function W88_getAccountBalance2(user) {
    sendData("api/w88/api.aspx", "action=AccountBalance&username=x" + user, W88_displayAccountBalance2);
}

function W88_displayAccountBalance2(myOutput) {
    var tempBalanceW88 = checkBalanceOutput2(myOutput, "w88")
    if (tempBalanceW88 != "Maintenance" && tempBalanceW88 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceW88);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("w88_balance2").innerHTML = checkBalanceOutput2(myOutput, "w88");
}

function YY_getAccountBalance2(user) {
    sendData("api/yy/api.aspx", "action=AccountBalance&username=x" + user, YY_displayAccountBalance2);
}

function YY_displayAccountBalance2(myOutput) {
    document.getElementById("yy_balance2").innerHTML = checkBalanceOutput2(myOutput, "yy");
}

function L4D_getAccountBalance2(user) {
    sendData("api/l4d/api.aspx", "action=AccountBalance&username=x" + user, L4D_displayAccountBalance2);
}

function L4D_displayAccountBalance2(myOutput) {
    document.getElementById("l4d_balance2").innerHTML = checkBalanceOutput2(myOutput, "l4d");
}

function CT_getAccountBalance2(user) {
    sendData("api/ct/api.aspx", "action=AccountBalance&username=x" + user, CT_displayAccountBalance2);
}

function CT_displayAccountBalance2(myOutput) {
    //alert(myOutput);
    document.getElementById("ct_balance2").innerHTML = checkBalanceOutput2(myOutput, "ct");
}

function SBO_getAccountBalance2(user) {
    sendData("api/sbo/api.aspx", "action=AccountBalance&username=x" + user, SBO_displayAccountBalance2);
}

function SBO_displayAccountBalance2(myOutput) {
    document.getElementById("sbo_balance2").innerHTML = checkBalanceOutput2(myOutput, "sbo");
}


// Added For Lotto 
function Lotto_getAccountBalance2(user) {
    sendData("api/Lotto/api.aspx", "action=AccountBalance&username=x" + user, Lotto_displayAccountBalance2);
}

function Lotto_displayAccountBalance2(myOutput) {
    document.getElementById("Lotto_balance2").innerHTML = checkBalanceOutput2(myOutput, "Lotto");
}

//allbet
function AB_getAccountBalance2(user) {
    sendData("api/ab/api.aspx", "action=AccountBalance&username=x" + user, AB_displayAccountBalance2);
}

function AB_displayAccountBalance2(myOutput) {
    var tempBalanceAB = checkBalanceOutput2(myOutput, "ab")
    if (tempBalanceAB != "Maintenance" && tempBalanceAB != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAB);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("ab_balance2").innerHTML = checkBalanceOutput2(myOutput, "ab");
}

//BBIN
function BBIN_getAccountBalance2(user) {
    sendData("api/bbin/api.aspx", "action=AccountBalance&username=x" + user, BBIN_displayAccountBalance2);
}

function BBIN_displayAccountBalance2(myOutput) {
    document.getElementById("bbin_balance2").innerHTML = checkBalanceOutput2(myOutput, "bbin");
}

//EVO
function EVO_getAccountBalance2(user) {
    sendData("api/evo/api.aspx", "action=AccountBalance&username=x" + user, EVO_displayAccountBalance2);
}

function EVO_displayAccountBalance2(myOutput) {
    document.getElementById("evo_balance2").innerHTML = checkBalanceOutput2(myOutput, "evo");
}

//KENO
function KENO_getAccountBalance2(user) {
    sendData("api/keno/api.aspx", "action=AccountBalance&username=x" + user, KENO_displayAccountBalance2);
}

function KENO_displayAccountBalance2(myOutput) {
    document.getElementById("keno_balance2").innerHTML = checkBalanceOutput2(myOutput, "keno");
}

//IBC sports
function IBC_getAccountBalance2(user) {
    sendData("api/ibc/api.aspx", "action=AccountBalance&username=x" + user, IBC_displayAccountBalance2);
}

function IBC_displayAccountBalance2(myOutput) {
    var tempBalanceIBC = checkBalanceOutput2(myOutput, "ibc")
    if (tempBalanceIBC != "Maintenance" && tempBalanceIBC != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceIBC);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("ibc_balance2").innerHTML = checkBalanceOutput2(myOutput, "ibc");
}

//AGIN
function AGIN_getAccountBalance2(user) {
    sendData("api/agin/api.aspx", "action=AccountBalance&username=x" + user, AGIN_displayAccountBalance2);
}

function AGIN_displayAccountBalance2(myOutput) {
    var tempBalanceAGin = checkBalanceOutput2(myOutput, "agin")
    if (tempBalanceAGin != "Maintenance" && tempBalanceAGin != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAGin);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("agin_balance2").innerHTML = checkBalanceOutput2(myOutput, "agin");
}

//psbet
function PSBET_getAccountBalance2(user) {
    sendData("api/psbet/api.aspx", "action=AccountBalance&username=x" + user, PSBET_displayAccountBalance2);
}

function PSBET_displayAccountBalance2(myOutput) {
    var tempBalancePSbet = checkBalanceOutput2(myOutput, "psbet")
    if (tempBalancePSbet != "Maintenance" && tempBalancePSbet != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalancePSbet);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("psbet_balance2").innerHTML = checkBalanceOutput2(myOutput, "psbet");
}



//poker8
function Poker8_getAccountBalance2(user) {
    sendData("api/poker8/api.aspx", "action=AccountBalance&username=x" + user, Poker8_displayAccountBalance2);
}

function Poker8_displayAccountBalance2(myOutput) {
    document.getElementById("poker8_balance2").innerHTML = checkBalanceOutput2(myOutput, "poker8");
}

//OPUS
function OPUS_getAccountBalance2(user) {
    sendData("api/opus/api.aspx", "action=AccountBalance&username=x" + user, OPUS_displayAccountBalance2);
}

function OPUS_displayAccountBalance2(myOutput) {

    document.getElementById("opus_balance2").innerHTML = checkBalanceOutput2(myOutput, "opus");
}

//vivo
function VIVO_getAccountBalance2(user) {
    sendData("api/vivo/api.aspx", "action=AccountBalance&username=x" + user, VIVO_displayAccountBalance2);
}

function VIVO_displayAccountBalance2(myOutput) {

    document.getElementById("vivo_balance2").innerHTML = checkBalanceOutput2(myOutput, "vivo");
}
//gsgp
function GSGP_getAccountBalance2(user) {
    sendData("api/gsgp/api.aspx", "action=AccountBalance&username=x" + user, GSGP_displayAccountBalance2);
}

function GSGP_displayAccountBalance2(myOutput) {
    var tempBalanceGSGP = checkBalanceOutput2(myOutput, "gsgp")
    if (tempBalanceGSGP != "Maintenance" && tempBalanceGSGP != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGSGP);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("gsgp_balance2").innerHTML = checkBalanceOutput2(myOutput, "gsgp");
}


//joker
function JOKER_getAccountBalance2(user) {
    sendData("api/joker/api.aspx", "action=AccountBalance&username=x" + user, JOKER_displayAccountBalance2);
}

function JOKER_displayAccountBalance2(myOutput) {
    var tempBalanceJOKER = checkBalanceOutput2(myOutput, "joker")
    if (tempBalanceJOKER != "Maintenance" && tempBalanceJOKER != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceJOKER);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("joker_balance2").innerHTML = checkBalanceOutput2(myOutput, "joker");
}

//asialong
function ASIALONG_getAccountBalance2(user) {
    sendData("api/asialong/api.aspx", "action=AccountBalance&username=x" + user, ASIALONG_displayAccountBalance2);
}

function ASIALONG_displayAccountBalance2(myOutput) {
    var tempBalanceASAIALONG = checkBalanceOutput2(myOutput, "asialong")
    if (tempBalanceASAIALONG != "Maintenance" && tempBalanceASAIALONG != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceASAIALONG);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("asialong_balance2").innerHTML = checkBalanceOutput2(myOutput, "asialong");
}



//uc8
function UC8_getAccountBalance2(user) {
    sendData("api/uc8/api.aspx", "action=AccountBalance&username=x" + user, UC8_displayAccountBalance2);
}

function UC8_displayAccountBalance2(myOutput) {
    var tempBalanceUC8 = checkBalanceOutput2(myOutput, "uc8")
    if (tempBalanceUC8 != "Maintenance" && tempBalanceUC8 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceUC8);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("uc8_balance2").innerHTML = checkBalanceOutput2(myOutput, "uc8");
}

//Suncity
function SUNCITY_getAccountBalance2(user) {
    sendData("api/suncity/api.aspx", "action=AccountBalance&username=x" + user, SUNCITY_displayAccountBalance2);
}

function SUNCITY_displayAccountBalance2(myOutput) {
    var tempBalanceSuncity = checkBalanceOutput2(myOutput, "tgpsuncity")
    if (tempBalanceSuncity != "Maintenance" && tempBalanceSuncity != "Error!") {

        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceSuncity);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("suncity_balance2").innerHTML = checkBalanceOutput2(myOutput, "suncity");
}

//gsopus
function GSOPUS_getAccountBalance2(user) {
    sendData("api/gsopus/api.aspx", "action=AccountBalance&username=x" + user, GSOPUS_displayAccountBalance2);
}

function GSOPUS_displayAccountBalance2(myOutput) {
    var tempBalanceGSOPUS = checkBalanceOutput2(myOutput, "gsopus")
    if (tempBalanceGSOPUS != "Maintenance" && tempBalanceGSOPUS != "Error!") {

        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGSOPUS);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }

    document.getElementById("gsopus_balance2").innerHTML = checkBalanceOutput2(myOutput, "gsopus");
}

//SA Gaming
function SAGAMING_getAccountBalance2(user) {
    sendData("api/sagaming/api.aspx", "action=AccountBalance&username=x" + user, SAGAMING_displayAccountBalance2);
}

function SAGAMING_displayAccountBalance2(myOutput) {
    var tempBalanceSaGaming = checkBalanceOutput2(myOutput, "sagaming")
    if (tempBalanceSaGaming != "Maintenance" && tempBalanceSaGaming != "Error!") {

        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceSaGaming);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("sa_balance2").innerHTML = checkBalanceOutput2(myOutput, "sagaming");
}

//gsbb
function GSBB_getAccountBalance2(user) {
    sendData("api/gsbb/api.aspx", "action=AccountBalance&username=x" + user, GSBB_displayAccountBalance2);
}

function GSBB_displayAccountBalance2(myOutput) {
    var tempBalanceGSBB = checkBalanceOutput2(myOutput, "gsbb")
    if (tempBalanceGSBB != "Maintenance" && tempBalanceGSBB != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGSBB);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("gsbb_balance2").innerHTML = checkBalanceOutput2(myOutput, "gsbb");
}

//sansing
function SANSING_getAccountBalance2(user) {
    sendData("api/sansing/api.aspx", "action=AccountBalance&username=x" + user, SANSING_displayAccountBalance2);
}

function SANSING_displayAccountBalance2(myOutput) {
    var tempBalanceSansing = checkBalanceOutput2(myOutput, "sansing")
    if (tempBalanceSansing != "Maintenance" && tempBalanceSansing != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceSansing);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("sansing_balance2").innerHTML = checkBalanceOutput2(myOutput, "sansing");
}

//ggfish
function GGFISH_getAccountBalance2(user) {
    sendData("api/ggfish/api.aspx", "action=AccountBalance&username=x" + user, GGFISH_displayAccountBalance2);
}

function GGFISH_displayAccountBalance2(myOutput) {
    var tempBalanceGGfish = checkBalanceOutput2(myOutput, "ggfish")
    if (tempBalanceGGfish != "Maintenance" && tempBalanceGGfish != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGGfish);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("ggfish_balance2").innerHTML = checkBalanceOutput2(myOutput, "ggfish");
}


//CNLOTTO
function CNLotto_getAccountBalance2(user) {
    sendData("api/cnlotto/api.aspx", "action=AccountBalance&username=x" + user, CNLotto_displayAccountBalance2);
}

function CNLotto_displayAccountBalance2(myOutput) {
    var tempBalanceCBlotto = checkBalanceOutput2(myOutput, "cnlotto")
    if (tempBalanceCBlotto != "Maintenance" && tempBalanceCBlotto != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceCBlotto);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("cnlotto_balance2").innerHTML = checkBalanceOutput2(myOutput, "cnlotto");
}

function CoinDragon_getAccountBalance2(user) {
    sendData("api/coindragon/api.aspx", "action=AccountBalance&username=x" + user, CoinDragon_displayAccountBalance2);
}

function CoinDragon_displayAccountBalance2(myOutput) {
    var tempBalanceCD = checkBalanceOutput2(myOutput, "coilingdragons")
    if (tempBalanceCD != "Maintenance" && tempBalanceCD != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceCD);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("coilingdragons_balance2").innerHTML = checkBalanceOutput2(myOutput, "coilingdragons");
}

function NewAsia_getAccountBalance2(user) {
    sendData("api/NewAsia/api.aspx", "action=AccountBalance&username=x" + user, NewAsia_displayAccountBalance2);
}

function NewAsia_displayAccountBalance2(myOutput) {
    var tempBalanceNewAsia = checkBalanceOutput2(myOutput, "newasia")
    if (tempBalanceNewAsia != "Maintenance" && tempBalanceNewAsia != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceNewAsia);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("newasia_balance2").innerHTML = checkBalanceOutput2(myOutput, "newasia");
}
function H4D_getAccountBalance2(user) {
    sendData("api/h4d/api.aspx", "action=AccountBalance&username=x" + user, H4D_displayAccountBalance2);
}

function H4D_displayAccountBalance2(myOutput) {
    var tempBalanceH4D = checkBalanceOutput2(myOutput, "newasia")
    if (tempBalanceH4D != "Maintenance" && tempBalanceH4D != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceH4D);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("h4d_balance2").innerHTML = checkBalanceOutput2(myOutput, "4d");
}

function Kiss918_getAccountBalance2(user) {
    sendData("api/kiss918/api.aspx", "action=AccountBalance&username=x" + user, Kiss918_displayAccountBalance2);
}

function Kiss918_displayAccountBalance2(myOutput) {
    var tempBalanceKiss918 = checkBalanceOutput2(myOutput, "kiss918")
    if (tempBalanceKiss918 != "Maintenance" && tempBalanceKiss918 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceKiss918);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("kiss918_balance2").innerHTML = checkBalanceOutput2(myOutput, "kiss918");
}

function DREAMTECH_getAccountBalance2(user) {
    sendData("api/dreamtech/api.aspx", "action=AccountBalance&username=x" + user, DREAMTECH_displayAccountBalance2);
}

function DREAMTECH_displayAccountBalance2(myOutput) {
    var tempBalanceDreamtech = checkBalanceOutput2(myOutput, "dreamtech")
    if (tempBalanceDreamtech != "Maintenance" && tempBalanceDreamtech != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceDreamtech);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("dreamtech_balance2").innerHTML = checkBalanceOutput(myOutput, "dreamtech");
}
function GAMEART_getAccountBalance2(user) {
    sendData("api/gameart/api.aspx", "action=AccountBalance&username=x" + user, GAMEART_displayAccountBalance2);
}

function GAMEART_displayAccountBalance2(myOutput) {
    var tempBalanceGameart = checkBalanceOutput2(myOutput, "gameart")
    if (tempBalanceGameart != "Maintenance" && tempBalanceGameart != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceGameart);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("gameart_balance2").innerHTML = checkBalanceOutput(myOutput, "gameart");
}


function Kiss918_getAccountBalance2(user) {
    sendData("api/kiss918/api.aspx", "action=AccountBalance&username=x" + user, Kiss918_displayAccountBalance2);
}

function Kiss918_displayAccountBalance2(myOutput) {
    var tempBalanceKiss918 = checkBalanceOutput2(myOutput, "kiss918")
    if (tempBalanceKiss918 != "Maintenance" && tempBalanceKiss918 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceKiss918);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("kiss918_balance2").innerHTML = checkBalanceOutput(myOutput, "kiss918");
}



function SPADE_getAccountBalance2(user) {
    sendData("api/spade/api.aspx", "action=AccountBalance&username=x" + user, SPADE_displayAccountBalance2);
}

function SPADE_displayAccountBalance2(myOutput) {
    var tempBalanceSpade = checkBalanceOutput2(myOutput, "spade")
    if (tempBalanceSpade != "Maintenance" && tempBalanceSpade != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceSpade);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("spade_balance2").innerHTML = checkBalanceOutput(myOutput, "spade");
}

function GENESIS_getAccountBalance2(user) {
    sendData("api/genesis/api.aspx", "action=AccountBalance&username=x" + user, GENESIS_displayAccountBalance2);
}

function GENESIS_displayAccountBalance2(myOutput) {
    var tempBalanceGenesis = checkBalanceOutput(myOutput, "genesis")
    //if (tempBalanceGenesis != "Maintenance" && tempBalanceGenesis != "Error!") {
    //    totalBalance = parseFloat(totalBalance) + parseFloat(tempBalanceGenesis);
    //    document.getElementById("total_balance").innerHTML = parseFloat(totalBalance).formatMoney(2, ',', '.');
    //}
    document.getElementById("genesis_balance2").innerHTML = checkBalanceOutput(myOutput, "genesis");
}

//Poker6
function Poker6_getAccountBalance2(user) {
    sendData("api/poker6/api.aspx", "action=AccountBalance&username=x" + user, Poker6_displayAccountBalance2);
}

function Poker6_displayAccountBalance2(myOutput) {
    var tempBalancePoker6 = checkBalanceOutput2(myOutput, "poker6")
    if (tempBalancePoker6 != "Maintenance" && tempBalancePoker6 != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalancePoker6);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }

    document.getElementById("poker6_balance2").innerHTML = checkBalanceOutput2(myOutput, "poker6");
}

//CNYGame
function CNYGame_getAccountBalance2(user) {
    sendData("api/cnygame/api.aspx", "action=AccountBalance&username=x" + user, CNYGame_displayAccountBalance2);
}

function CNYGame_displayAccountBalance2(myOutput) {
    var tempBalanceCNYGame = checkBalanceOutput2(myOutput, "cnygame")
    if (tempBalanceCNYGame != "Maintenance" && tempBalanceCNYGame != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceCNYGame);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("cnygame_balance2").innerHTML = checkBalanceOutput2(myOutput, "cnygame");
    if (document.contains(document.getElementById("cnygame_balance2"))) {
        document.getElementById("cnygame_balance2").innerHTML = checkBalanceOutput2(myOutput, "cnygame");
    }
}
//aioWM
function aioWM_getAccountBalance2(provider, user) {
    sendData("api/aiowm/api.aspx", "action=AccountBalance&username=x" + user, aioWM_displayAccountBalance2);
}
function aioWM_displayAccountBalance2(myOutput) {
    var tempBalanceAIOWM = checkBalanceOutput2(myOutput, "aiowm")
    if (tempBalanceAIOWM != "Maintenance" && tempBalanceAIOWM != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAIOWM);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("aiowm_balance2").innerHTML = checkBalanceOutput2(myOutput, "aiowm");

    //document.getElementById("aiowm_balance").innerHTML = checkBalanceOutput(myOutput, "aiowm");
}
//aioME
function aioME_getAccountBalance2(provider, user) {
    sendData("api/aioME/api.aspx", "action=AccountBalance&username=x" + user, aioME_displayAccountBalance2);
}
function aioME_displayAccountBalance2(myOutput) {
    var tempBalanceaioME = checkBalanceOutput2(myOutput, "aiome")
    if (tempBalanceaioME != "Maintenance" && tempBalanceaioME != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceaioME);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("aiome_balance2").innerHTML = checkBalanceOutput2(myOutput, "aiome");


}
//aioXE
function aioXE_getAccountBalance2(provider, user) {
    sendData("api/aioXE/api.aspx", "action=AccountBalance&username=x" + user, aioXE_displayAccountBalance2);
}
function aioXE_displayAccountBalance2(myOutput) {
    var tempBalanceaioXE = checkBalanceOutput2(myOutput, "aioxe")
    if (tempBalanceaioXE != "Maintenance" && tempBalanceaioXE != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceaioXE);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("aioxe_balance2").innerHTML = checkBalanceOutput2(myOutput, "aioxe");

    //document.getElementById("aioXE_balance").innerHTML = checkBalanceOutput(myOutput, "aioXE");
}


//aioWM
function aioWM_getAccountBalance2(provider, user) {
    sendData("api/aiowm/api.aspx", "action=AccountBalance&username=x" + user, aioWM_displayAccountBalance2);
}
function aioWM_displayAccountBalance2(myOutput) {
    var tempBalanceAIOWM = checkBalanceOutput2(myOutput, "aiowm")
    if (tempBalanceAIOWM != "Maintenance" && tempBalanceAIOWM != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAIOWM);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("aiowm_balance2").innerHTML = checkBalanceOutput2(myOutput, "aiowm");

    //document.getElementById("aiowm_balance").innerHTML = checkBalanceOutput(myOutput, "aiowm");
}

//aioSX
function aioSX_getAccountBalance2(provider, user) {
    sendData("api/aiosx/api.aspx", "action=AccountBalance&username=x" + user, aioSX_displayAccountBalance2);
}
function aioSX_displayAccountBalance2(myOutput) {
    var tempBalanceAIOSX = checkBalanceOutput2(myOutput, "aiosx")
    if (tempBalanceAIOSX != "Maintenance" && tempBalanceAIOSX != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceAIOSX);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("aiosx_balance2").innerHTML = checkBalanceOutput2(myOutput, "aiosx");

    //document.getElementById("aiowm_balance").innerHTML = checkBalanceOutput(myOutput, "aiowm");
}


//GSMiniGame
function GSMiniGame_getAccountBalance2(provider, user) {
    sendData("api/gsminigame/api.aspx", "action=AccountBalance&username=x" + user, GSMiniGame_displayAccountBalance2);
}
function GSMiniGame_displayAccountBalance2(myOutput) {
    var tempBalance = checkBalanceOutput2(myOutput, "gsminigame")
    if (tempBalance != "Maintenance" && tempBalance != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalance);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }
    document.getElementById("gsminigame_balance2").innerHTML = checkBalanceOutput2(myOutput, "gsminigame");
}

function wallet_addToTotal2(myOutput) {
   // alert('test');
    var tempBalanceWallet = checkBalanceOutput2(myOutput, "wallet")
    if (tempBalanceWallet != "Maintenance" && tempBalanceWallet != "Error!") {
        totalBalance2 = parseFloat(totalBalance2) + parseFloat(tempBalanceWallet);
      //  alert(totalBalance2);
        document.getElementById("total_balance2").innerHTML = parseFloat(totalBalance2).formatMoney(2, ',', '.');
    }

}

function checkBalanceOutput2(myOutput, my3rdParty) {
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
                    if (myToOptions[i].value == "to_" + my3rdParty ) myToOptions[i].disabled = false;
                }
            }
        }
        myOutput = parseFloat(myOutput).formatMoney(2, ',', '.');
    }
    return myOutput;
}


function wallet_getAccountBalance2() {
    sendData("api/wallet/api.aspx", "action=AccountBalance", wallet_displayAccountBalance2);
}

function wallet_displayAccountBalance2(myOutput) {
    var balance = parseFloat(myOutput).formatMoney(2, ',', '.');
    var balanceItems = myOutput.split("|")
    var floatingBalance = balanceItems[0];
    var actualBalance = balanceItems[1];


    document.getElementById("wallet_balance2").innerHTML = balance ;

}
    var balanceTimer;


function wallet_timerGetAccountBalance() {
    balanceTimer = window.setTimeout("wallet_getAccountBalance2()", 10000);
}

