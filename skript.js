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
    

function sandarTabu() {
    let a = +prompt("Неше сан енгізесіз?");
    if (!a || a <= 0) {
        alert("Сан дұрыс енгізілген жоқ!");
        return; }
    let terys = 0, jup = 0, poo = 0;
    for (let i = 0; i < a; i++) {
        let san = +prompt(`Сан ${i + 1}-ші енгізіңіз:`);
        if (san < 0) terys++; 
        if (san % 2 === 0) jup++; 
        else poo++; 
    alert(`\n
        Теріс сан  ${terys}
         Жұп сан ${jup}
        Тақ сан ${taq}`);}}
sandarTabu();

let sann =  50;

 
function sandar(){
    while(true){
        let san = +prompt("Сан енгізіңіз: ")
    if(sann == san){
      alert("сан тандадын!")
    }else if(san < 0 || san > 100){
        alert("дурыс емес!")
    }  else if (sann-5<=san && san<=sann+5 ){
        alert(" Сіз жақындап қалдыңыз:  " )
    }else{
        alert("Сіз алыстап кеттіңіз! ")
    }
    }}
sandar();


 