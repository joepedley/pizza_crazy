onload=init;

var size_price=0;

var crust_price=0;

var top_price=0;

var drink_price=0;

function init(){
	document.getElementById('size').onmousedown=function(){sizeDown();};
	document.getElementById('crust').onmousedown=function(){crustDown();};
	document.getElementById('top').onmousedown=function(){topDown();};
	document.getElementById('drink').onmousedown=function(){drinkDown();};
	document.getElementById('size').onmouseup=function(){sizeUp();};
	document.getElementById('crust').onmouseup=function(){crustUp();};
	document.getElementById('top').onmouseup=function(){topUp();};
	document.getElementById('drink').onmouseup=function(){drinkUp();};
	document.getElementById('c1_size').onmousedown=function(){cOneSizeDown();};
	document.getElementById('c2_size').onmousedown=function(){cTwoSizeDown();};
	document.getElementById('c3_size').onmousedown=function(){cThreeSizeDown();};
	document.getElementById('c1_size').onmouseup=function(){cOneSizeUp();};
	document.getElementById('c2_size').onmouseup=function(){cTwoSizeUp();};
	document.getElementById('c3_size').onmouseup=function(){cThreeSizeUp();};
	document.getElementById('c1_crust').onmousedown=function(){cOneCrustDown();};
	document.getElementById('c2_crust').onmousedown=function(){cTwoCrustDown();};
	document.getElementById('c3_crust').onmousedown=function(){cThreeCrustDown();};
	document.getElementById('c1_crust').onmouseup=function(){cOneCrustUp();};
	document.getElementById('c2_crust').onmouseup=function(){cTwoCrustUp();};
	document.getElementById('c3_crust').onmouseup=function(){cThreeCrustUp();};
	document.getElementById('c1_top').onmousedown=function(){cOneTopDown();};
	document.getElementById('c2_top').onmousedown=function(){cTwoTopDown();};
	document.getElementById('c3_top').onmousedown=function(){cThreeTopDown();};
	document.getElementById('c1_top').onmouseup=function(){cOneTopUp();};
	document.getElementById('c2_top').onmouseup=function(){cTwoTopUp();};
	document.getElementById('c3_top').onmouseup=function(){cThreeTopUp();};
	document.getElementById('c1_drink').onmousedown=function(){cOneDrinkDown();};
	document.getElementById('c2_drink').onmousedown=function(){cTwoDrinkDown();};
	document.getElementById('c3_drink').onmousedown=function(){cThreeDrinkDown();};
	document.getElementById('c1_drink').onmouseup=function(){cOneDrinkUp();};
	document.getElementById('c2_drink').onmouseup=function(){cTwoDrinkUp();};
	document.getElementById('c3_drink').onmouseup=function(){cThreeDrinkUp();};
	document.getElementById('c1_crust').style.display="none";
	document.getElementById('c2_crust').style.display="none";
	document.getElementById('c3_crust').style.display="none";
	document.getElementById('c1_top').style.display="none";
	document.getElementById('c2_top').style.display="none";
	document.getElementById('c3_top').style.display="none";
	document.getElementById('c1_drink').style.display="none";
	document.getElementById('c2_drink').style.display="none";
	document.getElementById('c3_drink').style.display="none";
	document.getElementById('submit').onmousedown=function(){subDown();};
	document.getElementById('submit').onmouseup=function(){subUp();};
}

function sizeDown(){
	document.getElementById('size').style.background="url(../img/nav_op_selected.png)";
	document.getElementById('c1_size').style.display="block";
	document.getElementById('c2_size').style.display="block";
	document.getElementById('c3_size').style.display="block";
	document.getElementById('c1_crust').style.display="none";
	document.getElementById('c2_crust').style.display="none";
	document.getElementById('c3_crust').style.display="none";
	document.getElementById('c1_top').style.display="none";
	document.getElementById('c2_top').style.display="none";
	document.getElementById('c3_top').style.display="none";
	document.getElementById('c1_drink').style.display="none";
	document.getElementById('c2_drink').style.display="none";
	document.getElementById('c3_drink').style.display="none";
}



// NAV BUTTONS



function crustDown(){
	document.getElementById('crust').style.background="url(../img/nav_op_selected.png)";
	document.getElementById('c1_crust').style.display="block";
	document.getElementById('c2_crust').style.display="block";
	document.getElementById('c3_crust').style.display="block";
	document.getElementById('c1_size').style.display="none";
	document.getElementById('c2_size').style.display="none";
	document.getElementById('c3_size').style.display="none";
	document.getElementById('c1_top').style.display="none";
	document.getElementById('c2_top').style.display="none";
	document.getElementById('c3_top').style.display="none";
	document.getElementById('c1_drink').style.display="none";
	document.getElementById('c2_drink').style.display="none";
	document.getElementById('c3_drink').style.display="none";
	}

function topDown(){
	document.getElementById('top').style.background="url(../img/nav_op_selected.png)";
	document.getElementById('c1_top').style.display="block";
	document.getElementById('c2_top').style.display="block";
	document.getElementById('c3_top').style.display="block";
	document.getElementById('c1_size').style.display="none";
	document.getElementById('c2_size').style.display="none";
	document.getElementById('c3_size').style.display="none";
	document.getElementById('c1_crust').style.display="none";
	document.getElementById('c2_crust').style.display="none";
	document.getElementById('c3_crust').style.display="none";
	document.getElementById('c1_drink').style.display="none";
	document.getElementById('c2_drink').style.display="none";
	document.getElementById('c3_drink').style.display="none";
}

function drinkDown(){
	document.getElementById('drink').style.background="url(../img/nav_op_selected.png)";
	document.getElementById('c1_top').style.display="none";
	document.getElementById('c2_top').style.display="none";
	document.getElementById('c3_top').style.display="none";
	document.getElementById('c1_size').style.display="none";
	document.getElementById('c2_size').style.display="none";
	document.getElementById('c3_size').style.display="none";
	document.getElementById('c1_crust').style.display="none";
	document.getElementById('c2_crust').style.display="none";
	document.getElementById('c3_crust').style.display="none";
	document.getElementById('c1_drink').style.display="block";
	document.getElementById('c2_drink').style.display="block";
	document.getElementById('c3_drink').style.display="block";
}

function sizeUp(){
	document.getElementById('size').style.background="";
}

function crustUp(){
	document.getElementById('crust').style.background="";
}

function topUp(){
	document.getElementById('top').style.background="";
}

function drinkUp(){
	document.getElementById('drink').style.background="";
}


//SIZE BUTTONS


function cOneSizeDown(){
	document.getElementById('c1_size').style.background="url(../img/c_selected.png)";
	document.getElementById('size_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/pizza_small_nav.png\">";
	document.getElementsByTagName('h3')[0].innerHTML="$8.50";
	document.getElementById('cart_pizza').innerHTML="<img class=\"cart\" src=\"../img/small_cart.png\">";
	size_price=8.50;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("size","small",0);
}

function cTwoSizeDown(){
	document.getElementById('c2_size').style.background="url(../img/c_selected.png)";
	document.getElementById('size_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/pizza_med_nav.png\">";
	document.getElementsByTagName('h3')[0].innerHTML="$10.50";
	document.getElementById('cart_pizza').innerHTML="<img class=\"cart\" src=\"../img/med_cart.png\">";
	size_price=10.50;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("size","med",0);
}

function cThreeSizeDown(){
	document.getElementById('c3_size').style.background="url(../img/c_selected.png)";
	document.getElementById('size_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/pizza_lrg_nav.png\">";
	document.getElementsByTagName('h3')[0].innerHTML="$14.00";
	document.getElementById('cart_pizza').innerHTML="<img class=\"cart\" src=\"../img/large_cart.png\">";
	size_price=14.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("size","lrg",0);
}

function cOneSizeUp(){
	document.getElementById('c1_size').style.background="";
}

function cTwoSizeUp(){
	document.getElementById('c2_size').style.background="";
}

function cThreeSizeUp(){
	document.getElementById('c3_size').style.background="";
}


//CRUST BUTTONS


function cOneCrustDown(){
	document.getElementById('c1_crust').style.background="url(../img/c_selected.png)";
	document.getElementById('crust_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/thin_crust_nav.png\">";
	document.getElementsByTagName('h3')[1].innerHTML="$2.00";
	crust_price=2.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("crust","thin",0);
}

function cTwoCrustDown(){
	document.getElementById('c2_crust').style.background="url(../img/c_selected.png)";
	document.getElementById('crust_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/pan_crust_nav.png\">";
	document.getElementsByTagName('h3')[1].innerHTML="$2.00";
	crust_price=2.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("crust","pan",0);
}

function cThreeCrustDown(){
	document.getElementById('c3_crust').style.background="url(../img/c_selected.png)";
	document.getElementById('crust_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/stuffed_crust_nav.png\">";
	document.getElementsByTagName('h3')[1].innerHTML="$4.00";
	crust_price=4.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("crust","stuffed",0);
}

function cOneCrustUp(){
	document.getElementById('c1_crust').style.background="";
}

function cTwoCrustUp(){
	document.getElementById('c2_crust').style.background="";
}

function cThreeCrustUp(){
	document.getElementById('c3_crust').style.background="";
}


//TOPPING BUTTONS


function cOneTopDown(){
	document.getElementById('c1_top').style.background="url(../img/c_selected.png)";
	document.getElementById('top_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/pepper_nav.png\">";
	document.getElementsByTagName('h3')[2].innerHTML="$1.00";
	document.getElementById('cart_top').innerHTML="<img class=\"cart1\" src=\"../img/peppers_cart.png\">";
	top_price=1.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("topping","peppers",0);
}

function cTwoTopDown(){
	document.getElementById('c2_top').style.background="url(../img/c_selected.png)";
	document.getElementById('top_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/olives_nav.png\">";
	document.getElementsByTagName('h3')[2].innerHTML="$1.00";
	document.getElementById('cart_top').innerHTML="<img class=\"cart1\" src=\"../img/olive_cart.png\">";
	top_price=1.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("topping","olives",0);
}

function cThreeTopDown(){
	document.getElementById('c3_top').style.background="url(../img/c_selected.png)";
	document.getElementById('top_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/onions_nav.png\">";
	document.getElementsByTagName('h3')[2].innerHTML="$1.00";
	document.getElementById('cart_top').innerHTML="<img class=\"cart1\" src=\"../img/onion_cart.png\">";
	top_price=1.00;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("topping","oinions",0);
}

function cOneTopUp(){
	document.getElementById('c1_top').style.background="";
}

function cTwoTopUp(){
	document.getElementById('c2_top').style.background="";
}

function cThreeTopUp(){
	document.getElementById('c3_top').style.background="";
}


//DRINK BUTTONS


function cOneDrinkDown(){
	document.getElementById('c1_drink').style.background="url(../img/c_selected.png)";
	document.getElementById('d_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/cola_nav.png\">";
	document.getElementsByTagName('h3')[3].innerHTML="$1.50";
	document.getElementById('cart_drink').innerHTML="<img class=\"cart2\" src=\"../img/cola_cart.png\">";
	drink_price=1.50;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("drink","cola",0);
}

function cTwoDrinkDown(){
	document.getElementById('c2_drink').style.background="url(../img/c_selected.png)";
	document.getElementById('d_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/tea_nav.png\">";
	document.getElementsByTagName('h3')[3].innerHTML="$1.50";
	document.getElementById('cart_drink').innerHTML="<img class=\"cart2\" src=\"../img/tea_cart.png\">";
	drink_price=1.50;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("drink","tea",0);
}

function cThreeDrinkDown(){
	document.getElementById('c3_drink').style.background="url(../img/c_selected.png)";
	document.getElementById('d_pic').innerHTML="<img class=\"icon_nav\" src=\"../img/grape_nav.png\">";
	document.getElementsByTagName('h3')[3].innerHTML="$1.50";
	document.getElementById('cart_drink').innerHTML="<img class=\"cart2\" src=\"../img/grape_cart.png\">";
	drink_price=1.50;
	document.getElementById('price_total').innerHTML="$"+(size_price+crust_price+top_price+drink_price).toFixed(2);
	createCookie("drink","grape",0);
}

function cOneDrinkUp(){
	document.getElementById('c1_drink').style.background="";
}

function cTwoDrinkUp(){
	document.getElementById('c2_drink').style.background="";
}

function cThreeDrinkUp(){
	document.getElementById('c3_drink').style.background="";
}


// SUBMIT BUTTON


function subDown(){
	document.getElementById('submit').style.background="url(../img/button_pressed.png)";
}

function subUp(){
	document.getElementById('submit').style.background="";
}