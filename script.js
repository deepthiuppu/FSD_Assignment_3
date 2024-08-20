const button = document.getElementById('toggleButton');
const container = document.getElementById('container');
const text = document.getElementById('text');
let isChanged = false;

button.addEventListener('click', () => {
    isChanged = !isChanged;
    toggleState(isChanged);
});

function toggleState(state) {
    if (state) {
        button.textContent = 'Revert';
        container.classList.add('changed-container');
        text.textContent = 'Changed Text';
        button.classList.replace('initial', 'changed');
    } else {
        button.textContent = 'Toggle State';
        container.classList.remove('changed-container');
        text.textContent = 'Initial Text';
        button.classList.replace('changed', 'initial');
    }
}
