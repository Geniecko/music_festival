const modal = document.querySelector('.modal');

function closeInfoModal() {
    document.body.classList.remove('disable-scroll');
    modal.remove();
}

function infoModalInit() {
    document.body.classList.add('disable-scroll');

    document.getElementById('infoModalBtn').addEventListener('click', () => {
        closeInfoModal();
    });
}

if(modal){
    infoModalInit();
}


