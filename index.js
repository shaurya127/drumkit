for(var a=0;a<document.querySelectorAll(".drum").length;a++) {
    document.querySelectorAll(".drum")[a].addEventListener("click",function() {
        switch(this.innerHTML) {
            case "w":
                var crash= new Audio("sounds/sp1.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("sounds/sp2.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("sounds/garmi.mp3");
                snare.play()
                break;
            case "d":
                var tom1 = new Audio("sounds/muqabla.mp3");
                tom1.play()
                break;
            case "j":
                var tom2 = new Audio("sounds/geda.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 =new Audio("sounds/goli.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/dilbara.mp3");
                tom4.play();
                break;
            
            default:console.log(buttonInnerHTML);
        }
    });
document.addEventListener("keypress",function(event){
    switch (event.key) {
        case "w":
            var crash = new Audio("sounds/sp1.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/sp2.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/garmi.mp3");
            snare.play()
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
    }
})  ;  

}
    