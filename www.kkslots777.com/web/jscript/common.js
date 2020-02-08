String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find, 'g'), replace);
};

Number.prototype.formatMoney = function (decPlaces, thouSeparator, decSeparator) {
    var n = this,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

function randomNum() {
    return Math.floor(Math.random() * 9999999999)
}

function refreshCodeImg(img_id, srcFrom) {
    document.getElementById(img_id).src = "vcode.aspx?r=" + randomNum() + "&srcFrom=" + srcFrom;
}

function toggleForgotPasswordPanel() {
    if (document.getElementById("forgotPasswordTable").style.display == "")
        document.getElementById("forgotPasswordTable").style.display = "none";
    else
        document.getElementById("forgotPasswordTable").style.display = "";

}

function logout() {
    top.window.location = "promotionscf80.html"
}

function parseLogin(result) {
    var loginDetails = result.split("#");
    var loginTableHTML = "";

    if (loginDetails[0] != "0") {
        loginTableHTML += "<table><tr><td>Email:</td><td>" + loginDetails[3] + "</td></tr>";
        loginTableHTML += "<tr><td>Full name:</td><td>" + loginDetails[2] + "</td></tr>";
        loginTableHTML += "<tr><td>Currency:</td><td>" + loginDetails[5] + "</td></tr>";
        loginTableHTML += "<tr><td colspan='2' align='right'><input type='button' value='logout' onclick='logout()' /></td></tr></table>";

        document.getElementById("loginTable").innerHTML = loginTableHTML;
    }
    else {
        alert(loginDetails[1]);
    }

}


function transWindow(url) {
    popupWindow = window.open(url, 'winTrans', 'height=580,width=760,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes');
    popupWindow.focus();

}



function numbersOnly(e) {
    var evt = (e) ? e : window.event;
    var key = (evt.keyCode) ? evt.keyCode : evt.which;

    if (key != null) {
        key = parseInt(key, 10);

        if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
            if (!isUserFriendlyChar(key))
                return false;
        }
        else {
            if (evt.shiftKey)
                return false;
        }
    }
    return true;
}



function numbersDecimalOnly(e) {
    var evt = (e) ? e : window.event;
    var key = (evt.keyCode) ? evt.keyCode : evt.which;

    if (key != null) {
        key = parseInt(key, 10);

        if (key == 190 || key == 110) return true;

        if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
            if (!isUserFriendlyChar(key))
                return false;
        }
        else {
            if (evt.shiftKey)
                return false;
        }
    }
    return true;
}




function isUserFriendlyChar(val) {
    // Backspace, Tab, Enter, Insert, and Delete
    if (val == 8 || val == 9 || val == 13 || val == 45 || val == 46)
        return true;
    // Ctrl, Alt, CapsLock, Home, End, and Arrows
    if ((val > 16 && val < 21) || (val > 34 && val < 41))
        return true;
    // The rest
    return false;
}



function MGLobby() {
    popupWindow = window.open(
            "MGSlotsLobby.html", 'MGLobby', 'height=780,width=970,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}


function OSGLobby(gameName) {
    popupWindow = window.open(
            "OSGLobby.aspx?gameName=" + gameName, 'OSGLobby', 'height=670,width=960,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}


function padZero(num, size) {
    var s = "00000000000" + num;
    return s.substr(s.length - size);
}