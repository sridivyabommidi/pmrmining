let btn = document.getElementById("menuButton");

let divElement = document.getElementById("menuChart");

let crossMark = document.getElementById("cancel");
console.log(crossMark);

btn.addEventListener("click", function(){
   divElement.classList.add("d-md-block");
})

crossMark.addEventListener("click", function(){
    divElement.classList.remove("d-md-block");
 })
