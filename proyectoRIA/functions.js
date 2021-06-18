

function buscar(nombre){   
    var pelicula = nombre.value;
    var titulo=document.getElementById("titulo").value;
    var detalles="";
    var detallesTituloSolo="";
    if(titulo==""){
        detalles ="<tr>" +
        "<td  > Escribe un titulo y encontraras Peliculas, Series y Juegos </td>"+
        "</tr>";
        document.getElementById("alerta").innerHTML = detalles;
    }else  {
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
                var data= JSON.parse(this.responseText);                
                var total=data.totalResult;
                data.Search.forEach(movie => {
                detalles += "<tr>"+
                "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">+ Información</td>"+
                "<td>"+ movie.Title+"</td>"+
                "<td>"+ movie.Year+"</td>"+
                "<td>"+ movie.Type+"</td>"+
                "<td><img src="+ movie.Poster+"></td>"+
                "</tr>"; 
                });

                var detalles2 ="<tr>" +
                "<td  >RESULTADOS PARA :" + titulo + "</td>"+
                "</tr>";
                document.getElementById("alerta").innerHTML = detalles2;

                document.getElementById("informacion").innerHTML=detalles;
                }
                
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?&apikey=2cdfc014&s="+ titulo +"&plot=full&page="+pelicula,true);
            xmlhttp.send();
        }
}

    function buscarPeli(id){
      var detalles="";
      if (id==""){
        detalles ="<tr>" +
        "<td  > Ha ocurrido un error al buscar, lo sentimos... </td>"+
        "</tr>";
        document.getElementById("alerta").innerHTML = detalles;
      }else {

        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
                var data= JSON.parse(this.responseText);               
                      
                var x;  
                detallesTituloSolo=data.Title
                detalles+=  "<h3>Año: <small class=\"text-muted\">"+data.Year+ "</small></h3>"
                       +    "<h3>Calificacion: <small class=\"text-muted\">"+data.Rate+"</small></h3>"
                       +    "<h3>Estreno: <small class=\"text-muted\"> "+data.Released+"</small></h3>"
                       +    "<h3>Duracion: <small class=\"text-muted\">"+data.Runtime+"</small></h3>"
                       +    "<h3>Genero: <small class=\"text-muted\">"+data.Genre+"</small></h3>"
                       +    "<h3>Director: <small class=\"text-muted\">"+data.Director+"</small></h3>"
                       +    "<h3>Escritor: <small class=\"text-muted\">"+data.Writer+"</small></h3>"
                       +    "<h3>Casting: <small class=\"text-muted\">"+data.Actors+"</small></h3>"
                       +    "<h3>Trama: <small class=\"text-muted\">"+data.Plot+"</small></h3>"
                       +    "<h3>Idioma: <small class=\"text-muted\">"+data.Language+"</small></h3>"
                       +    "<h3>Pais: <small class=\"text-muted\">"+data.Country+"</small></h3>"
                       +    "<h3>Metascore: <small class=\"text-muted\">"+data.Metascore+"</small></h3>"
                       +    "<h3>Rating imdb: <small class=\"text-muted\">"+data.imdbRating+"</small></h3>"
                       +    "<h3>Votacion imdb: <small class=\"text-muted\">"+data.imdbVotes+"</small></h3>"
                       +    "<h3>Tipo: <small class=\"text-muted\">"+data.Type+"</small></h3>"
                       +    "<h3>DVD: <small class=\"text-muted\">"+data.DVD+"</small></h3>"
                       +    "<h3>BoxOffice: <small class=\"text-muted\">"+data.BoxOffice+"</small></h3>"
                       +    "<h3>Produccion: <small class=\"text-muted\">"+data.Production+"</small></h3>"
                       +    "<h3>Web Oficial: <small class=\"text-muted\">"+data.Website+"</small></h3>"
                }   
                var imagen= "<img src=\'"+data.Poster+"'/ ></img> "  
                document.getElementById("exampleModalLabel").innerHTML=detallesTituloSolo;     
                document.getElementById("detalles").innerHTML=detalles;
                document.getElementById("imagenes").innerHTML=imagen;

            }; 
            xmlhttp.open("GET","http://www.omdbapi.com/?&apikey=2cdfc014&i="+ id +"&plot=full",true);  
            xmlhttp.send();
        }
      }
         
         
    var pagina=5;
    function siguiente(){   
        pagina=pagina+1;
        var titulo=document.getElementById("titulo").value;
        var detalles="";
    if(titulo==""){
        detalles ="<tr>" +
        "<td  > INGRESE UN TÍTULO! </td>"+
        "</tr>";
        document.getElementById("alerta").innerHTML = detalles;
    }else  {
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);                
                  
                data.Search.forEach(movie => {
                    detalles += "<tr>"+
                               "<td><a href='#' onclick=\"buscarPeli('"+ movie.imdbID+"')\">Mas informacion</td>"+
                               "<td>"+ movie.Title+"</td>"+
                               "<td>"+ movie.Year+"</td>"+
                               "<td>"+ movie.Type+"</td>"+
                               "<td><img src="+ movie.Poster+"></td>"+
                               "</tr>";                                      
                });
                document.getElementById("informacion").innerHTML=detalles;
                } 
            };           
            xmlhttp.open("POST","http://www.omdbapi.com/?&apikey=2cdfc014&s="+ titulo +"&plot=full&page="+pagina,true);
            xmlhttp.send();
        }
}