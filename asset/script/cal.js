const numbers = document.querySelectorAll('.numb')
const display = document.querySelector('.display textarea')

let string = ''
const arr = Array.from(numbers)
arr.forEach(numb => {
  numb.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      // string = eval(string)
      // display.innerHTML = string
    }
    string += e.target.innerHTML
    display.innerHTML = string
  })
})
