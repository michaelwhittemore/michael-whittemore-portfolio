import './main.css'

window.onload = () => {
    window.setTimeout(function () {
        document.body.classList.remove('is-preload');
    }, 100);

    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger?.addEventListener('click', () => {
        const isOpen = sidebar?.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(!!isOpen));
        hamburger.classList.toggle('open');
    });

    sidebar?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            hamburger?.classList.remove('open');
            hamburger?.setAttribute('aria-expanded', 'false');
        });
    });
};

