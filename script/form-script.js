// function inputFields() {
//     var name = document.getElementById("Name");
//     var email = document.getElementById("Email");
//     var tour = document.getElementById("Tour-name");
//     name.onfocus = function () {
//         if (name.value == name.name) {
//             name.value = "";
//         }
//     };
//     name.onblur = function () {
//         if (name.value == "") {
//             name.value = name.name;
//         }
//     };
//     email.onfocus = function () {
//         if (email.value == email.name) {
//             email.value = "";
//         }
//     };
//     email.onblur = function () {
//         if (email.value == "") {
//             email.value = email.name;
//         }
//     };
//     tour.onfocus = function () {
//         if (tour.value == tour.name) {
//             tour.value = "";
//         }
//     };
//     tour.onblur = function () {
//         if (tour.value == "") {
//             tour.value = tour.name;
//         }
//     };
// }

//Using jQuery
// var field = $(".right");
// field.click(function () {
//     field.fadeOut(4000);
// });
//
// field.blur(function () {
//     field.fadeIn(4000);
//
// });

var inputField = $("#num");
var subBotton = $("#sub");
var disp = $("#timeField");
//
// function dealWithInput() {
//     $(".field").focus(function () {
//         if ($(this).val() == $(this).attr("name")) {
//             $(this).val("");
//         }
//         $(this).css("border","2px solid black");
//     });
//     $(".field").blur(function () {
//         if ($(this).val() == "") {
//             $(this).val($(this).attr("name"));
//         }
//         $(this).css("border","2px solid white");
//     });
// }

function ml() {
    $("#ml").click(function () {
        $("#hideme").fadeOut(2000);
    });
}

function sidebar() {
    $("#bar").click(function () {
        $("#main").css("margin-left", "25%");
        $("#sidebar").show();
    });
}
function close() {
    $("#close").click(function () {
        $("#sidebar").hide();
        $("#main").css("margin-left", "0");
    });
}

var min, sec, set, intervalHandler;

function Timer() {
    subBotton.click(function () {
        if (isNaN(inputField.val())) {
            alert("Please enter a numeric value!");
            return;
        }
        disp.text(inputField.val() + ":00");
        $(".timer").fadeOut(1000);
        set = disp.text().split(":");
        min = set[0];
        sec = set[1];
        intervalHandler = setInterval(tick, 1000);
    });
}

function tick() {
    var message = "";

    if (sec == 0) {
        message = min > 0 ? --min + ":59" : min + ":00";
    } else {
        message = min + ":" + (--sec < 10 ? "0" + sec : sec);
    }
    disp.text(message);
    set = disp.text().split(":");
    min = set[0];
    sec = set[1];
    if (message == "0:00") {
        resetPage();
    }
}

function resetPage() {
    clearInterval(intervalHandler);
    inputField.val("");
    $(".timer").fadeIn(1000);
}

function accordion() {
    $("#accordion").accordion();
}

function clicked() {
    $(".navLink").click(function () {
        $(".navLink").filter(".clicked").removeClass("clicked");
        $(this).addClass("clicked");
    });
}
// function dropdown() {
//     $(".dropdown").mouseenter(function () {
//         $(".dropList").css("display","block");
//     });
//     $(".dropdown").mouseleave(function () {
//         $(".dropList").css("display","none");
//     });
// }

function MyAjax() {
    $('#btn').click(function () {
        $('#para').load('newAjax.html #give');
    });
}

$(document).ready()
{
    Timer();
    // dealWithInput();
    accordion();
    clicked();
    ml();
    sidebar();
    close();
    MyAjax();
    // dropdown();
}
// function forumError() {
//     var email = document.getElementById("Email");
//     var errorMessage = document.getElementById("ErrorMessage");
//     document.getElementById("submit").onclick = function () {
//
//         if (email.value == email.name || email.value == "") {
//             errorMessage.innerHTML = "Enter at least an email address";
//             return false;
//         } else {
//             errorMessage.innerHTML = "Good Entry";
//             return true;
//         }
//     }
// }
// function isMale() {
//     document.getElementById("Male").onclick = function () {
//         if (document.getElementById("hideme").style.visibility == "hidden") {
//             document.getElementById("hideme").style.visibility = "visible";
//         } else {
//             document.getElementById("hideme").style.visibility = "hidden";
//         }
//     }
//
// }
// var currentPos = 0;
// var intervalHandle;
// function beginInimate() {
//     document.getElementById("move").style.position = "absolute";
//     document.getElementById("move").style.top = "30px";
//     document.getElementById("move").style.left = 0;
//     document.getElementById("move").innerHTML = "Hello Every one, Welcome!";
//     intervalHandle = setInterval(inimation, 50);
// }
// function inimation() {
//     currentPos += 5;
//     document.getElementById("move").style.left = currentPos + "px";
//     if (currentPos > 600) {
//         clearInterval(intervalHandle);
//         //this is for resetting style
//         // document.getElementById("move").style.position = "";
//         document.getElementById("move").style.top = "";
//         document.getElementById("move").style.left = "";
//         currentPos = 0;
//         // document.getElementById("move").innerHTML = "Sorry!";
//     }
// }
//
// window.onload = function () {
//     Timer();
//     dealWithInput();
//     accordion();
// inputFields();
//     forumError();
//     isMale();
//     setTimeout(beginInimate, 5000);
// };