function getPrimes(num) {
    let primes = []
    for (let i = 0; i < num; i++) {
        if (i == 3 || i == 2 || i == 5 ) {
           primes.push(i) 
        }

        if ( i !== 1 && (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 )) {
            primes.push(i)
        }
    }
    console.log(primes, 'test')
    
    return primes
}

console.log(getPrimes(5));
console.log(getPrimes(10));
