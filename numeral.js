//challenge2
let answer= window.prompt("Enter a number to convert to Roman Numerals.");

const romanNumerals = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};
 
let output="";

if (isNaN(answer)){
    alert("Write number lah bodoh!")
}
else {
    //loops "x" through the valuse in romanNumerals
    for (x in romanNumerals) {
        while (answer>=romanNumerals[x]) {
            output += x;
            answer -= romanNumerals[x];
        }
    }
    alert(output)
};

// challenge 3