document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("kuks9crEQrSVv7xHZ");
  
    const form = document.getElementById('contactForm');
    const resp = document.getElementById('contactResponseMessage');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando...';
  
      emailjs.send('service_97k2g28', 'template_njm7sot', {
        name: form.contactName.value,
        email: form.contactEmail.value,
        message: form.message.value,
        to_email: 'airbnb.quintalagema@gmail.com'
      })
      .then(res => {
        resp.textContent = '¡Mensaje enviado correctamente, por favor estar atento al correo, enseguida te respondemos!';
        resp.className = 'mt-4 text-sm text-green-600';
        form.reset();
      }, err => {
        resp.textContent = 'Error al enviar, inténtalo de nuevo.';
        resp.className = 'mt-4 text-sm text-red-600';
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = original;
        setTimeout(() => resp.textContent = '', 5000);
      });
    });
  });
  