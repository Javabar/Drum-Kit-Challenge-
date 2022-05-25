const numberOfDrum = document.querySelectorAll(".drum").length;

for (const i = 0; i < numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", ()=>{
    const buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
    });
};

document.addEventListener("keypress", (e) => {
    sound(e.key);
    animation(e.key);
});

function sound(key) {
    switch(key){
    case "a":
        const boom = new Audio(sounds1/boom.wav);
        boom.play();
        break;
    case "b":
        const clap = new Audio(sounds1/clap.wav);
        clap.play();
        break;
    case "c":
        const hihat = new Audio(sounds1/hihat.wav);
        hihat.play();
        break;
    case "d":
        const kick = new Audio(sounds1/kick.wav);
        kick.play();
        break;
    case "e":
        const openhat = new Audio(sounds1/openhat.wav);
        openhat.play();
        break;
    case "f":
        const ride = new Audio(sounds1/ride.wav);
        ride.play();
        break;
    case "g":
        const snare = new Audio(sounds1/snare.wav);
        snare.play();
        break;
    case "h":
        const tink = new Audio(sounds1/tink.wav);
        tink.play();
        break;
    case "i":
        const tom = new Audio(sounds1/tom.wav);
        tom.play();
        break;

    default: console.log(key);
    }
}

function animation(currentKey) {
    const activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("animation");
    setTimeOut(()=>{
        activeButton.classList.remove("animation");
    }, 100);
}



