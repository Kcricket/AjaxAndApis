// ejecuta esta función cuando se cargue el documento
// {/* <body onload="window.alert('Bienvenido a mi página!');"> */}

// window.onload = function() {

//          // crea dinámicamente un par de elementos HTML en una página vacia
//          var heading = document.createElement("h1");
//          var heading_text = document.createTextNode("el texto que desee");
//          heading.appendChild(heading_text);
//          document.body.appendChild(heading);
//       }

var btn = document.getElementById("btn");
var theboyz = document.getElementById("theboyz");
var others = document.getElementById("others");

//Acabamos de coger la informacion de la api de personas 
btn.addEventListener("click", function(){

      var xhr = new XMLHttpRequest();
      xhr.open('Get', 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
      xhr.onload= function() {
            // Se guarda en una variable 
            //Se guarda el texto dentro del traductor parse de JSON (AHora es un array)
            var pinfo = JSON.parse(xhr.responseText);
            console.log(pinfo);
            //ejecuta funcion que añade html 
            addRenderHtmlNames(pinfo);
            addRenderHtmlOthers(pinfo);
      }
      xhr.send();
});

//data esta predefinida en la funcion anterior, por la funcion anónima creada por el botón 
//Estas funciones son utiles para pasar la info de la bd JSON a una bonita muestra en pantalla via HTML
function addRenderHtmlNames(data){
      var htmlString= "";
      for (i=0; i < 2; i++){
            //Se guarda en la variable a la vez que se le da formato
            htmlString += "<p> Name: "+data[i].first+" <br/> Last Name: "+data[i].last+ "<p>";      
      }
      //Se inserta en el correspondiente div 
      theboyz.insertAdjacentHTML('beforeend', htmlString);
}


function addRenderHtmlOthers(data){
      var htmlString= "";
      for (i=0; i < 2; i++){
            htmlString += "<p> Email: "+data[i].email+" <br/> Balance: "+data[i].balance+ " <br/> Adress: "+data[i].adress+ "<p>";      
      }
      others.insertAdjacentHTML('beforeend', htmlString);
}
