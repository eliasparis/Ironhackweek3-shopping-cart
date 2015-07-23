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

	
	this.calctotal = function() 
	{

		//------ counting apples

		var itmcounterapples = 0;
	    
	    for (var i = 0; i < this.list.length; i++) {
	        if (this.list[i]['name'] === 'apple') {
	            itmcounterapples++;
	        }
	    }
	    
		//-------
		//------removing free apples from the total list

		var quitApples = 0
	    if ( itmcounterapples % 2 == 1 ) {
	    	 quitApples = (itmcounterapples-1)/2;
	    	}else
	    	 quitApples = itmcounterapples/2;

		var x = 0;
	    while (quitApples > x) {
	    	for (var i = 0 ; i < this.list.length; i++) {
	    		if (this.list[i]['name'] === 'apple') {
	    			this.list.splice(i, 1);
	    			i++;
	    			x++ ;
	    			
	    		} else
	    			;
	    	};
	    };


	    //------ counting oranges

	    var itmcounteroranges = 0;
	    
	    for (var i = 0; i < this.list.length; i++) {
	        if (this.list[i]['name'] === 'orange') {
	            itmcounteroranges++;
	        }
	    }

	    //------adding free oranges

	    var addOranges = 0
	    if ( itmcounteroranges > 5 ) {
	    	var orangeanddiscount = new Item ('orange', 2.5);
	    	for(var i=0; i < 5 ; i++)
	    	 	this.list.push(orangeanddiscount);
	    	 i++
	    	}
	    	else
	    	 ;


	    //console.log(this.list)


	//-------- total count
		var total = 0;
		this.list.forEach(function (item)
		{
			total += item.price;
		}); 

		

		if (this.list.length >= 5)
		{
			console.log('It does a total amount of: ' + total + ' and '+ (total - total/100*10) + ' with discounts.');
			
		} else
			console.log(total);
	 };

		
}

ShoppingCart.prototype.additem = function (item)
{
	this.list.push(item);
	console.log('Adding ' + item.name + ' to the cart at a price of ' + item.price +'€');
}

var cart = new ShoppingCart ();


cart.additem(apple);
cart.additem(apple);
cart.additem(apple);
cart.additem(apple);
cart.additem(apple);
cart.additem(orange);
cart.additem(orange);
cart.additem(orange);
cart.additem(orange);
cart.additem(orange);
cart.additem(grapes);
cart.additem(banana);
cart.additem(orange);
cart.additem(apple);
cart.additem(apple);
cart.additem(grapes);
cart.additem(banana);


cart.calctotal();




