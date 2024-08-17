module.exports = function reverse (n) {
    let s;
    if (n >= 0) {
        s = n.toString();
    } else {
        s = (-n).toString();
    }
    let res = '';
    for (let i = s.length - 1; i >= 0; i--){
      res += s[i];
    }
    return Number(res);
}


