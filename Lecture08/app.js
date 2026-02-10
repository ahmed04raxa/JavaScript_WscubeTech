// let para = document.getElementById('para')
// let heading = document.getElementById('heading')
// console.log(para.innerHTML);
// console.log(heading.innerText);

// let input = document.querySelector("#password")
// let btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//    if (btn.innerHTML == "Show Password") {
//       input.type = "text"
//       btn.innerHTML = "Hide Password";

//    } else {
//       btn.innerHTML = "Show Password";
//       input.type = "password"
//    }
//    //input.type = input.type == "password" ? "text" : "password"
// })

let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let p = document.querySelector("p")

btn.addEventListener("click", () => {
   h1Data = h1.innerHTML;
   pData = p.innerHTML;
   h1.innerHTML = pData
   p.innerHTML = h1Data
   p.style.backgroundColor= "red"
   p.style.color= "white"
   h1.style.backgroundColor= "yellow"
   h1.style.color= "black"

   // pData.innerHTML = h1Data.innerHTML
   // h1Data.innerHTML = pData.innerHTML

})