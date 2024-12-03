const btn = document.querySelector('.btn');
const log = () => {
  // console.log('Button is working!')
  let startingNumber = Math.random();
  if ( startingNumber > 0.5) {
    console.log('Car is started!')
  } else {
    setTimeout(function() {
      console.log('Br-br-br #1')
    }, 400)
    setTimeout(function() {
      console.log('Br-br-br #2')
    }, 800)
    setTimeout(function() {
      console.log('Br-br-br #3')
    }, 1200)
    setTimeout(function() {
      console.log('In car something wrong!!!')
    }, 1600)
    
  }
}

btn.addEventListener('click', log)