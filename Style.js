//const logo = document.querySelectorAll("#Logo path");

//for (let index = 0; index < logo.length; index++) {
//  console.log(`Letter ${index} is ${logo[index].getTotalLength()}`)

//}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})