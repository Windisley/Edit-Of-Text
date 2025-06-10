const editword = document.querySelector(".edit-word")

const biFonts = document.querySelector(".box-bi-fonts")

const optionsFonts = document.querySelector(".options-fonts")

// Buttons Para Mudar A fonte
const fontArial = document.querySelector(".font-arial")
const fontCourier = document.querySelector(".font-courier")
const fontImpact = document.querySelector(".font-impact")
// end

// Input size
    const inputSize = document.querySelector("#size-text")
    const buttonless = document.querySelector(".buttonless") 
    const buttonplus = document.querySelector(".buttonplus") 
//end

biFonts.addEventListener("click", ()=>{
    optionsFonts.classList.toggle("options-fonts-on")
})

function selectionText(classe){
    const selection = window.getSelection()

    if(!selection.rangeCount || selection.isCollapsed) 
    
    return

    const range = selection.getRangeAt(0)
    const selectedtext = selection.toString().trim()
    
    if (!selectedtext) return;

    const span = document.createElement("span");
    span.classList.add(classe);
    span.textContent = selectedtext;
  
    range.deleteContents();
  
    range.insertNode(span);
  
    selection.removeAllRanges();
    
}


inputSize.addEventListener("input", (input)=>{
    let valueinput = parseInt(input.target.value) 
    editword.style.fontSize = valueinput + "px"
    
})

buttonless.addEventListener("click", ()=>{
    let currentValue = parseInt(inputSize.value)
    
    if(currentValue > 1){
        inputSize.value -= 1
        editword.style.fontSize = inputSize.value + "px";
    }


})

buttonplus.addEventListener("click", ()=>{
    let currentValue = parseInt(inputSize.value);
    let sumValue = currentValue + 1;
  
    inputSize.value = sumValue;
    editword.style.fontSize = sumValue + "px";


})

// Button Type Text
    const boxBiType = document.querySelector(".box-bi-type")

// end

boxBiType.addEventListener("click", ()=>{
 editword.classList.toggle("uppercase")
 
})

const boxBiBold = document.querySelector(".box-bi-bold")

boxBiBold.addEventListener("click", ()=>{
    editword.classList.toggle("negrito")
})

const boxBiitalic = document.querySelector(".box-bi-italic")

boxBiitalic.addEventListener("click", ()=>{
    editword.classList.toggle("italic")
})

const boxBiunderline = document.querySelector(".box-bi-underline")

boxBiunderline.addEventListener("click", ()=>{
    editword.classList.toggle("underline")
})

const editColor = document.querySelector("#edit-color")

editColor.addEventListener("input", (input)=>{
    const valuecolor = input.target.value

    editword.style.color = valuecolor
})


// Get Buttons Of Position Left Or Right And Center
    const left = document.querySelector(".left")
    const right= document.querySelector(".right")
    const center = document.querySelector(".center")

    left.addEventListener("click", ()=>{
        editword.classList.add("lefttext")
        editword.classList.remove("righttext")
        editword.classList.remove("centertext")

    })

    right.addEventListener("click", ()=>{
        editword.classList.add("righttext")
        editword.classList.remove("lefttext")
        editword.classList.remove("centertext")

    })
    
    center.addEventListener("click", ()=>{
        editword.classList.add("centertext")
        editword.classList.remove("righttext")
        editword.classList.remove("lefttext")
    })

// End






