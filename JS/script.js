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

var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');

function fbs_click() { window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function tbs_click() { window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function pbs_click() { window.open(`https://www.pinterest.com/pin/create/button/?&text=${pageTitle}&url=${pageLink}&description=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
