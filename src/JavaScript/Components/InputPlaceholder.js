const inputs = document.querySelectorAll('.sign-up-form__text-input');

inputs.forEach(inputElement => {
    inputElement.addEventListener('input', function(event) {
        if (event.target.value.length) {
          event.target.classList.add('has-value');
        } else {
            event.target.classList.remove('has-value');
        }
      });
});