/* let header = document.querySelector("header");

header.style.backgroundColor = "#6c757d";

let primaryCallToAction =  document.querySelector(".btn-primary");

primaryCallToAction.style.backgroundColor = " #d63384";

primaryCallToAction.style.color = "#5D1338";

primaryCallToAction.style.borderColor = "#5D1338";

primaryCallToAction.style.borderWidth = "2px";

primaryCallToAction.style.fontWeight = "bold";

primaryCallToAction.style.textTransform = "uppercase";


let secondaryCallToAction = document.querySelector(".btn-outline-light");

secondaryCallToAction.style.backgroundColor = "red";


let heroImage = document.querySelector(".img-fluid");

heroImage.src = "https://www.pngkey.com/png/detail/276-2769847_180-svg-clip-arts-600-x-300-px.png"

console.log(heroImage);

let features = document.querySelector(".row.gx-5.row-cols-1")
let arr = Array.from(features)
console.log(arr[1])

features.classList.add("yellow-background")


let navBar = document.querySelector("nav")


console.log(navBar.classList)

navBar.classList.remove("bg-dark")
console.log(navBar.classList)

let test = document.querySelector("main")
console.log(test.style)

secondaryCallToAction.addEventListener("click", toggleClass())

function toggleClass(element){
    if(element.classList.contains( "text-white","bg-dark")){
        element.classList.remove("text-white","bg-dark")
    }else{
        element.classList.add("text-white","bg-dark")
    }

    console.log(element.classList)
} 


console.log(secondaryCallToAction.textContent) 


let title = document.querySelector(".navbar-brand")

title.innerText = "Website von Melke Tesfay";


let foot = document.querySelector(".small.m-0.text-white");

console.log(foot.textContent)
 foot.innerHTML = "Copyright &copy; Melke Tesfay"

 console.log(foot.textContent)





let h2 = document.querySelectorAll("p")

let arr = [1,2,3,4,5]

for(i in arr){
    console.log(i)
}

for(i of h2.entries()){
    console.log(i);
}

console.log("ForEACH")

h2.forEach(e=> console.log(e))


console.log("for Loop")

for(let i = 0; i<h2.length; i++){
    let h1 = document.createElement("h1")
    h1.innerText = "Melke"
    h2[i].appendChild(h1);
}

h2.forEach(e=> console.log(e))




let blog = document.querySelectorAll("#blog-entries")

blog.forEach(e => e.style.backgroundColor = "#ffc107")

let bodyElements = document.querySelector("body")

bodyElements.forEach(e => console.log(e))

console.log(bodyElements.childNodes)

for(i of bodyElements.childNodes){
    if(i.childNodes.length> 0){
        console.log(i)
    }
    }


*/

//Toggle background color of cards

let card = document.querySelectorAll("#blog-entries .card");

card.forEach((e) => console.log(e));

card.forEach((e) => (e.style.backgroundColor = "grey"));

card.forEach((e) => {
  e.addEventListener("click", toggleMe);
});

function toggleMe() {
  if (this.style.backgroundColor === "grey") {
    this.style.backgroundColor = "red";
  } else if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = "grey";
  }
}
