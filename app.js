const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keypress", (keyValue) => {
    if (keyValue.key == "a" || keyValue.key == "A"){
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    } else if ( keyValue.key == "s" || keyValue.key == "S") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    }else if ( keyValue.key == "d" || keyValue.key == "D") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
    } else if ( keyValue.key == "f" || keyValue.key == "F") {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
    } else if ( keyValue.key == "g" || keyValue.key == "G") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    } else if ( keyValue.key == "h" || keyValue.key == "H") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
    } else if ( keyValue.key == "j" || keyValue.key == "J") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    } else if ( keyValue.key == "k" || keyValue.key == "K") {
        tink.pause();
        tink.currentTime = 0;
        tink.play();
    } else if ( keyValue.key == "l" || keyValue.key == "L") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
    }
});

const count = 0;

boomDrum.addEventListener("click", () => {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
}); 

kickDrum.addEventListener("click", () => {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
}); 

snareDrum.addEventListener("click", () => {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
}); 

clapDrum.addEventListener("click", () => {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
}); 

openhatDrum.addEventListener("click", () => {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
}); 

tinkDrum.addEventListener("click", () => {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
}); 
hihatDrum.addEventListener("click", () => {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
}); 
rideDrum.addEventListener("click", () => {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
}); 
tomDrum.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
}); 

