var cart=Document.querySelectorAll('Add cart')

for(let i=0; i<=cart.length; i++){
cart[i]AddEventListener('click',()=>{
cartnumbers(prdoducts[i]);
totalcost(products[i]);
})}
var products = {
    name: "t1234.png";
    tag: "grey tshirt";
    price: 150;
    inCart: 0;
}
function onloadcartNumbers(){
    let productnumbers = localstorage.getItem('cartnumbers');
    
    if(productnumbers){
        document.querySelector('cartspan').textcontent=productnumbers;
    }
}

function cartnumbers(products){
    let productnumbers=localStorage.getItem('cartnumber');
    productnumbers=parseInt(productnumbers);

    if(productnumbers){
        localStorage.setItem('cartitem',productnumbers+1);
        document.querySelector('cartspan').textContent=productnumbers+1;
    }
    else{
        localStorage.setItem('cartnumber',1);
        document.querySelector('cartspan').textContent=1;
    }
    setItems()
}
function setItems(products){
    let cartitems=localStorage.getitem('productsIncart');
    cartitems=JSON.parse(cartitems);

    if(cartitems !=null){
        cartitems[products.tag].Incart+=1;
    }
    if(cartitems[products.tag]!==undefined){
        cartitmes={
            ...cartitems,
            [product.tag] : product
        }
    }
    else{
        product.Incart=1;
        cartitems={
            [product.tag]:product
        }
    }
    localStorage.setItem('productIncart',JSON.stringify(cartitems));
}
function totalcost(products){
    //console.log("The product price is",product.price);
  var cartcost = localstorage.getItem('totalcost');
 
  if(cartcost != null){
      cartcost = ParseInt(cartcost);
      localstorage.setItem("totalcost",cartcost + product.price);
  }
  else{
  localstorage.setItem("totalcost", product.price);  
}
}
function displaycart(){
  let cartitems = localstorage.getItem("productIncart");
  cartItem = JSON.parse(cartItem)
  let productcontainer = document.querySelector(".products");
  let cartcost = localstorage.getItem('totalcost');
  if(cartItems && productcontainer){
      productcontainer.innerHTML = '';
      object.values(cartItems).map(item =>{
       productcontainer.innerHTML += '
       <div class="product">
       <ion-icon name="close-circle"></ion-icon>
       <img src="./images/${item.tag}.png">
       <span>${item.name}</span>
       </div>
       
       <div class="price">${item.price},00</div>
       <div class="quantity">
       <ion-icon class="decrease"
       name="arrow-dropleft-circle"></ion-icon>
       <span>${item.inCart}</span>
       <ion-icon class="increase"
       name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart * item.price},00
            </div>
' 
      });
      productContainer.innerHTML += '
      <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">Basket Total</h4>
      <h4 class="basketTotal">$${cartcost},00</h4>
            </div>
            ';
  }
}


onloadcartnumbers();
displaycart();