const inputTexT = document.getElementById('input--text');
const btnEncoder = document.getElementById('btn--encoder');
const btnDecoder = document.getElementById('btn--decoder');
const message = document.getElementById('message');
const btnCopy = document.getElementById('btn--copy');


const validation = () => {
    if (inputTexT.value === '') {
        document.querySelector('.decoder__content--messageDefauld').style.display = 'block';
        document.querySelector('.decoder__content--decoderMessage').style.display = 'none';
        
    } else {
        document.querySelector('.decoder__content--messageDefauld').style.display = 'none';
        document.querySelector('.decoder__content--decoderMessage').style.display = 'block';
    }
    console.log(inputTexT.value)
}

btnEncoder.addEventListener('click', validation);




