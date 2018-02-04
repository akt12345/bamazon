
// Require mySql & Inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");


// connection to mySQL
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});


// connect to the bamazon database
connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});


// product display(ID, Product Name and Price and Quanitity to show that my database is being updated)
var printTable = function() {
  connection.query('SELECT * FROM products', function(err, res) {
      console.log("❂❂❂❂❂❂❂❂ Bamazon At Your Service ❂❂❂❂❂❂❂");
      for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + " | " + res[i].product_name + " |  $" + res[i].price + "")
      }
      console.log("❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂");
      questions();
  });
};
printTable();


// Question - ID of product
function questions() {
inquirer.prompt([
  {
  name: "id",
  type: "input",
  message: "Please select the ID of the product you would like to purchase today. ❂"
},{
  // Question - Quantity
  name: "quantity",
  type: "input",
  message: "How many? ❂"


}]).then(function (answers) {


// Product Number logic
 productNumber = answers.id
 itemQuantity = answers.quantity;

connection.query('SELECT * FROM products WHERE ?', {item_id: productNumber}, function(err, data) {
  if (err) throw err;

  var item = data[0];
  console.log(JSON.stringify(answers.quantity, item))



  // Insufficient quantity, total shown to customer for what they purchased and update inventory
  connection.query('SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id= ' + productNumber,
    function(err, res) {
    if (err) throw err;
    if (res[0].stock_quantity < itemQuantity) {
    console.log("Insufficient quantity! Please check back soon and Have a nice day! ❂");
  } else {
    connection.query("UPDATE products SET ? WHERE ?",
      [{stock_quantity:res[0].stock_quantity - itemQuantity}, {item_id: productNumber}],
      function(err, result){});
    if (itemQuantity === '1') {
      console.log("❂ Your Total Is: $" + (res[0].price * itemQuantity) + " for the purchase of " + itemQuantity + " " + res[0].product_name);
    } else {
      console.log("❂ Your Total Is: $" + (res[0].price * itemQuantity) + " for the purchase of " + itemQuantity + " " + res[0].product_name);
    }
      console.log("❂ Inventory is updated ❂");
      printTable();
    }
     });
   });
 });
}
