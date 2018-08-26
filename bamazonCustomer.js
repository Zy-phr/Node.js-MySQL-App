var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yourpassword",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  showProducts();
});

function showProducts() {
    connection.query("SELECT * FROM products", function(error, results) {
        if(error) {
            console.log("Errror: ", error);
        }
        displayProducts(results);
    });
}

function displayProducts(products) {
    console.log(products);
    for(var i = 0; i < products.length; i++) {
        console.log(
            "Item ID: " + products[i].item_id +
            " | Product: " + products[i].product_name +
            " | Price: " + products[i].price
        );
    }
    productID();
}

function productID() {
    inquirer
        .prompt([
           {
               name: "item",
               type: "input",
               message: "What is the Item ID of the Product you would like to buy?",
               validate: function (userInput) {
                    if(/^[1-9]?[0-9]{1}$|^100$/.test(userInput)) {50
                        return true;
                    }else {
                        console.log('\n you need to type a number');
                        return false;                    
                    }
                
                }  
           },
           {
            name: "checkQuan",
            type: "input",
            message: "How many units of that product would you like to buy?",
            validate: function (requestedQuantity, res) {
              connection.query(`SELECT * FROM products WHERE item_id in (${res.item})`, function (err, result) {
                if (err) { console.error(err); }
                var ourResult = result
                var stock_quantity = ourResult[0].stock_quantity;
                stock_quantity = Number(stock_quantity)
                res.item = Number(res.item)
                var purchase = (stock_quantity - requestedQuantity);
                if (requestedQuantity <= stock_quantity) {
                  console.log("\nGreat! We can fill your order and ship it to you.\n");
                  connection.query(`UPDATE products SET stock_quantity = ${purchase} WHERE item_id = ${res.item}`, function (err, res) {
                    
                    if (err) { console.error(err); }
                    console.log('\nUpdated inventory');
                  });
                  return true;
                } else {
                  console.log("\n Insufficient quantity");
                  return false;
                }

                run.productID();
              });
            },
           } 
        ])
}s1