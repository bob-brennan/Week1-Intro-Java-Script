var itemPrice       = 3.99;
var moneyInWallet   = 45.00
var numberOfFriends = 18;
var yearsOld        = 60;
var firstName       = "Fred";
var lastName        = "Flinstone";
var middleInitial   = "J";


var moneyRemaining = moneyInWallet - itemPrice;
var friendsPerYear = numberOfFriends / yearsOld;
var fullName       = firstName + " " + middleInitial + ". " + lastName;

console.log('VARIABLES');
console.log('  ItemPrice:       ' + itemPrice      );
console.log('  MoneyInWallet:   ' + moneyInWallet  );
console.log('  NumberOfFriends: ' + numberOfFriends);
console.log('  YearsOld :       ' + yearsOld       );   
console.log('  FirstName :      ' + firstName      );      
console.log('  LastName :       ' + lastName       );       
console.log('  MiddleInitial :  ' + middleInitial  );  

console.log('CALCULATIONS');
console.log('   Money Remaining :  ' + moneyRemaining);
console.log('   Friends Per Year : ' + friendsPerYear);
console.log('   Full Name :        ' + fullName);