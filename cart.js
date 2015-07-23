var Item = function (name, price)
{
	this.name = name;
	this.price = price;
}

//---------- items
var apple = new Item ('apple',10);
var orange = new Item ('orange', 5);
var grapes = new Item ('grapes', 15);
var banana = new Item ('banana', 20);
var watermelon = new Item ('watermelon', 50);
//-----------


var ShoppingCart = function ()
{
	this.list = [];
	this.nameofitems = [];

	
	
	this.calctotal = function() 
	{
		var total = 0;
		this.list.forEach(function (item)
		{
			total += item.price;
		}); 

		if (this.list.length >= 5)
		{
			console.log(total - total/100*10);
			console.log(this.nameofitems);
		} else
			console.log(total);
	};
}

ShoppingCart.prototype.additem = function (item)
{
	this.list.push(item);
	this.nameofitems.push(item.name);
	console.log('Adding ' + item.name + ' to the cart at a price of ' + item.price +'€');
}

var cart = new ShoppingCart ();

cart.additem(apple);
cart.additem(apple);
cart.additem(apple);
cart.additem(apple);
cart.additem(orange);
cart.additem(grapes);
cart.additem(banana);
cart.additem(orange);
cart.additem(grapes);
cart.additem(banana);

cart.calctotal();




