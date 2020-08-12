const getArraySorted = (arr) => {
    const minValue = Math.min(...arr);
    const range = Math.max(...arr) - minValue + 1;
    let countArr = new Array(range).fill(0);
    let sortedArr = [];

    arr.map(item => countArr[item - minValue]++);

    countArr.reduce((prevVal, currentVal, index) => {
        countArr[index] = prevVal + currentVal;

        if (prevVal !== countArr[index]) {
            for (let i = 0; i < countArr[index] - prevVal; i++) {
                sortedArr.push(index + minValue);
            };
        }

        return prevVal + currentVal
    }, 0);

    return sortedArr;
}

const validateTextArea = (area) => /^[0-9, -]+$/.test(area);

const submitBtn = document.querySelector('.input-form__btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const information = document.querySelector('.info');

    information.firstElementChild.innerText = ""

    const textArea = document.querySelectorAll('.input-form__text-area');
    let gottenArray = textArea[0].value.trim().split(',');


    validateTextArea(textArea[0].value) ? (textArea[1].value = getArraySorted(gottenArray)
        , information.firstElementChild.nextElementSibling.children[0].innerText = gottenArray.length)
        : information.firstElementChild.innerText = 'Invalid input array (include no number element)';
})