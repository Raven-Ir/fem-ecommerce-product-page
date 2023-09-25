export class CartContains {
    constructor(quantity){
        this.quantity = quantity;
    }

    updateCart(newQuantity){
        return this.quantity = newQuantity;
    }

    emptyCart(){
        return this.quantity=0;
    }

    getQuantity(){
        return this.quantity;
    }
}



