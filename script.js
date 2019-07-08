
console.log("Javascript Works!");

var suspectList = [ "Suspect 1", "Suspect 2", " Suspect 3",];
var suspectGuilty = [ 2 ];
var suspectDeduced = [];
console.log(suspectDeduced);
console.log(suspectDeduced.length);


//Starting prompt to insert player's name
var detectiveName = prompt("Reveal your identity!")

//Change image upon click to eliminate the suspects
function changeImage(){
    var image = document.getElementById("pic_s1");
    if (image.src.match("images/Suspect1.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect1.png";
    }
}

function changeImage2(){
    var image = document.getElementById("pic_s2");
    if (image.src.match("images/Suspect2.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect2.png";
    }
}

function changeImage3(){
    var image = document.getElementById("pic_s3");
    if (image.src.match("images/Suspect3.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect3.png";
    }
}

function changeImage4(){
    var image = document.getElementById("pic_s4");
    if (image.src.match("images/Suspect4.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect4.png";
    }
}

function changeImage5(){
    var image = document.getElementById("pic_s5");
    if (image.src.match("images/Suspect5.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect5.png";
    }
}

function changeImage6(){
    var image = document.getElementById("pic_s6");
    if (image.src.match("images/Suspect6.png")) {
        image.src = "images/Eliminated-Suspect.png";
    }
    else {
        image.src = "images/Suspect6.png";
    }
}

// Create variable to insert input for the user to input the chosen suspect
document.querySelector('#input').addEventListener('change',function(event){
    var currentInput = event.target.value;
    var parsedInput = parseInt(currentInput);
    inputHappened(parsedInput);
    console.log(parsedInput);
});

var display = function( data ){
    output.innerText = data;
}

// Setting for display, to show the result
var inputHappened = function(parsedInput) {
    if (parsedInput === suspectGuilty[0]) {
        display("Excellent! Elementary, my dear " + detectiveName);
        console.log(display);
    }
    else {
        display("Try again, it's suspect number 2! Never trust to general impressions, my boy, but concentrate yourself upon details.");
    }
};