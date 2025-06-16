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

  const container = range.commonAncestorContainer;
  const parentElement = container.nodeType === 3 ? container.parentElement : container;

  if (parentElement.tagName === "SPAN" && parentElement.classList.contains(classe)) {
    const textNode = document.createTextNode(parentElement.textContent);
    parentElement.replaceWith(textNode);
    return;
  }
    
    const span = document.createElement("span");
    span.classList.add(classe);
    span.textContent = selectedtext;

    
    range.deleteContents();
  
    range.insertNode(span);
  
    selection.removeAllRanges();
    
}

 
function selectionColorStyle(input) {
    const selection = window.getSelection();
  
    if (!selection.rangeCount || selection.isCollapsed) return;
  
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    const colorValue = input.value;
  
    if (!selectedText) return;
  
    const span = document.createElement("span");
    span.style.color = colorValue;
    span.textContent = selectedText;
  
    range.deleteContents();
    range.insertNode(span);
  
    selection.removeAllRanges();
  }

  function selectionFontSize(select) {
    const selection = window.getSelection();
  
    if (!selection.rangeCount || selection.isCollapsed) return;
  
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();
    const sizeValue = select.value;
  
    if (!selectedText) return;
  
    const span = document.createElement("span");
    span.style.fontSize = sizeValue;
    span.textContent = selectedText;
  
    range.deleteContents();
    range.insertNode(span);
  
    selection.removeAllRanges();
  }



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

// // End






