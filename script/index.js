window.onload = function() {

    emailjs.init({
        publicKey: "UxANKit-sHv02fCgi",
    });

    let submit_btn = document.getElementById('submit');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        submit_btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

        emailjs.sendForm('service_qxbjego', 'template_sjjzz3l', this)
            .then(() => {
                submit_btn.innerHTML = 'Email envoyée avec succès';
                submit_btn.style.backgroundColor = '#2A777C';
            }, (error) => {
                submit_btn.innerHTML = "Erreur lors de l'envoie de l'email";
                submit_btn.style.backgroundColor = '#CE6A6C';
            });
       
        setTimeout(() => {
            submit_btn.innerHTML = 'Envoyer <i class="far fa-paper-plane"></i>';
            submit_btn.style.backgroundColor = 'var(--orange-color)';
        }, 5000);
    });
}