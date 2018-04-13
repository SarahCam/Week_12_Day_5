
// Draw a line on our canvas...
const drawLine = function(){
  // Canvas...
  const canvas  = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  console.log("GOT TO DRAW...");
  console.log("drawLine" + canvas);
  console.log("drawLine" + context);
  context.beginPath();
  context.moveTo(10, 40);
  context.lineTo(100, 300);
  context.stroke();
};
