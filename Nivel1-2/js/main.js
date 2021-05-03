$(document).ready(function() {
  $.get("http://api.icndb.com/jokes", function(data){
      //mostramos contenido json
      console.log(data.value);
      //mostramos cada objeto que hay en el array
        $.each(data.value, (index, item) =>{            
            console.log(item);
        });

  });
});

/**************************************
***************3 MANERAS***************
**************************************/

/*CON GET*/
//document ready
$(document).ready(function() {

    $('#getBtn').click(function(e) {
        e.preventDefault();
  
        $.get("http://api.icndb.com/jokes/random", function(data, status){
            $("#joke").html(`${data.value.joke}`);
            console.log(status);
          });
    });

});
/*CON AJAX*/
//función
$('#ajaxBtn').click(viewJoke);

function viewJoke(){  
    $.ajax({
        url: 'http://api.icndb.com/jokes/random',
        type: 'get',
        dataType: 'json',
        success: function(data){
            console.log(data.value.joke);
            $(`#joke`).html(`${data.value.joke}`);             
        },
        error: function(xhr, status, error){
            console.log(xhr);
            console.log(status);
            console.log(error);
        },
    });
}


        
/*XMLHTTPREQUEST
Proporciona una forma fácil de obtener información de una URL sin tener que recargar 
la página completa. Una página web puede actualizar sólo una parte de la página sin 
interrumpir lo que el usuario está haciendo*/
//Listener

requestBtn.addEventListener('click', (ev) => {

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random', true); 

  xhr.onload = function () {
    if (this.status == 200) {//status 200 = todo ok
      let jokeResponse = JSON.parse(this.responseText); 
      joke.innerHTML = jokeResponse.value.joke;
    }
  }

  xhr.send();
});
