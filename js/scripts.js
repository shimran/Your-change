var coinCombinations = (function(amount) {
   var quarters = parseInt(amount / 25)
   var remainder = (amount % 25);
   var dimes = parseInt(remainder / 10)
   var remainder2 = (remainder % 10);
   var nickels = parseInt(remainder2 / 5)
   var remainder3 = (remainder2 % 5);
   var pennies = parseInt(remainder3 / 1)
     var dime_amount = dimes.toString().concat(" dime(s) ");
   var quarter_amount = quarters.toString().concat(" quarter(s) ");
   var dime_amount = dimes.toString().concat(" dime(s) ");
   var nickel_amount = nickels.toString().concat(" nickel(s) ");
   var penny_amount = pennies.toString().concat(" pennie(s)");


    if (amount % 25 ==  0) {
      return quarter_amount

    } else if (amount / 25 == 0 && amount % 10 ==0 ) {
      return quarter_amount.concat(dime_amount)

    } else if (amount / 10 == 0 && amount % 5 ==0) {
      return quarter_amount.concat(dime_amount.concat(nickel_amount))

    } else {
      return quarter_amount.concat(dime_amount.concat(nickel_amount).concat(penny_amount))
    }
});

$(function() {
  $("form#amount").submit(function(event) {
    var amount = parseInt($("input#amount").val());
    var result = coinCombinations(amount);

    $(".result").text(result);
    event.preventDefault();
  });
});
