

var gold = {one: 1, two: 2, three : 3, id: gold};
var silver = {one: 4, two: 5, three : 6, id: silver};

var platinum = {one: 7, two: 8, three : 9, id: platinum};

function metal(value) {
    
    "use strict";
  
    if(value == 1) { console.log("gold"); return "Gold %"; }
    if(value == 2) { console.log("silver");return "Silver %"; }
    if(value == 3) { console.log("platinum" );return "Platinum %"; }
    
    
    console.log("Error: Selector tag not returning any value");

};



/*
var metalData = '{ "metalVal" : [' +
    '{ "metal": "Gold",     "percent": "0.999", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "1"},' +
    '{ "metal": "Silver",   "percent": "0.49", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "2"},' +
    '{ "metal": "Platinum", "percent": "0.19", "g": "1.244", "ozt": ".04", "au": ".04", "total": "1199", "id": "3"} ]}';
    */