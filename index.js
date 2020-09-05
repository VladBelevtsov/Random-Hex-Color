const btn = document.getElementById('generate')
const text = document.getElementById('color')

const generator = function() {
  newColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16)

  if (newColor.length < 7) {
    generator()
  }
}

btn.addEventListener('click', function() {
  generator()

  document.body.style.background = newColor
  btn.style.color = newColor
  text.innerText = newColor
})