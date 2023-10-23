

addToCalc = (value) => {
    document.getElementById('cal').value += value;
}

clearCalc.addEventListener ("click", () => {
    document.getElementById('cal').value = '';
});

// calculate = () => {
//     try {
//         let result = eval(document.getElementById('cal').value);
//         document.getElementById('cal').value = result;
//     } catch (error) {
//         document.getElementById('cal').value = 'Error';
//     }
// }

 calculate = () => {
    const input = document.getElementById('cal').value;
    const regex = /(\d+)([*/+\-]?)(\d+)/;
    const match = input.match(regex);

    if (match && match.length === 4) {
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error';
                }
                break;
            default:
                result = 'Error';
        }

        document.getElementById('cal').value = result;
    } else {
        document.getElementById('cal').value = 'Error';
    }
}
