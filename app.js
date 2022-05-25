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
    if (keyValue.key == "a"){
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    } else if ( keyValue.key == "s") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    }else if ( keyValue.key == "d") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
    } else if ( keyValue.key == "f" ) {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
    } else if ( keyValue.key == "g") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    } else if ( keyValue.key == "h") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
    } else if ( keyValue.key == "j") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
    } else if ( keyValue.key == "k") {
        tink.pause();
        tink.currentTime = 0;
        tink.play();
    } else if ( keyValue.key == "l") {
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

// so the pause and current time allow it to be pressed and repeat the sound instantly
// without it you have to wait for the sound clip to end before it repeats

tomDrum.addEventListener("click", () => {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
}); 

