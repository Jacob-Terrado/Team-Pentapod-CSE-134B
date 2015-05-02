function metal(value) {

    "use strict";

    if (value == 1) {
        //  console.log("gold");
        return "Gold %";
    }
    if (value == 2) {
        // console.log("silver");
        return "Silver %";
    }
    if (value == 3) {
        // console.log("platinum");
        return "Platinum %";
    }


    // console.log("Error: Selector tag not returning any value");

};

function metalgu(value) {

    "use strict";

    if (value == 1) {
        console.log("gold gu");
        return "Gold g/u";
    }
    if (value == 2) {
        console.log("silver gu");
        return "Silver g/u";
    }
    if (value == 3) {
        console.log("platinum gu");
        return "Platinum g/u";
    }


    console.log("Error: G/U Selector tag not returning any value");

};

function metaloz(value) {

    "use strict";

    if (value == 1) {
        console.log("gold oz");
        return "Gold ozt/u";
    }
    if (value == 2) {
        console.log("silver oz");
        return "Silver ozt/u";
    }
    if (value == 3) {
        console.log("platinum oz");
        return "Platinum ozt/u";
    }


    console.log("Error: OZ Selector tag not returning any value");

};

function update() {

    var qty = document.getElementById("qty").value;

    var premium = document.getElementById("premium").value;

    var unitPrice = document.getElementById("unit").value;

    if (!qty) qty = 1;
    if (!premium) premium = 47;
    if (!unitPrice) unitPrice = 1250.60;

    var sum = (+qty * (+premium + +unitPrice));

    sum = parseFloat(sum).toFixed(2);


    document.getElementById("totalDollarAmount").innerHTML = sum;
    /*
        console.log(qty);
        console.log(premium);
        console.log(unitPrice);
        console.log(sum);
    */
};

function run() {
    initialMetal = document.getElementById("metaltypeselector").value;
    document.getElementById("metalDetails").innerHTML = metal(initialMetal);
    document.getElementById("gu").innerHTML = metalgu(initialMetal);
    document.getElementById("oz").innerHTML = metaloz(initialMetal);
};

$(function () {
    $("#datepicker").datepicker();
});