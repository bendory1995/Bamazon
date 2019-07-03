var mysql = require("mysql");
var inquirer = require("inquirer");

var idNum;
var units;

 
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllProducts();
   
});

function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price+ " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
        start();
    });
}

function start() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Which item do you want to purchase? (in id)"
            },{
                name: "units",
                type: "input",
                message: "How many units do you want?" 
            }
        ]).then(function (answer) {
            idNum = parseInt(answer.id);
            units = parseInt(answer.units);
            
            calculate(idNum,units);
        })
}

function calculate(idNum,units){
    connection.query("SELECT * FROM products where id= ?",[idNum], function (err, res) {
        if (err) throw err;
        //Check the values in the function
        console.log("ID in calc: ",idNum);
        console.log("Units in calc ",units);
        console.log(res[0].stock_quantity);
        //Check to see if we have enough
        if (res[0].stock_quantity > units){
            //If we have enough we need to update the table
            console.log(res[0].product_name);
            console.log("Total price is: " + (res[0].price * units).toFixed(2));
            //Get the new amount, then update the table with the new stock_quantity
            var newQuantity = res[0].stock_quantity - units
            connection.query('UPDATE products SET stock_quantity = ? WHERE id = ?', [newQuantity, idNum], function (error, results, fields) {
                if (error) throw error;
                queryAllProducts();
              });
        }
        else{
            console.log("We don't have enough!");
            end();
        }
    });  
}
function end(){
    //end connection
    connection.end();
}