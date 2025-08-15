const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <0 || isNaN(height)){
    console.log(results.innerHTML = `Please give a valid height ${height}`);
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight <0 || isNaN(weight)){
    console.log(results.innerHTML = `Please give a valid weight ${weight}`);
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi<18.6){
      results.innerHTML = `"uner weight" ${bmi}`
    }
    if(bmi>24.9){
      results.innerHTML =` "over weight" ${bmi}`
    }
    else{results.innerHTML = `<span> weight is in bmi range ${bmi}</span>`}
    

  }
});