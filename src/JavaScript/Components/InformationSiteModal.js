function closeInfoModal() {
    document.body.classList.remove('disable-scroll');
    document.querySelector('.modal').remove();
}

function infoModalInit() {
    document.body.classList.add('disable-scroll');

    document.getElementById('infoModalBtn').addEventListener('click', () => {
        closeInfoModal();
    });
}

infoModalInit();

