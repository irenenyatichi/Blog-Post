function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").Index.HTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
const textDisplay = document.getElementById('text')
const phrases = ["... Irene Nyatichi  ,  Welcome  ..."]
let i = 0
let j =0
let currentPhrase = []

function loop(){
  textDisplay.innerHTML = currentPhrase.join('')
  if (i<phrases.length){
    console.log(phrases[i])//this is the outer loop

    if (j <=phrases[i].length){
      currentPhrase.push(phrases[i][j])
      j++
      console.log("add a letter" , j)
    }
  setTimeout(loop, 120)
}
}
loop();

