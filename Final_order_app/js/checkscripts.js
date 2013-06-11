onload=init;

var size_price=0;

var crust_price=0;

var top_price=0;

var drink_price=0;

function init(){
	/// POPULATE SIZE ///
	if(readCookie("size")=="small"){
		document.getElementById("size_dis").innerHTML="Small Pizza -- $8.50";
		document.getElementById("cart_pizza").innerHTML="<img src=\"../img/small_cart.png\">";
		size_price=8.50;}
	else if(readCookie("size")=="med"){
		document.getElementById("size_dis").innerHTML="Medium Pizza -- $10.50";
		document.getElementById("cart_pizza").innerHTML="<img src=\"../img/med_cart.png\">";
		size_price=10.50;}
	else if(readCookie("size")=="lrg"){
		document.getElementById("size_dis").innerHTML="Large Pizza -- $14.00";
		document.getElementById("cart_pizza").innerHTML="<img src=\"../img/large_cart.png\">";
		size_price=14.00;}
	/// POPULATE CRUST ///
	if(readCookie("crust")=="thin"){
		document.getElementById("crust_dis").innerHTML="Thin and Crispy Crust -- $2.00";
		crust_price=2.00;}
	else if(readCookie("crust")=="pan"){
		document.getElementById("crust_dis").innerHTML="Pan Crust -- $2.00";
		crust_price=2.00;}
	else if(readCookie("crust")=="stuffed"){
		document.getElementById("crust_dis").innerHTML="Stuffed Crust -- $4.00";
		crust_price=4.00;}
	/// POPULATE TOPPING ///
	if(readCookie("topping")=="peppers"){
		document.getElementById("top_dis").innerHTML="Sliced Peppers -- $1.00";
		document.getElementById("cart_top").innerHTML="<img src=\"../img/peppers_cart.png\">";
		top_price=1.00;}
	else if(readCookie("topping")=="olives"){
		document.getElementById("top_dis").innerHTML="Sliced Black Olives --$1.00";
		document.getElementById("cart_top").innerHTML="<img src=\"../img/olive_cart.png\">";
		top_price=1.00;}
	else if(readCookie("topping")=="onions"){
		document.getElementById("top_dis").innerHTML="Sliced Onions -- $1.00";
		document.getElementById("cart_top").innerHTML="<img src=\"../img/onion_cart.png\">";
		top_price=1.00;}
	/// POPULATE DRINK ///
	if(readCookie("drink")=="cola"){
		document.getElementById("drink_dis").innerHTML="2 Liter of Cola -- $1.50";
		document.getElementById("cart_drink").innerHTML="<img src=\"../img/cola_cart.png\">";
		drink_price=1.50;}
	else if(readCookie("drink")=="tea"){
		document.getElementById("drink_dis").innerHTML="2 Liter of Iced Tea -- $1.50";
		document.getElementById("cart_drink").innerHTML="<img src=\"../img/tea_cart.png\">";
		drink_price=1.50;}
	else if(readCookie("drink")=="grape"){
		document.getElementById("drink_dis").innerHTML="2 Liter of Grape Soda -- $1.50";
		document.getElementById("cart_drink").innerHTML="<img src=\"../img/grape_cart.png\">";
		drink_price=1.50;}{
	}
	/// CALCULATE & DISPLAY TOTALS IN CART ///
	document.getElementById('price_total').innerHTML="Your total is $"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	document.getElementById('submit').onmousedown=function(){btnDwn();};
	document.getElementById('submit').onmouseup=function(){btnUp();};
}

function btnDwn(){
	document.getElementById('submit').style.background="url(../img/button_pressed.png)";
}

function btnUp(){
	document.getElementById('submit').style.background="";
}