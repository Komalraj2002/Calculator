// Select the document from the HTML
let inp=document.querySelector("#inp")   // # = id
let body=document.querySelector("body") 
let btns=document.querySelectorAll("button")
let h1=document.querySelector("h1")

// Function to get the value
function getValue(val){
    inp.value=inp.value+val  // Append the value of 'val' to the input's current value
    console.log(inp.value)
}

// Function to get the final Result
function getResult(){
    inp.value=eval(inp.value)
    console.log(inp.value)
}

// Function to clear the value
function clearValue(){
    inp.value=""
}

// Create the dark mode button.
let darkbutton=document.createElement("button")
darkbutton.innerHTML="Dark Mode"
darkbutton.style.width="200px"
darkbutton.style.height="50px",
darkbutton.style.margin="10px 0px 0px 400px"
darkbutton.style.border="black 1.5px solid",
darkbutton.style.fontSize="20px",
darkbutton.style.cursor="pointer"

// Add hover property on dark button 
darkbutton.addEventListener('mouseover',()=>{
    darkbutton.style.backgroundColor="darkslategray"
    darkbutton.style.color="white"
})

// Remove hover property
darkbutton.addEventListener('mouseout',()=>{
    darkbutton.style.backgroundColor="white"
    darkbutton.style.color="black"
})

// Append darkbutton in the body
body.appendChild(darkbutton)

// Add Event on the dark button
darkbutton.addEventListener("click",()=>{
    body.style.backgroundColor="black"
    inp.style.border="white 1.5px solid"
    h1.style.color="white"
    darkbutton.style.border="brown 1.2px solid"
    lightbutton.style.border="brown 1.2px solid"
    btns.forEach(function (button){
    button.style.border="brown 1.2px solid"
    })
})

// Create the light mode button.
let lightbutton=document.createElement("button")
lightbutton.innerHTML="Light Mode"
lightbutton.style.width="200px"
lightbutton.style.height="50px",
lightbutton.style.margin="10px 0px 0px 50px"
lightbutton.style.border="black 1.5px solid",
lightbutton.style.fontSize="20px",
lightbutton.style.cursor="pointer"

// Add hover property on light button
lightbutton.addEventListener("mouseover",()=>{
    lightbutton.style.backgroundColor="darkslategray"
    lightbutton.style.color="white"
})

// Remove hover property on light button
lightbutton.addEventListener("mouseout",()=>{
    lightbutton.style.backgroundColor="white"
    lightbutton.style.color="black"
})

//Apped light button in the body
body.appendChild(lightbutton)

// Add event on light button
lightbutton.addEventListener("click",()=>{
    body.style.backgroundColor="white"
    h1.style.color="black"
    inp.style.border="black 1.5px solid"
    darkbutton.style.border="black 1.5px solid"
    lightbutton.style.border="black 1.5px solid"
    btns.forEach(function (button){
        button.style.border="black 1.5px solid"
    })
})
