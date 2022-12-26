
function Mobile(model_no){
    this.model = model_no;
    this.price = function(){
        console.log(this.model + "price RS.3000 <br>");
    };
};
 var samsung = new Mobile('Galaxy');
 var nokia = new Mobile ('3310');
 samsung.price();
 nokia.price();

