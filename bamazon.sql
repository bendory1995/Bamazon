DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("macbook", "electronics", 1799.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhoneX", "electronics", 899.99, 375);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("backpack", "clothing", 35.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee mug", "kitchen", 10.25, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("echo dot", "home", 49.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rich Dad Poor Dad", "book", 7.99, 325);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nerf Gun", "toy", 38.00, 72);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("piano", "instrument", 1500.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laundry", "appliance", 1234.56, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("backpack", "", 1799.99, 250);

