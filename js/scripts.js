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

    if ( number >= 3999 ) {
      return ('Sorry, I can\'t count that high');

    } else if ( romanNumerals[number] !== undefined ){
      return romanNumerals[number];

    } else
}
