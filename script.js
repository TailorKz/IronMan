document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('[data-tab-button]');
    const tabContents = document.querySelectorAll('.container__mid');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab-button');
            tabButtons.forEach(btn => btn.classList.remove('shows__tabs--button--is-active'));
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(targetTab).style.display = 'flex';
            this.classList.add('shows__tabs--button--is-active');
        });
    });
    tabButtons[0].click();
});