console.log("Hello World")

let o=false

let b=document.getElementById("btn")
let t=document.getElementById("def")
b.addEventListener("click",()=>{
    if (o){
        t.textContent=""
        b.innerText="Voir Definition"
    }else{
        t.textContent="Le football (/futbol/), ou dans le langage courant foot par apocope, ou encore soccer (/sɔkœʁ/) en français d'Amérique du Nord, et plus rarement balle au pied, est un sport collectif qui se joue avec un ballon sphérique entre deux équipes de onze joueurs ou joueuses. Ces équipes s'opposent, dans le sens de la longueur, sur un terrain rectangulaire équipé de deux buts installés au milieu de chacun des petits côtés du rectangle. L'objectif de chaque camp est de mettre le ballon dans le but adverse un nombre supérieur de fois à celui de l'autre équipe, sans que les joueurs utilisent leurs bras ou leurs mains, à l'exception des gardiens de buts : le pied est en conséquence la partie du corps principalement utilisée pour provoquer le déplacement du ballon sur le terrain."
        b.innerText="Cacher Definition"
    }
    o=!o
})