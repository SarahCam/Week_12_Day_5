// Draw a line on our canvas...
const drawLine = function(){
  // Canvas...
  const canvas  = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(10, 40);
  context.lineTo(100, 300);
  context.stroke();
};
