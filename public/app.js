const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const recaptchaToken = grecaptcha.getResponse();

    if(!recaptchaToken){
        alert('Please complete the reCAPTCHA');
        return;
    }

    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        'g-recaptcha-response': recaptchaToken
    }
    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if(!response.ok){
            alert(`Failed to send message: ${result.message}`);
            return;
        }

        if(result.status === 'success'){
            alert('Email sent');

            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Operation failed', result.message);
        }
    } catch(error){
        console.log('Error', error);
        alert('Network error or cannot connect to server');
    }
});