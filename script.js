var count = 0;
var Table = document.getElementById('rc');
var item = document.getElementById('input1');
var price = document.getElementById('input2');
let array = [];

function total() {
    if (count > 0) {
        Table.removeChild(Table.children(Table.children.length - 1));
    }

    var Allprice = document.querySelectorAll('[data-price="price"]');
    var total = 0;
    ///////////// Using for loop /////////////////
    // for (let i = 0; i < Allprice.length; i++) {
    //     total = total + parseInt(Allprice[i].innerText);
    // }

    ////////////// Using forEach() Method /////////////
    Allprice.forEach(element => {
        total = total + parseInt(element.innerText);
    });

    //we are not pushing total row in array

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td3.setAttribute('grandTotal', 'total');
    td1.innerText = array.length + 1;
    td2.innerText = "Total";
    td3.innerText = total;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    Table.appendChild(tr);
    count++;
}

function add() {
    if (item.value != "" && price.value != "") {
        count = 0;
        array.push({ itemName: item.value, priceItem: price.value });
        // console.log(array);
        Table.innerHTML = "";
        array.forEach((element, index) => {
            var tr = `<tr>
                    <td>${index + 1}</td>
                    <td>${element.itemName}</td>
                    <td data-price="price">${element.priceItem}</td>
                </tr>`
            Table.innerHTML += tr;

        })
        item.value = null;
        price.value = null;
    }

}
