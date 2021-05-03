$(document).ready(function() {

  //realizará una petición a la URL que esperará asíncronamente a que se reciba una respuesta.
  fetch('https://api.github.com/users/suncubus')

  //Pasamos el resultado obtenido a una función anónima que formatea la respuesta como JSON pasando la respuesta al segundo then.
  .then(response => response.json())
  //.then(response => response.text())//tipo test
  
  //Muestra el código JSON por la consola.
  //.then(data => console.log(data))

  //Muestra cada elemento en pantalla
  .then(data => {
    $.each(data, (index, item) =>{            
      $("#user").append(`<li><b>${index}:</b> ${item}</li>`);
      console.log(index + ": " + item);
     
    });
    
  })
  
  //usamos el método catch para mostrar un posible error 
  .catch(error => console.error(error));
  
  
});