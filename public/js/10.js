function isPrimeNumber(a) {
    if (a == 1) {
     return false;
    }
    if (a == 2) {
     return true;
    }
    var limit = Math.sqrt(a);
    for (var i=2; i <= limit; i++) {
        if (a%i == 0) {
         return false;
        }
    }
    return true;
}
