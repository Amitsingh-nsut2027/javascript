const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button){
 console.log(button)
  button.addEventListener('click', function(box){
    console.log(box)
    console.log(box.target);
    if(box.target.id === 'grey'){
      body.style.backgroundColor = box.target.id
    }
    if(box.target.id === 'blue'){
      body.style.backgroundColor = box.target.id
    }
    if(box.target.id === 'yellow'){
      body.style.backgroundColor = box.target.id
    }
    if(box.target.id === 'white'){
      body.style.backgroundColor = box.target.id
    }
    if(box.target.id === 'purple'){
      body.style.backgroundColor = box.target.id
    }
  })
})