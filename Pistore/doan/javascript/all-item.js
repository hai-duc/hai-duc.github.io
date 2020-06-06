var nonLinearStepSlider1 = document.getElementById('slider-non-linear-step1');

noUiSlider.create(nonLinearStepSlider1, {
    start: [0, 1000000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [1000000]
    }
});

var nonLinearStepSliderValueElement1 = document.getElementById('slider-non-linear-step-value1');

nonLinearStepSlider1.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement1.innerHTML = values.join(' - ');
});

var nonLinearStepSlider2 = document.getElementById('slider-non-linear-step2');

noUiSlider.create(nonLinearStepSlider2, {
    start: [0, 1000000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [1000000]
    }
});

var nonLinearStepSliderValueElement2 = document.getElementById('slider-non-linear-step-value2');

nonLinearStepSlider2.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement2.innerHTML = values.join(' - ');
});

var nonLinearStepSlider3 = document.getElementById('slider-non-linear-step3');

noUiSlider.create(nonLinearStepSlider3, {
    start: [0, 1000000],
    range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [1000000]
    }
});

var nonLinearStepSliderValueElement3 = document.getElementById('slider-non-linear-step-value3');

nonLinearStepSlider3.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement3.innerHTML = values.join(' - ');
});