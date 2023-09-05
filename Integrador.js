alert("Bienvenidos al chifa Hong Kong")
var num1=parseInt(prompt("Ingrese el monto de la entrada"));
var num2=parseInt(prompt("Ingrese el monto del segundo"));
var num3=parseInt(prompt("Ingrese el monto del postre"));
var total=num1+num2+num3
var igv=(total*18/100)+total
console.log("El precio de la entrada es de,", num1);
console.log("El precio del segundo es de,", num2);
console.log("El precio del postre es de,", num3);
console.log("La suma total es de,", total);
console.log("El precio total con igv es de,",igv);