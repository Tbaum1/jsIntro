function celsiusToFahrenheit(celsius) 
{
  var celsiusTemp = celsius;
  var cToF = celsiusTemp * 9 / 5 + 32;
  var message = celsiusTemp + ' C is ' + cToF + ' F.';
  console.log(message);
}

function fahrenheitToCelsius(fahrenheit) 
{
  var fahrenheitTemp = fahrenheit;
  var fToC = (fahrenheitTemp - 32) * 5 / 9;
  var message = fahrenheitTemp + ' F is ' + fToC + ' C.';
  console.log(message);
} 
celsiusToFahrenheit(45);
fahrenheitToCelsius(60);