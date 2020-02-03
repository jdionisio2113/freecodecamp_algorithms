function confirmEnding(str, target) {

    return str.slice(str.length - target.length);
}

console.log(confirmEnding("Bastian", "n"));
