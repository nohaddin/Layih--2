let input0 = document.querySelector("input")
let list = document.querySelector(".list")
let delet = document.querySelector(".delet")
let ad = document.querySelector(".add")
let naz0 = document.querySelector(".naz0")
let naz = document.querySelector(".naz")
let p0 = document.querySelector(".p0")
function addItem() {
    let divCotent = "<p class=\"p0\"></p>\n<button class=\"delet\"><img class=\"two\" src=\"./Frame (2).svg\" alt=\"\"></button>"
    let input0 = document.querySelector("input")
    if (input0.value != "") {
        let a = document.createElement("div")
        a.classList.add("newList")
        a.innerHTML = divCotent
        let b = a.children[0];
        b.textContent = input0.value
        document.querySelector(".nuhu").append(a);
        console.log(a);
        a.children[1].children[0].addEventListener("click" , event => {
            a.remove()
        } )
        
    }
}
function clenTexs(){
    let input0 = document.querySelector("input")
    input0.value = ""
}
ad.addEventListener("click", () =>{
    addItem()
    clenTexs()
})



// let deletButton = document.q uerySelector(".nuhun delet");
// console.log(deletButton);

document.querySelector(".nuhun .delet").addEventListener("click", event => {
    event.target.parentElement.parentElement.children[0].value = "";
})


function getList() {
    let newList = document.querySelectorAll(".newList");
    let rtr = [];
    newList.forEach(item => {
        rtr.push(item.children[0].textContent);
    })
    return rtr;
}

function getSortedList() {
    return getList().sort();
}

function getSortedReversed() {
    return getSortedList().reverse();
}

let flag = false;

document.querySelector(".one").addEventListener("click", event => {
    let arr;
    if (flag) {
        arr = getSortedReversed();
        event.target.src = "./Frame (3).svg";
    }
    else {
        arr = getSortedList();
        event.target.src = "./Group 90.svg";
    }
    flag = !flag;
    let newList = document.querySelectorAll(".newList");
    newList.forEach((item,id) => {
        item.children[0].textContent = arr[id];
    })

})