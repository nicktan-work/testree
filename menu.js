/* function CalculatePizza1Qty() {

    var qtyPIzza1asString = document.getElementById("pizza1").value;

    var pizza1 = parseFloat(qtyPIzza1asString);

    var pizza1OrderPrice = pizza1 * 12.00;

} */

function IntializePage() {
    var currentDate = new Date();
    var currentDateFormatted = `
        <h3>
        ${currentDate.getFullYear()}/
        ${currentDate.getMonth()}/
        ${currentDate.getDay()}
        </h3>
    `
    OutputToTag("todayDate",currentDateFormatted);
}

function GetStringValueOfItem(id) {
    var value= "";
    var elementOnPage = document.getElementById(id);

    if (elementOnPage && elementOnPage.value != undefined) {

        if(elementOnPage.value != "") {
            value = elementOnPage.value;
        }
    }
    return value;
}

function GetQtyOfItem(id) {
    var qtyAsFloat = 0.00;
    var elementOnPage = document.getElementById(id);

    if (elementOnPage && elementOnPage.value != undefined) {
        if(elementOnPage.value != "") {
        qtyAsFloat = parseFloat(elementOnPage.value);
        }
    }
    return qtyAsFloat;
}

function OutputToTag(id, htmlFragment) {
    var elementOnPage = document.getElementById(id);
    if (elementOnPage && elementOnPage.innerHTML != undefined) {
        elementOnPage.innerHTML = htmlFragment;
    }
}

function CalculateOrderDetails() {
    var firstName = GetStringValueOfItem("firstName");
    var phoneNumber = GetStringValueOfItem("phoneNum");
    var pickupTime = GetStringValueOfItem("pickup");

    //QTY PIZZA 1,2,3....
    var qtyPizza1 = GetQtyOfItem("pizza1");
    var qtyPizza2 = GetQtyOfItem("pizza2");
    var qtyPizza3 = GetQtyOfItem("pizza3");

    //QTY OF SANDWICHES
    var qtySandwich1 = GetQtyOfItem("sandwich1");
    var qtySandwich2 = GetQtyOfItem("sandwich2");
    var qtySandwich3 = GetQtyOfItem("sandwich3");

    //QTY OF DRINKS
    var qtyOfDrink1 = GetQtyOfItem("drink1");
    var qtyOfDrink2 = GetQtyOfItem("drink2");
    var qtyOfDrink3 = GetQtyOfItem("drink3");

    //MULTIPLY QTY BY PIRCES
    var pricePizza1 = qtyPizza1 * 12.00;
    var pricePizza2 = qtyPizza2 * 12.50;
    var pricePizza3 = qtyPizza3 * 13.00;

    var priceSandwich1 = qtySandwich1 * 8.50;
    var priceSandwich2 = qtySandwich2 * 9.50;
    var priceSandwich3 = qtySandwich3 * 10.00;

    var priceDrink1 = qtyOfDrink1 * 2.00;
    var priceDrink2 = qtyOfDrink2 * 2.50;
    var priceDrink3 = qtyOfDrink3 * 1.75;

    //find total price

    var totalPrice = pricePizza1
        + pricePizza2
        + pricePizza3
        + priceSandwich1
        + priceSandwich2
        + priceSandwich3
        + priceDrink1
        + priceDrink2
        + priceDrink3;

    // alert("The total price is " + totalPrice);
    var billItems = "";
    if (qtyPizza1 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Margherita</label>
                <label class="qtyprice">${qtyPizza1} qty @ $12.00</label>
                <label class="itemtotal">$${pricePizza1}</label>
            </div>
        </li>
        `;
    }
    if (qtyPizza2 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">4 cheese</label>
                <label class="qtyprice">${qtyPizza2} qty @ $12.50</label>
                <label class="itemtotal">$${pricePizza2}</label>
            </div>
        </li>
        `;
    }
    if (qtyPizza3 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Capricciosa</label>
                <label class="qtyprice">${qtyPizza3} qty @ $13.00</label>
                <label class="itemtotal">$${pricePizza3}</label>
            </div>
        </li>
        `;
    }
    if (qtySandwich1 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Schnitzel</label>
                <label class="qtyprice">${qtySandwich1} qty @ $8.50</label>
                <label class="itemtotal">$${priceSandwich1}</label>
            </div>
        </li>
        `;
    }
    if (qtySandwich2 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Mixed Grill</label>
                <label class="qtyprice">${qtySandwich2} qty @ $9.50</label>
                <label class="itemtotal">$${priceSandwich2}</label>
            </div>
        </li>
        `;
    }
    if (qtySandwich3 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Beef On Bun</label>
                <label class="qtyprice">${qtySandwich3} qty @ $10.00</label>
                <label class="itemtotal">$${priceSandwich3}</label>
            </div>
        </li>
        `;
    }

    if (qtyOfDrink1 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Coffee</label>
                <label class="qtyprice">${qtyOfDrink1} qty @ 2.00</label>
                <label class="itemtotal">$${priceDrink1}</label>
            </div>
        </li>
        `;
    }

    if (qtyOfDrink2 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Latte</label>
                <label class="qtyprice">${qtyOfDrink2} qty @ 2.50</label>
                <label class="itemtotal">$${priceDrink2}</label>
            </div>
        </li>
        `;
    }

    if (qtyOfDrink3 > 0) {
        billItems += `
        <li>
            <div class="line-item">
                <label class="product">Soft Drink</label>
                <label class="qtyprice">${qtyOfDrink3} qty @ 1.75</label>
                <label class="itemtotal">$${priceDrink3}</label>
            </div>
        </li>
        `;
    }

    // Literal template string 
    var yourBill = `
        <h1>This is your bill</h1>
        <p>${firstName}</p>
        <p>${phoneNumber}</p>
        <p>${pickupTime}</p>
        <br>
        <ol>
        ${billItems}
        </ol>
        <br>
        <p>You total is <span class="totalprice">$${totalPrice}</span></p>
    `;

    OutputToTag("Your-Total",yourBill);
}