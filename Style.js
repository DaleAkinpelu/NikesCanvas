//const logo = document.querySelectorAll("#Logo path");

//for (let index = 0; index < logo.length; index++) {
//  console.log(`Letter ${index} is ${logo[index].getTotalLength()}`)

//}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
var demo3 = document.getElementById("demo3");


while (window.innerWidth <= 575.98) {
    demo1.classList.remove("btn-lg");
    demo2.classList.remove("btn-lg");
    demo3.classList.remove("btn-lg");

    demo1.classList.add("btn-sm");
    demo2.classList.add("btn-sm");
    demo3.classList.add("btn-sm");

}