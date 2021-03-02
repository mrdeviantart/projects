//--------------------------------------------------------------
// form -----------
//--------------------------------------------------------------

//initializing sum slider

const sumInput = $("#sum-input");
// const sumInputMaxValue = sumInput.attr("max");
// const sumInputMinValue = sumInput.attr("min");

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // getting spaces between a number, f.e. 1 500 000 = 1500000
}

// function putRandomInputValue () {
//     let randomInputValue = Math.round((Math.random().toFixed(2))*sumInputMaxValue);
//     if (randomInputValue < sumInputMinValue) {
//         sumInput.val(numberWithSpaces(sumInputMinValue) + (" ₽"));
//     }  else {
//         sumInput.val(numberWithSpaces(randomInputValue) + (" ₽"))
//     }
// }

const sumSlider = $("<div id='sum-slider'></div>").insertAfter(sumInput).slider({
    range: "max",
    min: 500000,
    max: 10000000,
    value: 1000000,
    step: 50000,
    slide: function (event, ui) {
        sumInput.val(numberWithSpaces(ui.value) + (" ₽"));
    },
    change: function (event, ui) {
        doTheMath();
    }
});

//putting default value
sumInput.val(numberWithSpaces(sumSlider.slider("value")) + (" ₽"));
// setInterval(putRandomInputValue, 5000);

//-----------------------------------------------------------------------

//initializing term slider
const termInput = $("#term-input");

const termSlider = $("<div id='term-slider'></div>").insertAfter(termInput).slider({
    range: "max",
    min: 1,
    max: 12,
    value: 5,
    step: 1,
    slide: function (event, ui) {
        termInput.val((ui.value) + (" мес."));
    },
    change: function (event, ui) {
        doTheMath();
    }
});
//putting default value
termInput.val((termSlider.slider("value")) + (" мес."));
//------------------------------------------------------------------------

//general function that gets value from input field and puts it into slider
function putValue(inputName, sliderName, min, max, text) {
    const inputValue = inputName.val();
    let value = parseInt(inputValue.replace(/\s/g, ""));

    if (value < min) {
        value = min;
        inputName.val(numberWithSpaces(min) + text);
        if (inputName === sumInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-sum").text() + " " + "до" + " " + $(".max-sum").text());
        } else if (inputName === termInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-term").text() + "а" + " " + "до" + " " + $(".max-term").text());
        }
    } else if (isNaN(value)) {
        value = min;
        inputName.val(numberWithSpaces(min) + text);
        if (inputName === sumInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-sum").text() + " " + "до" + " " + $(".max-sum").text());
        } else if (inputName === termInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-term").text() + "а" + " " + "до" + " " + $(".max-term").text());
        }
    } else if (value > max) {
        value = max;
        inputName.val(numberWithSpaces(max) + text);
        if (inputName === sumInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-sum").text() + " " + "до" + " " + $(".max-sum").text());
        } else if (inputName === termInput) {
            alert("Пожалуйста, введите числовое значение от" + " " + $(".min-term").text() + "а" + " " + "до" + " " + $(".max-term").text());
        }
    } else {
        inputName.val(numberWithSpaces(value) + text);
    }
    console.log(value);

    sliderName.slider("value", value);
}

//function for sum
sumInput.on("change", function () {
    putValue(sumInput, sumSlider, +sumInput.attr("min"), +sumInput.attr("max"), " ₽");
});
//function for term
termInput.on("change", function () {
    putValue(termInput, termSlider, +termInput.attr("min"), +termInput.attr("max"), " мес.");
});

//--------submit btn
$(".submit-btn").on("click", function (e) {
    e.preventDefault();
})

//submit value math function
function doTheMath() {
    const result = Math.round((sumSlider.slider("value")) / (termSlider.slider("value")));
    $(".submit-value p").text(numberWithSpaces(result) + (" ₽"));
}