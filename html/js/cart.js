/**
 * Created by li on 15-6-17.
 */
function loadPromotions() {
    return [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
    ];
}
localStorage.setItem('promotion_item', JSON.stringify(loadPromotions()));
var barcodes = JSON.parse(localStorage.getItem('promotion_item'));
var new_shopping_list = JSON.parse(localStorage.getItem('cart_list'));
function show_shopping_list() {
    var html = '';
    var sum = 0;
    for (var i in new_shopping_list) {
        var btn_id = i.toString();
        var item = new_shopping_list[i];
        for (var j = 0; j < barcodes.length; j++) {
            if (item.barcode == barcodes[0]) {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * (item.count - parseInt(item.count / 3)) + '元(原价：' + item.price * item.count + '元)' + '</td>' + '</tr>';
                sum = sum + item.price * item.count;
                break;
            }
            else if (item.barcode == barcodes[1]) {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * (item.count - parseInt(item.count / 3)) + '元(原价：' + item.price * item.count + '元)' + '</td>' + '</tr>';
                sum = sum + item.price * item.count;
                break;
            }
            else if (item.barcode == barcodes[2]) {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * (item.count - parseInt(item.count / 3)) + '元(原价：' + item.price * item.count + '元)' + '</td>' + '</tr>';
                sum = sum + item.price * item.count;
                break;
            }
            else {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id=' + btn_id + ' onclick="subtract_number(this.id)">-</button>' + '<input type="text" id="number" value=' + item.count + '>' + '<button id=' + btn_id + ' onclick="add_number(this.id)">+</button>' + '</td>' + '<td id="subtotal">' + item.price * item.count + '元' + '</td>' + '</tr>';
                sum = item.price * item.count + sum;
                break;
            }
        }
    }
    html = '<tr>' + '<td>' + '分类' + '</td>' + '<td>' + '名称' + '</td>' + '<td>' + '单价（元）' + '</td>' + '<td>' + '单位' + '</td>' + '<td>' + '数量' + '</td>' + '<td>' + '小计' + '</td>' + '</tr>' + html;
    sum = '总计：' + sum + '（元）'
    $('#items_list').html(html);
    $('#sum').html(sum)
}
function add_number(id) {
    console.log(id)
    var cartList = JSON.parse(localStorage.getItem('cart_list'));
    cartList[id].count++;
    localStorage.setItem('cart_list', JSON.stringify(cartList));
    location.reload();
}
function subtract_number(id) {
    var cartList = JSON.parse(localStorage.getItem('cart_list'));
    if (cartList[id].count > 0) {
        cartList[id].count--;
    }
    else {
        cartList.splice(id, 1);
    }
    localStorage.setItem('cart_list', JSON.stringify(cartList));
    location.reload()
}
function openpay(){
    window.location.href='pay.html'
}