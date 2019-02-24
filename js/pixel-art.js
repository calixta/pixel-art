var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variables//

var paleta = document.getElementById('paleta');

var grillapixeles = document.getElementById('grilla-pixeles');

var indicadorColor = document.getElementById('indicador-de-color');

var isMouseDown = false;

//Funciones//
function colores(){
 for(var i=0; i < nombreColores.length; i++){
   var colorDiv = document.createElement('div');
   colorDiv.style.backgroundColor = nombreColores[i];
   colorDiv.className = 'color-paleta';
   paleta.appendChild(colorDiv);
 }
}

function armadoGrilla(){
  for (var i=0; i < 1750; i++){
    var nuevoPixel = document.createElement('div');
    grillapixeles.appendChild(nuevoPixel);
  }
}

//PINTAR
paleta.addEventListener('click', function cambiarIndicador(e){
  indicadorColor.style.backgroundColor=e.target.style.backgroundColor;
});

grillapixeles.addEventListener('click', function pintarPixel(e){
  e.target.style.backgroundColor=indicadorColor.style.backgroundColor;
});

grillapixeles.addEventListener('mousedown', 
  (function(){
    isMouseDown = true;
  }) 
);

grillapixeles.addEventListener('mouseover', 
  (function(e){
   if(isMouseDown){
      e.target.style.backgroundColor=indicadorColor.style.backgroundColor;
    }
  }) 
);

grillapixeles.addEventListener('mouseup',
  (function(){
    isMouseDown = false;
  })
);

//BORRAR
var $borrar = $("#borrar");

$borrar.click(function(){
  var $grillaNueva = $("#grilla-pixeles div");
  $grillaNueva.animate({"background-color":"#ffffff"},500)
});

//CARGAR SUPERHEROES

var $batman = $("#batman");
var $wonder = $("#wonder");
var $flash = $("#flash");
var $invisible = $("#invisible");

$batman.click(function(callback){
  callback = cargarSuperheroe(batman);
});

$wonder.click(function(callback){
  callback = cargarSuperheroe(wonder);
});

$flash.click(function(callback){
  callback = cargarSuperheroe(flash);
});

$invisible.click(function(callback){
  callback = cargarSuperheroe(invisible);
});

//GUARDAR

var $guardar = $("#guardar");

$guardar.click(guardarPixelArt);

colores();
armadoGrilla();

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

