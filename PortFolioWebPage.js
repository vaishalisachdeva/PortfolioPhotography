document.addEventListener('DOMContentLoaded', function () {
    const navbarToggleBtn = document.getElementById('navbarToggleBtn');

    navbarToggleBtn.addEventListener('click', function () {
        const navbarTogglerIcon = this.querySelector('.navbar-toggler-icon');
        navbarTogglerIcon.classList.toggle('collapsed');
    });

    document.getElementById('collapsibleNavbar').addEventListener('hidden.bs.collapse', function () {
        const navbarTogglerIcon = navbarToggleBtn.querySelector('.navbar-toggler-icon');
        navbarTogglerIcon.classList.remove('collapsed');
    });

    document.getElementById('collapsibleNavbar').addEventListener('shown.bs.collapse', function () {
        const navbarTogglerIcon = navbarToggleBtn.querySelector('.navbar-toggler-icon');
        navbarTogglerIcon.classList.add('collapsed');
    });

});
