"use strict";
// "i haz insanez skillz." - tech
window.location.href !=
    "https://www.ixl.com/math/grade-5/evaluate-powers-of-ten" &&
    (window.location.href =
        "https://www.ixl.com/math/grade-5/evaluate-powers-of-ten");
let s = document.createElement("script");
s.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js`;
document.body.appendChild(s);
function solve() {
    let x = $(".old-space-indent")[0];
    // ~~ converts to number]
    let number1 = ~~x.children[0].innerHTML;
    let number2 = ~~x.children[1].innerHTML;
    let result = Math.pow(number1, number2);
    $(".fillIn")[0].value = String(result);
    $(".yui3-widget-ft")[0].children[0].click();
    return new Intl.NumberFormat("en-US").format(result);
}
console.clear();
let interval = setInterval(() => {
    try {
        console.log("%cpow: %s\nsmart score: %s", "color:magenta; font-size: 1rem;", solve(), $(".current-smartscore")[0].innerText);
    }
    catch (e) {
        if ($(".current-smartscore")[0].innerText === "100") {
            clearInterval(interval);
            console.log("%cPOW!\nDone solving!\nYou now have %s medals!", "color:lime;font-size:1.15rem;", $(".medals")[0].childElementCount + 1);
        }
    }
}, 100);
