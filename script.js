const character = document.getElementById('character')
const block = document.getElementById('block')
const score = 0

document.addEventListener('click', function jump() {
  if (character.classList != 'animate') character.classList.add('animate')
  setTimeout(function () {
    character.classList.remove('animate')
  }, 500)
})

var checkDead = setInterval(function () {
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  )
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  )
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none'
    alert('Game Over')

    block.style.animation = 'block 1s infinite linear'
  }
}, 10)
