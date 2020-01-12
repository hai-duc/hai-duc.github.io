var pipsSlider = document.getElementById('slider-pips');

noUiSlider.create(pipsSlider, {
    range: {
        min: 0,
        max: 100
    },
    start: [50],
    pips: {mode: 'count', values: 5}
});

var pips = pipsSlider.querySelectorAll('.noUi-value');

function clickOnPip() {
    var value = Number(this.getAttribute('data-value'));
    pipsSlider.noUiSlider.set(value);
}

for (var i = 0; i < pips.length; i++) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}