
// select screen

const screenDiv = document.querySelector("#screen")
let currentScreenText = ""

//listen for button presses
const buttonContainer = document.querySelector('.buttons')
buttonContainer.addEventListener('click', event => {
  event.preventDefault()
  console.log(event.target)
  let textToScreen = event.target.textContent

  if (currentScreenText === "Error"){
    // do nothing
  } else if (event.target.localName === "div"){
    console.log("pressed within the button container, but NOT a button")
  } else if (!(event.target.id === "clear" || event.target.id === "equals")) {
      if (event.target.innerHTML === "x") {
        //overwrite "x" to "*"
        textToScreen = "*"
      } else if (event.target.innerHTML === "÷") {
        textToScreen = "/"
      } else {
      }
    currentScreenText += textToScreen
    screenDiv.textContent = currentScreenText
  } else if (event.target.id === "clear") {
    console.log(currentScreenText)
    currentScreenText = ""
    screenDiv.textContent = ""
  } else if (event.target.id === "equals"){
    console.log("pressed equals")
    currentScreenText = eval(currentScreenText)
    screenDiv.textContent = currentScreenText
  } else {
    console.log("something broke")
  }


})

console.log(eval('3 * 2'));
// expected output: 4
