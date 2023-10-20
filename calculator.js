addToCalc = (value) => {
    document.getElementById('cal').value += value;
}

clearCalc = () => {
    document.getElementById('cal').value = '';
}

calculate = () => {
    try {
        let result = eval(document.getElementById('cal').value);
        document.getElementById('cal').value = result;
    } catch (error) {
        document.getElementById('cal').value = 'Error';
    }
}
