const seedColor = document.getElementById("seed-color")
const schemeColor = document.getElementById("scheme-color")
const submitBtn = document.getElementById("submit-btn")
const output = document.getElementById("color-container")



submitBtn.addEventListener("click",() => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${schemeColor.value}`)
    .then(res => res.json())
    .then(data => renderColors(data))
    
})

function renderColors(data) {
    if (output) {
        output.innerHTML = ''
        data.colors.forEach((color) => {
            output.innerHTML += `<div class="colors" id="colors" style="background-color:${color.hex.value}"><button value=${color.hex.value} id="copy-hex" data-val=${color.hex.value}>${color.hex.value}</button></div>`
        })
        document.querySelectorAll('#copy-hex').forEach(button => {
        button.addEventListener('click', copyText)})
    }
}

function copyText(e){
    let btnValue = e.target.dataset.val
    if(btnValue){
    navigator.clipboard.writeText(btnValue);
    alert("Copied the text: " + btnValue)
    }

}


