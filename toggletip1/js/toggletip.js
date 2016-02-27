var tip = document.getElementById('tip');
var button = document.getElementById('button');

button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-describedby', 'tip');

tip.setAttribute('hidden', true);

function showTip() {
    button.setAttribute('aria-expanded', 'true');

    tip.innerHTML = " <span role='tooltip' aria-live='polite'>Tequila         (makes me happy)!</span>";
    tip.removeAttribute('hidden');
}

function hideTip() {
    button.setAttribute('aria-expanded', 'false');

    tip.innerHTML = '';
    tip.setAttribute('hidden', true);
}

function toggleTip(e) {

    if (tip.hasAttribute('hidden')) {
        showTip();
    } else {
        hideTip();
    }
}

button.addEventListener('click', toggleTip, false);

document.addEventListener('keyup', function(e) {

    if (e.keyCode == 27) {
        toggleTip();
    }
});
