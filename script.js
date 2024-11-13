const buttons = document.querySelectorAll('.mostrarBtn')
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        hideAll();
        document.getElementById('imagem' + id).style.display = 'block';
        document.getElementById('texto' + id).style.display = 'block';
    });
});
function hideAll() {
    const images = document.querySelectorAll('.imagemContainer');
    const texts = document.querySelectorAll('.texto');
    images.forEach(image => {
        image.style.display = 'none';
    });
    texts.forEach(text => {
        text.style.display = 'none';
    });
}