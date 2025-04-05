document.addEventListener('DOMContentLoaded', function() {
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    }
    function showSuccessModal() {
        try {
            var successModal = new bootstrap.Modal(document.getElementById('successModal'), {
                backdrop: 'static',
                keyboard: false
            });
            successModal.show();
            setTimeout(function() {
                document.activeElement.blur();
                successModal.hide();
            }, 5000);
        } catch (e) {
            //console.error("Erreur d'initialisation de la modale:", e);
        }
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        history.replaceState(null, null, window.location.pathname);
        showSuccessModal();
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin ms-2"></i>';
            }
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                e.preventDefault();
                setTimeout(function() {
                    showSuccessModal();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<span>Envoyer le message</span><i class="fas fa-paper-plane ms-2"></i>';
                    }
                }, 1500);
            }
        });
    }

    const formElements = document.querySelectorAll('.form-control, .form-icon-wrapper, .form-title, .form-subtitle, .btn-custom');
    formElements.forEach((element, index) => {
        element.classList.add('wow', 'fadeInUp');
        element.setAttribute('data-wow-delay', `${0.1 * (index + 1)}s`);
    });
});