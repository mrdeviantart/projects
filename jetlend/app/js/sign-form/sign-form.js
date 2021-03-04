// const headerHeight2 = $("header").innerHeight();
// const footerHeight = $("footer").innerHeight();
// const signWrapper = $(".sign-wrapper");
// const windowHeight = $(window).innerHeight();
// const signWrapperHeight = windowHeight - headerHeight2 - footerHeight;
//
// signWrapper.css("min-height",signWrapperHeight + "px");
//-----------------------------------------------------------------

const emailInput = $("#email");
const passwordInput = $("#password");
const passwordRepeatInput = $("#password-repeat");
const userNameInput = $("#username");
const emailLabel = $(".email-label");
const passwordLabel = $(".password-label");
const passwordRepeatLabel = $(".password-repeat-label");
const userNameInputLabel = $(".username-label");
const translateUp = "translate(0, -22px)";
const translateDown = "translate(10px, 14px)";
const labelSize = "15px";
const labelSmallerSize = "14px";
const signButton = $(".sign-btn .btn");

// general function that moves the label while input is focused
function moveLabelWhileFocused(inputName, inputLabel) {
    let value = inputName.val();

    inputLabel.css({
        "transform": translateUp,
        "font-size": labelSmallerSize
    });
    inputName.css("borderColor","#E4ECEE");

    if (value !== "") {
        inputName.css("borderColor","#0ed193");
    }

    if (inputName === emailInput) {
        inputLabel.text("Введите email");
    } else if (inputName === passwordInput) {
        inputLabel.text("Введите пароль");
    } else if (inputName === passwordRepeatInput) {
        inputLabel.text("Введите пароль еще раз");
    } else {
        inputLabel.text("Введите Ваше имя");
    }
    inputLabel.css("color","#0ed193");
}
//-------------

// general function that moves the label when input loses focus
function moveLabelWhileBlured(inputName, inputLabel, button) {
    inputName.each(function () {
        let value = inputName.val();
        if (value !== "") {
            inputLabel.css({
                "transform": translateUp,
                "font-size": labelSmallerSize
            });
            inputName.css("borderColor","#0ed193");
            button.css("background","#0ed193");
        } else {
            inputLabel.css({
                "transform": translateDown,
                "font-size": labelSize
            });
            inputName.css("borderColor","red");
            inputLabel.text("Поле не заполнено");
            inputLabel.css("color","red");
            button.css("background","red");
        }
    });
}
//-------------

// general function that checks whether the value exist or not
// if yes = do not move the label after input focus lost
// if no = move the label after focus is lost
function checkInputValue(inputName, inputLabel) {
    inputName.each(function () {
        let value = inputName.val();
        if (value !== "") {
            inputLabel.css({
                "transform": translateUp,
                "font-size": labelSmallerSize
            });
        }
    });
}

function checkBothValue() {
    if (emailInput.val() === "" || passwordInput.val() === "" || passwordRepeatInput.val() === "" || userNameInput.val() === "") {
        signButton.css("background","red");
    }
}

// getting email function
//-----------------------------------------------------
emailInput.on("focus", function () {
    moveLabelWhileFocused(emailInput, emailLabel);
});

emailInput.on("blur", function () {
    moveLabelWhileBlured(emailInput, emailLabel, signButton);
    checkBothValue();
});

emailInput.on("input", function () {
    checkInputValue(emailInput, emailLabel);
});

// getting password function
//-----------------------------------------------------
passwordInput.on("focus", function () {
    moveLabelWhileFocused(passwordInput, passwordLabel);
});

passwordInput.on("blur", function () {
    moveLabelWhileBlured(passwordInput, passwordLabel, signButton);
    checkBothValue();
});

passwordInput.on("input", function () {
    checkInputValue(passwordInput, passwordLabel);
});

// getting passwordRepeat function
//-----------------------------------------------------
passwordRepeatInput.on("focus", function () {
    moveLabelWhileFocused(passwordRepeatInput, passwordRepeatLabel);
});

passwordRepeatInput.on("blur", function () {
    moveLabelWhileBlured(passwordRepeatInput, passwordRepeatLabel, signButton);
    checkBothValue();
});

passwordRepeatInput.on("input", function () {
    checkInputValue(passwordRepeatInput, passwordRepeatLabel);
});

// getting username function
//-----------------------------------------------------
userNameInput.on("focus", function () {
    moveLabelWhileFocused(userNameInput, userNameInputLabel);
});

userNameInput.on("blur", function () {
    moveLabelWhileBlured(userNameInput, userNameInputLabel, signButton);
    checkBothValue();
});

userNameInput.on("input", function () {
    checkInputValue(userNameInput, userNameInputLabel);
});

