const btn = document.querySelector('.btn');
const statusMessage = document.querySelector('.status-message');
const transmission = document.querySelector('.transmission-text');

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
  setInterval(() => { showTransmissionValue() }, 1000);
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
      drawStatus(item)}, index * 300)
  })  
};

// Log car status
function drawStatus(status) {
  statusMessage.innerHTML = status;
};


// Show transmission value in html
function showTransmissionValue() {

  // Transmission counter
  let transmissionValue = 0;
  
  if (transmissionValue < 5) {
    transmission.innerHTML = transmissionValue;
    transmissionValue++;
    
  }
};

btn.addEventListener('click', carRun)