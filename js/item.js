

function metal(value) {

    "use strict";

    if (value == 1) {
        console.log("gold");
        return "Gold %";
    }
    if (value == 2) {
        console.log("silver");
        return "Silver %";
    }
    if (value == 3) {
        console.log("platinum");
        return "Platinum %";
    }


    console.log("Error: Selector tag not returning any value");

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



/*
var metalData = '{ "metalVal" : [' +
    '{ "metal": "Gold",     "percent": "0.999", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "1"},' +
    '{ "metal": "Silver",   "percent": "0.49", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "2"},' +
    '{ "metal": "Platinum", "percent": "0.19", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "3"} ]}';
    */