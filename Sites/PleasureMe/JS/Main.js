

class FoodElement extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'})
    }
    connectedCallback(){

        let html=`
        <style>
        *{
            font-family:  'Montserrat', sans-serif;
            color:#780D40;
            font-weight:bold;
            font-size:30px;
            text-decoration:none;
        }
        .Img
        {
            width:360px;
            height:360px;
            margin:0;
        }

        .Cont
        {
            width:360px;
            height:440px;
            background-color:#ffffff;
            border-radius:40px;
            padding:10px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }

        .Cont div
        {
            background-color:#ffffff;
            width:360px;
            height:100px;
            border-radius:40px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;

        }
        
        h2
        {
            margin:0;
        }
        </style>
        
        <a href="javascript:ChangePage(4);" class="Cont">
            <img src="${this.getAttribute("src")}" class="Img"/>
            <div>
                <h2>${this.getAttribute("text")}</h2>
            </div>
        </a>
        
        `
        this.shadowRoot.innerHTML=html
    }
}

class PlusElement extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'})
    }
    connectedCallback(){

        let html=`
        <style>
        .Img
        {
            width:70px;
            height:70px;
            margin:0;
        }
        .Cont
        {
            width:100px;
            height:460px;
            background-color:#ffffff;
            border-radius:40px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        </style>
        
        <a href="javascript:ChangePage(4);" class="Cont">
            <img src="Images/PlusIcon.png" class="Img"/>
        </a>
        
        `
        this.shadowRoot.innerHTML=html
    }
}

class BoxElement extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'})
    }
    connectedCallback(){

        let html=`
        <style>
        .Img
        {
            width:100%;
            height:100%;
            margin:0;
        }
        .Cont
        {
            width:495px;
            height:466.5px;
            background-color:#ffffff;
            border-radius:32px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        </style>
        
        <a href="javascript:ChangePage(4);" class="Cont">
            <img src="${this.getAttribute("src")}" class="Img"/>
        </a>
        
        `
        this.style.width="495px"
        this.style.height="466.5px"
        this.shadowRoot.innerHTML=html
    }
}

function ChangePage(i,c=null){
    let p0=document.getElementById("page0")
    let p1=document.getElementById("page1")
    let p2=document.getElementById("page2")
    let p3=document.getElementById("page3")
    let p4=document.getElementById("page4")
    let p5=document.getElementById("pageRecip")
    let t1=document.getElementById("BtnPageDiscover")
    let t2=document.getElementById("BtnPageSelection")
    let t3=document.getElementById("BtnPageAbout")
    
    p0.style.display="none"
    p1.style.display="none"
    p2.style.display="none"
    p3.style.display="none"
    p4.style.display="none"
    p5.style.display="none"
    t1.classList.remove("bold")
    t2.classList.remove("bold")
    t3.classList.remove("bold")
    
    if (i===0){
    	p0.style.display="flex"
    }
    if (i===1){
    	p1.style.display="flex"
        t1.classList.add("bold")
    }
    if (i===2){
    	p2.style.display="flex"
        t2.classList.add("bold")
    }
    if (i===3){
    	p3.style.display="flex"
        t3.classList.add("bold")
    }
    if (i===4){
    	p4.style.display="flex"
    }
    if (i===5){
    	p5.style.display="flex"
    }

    if (c!==null){
        window.location.href = "Main.html"+c;
    }
}


function ChangeProportion(p){
    let r=document.getElementById("recette")

    let t=`
    •${proportions[0]*p} large egg<br/>
    •${proportions[1]*p}g (${proportions[2]*p} tablespoons) granulated sugar<br/>
	•${proportions[3]*p}ml <a href="Main.html" class="text2 montagu-slab bold" style="text-decoration: underline;">brandy</a><br/>
	•${proportions[4]*p}/4 teaspoon vanilla extract<br/>
	•${proportions[5]*p} pinch of salt<br/>
	`
    let ts=`
	•${proportions[0]*p} large eggs<br/>
	•${proportions[1]*p}g (${proportions[2]*p} tablespoons) granulated sugar<br/>
	•${proportions[3]*p}ml <a href="Main.html" class="text2 montagu-slab bold" style="text-decoration: underline;">brandy</a><br/>
	•${proportions[4]*p}/4 teaspoon vanilla extract<br/>
	•${proportions[5]*p} pinches of salt<br/>
	`
    if (p>1){
    	r.innerHTML=ts
    }else{
    	r.innerHTML=t
    }
    	
}


let btn0=document.getElementById("BtnWelcome")
let btn1=document.getElementById("BtnPageDiscover")
let btn2=document.getElementById("BtnPageSelection")
let btn3=document.getElementById("BtnPageAbout")

btn0.addEventListener("click",()=>{ChangePage(0)})
btn1.addEventListener("click",()=>{ChangePage(1)})
btn2.addEventListener("click",()=>{ChangePage(2)})
btn3.addEventListener("click",()=>{ChangePage(3)})


let proportions=[1,30,2,45,1,1]

let ps=document.getElementById("nbperson")
ps.addEventListener("change",()=>{ChangeProportion(ps.value)})

ChangeProportion(ps.value)



window.customElements.define("food-card",FoodElement)
window.customElements.define("plus-card",PlusElement)
window.customElements.define("box-card",BoxElement)