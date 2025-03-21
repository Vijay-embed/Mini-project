/* body */
const changebackground= document.body

/* links */
const hexpage = document.getElementById("hex-page")
const rgbpage = document.getElementById("rgb-page")
const hslpage = document.getElementById("hsl-page")

/* main */
const hexwrapper=document.getElementById("hex-wrapper")
const rgbwrapper=document.getElementById("rgb-wrapper")
const hslwrapper=document.getElementById("hsl-wrapper")

/* button */
const hexcolor=document.getElementById("hex-color")
const rgbcolor=document.getElementById("rgb-color")
const hslcolor=document.getElementById("hsl-color")

hexpage.addEventListener("click",function(){
    if(hexpage.style.textDecoration!="underline"){
        hexwrapper.style.display="block"
        rgbwrapper.style.display="none"
        hslwrapper.style.display="none"
        hexpage.style.textDecoration="underline"
        rgbpage.style.textDecoration="none"
        hslpage.style.textDecoration="none"
        //changebackground.style.backgroundColor=hexcolor.textContent
    }
})
    
rgbpage.addEventListener("click",function(){
    if(rgbpage.style.textDecoration!="underline")
    {
        hexwrapper.style.display="none" 
        rgbwrapper.style.display="block"
       hslwrapper.style.display="none"
       hexpage.style.textDecoration="none"
       rgbpage.style.textDecoration="underline"
       hslpage.style.textDecoration="none"
    //changebackground.style.backgroundColor=rgbcolor.textContent
    }
})

hslpage.addEventListener("click",function(){
    if(hslpage.style.textdecoration!="underline")
    {
       hexwrapper.style.display="none" 
       rgbwrapper.style.display="none"
       hslwrapper.style.display="block"
       hexpage.style.textDecoration="none"
       rgbpage.style.textDecoration="none"
       hslpage.style.textDecoration="underline"
    //changebackground.style.backgroundColor=hslcolor.textContent
    }
})

const hex=[0,1,2,3,4,5,6,7,8,"a","b","c","d","e","f"]

let randomNumber;

hexcolor.addEventListener("click",function(){
    let hexcolorvalue ="#"
    for(let i=0;i<6;i++)
    {
        randomNumber =Math.floor(Math.random()*hex.length)
        hexcolorvalue=hexcolorvalue+hex[randomNumber]

    }
    hexcolor.textContent=hexcolorvalue
    changebackground.style.background=hexcolorvalue
})


rgbcolor.addEventListener("click",function(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    const rgbcolorvalue= `rgb(${r},${g},${b})`
    rgbcolor.textContent=rgbcolorvalue
    changebackground.style.backgroundColor=rgbcolorvalue
})

hslcolor.addEventListener("click",function(){
    let h = Math.floor(Math.random()*361);
    let s = Math.floor(Math.random()*101);
    let l = Math.floor(Math.random()*101);

    const hslcolorvalue= `hsl(${h},${s}%,${l}%)`
    hslcolor.textContent=hslcolorvalue
    changebackground.style.backgroundColor=hslcolorvalue
})

