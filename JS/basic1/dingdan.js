let price = +prompt('请输入商品价格：')
let num = +prompt('请输入商品数量：')
let address = prompt('请输入收货地址：')

let total = price * num

document.write(`    
<table>
    <tr id="title">
        <td>商品名称</td>
        <td>商品价格</td>
        <td>商品数量</td>
        <td>总价</td>
        <td>收货地址</td>
    </tr>
    <tr>
        <td>小米手机青春PLUS</td>
        <td>${price}</td>
        <td>${num}</td>
        <td>${total}</td>
        <td>${address}</td>
    </tr>
</table>
`)