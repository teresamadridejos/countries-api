# API Countries

Queremos aprender a consumir APIs:

##    Nivel uno
Tenemos un API de todos los países del mundo (https://restcountries.com/v3.1/all), necesitamos imprimir el contenido de este API a un JSON y luego imprimir una lista de los países con sus banderas (Se puede añadir mas atributos del API).

##    Nivel dos
Al hacer click a un país, necesitamos que aparezca una lista de los países vecinos usando el API (https://api.geodatasource.com/neighbouring-countries), Esta API requiere dos parámetros: __`key`__ y __country\_code__. La clave (`key`) se obtiene de registrarse en su página web: 

    y el parámetro `country_code` será el que obtengas a partir de la información de la primera API.
  
##    Nivel tres
Marcar la ubicación de este país en el mapa usando la librería Leaflet.js.
