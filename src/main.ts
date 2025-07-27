import './style.css'
import '../templateFiles/main.css'


window.onload = () => {
    // Load in animations
    window.setTimeout(function () {
        document.body.classList.remove('is-preload');
        window.scrollTo({top:0})
    }, 100);
    // prevent weirdness with starting partway down. Maybe should consider locking to regions instead??
    

};

