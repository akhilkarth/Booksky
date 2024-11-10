var popupoverlay=document.querySelector(".popup-Overlay")
var popupbox=document.querySelector(".popup-Box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("add-book")
var booktitleinput=document.getElementById("booktitle-input")
var bookauthorinput=document.getElementById("bookauthor-input")
var bookdecsriptioninput=document.getElementById("bookdecsription-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5> <p>${bookdecsriptioninput.value}</p> <button onclick="del(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}