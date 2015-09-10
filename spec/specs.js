describe('romanNumeralize', function() {

  it('return the the base roman symbol for one of the base values', function() {
    expect(romanNumeralize(5)).to.equal('V');
  });

  it('return the the base roman symbol for one of the base values', function() {
    expect(romanNumeralize(10)).to.equal('X');
  });

  it('return the the base roman symbol for one of the base values', function() {
    expect(romanNumeralize(500)).to.equal('D');
  });

  it('check whether the number is less than or equal to 3999', function() {
    expect(romanNumeralize(4000)).to.equal('Sorry, I can\'t count that high');
  });

});
