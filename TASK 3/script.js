let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
fahrenheit.oninput = () => 
{
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
};
celsius.oninput = () => 
{
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
};