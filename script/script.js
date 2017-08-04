// var newNode = document.createElement("li");
// var myElement = document.getElementById("abc");
// var secondElement = myElement.getElementsByTagName("li")[1];
// var myText = document.createTextNode("HELLO AMMAN");
// newNode.appendChild(myText);
// myElement.insertBefore(newNode,secondElement);
// function prepareEventHandler() {
//     var myImage = document.getElementById("mainImage");
//     myImage.onclick = function () {
//         alert("hello  world1");
//     }
// }
// window.onload = function () {
//     //prepare anthing we need to
//     prepareEventHandler();
// }
function Fields() {
    var usernameField = document.getElementById("username");
    var passwordField = document.getElementById("password");
    usernameField.onfocus = function () {
        if (usernameField.value == "your username") {
            usernameField.value = "";
        }
    };
    usernameField.onblur = function () {
        if (usernameField.value == "") {
            usernameField.value = "your username";
        }
    };
    passwordField.onblur = function () {
        if (passwordField.value == "") {
            passwordField.value = "your password";
        }
    };
    passwordField.onfocus = function () {
        if (passwordField.value == "your password") {
            passwordField.value = "";
        }
    }
}

window.onload = function () {
    Fields();
    //Image changer code
    var arrayImages = ["images/christina-truong.png", "images/1.jpg", "images/2.jpg", "images/3.jpg"];
    var myImage = document.getElementById("mainImage");
    var count = 0;
    function changeImage() {
        myImage.setAttribute("src", arrayImages[count]);
        count = (count + 1) % arrayImages.length;
    }
    var inetervaalHandle = setInterval(changeImage, 5000);
    myImage.onclick = function () {
        clearInterval(inetervaalHandle);
    }
    $("#accordion").accordion();
};

