function Mobile(model_no){
   this.model=model_no;
   this.price= function(){
    console.log(this.model + "Price Rs.3000 <br>");
   };
}
var samsung = new Mobile('galaxy');
var nokia = new Mobile('3310');
samsung.price();
nokia.price();