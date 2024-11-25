let san1 =+prompt("1 сан енгыз")
let san2 =+prompt("2 сан енгыз")

 
if (san1,san2) {
   alert(`косу болады =${san1+san2}
азайту болады =${san1-san2}
кобейту болады= ${san1*san2}
болу болады= ${san1/san2}`)
}else if (isNaN(san1) && isNaN (san2)) {
    alert("eror")
}else if (san1<=-0&&san2<=-0) {
    alert("кате")
}
    

   

 