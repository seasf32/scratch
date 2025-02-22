//     const boxes = document.querySelectorAll(".box")



//    boxes.forEach((apple)=> {
//        apple.addEventListener("mouseenter", function(){
//            const color = document.getElementById("color");
//            const opacity = document.getElementById("op")
//            let currentOpacity = opacity.value * 0.1;
//            console.log(color.value);
//           let r = Math.floor( 255 * Math.random())
//           let g = Math.floor( 255 * Math.random())
//            let b = Math.floor( 255 * Math.random())
//            this.style.backgroundColor = color.value;
//           this.style.opacity = currentOpacity
//        })
//    })

const content = document.querySelector(".content")
const amount = document.getElementById("amount")

function createBoxes(num){
    content.innerHTML = ""
    console.log(content)
for(let n=0; n<num*num; n++){
    const box = document.createElement("div");
    content.appendChild(box);
    box.addEventListener("mouseenter", function(){
        this.style.display = "grid";
        this.style.backgroundColor = "black";
    })
}

   content.style.gridTemplateColumns = `repeat(${num}, 1fr)`

}

amount.addEventListener("click", function(){
    const number = Number(prompt("how many boxes do you want?:"))
    createBoxes(number);
})

createBoxes(2);