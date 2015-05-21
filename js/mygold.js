var chartData = {
    "type": "line",

    "series": [
        {
            "values": [28, 57, 43, 56, 78, 99, 67, 28]
        },
        {
            "values": [0, 10, 20, 30, 40, 50, 60, 70]
        }
 ],
    "plot": {
        "animation": {
            "effect": "ANIMATION_EXPAND_BOTTOM",
            "speed": "1000"
        }
    }

};

window.onload = function () {
    zingchart.render({
        id: 'chartDiv',
        height: 450,
        width: "100%",
        data: 'chartData'
            //   defaultsurl:"resources/sunny.txt"
    });
};