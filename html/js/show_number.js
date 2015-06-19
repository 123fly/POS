/**
 * Created by li on 15-6-18.
 */
var new_shopping_list = JSON.parse(localStorage.getItem('cart_list'));
function show_number(){
    var number = 0;
    for(var i in new_shopping_list){
        var item = new_shopping_list[i];
        number= number+ item.count;
    }
    number='('+number+')';
  $('#number').html(number);
}