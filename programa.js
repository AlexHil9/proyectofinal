alert ("ASEGURADORA KT-U")
alert ("COTIZADOR AUTOMATICO")
//COTIZACIÓN AUTOMATICA DE LA EMPRESA DE SEGUROS
var precio_base = 2000
//Valores de los recargos  más porcentajes
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

//Recargo por hijos más procentaje
var hijos_recargo = 0.2 // 20%

//Recargo extra por imnuebles más porcentaje
var propiedad_1 = 0.35 // 35%
var propiedad_2 = 0.05 // 5%

var propiedad = 0
var recargo = 0
var recargo_total = 0

var precio_final = 0 

var nombre = prompt("POR FAVOR INGRESE SU NOMBRE")
var edad = prompt("¿CUÁNTOS AÑOS TIENE?")
var casado = prompt("¿ESTÁ CASADO/A?")

var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("SI/NO" , "¿EDAD DE SU ESPOSA/O?")
}
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("TIENE HIJOS/AS")
var hijos_cantidad_numero = 0
if ("SI" == hijos.toUpperCase()){
  hijos_cantidad_numero = prompt("CUANTOS HIJOS TIENE")
}
//Recargo por edad
if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}
//Recargo por conyuge
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo = precio_base * casado_18
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}
// recargo por hijos
if(hijos_cantidad_numero >=0 ){
  recargo = recargo + precio_base * hijos_recargo
  recargo_total = recargo_total + recargo
}
// Calculo de recargos extras por inmuebles
var tiene_propiedades = prompt("TIENE PROPIEDADES")
var tiene_propiedades_cantidad_numero = 0
if ("SI" == tiene_propiedades.toUpperCase()){
  tiene_propiedades_cantidad_numero = prompt("CUANTAS PROPIEDADES TIENE")
}
if(tiene_propiedades_cantidad_numero >= 0 && tiene_propiedades_cantidad_numero <2){
  recargo = precio_base * propiedad_1
   recargo_total = recargo_total + recargo
} else if(tiene_propiedades_cantidad_numero >= 2){
  recargo = precio_base * propiedad_2
  recargo_total = recargo_total + recargo
}
var salir = prompt ("DESEA SALIR")
var desea_salir
if("SI" == salir.toUpperCase()){
  desea_salir = alert ("ACONTINUACIÓN LE MOSTRARA LA COTIZACIÓN")
}
precio_final = precio_base + recargo_total
alert ("PARA LA PERSONA DEL SEGURO: "+nombre)
alert ("UN RECARGO TOTAL ES DE Q: "+recargo_total)
alert ("EL PRECIO SERA DE Q: "+precio_final)
alert ("GRACIAS POR VISITAR NUESTRA EMPRESA DE SEGUROS TK-U,   " +   "ES UN GUSTO SERVILE")

