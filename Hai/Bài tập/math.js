function isPrime(numberCheck) {
    let i;

    if (numberCheck < 2)
        return false;
    else {
        for (i = 2; i <= numberCheck / 2; i++)
            if (numberCheck % i == 0)
                return false;
        return true;
    }
}

function displayConsecutivePrimesWithCondition() {
    let i = 0;

    while (i < 1000) {
        if (isPrime(i))
            document.write(' ' + i);
        i++;
    }
}

displayConsecutivePrimesWithCondition();