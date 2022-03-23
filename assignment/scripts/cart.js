let cart = []; 

function addItem(item){ //Verified Working
    cart.push(item);
    return;
}

addItem('eggs'); //test -- Works
console.log(cart.toString()); // test-- Works

function listItems(target){   //Verified Working
    for (i = 0; i < target.length; i++){
        console.log(target[i])
    }
    return;
}

listItems(cart); // Test-- Works

function empty(){ // Verified working
    cart = [];
}
empty(); //Test-- Works
console.log(cart) 


