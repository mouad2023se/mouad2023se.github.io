// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contact-modal');
    const btn = document.getElementById('contact-button');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
