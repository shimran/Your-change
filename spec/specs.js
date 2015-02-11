describe('coinCombinations', function() {
  it('takes an input of 25 and returns "1 quarter"', function() {
    expect(coinCombinations(25)).to.equal("1 quarter(s) ");
  });

  it("takes an input of 50 and returns 2 quarters", function() {
    expect(coinCombinations(50)).to.equal("2 quarter(s) ");
  });

  it("takes an input of 60 and returns 2 quarter(s), 1 dime(s)", function() {
    expect(coinCombinations(60)).to.equal("2 quarter(s) 1 dime(s) ");
  });

  it("takes an input of 65 and returns 2 quarter(s), 1 dime(s), 1 nickel(s)", function() {
    expect(coinCombinations(65)).to.equal("2 quarter(s) 1 dime(s) 1 nickel(s) ");
  });

  it("takes an input of 68 and returns 2 quarter(s), 1 dime(s), 1 nickel(s), 3 pennies", function() {
    expect(coinCombinations(68)).to.equal("2 quarter(s) 1 dime(s) 1 nickel(s) 3 pennie(s)");
  });

  it("takes 1 penny and returns 0 quarter(s) 0 dime(s) 0 nickel(s) 1 pennie(s)", function() {
    expect(coinCombinations(1)).to.equal("0 quarter(s) 0 dime(s) 0 nickel(s) 1 pennie(s)")
  });

  it("takes an input of 107 and returns 4 quarter(s), 0 dime(s), 1 nickel(s), 2 pennies", function() {
    expect(coinCombinations(107)).to.equal("4 quarter(s) 0 dime(s) 1 nickel(s) 2 pennie(s)");
  });
});
