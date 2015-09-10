var romanNumeralize = function(number) {

  var romanNumerals = {
    1 : 'I',
    5 : 'V',
    10 : 'X',
    50 : 'L',
    100 : 'C',
    500 : 'D',
    1000 : 'M'
    };

    console.log(romanNumerals);
    console.log(number);
    console.log(romanNumerals[number]);

    return romanNumerals[number];

}
