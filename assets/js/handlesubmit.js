function handleSubmitSubscription(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .catch(() => {
        // Fetch will return a network error if the request is not made to a same-origin URL.
        // But the form data is actually recorded in the google form, so this can be ignored.
        const formSuccess = form.closest('.email-form_wrap').querySelector('.form-success');
        const formError = form.closest('.email-form_wrap').querySelector('.form-error');
        
        formError.style.display = 'none';
        formSuccess.style.display = 'block';
        formSuccess.classList.add('fadeIn');

        form.style.display = 'none';
        form.reset();

        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
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
    .catch(() => {
        $('html, body').animate({ scrollTop: $('.contact_content .heading-style-h1').offset().top }, 500);

        // Fetch will return a network error if the request is not made to a same-origin URL.
        // But the form data is actually recorded in the google form, so this can be ignored.
        const formSuccess = form.closest('.contact_form-block').querySelector('.w-form-done');
        const formError = form.closest('.contact_form-block').querySelector('.w-form-fail');
        
        formError.style.display = 'none';
        formSuccess.style.display = 'block';
        formSuccess.classList.add('fadeIn');

        form.style.display = 'none';
        form.reset();

        setTimeout(() => {
            formSuccess.classList.add('fadeOut');
            form.style.display = 'grid';
            form.classList.add('fadeIn');
        }, 3000);
    });
}
