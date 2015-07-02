/**
 * Created by li on 15-6-17.
 */
$().ready(function () {
    show_goods_list();
    show_number();
});
function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00,
            category: '饮料',
            count: 1
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            category: '饮料',
            count: 1
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            category: '水果',
            count:1
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00,
            category: '水果',
            count: 1
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00,
            category: '生活用品',
            count: 1
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50,
            category: '食品',
            count: 1
        }
    ];
}
localStorage.setItem('allItems', JSON.stringify(loadAllItems()));
var goods_list = JSON.parse(localStorage.getItem('allItems'));
function show_goods_list() {
    var html = '';
    for (var i in goods_list) {
        var btn_id = i.toString();
        var item = goods_list[i];
        html = html + '<tr>';
        html = html + '<td>' + item.category + '</td>' + '<td>' + item.name + '</td>' + '<td>' + item.price + '</td>' + '<td>' + item.unit + '</td>' + '<td>' + '<button id='+btn_id+' onclick="add_cart(this.id)" >加入购物车</button>' + '</td>';
        html = html + '</tr>';
    }
    html = '<tr><td>分类</td><td>名称</td><td>单价（元）</td><td>单位</td><td></td></tr>' + html
    $('#goods_list').html(html)
}
function add_cart(id) {
    var item = goods_list[id];
    var shopping_list = JSON.parse(localStorage.getItem('cart_list')) ||[];
    if (shopping_list.length == 0) {
        shopping_list.push(item);
    }
    else {
        get_shopping_list(shopping_list,item);
    }
    localStorage.setItem('cart_list', JSON.stringify(shopping_list));
    location.reload();
}
function get_shopping_list(shopping_list,item){
    for (var i = 0; i < shopping_list.length; i++) {
        if (shopping_list[i].barcode == item.barcode) {
            shopping_list[i].count++;
            break;
        }
        else if (shopping_list[i].barcode != item.barcode && i == shopping_list.length - 1) {
            shopping_list.push(item);
            break;
        }
    }
}