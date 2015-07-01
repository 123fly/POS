
var new_shopping_list = JSON.parse(localStorage.getItem('cart_list'));
var barcodes = JSON.parse(localStorage.getItem('promotion_item'));
function show_item_list() {
    var html = '';
    var sum = 0;
    for (var i in new_shopping_list) {
        var btn_id = i.toString();
        var item = new_shopping_list[i];
        for (var j = 0; j < barcodes.length; j++) {
            if (item.barcode != barcodes[j] && j == barcodes.length - 1) {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + item.count + '</td>' + '<td id="subtotal">' + item.price * item.count + '元' + '</td>' + '</tr>';
                sum = sum + item.price * item.count;
                break;
            }
            if (item.barcode == barcodes[j]) {
                html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + item.count + '</td>' + '<td id="subtotal">' + item.price * (item.count - parseInt(item.count / 3)) + '元(原价：' + item.price * item.count + '元)' + '</td>' + '</tr>';
                sum = item.price * item.count + sum;
                break;
            }
        }
    }
    html = '<tr>' + '<td>' + '分类' + '</td>' + '<td>' + '名称' + '</td>' + '<td>' + '单价（元）' + '</td>' + '<td>' + '单位' + '</td>' + '<td>' + '数量' + '</td>' + '<td>' + '小计' + '</td>' + '</tr>' + html;
    sum = '总计：' + sum + '元';
    $('#items_list').html(html);
    $('#sum').html(sum)
}
function show_promation_item() {
    var html = '';
    var promotion_sum = 0;
    for (var i in new_shopping_list) {
        var btn_id = i.toString();
        var item = new_shopping_list[i];
        for (var j = 0; j < barcodes.length; j++) {
            if (item.barcode == barcodes[j]) {
                if (parseInt(item.count / 3) != 0) {
                    html = html + '<tr>' + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + parseInt(item.count / 3) + '</td>' + '</tr>';
                    promotion_sum = item.price * parseInt(item.count / 3) + promotion_sum;
                }
            }
        }
    }
    html = '<tr>' + '<td>' + '分类' + '</td>' + '<td>' + '名称' + '</td>' + '<td>' + '数量' + '</td>' + '</tr>' + html;
    promotion_sum = '节省：' + promotion_sum + '元';
    $('#promotion_item').html(html);
    $('#promotion_sum').html(promotion_sum);
}
f
function open_item_list() {
    var shopping_list = null;
    localStorage.setItem('cart_list', JSON.stringify(shopping_list));
    location.reload();
    window.location.href = 'item_list.html';
}
function show_time() {
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    $('#time').html(formattedDateString);
}