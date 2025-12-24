function volume_sphere() {
    //Write your code here
  const radiusValue = document.getElementById("radius").value;
  const radius = Number(radiusValue);
  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
  }

  document.getElementById("volume").value = volume;

  return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
