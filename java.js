//Cache de DOM
var buton= document.getElementById("button")
var body=document.getElementById("body")
var nume=document.getElementById("Nume")
var prenume=document.getElementById("Prenume")
var img=document.getElementById("img")
var asteptari=document.getElementById("Asteptari")

const d= new Date()
var year = d.getFullYear()

buton.addEventListener("click", ViataNoua)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
   an.innerHTML = year - an.innerHTML
}

buton.addEventListener("click", altaViata)

function altaViata()
{
     nume.innerHTML="Functie: Java Dev"
     prenume.innerHTML="Locul de munca:Paris"
     asteptari.innerHTML= "Experienta: <ol><li> Cercetare </li></ol>

     img.src = "smile.jpg"

     body.style.backgroundColor= "green"
     body.style.color = "pink"

     img.style.opacity = "70%"
     img.style.borderWidth = "25px"
     img.style.height = "200px"
     img.style.width = "300px"
     
}
