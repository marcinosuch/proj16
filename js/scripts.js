// scripts.js

function getTriangleArea(a,h) {
var a;
	h;
if (a <= 0 || h <= 0){
	alert('Nieprawidłowe dane');
	console.log('Nieprawidłowe dane');}
return (a*h/2)
}
console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(1, 2);
	triangle3Area = getTriangleArea(5, 50);
console.log( triangle1Area )
console.log( triangle2Area )
console.log( triangle3Area )
