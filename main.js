const numbersBelowSum = (input) => {
    let x = 1
    let sum = 0
    while (x < input) {
        if (x%3==0 || x%5==0) {
            sum = sum+x
        }
        x++
    }
    console.log(sum)
}

numbersBelowSum(10)
numbersBelowSum(1000)