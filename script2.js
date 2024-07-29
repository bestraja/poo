// oop 
class Product {
    constructor() {
        this.name = document.getElementsByClassName('card-title');
        this.price = document.getElementsByClassName('unit-price');
        this.incra = document.getElementsByClassName('fa-plus-circle');
        this.descr = document.getElementsByClassName('fa-minus-circle');
        this.remove = document.getElementsByClassName('fa-trash-alt');
    }

    display() {
      return `${this.name}, ${this.price}`;
    }
}

class Shoppingcartitem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calcul() {

        return this.price * this.quantity;
       
    }

    getdetails() {
        return `${this.name}, ${this.price}, ${this.quantity}`;
    }
}

class Shoppingcart {
    constructor() {
        this.items = [];
        this.init();
        this.quantity= document.getElementsByClassName("quantity")
        this.total=0
    }

    init() {
        const product = new Product();
        console.log(product);
        for (let i = 0; i < product.name.length; i++) {
            product.incra[i].addEventListener("click", () => this.add(i));
            product.descr[i].addEventListener("click", () => this.remove(i));
        }
    }

    add(i) {
        const product = new Product();
        const name = product.name[i].textContent;
        const price = parseInt(product.price[i].textContent.replace('$', ''));
        const quantity = parseInt(this.quantity[i].innerHTML)+1

        this.quantity[i].innerHTML =quantity

        const newItem = new Shoppingcartitem(name, price, quantity);
        this.items[i]=newItem;

        console.log(this.items);
        this.displaytotal(i);
    }

    remove(i) { 
         
          if(this.quantity[i].textContent>0)
        { 
            const quantity = parseInt(this.quantity[i].innerHTML)-1
           this.quantity[i].innerHTML =quantity
          this.items[i].quantity--
          if ( this.items[i].quantity>0){
  
        this.total -= quantity*this.items[i].price
        const totalEL= document.getElementsByClassName("total");
        totalEL[0].innerHTML = `$${this.total}`;
          }
      else {   
  
        this.total -= this.items[i].price
        const totalEL= document.getElementsByClassName("total");
        totalEL[0].innerHTML = `$${this.total}`;
   }}
     
    }

 
    displaytotal(i) {
     
        switch (i) {
            case 0:
                this.total +=this.items[0].price
                   break;
                case 1:
                    this.total +=this.items[1].price
                   break;
               case 2:
                this.total +=this.items[2].price
                   break;
            default:
                break;
        }

  

         console.log(this.total);


        const totalEL= document.getElementsByClassName("total");

          totalEL[0].innerHTML = `$${this.total}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Shoppingcart();
});