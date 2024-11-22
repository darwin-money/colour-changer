let changeBackground = document.getElementById("btn");
let body = document.querySelector("body")
let color = ["red", "blue", "yellow", "green", "orange", "brown", "tomato", "grey"]
let currentColor = 0;

changeBackground.addEventListener("click", function(){
    body.style.backgroundColor = color[currentColor];
    currentColor++;

    if(currentColor >= color.length){
        currentColor = 0;
    }
})