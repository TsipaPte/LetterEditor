const getTextArea = document.querySelector('.letter_text')
const getClearButton = document.querySelector('.clear')

getClearButton.addEventListener('click', function () {
    getTextArea.value = ''
})