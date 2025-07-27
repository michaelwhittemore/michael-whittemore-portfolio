import './style.css'
import '../templateFiles/main.css'


window.onload = () => {
    window.setTimeout(function () {
        document.body.classList.remove('is-preload');
    }, 100);
};

