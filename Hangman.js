let st;
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13&&document.querySelector(".Wordtoguess").value!="")
    {
        st = document.querySelector(".Wordtoguess").value;
        document.querySelector(".container").style.display = "none";
        document.querySelector(".chan").style.display = "flex";
        start();
    }
});


let buttonsArray = [];
let ar = [];
    
function start() {
    let essai = document.createElement("div");
    essai.style.cssText = "display:flex;justify-content:center;align-items:center;";
    let essaicase;

    for (let i = 0; i < st.length; i++) {
        essaicase = document.createElement("input");
        essaicase.type = "text";
        essaicase.setAttribute("readonly", "");
        essaicase.style.cssText = "width:40px;margin:10px;border:2px solid black;border-radius:20%;display:flex;justify-content:center;align-items:center;font-size:20px;font-weight:bold;";
        essai.appendChild(essaicase);
        ar[i] = essaicase;
    }
    document.body.appendChild(essai);
    let characters = document.createElement("div");
    characters.style.cssText = "display:grid;grid-template-columns:repeat(6,auto);";
    let char;
    
    let f = -1;
    for (let i = 97; i <= 122; i++) {
        char = document.createElement("button");
        char.appendChild(document.createTextNode(`${String.fromCharCode(i)}`))
        char.className = (`${String.fromCharCode(i)}`);
        char.style.cssText = "width:40px;margin:10px;border:2px solid black;border-radius:20%;display:flex;justify-content:center;align-items:center;font-size:20px;font-weight:bold;cursor:pointer;";
        characters.appendChild(char);
        buttonsArray[f + 1] = char;
        f++;
    }
    document.body.appendChild(characters);
    buttonsArray.forEach(egaux);
}

let n = 2;
let l = 1;

function egaux(e)
{
    
    e.onclick=function()
    {  
        if(l>st.length||n>11)
        return;
        else  
      {
        if(st.includes( e.getAttribute("class"))===true)
        {
           for(let i=0;i<st.length;i++)
           {
            if(st[i]=== e.getAttribute("class"))
            {
                e.style.background="green";
                ar[i].value= e.getAttribute("class");   
                l++;
            }
           }
        if(l>st.length)
        {
            document.styleSheets[0].rules[13].style.removeProperty("display");
        }
        }
        else{
            document.styleSheets[0].rules[n].style.removeProperty("display");
            e.style.background="red";
            n++;
            if(n>11)
        {
        document.styleSheets[0].rules[12].style.removeProperty("display");
        }
        }
        
}

}
}


