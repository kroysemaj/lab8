var groceryList = [{
  name: "apple",
  price: 4
}, {
  name: "grape",
  price: 5
}, {
  name: "peach",
  price: 6
}];

var total = 0;

groceryList.forEach(function(item) {
  console.log(item.name + ' ' + item.price);
  total += item.price
});


console.log(total);




/* var apple = {name:"apple", price: 4};
 var graceryList = [ apple, grape, peach]*/