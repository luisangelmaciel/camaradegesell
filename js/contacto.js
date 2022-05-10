function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '525539793727';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin "></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Hola, llene el formulario para solicitar cotización._*%0A*Mi nombre es*%0A' + nombre + '%0A*Mi email*%0A' + email + '%0A*Lo que me gustaría cotizar*%0A' + apellidos + ''
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp "></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});