let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let cross = document.querySelector('.cross')

burger.onclick = function () {
  menu.style.display = 'block'

  burger.style.display = 'none'

  cross.style.display = 'block'
}

cross.onclick = function () {
  menu.style.display = 'none'

  burger.style.display = 'block'

  cross.style.display = 'none'
}
