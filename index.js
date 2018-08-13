(function() {
    const form = document.querySelector('#form_clock');
    const hourVal = document.querySelector('#hour');
    const minutesVal = document.querySelector('#min');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hourDegreeDisplay = document.querySelector('#hour-degree span');
    const minDegreeDisplay = document.querySelector('#min-degree span');

    form.addEventListener('submit', function(e) {
        const mins = minutesVal.value;
        const hour = hourVal.value;

        // degree calculation
        const hourCalc = (hour == 12) ? 0 : hour;
        const minsCalc = (mins == 0) ? 0 : mins / 60;
        const hourDegreeCalcDisplay = ((hourCalc) * 30) + (30 * (minsCalc));
        const minDegreeCalcDisplay = (mins === 0) ? 0 : mins * 6;
        hourDegreeDisplay.innerHTML = hourDegreeCalcDisplay;
        minDegreeDisplay.innerHTML = minDegreeCalcDisplay;

        // calculate degrees for analog clock display 
        // (this will be different from the degree calculation)
        const minsDegrees = (mins * 6) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;
        const hourDegrees = (hour !== 12) ? ((hour * 30) + 90 + (30 * (minsCalc))) : 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    });
})();