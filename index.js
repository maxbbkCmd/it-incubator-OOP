const btn = document.querySelector('.btn');
const statusMessage = document.querySelector('.status-message')

// Run you car!
const carRun = () => {
  let startingNumber = Math.random();
  if ( startingNumber > 0.5) {
    carStart();
  } else {
    carBroke()
  }
}

// Car is stardet!
function carStart() {
  drawStatus(' Car is started!');
};

// Whith car something wrong!
function carBroke() {
  const statusNotification = [
    ' Br #1',
    ' Br #2',
    ' Br #3',
    ' Something wrong whith you car!!!'
  ];
  statusNotification.forEach((item, index) => {
    setTimeout(() => {
      drawStatus(item)
    }, (index + 1) * 600)
  })
};

// Log car status
function drawStatus(status) {
  statusMessage.innerHTML = status;
};

btn.addEventListener('click', carRun)