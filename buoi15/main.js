var softSlider = document.getElementById('soft');

noUiSlider.create(softSlider, {
    start: 50,
    step:0.1,
    
    range: {
        min: 0.01,
        max: 1.15,
    },
    pips: {
        mode: 'values',
        values: [0,],
        density: 9
        
    }
});


var softSlider = document.getElementById('slider-non-linear-value');


soft.noUiSlider.on('update', function (values, handle) {
    softSlider.innerHTML = values[handle];
});