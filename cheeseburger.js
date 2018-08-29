document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.js-cheeseburger-button');

    if (button) {
        button.addEventListener('click', function(event) {
            document
                .querySelector('.apply__tyler-cheeseburger')
                .classList.add('apply__tyler-cheeseburger--showing');
        });
    }
});