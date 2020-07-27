for (let counter = 0; counter < document.querySelectorAll("button").length; counter++) {
    document.querySelectorAll(".drum")[counter].addEventListener("click", 
        ()=>{ makeSound(document.querySelectorAll(".drum")[counter].innerHTML); });    
}

document.addEventListener("keypress",
(event)=>{
    makeSound(event.key);
});



function makeSound(key){
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            break;
    }
}
