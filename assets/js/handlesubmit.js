function handleSubmitSubscription(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        const formSuccess = form.closest('.email-form_wrap').querySelector('.form-success');
        const formError = form.closest('.email-form_wrap').querySelector('.form-error');
        
        if (response.ok) {
            formSuccess.style.display = 'block';
            formSuccess.classList.add('fadeIn');
            formError.style.display = 'none';
        } else {
            formSuccess.style.display = 'none';
            formError.style.display = 'block';
            formError.classList.add('fadeIn');
        }

        form.style.display = 'none';
        form.reset();
        
        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
            formError.classList.add('fadeOut');
            form.style.display = 'flex';
            form.classList.add('fadeIn');
        }, 3000);
    })
    .catch((error) => {
        console.log('An error occurred:', error);
        if (error.response) {
            console.log('Response status:', error.response.status); // Logs the status code
        } else {
            console.log('Network or other error');
        }

        const formSuccess = form.closest('.email-form_wrap').querySelector('.form-success');
        const formError = form.closest('.email-form_wrap').querySelector('.form-error');
        
        formSuccess.style.display = 'none';
        formError.style.display = 'block';
        formError.classList.add('fadeIn');

        form.style.display = 'none';
        form.reset();

        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
            formError.classList.add('fadeOut');
            form.style.display = 'flex';
            form.classList.add('fadeIn');
        }, 3000);
    });
}

function handleSubmitContact(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        $('html, body').animate({ scrollTop: $('.contact_content .heading-style-h1').offset().top }, 500);
        const formSuccess = form.closest('.contact_form-block').querySelector('.w-form-done');
        const formError = form.closest('.contact_form-block').querySelector('.w-form-fail');
        
        if (response.ok) {
            formSuccess.style.display = 'block';
            formSuccess.classList.add('fadeIn');
            formError.style.display = 'none';
        } else {
            formSuccess.style.display = 'none';
            formError.style.display = 'block';
            formError.classList.add('fadeIn');
        }

        form.style.display = 'none';
        form.reset();
        
        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
            formError.classList.add('fadeOut');
            form.style.display = 'grid';
            form.classList.add('fadeIn');
        }, 3000);
    })
    .catch((error) => {
        $('html, body').animate({ scrollTop: $('.contact_content .heading-style-h1').offset().top }, 500);
        console.log('An error occurred:', error);
        if (error.response) {
            console.log('Response status:', error.response.status); // Logs the status code
        } else {
            console.log('Network or other error');
        }

        const formSuccess = form.closest('.contact_form-block').querySelector('.w-form-done');
        const formError = form.closest('.contact_form-block').querySelector('.w-form-fail');
        
        formSuccess.style.display = 'none';
        formError.style.display = 'block';
        formError.classList.add('fadeIn');

        form.style.display = 'none';
        form.reset();

        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
            formError.classList.add('fadeOut');
            form.style.display = 'grid';
            form.classList.add('fadeIn');
        }, 3000);
    });
}
