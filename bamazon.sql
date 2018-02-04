
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;


USE bamazon_db;


CREATE TABLE products (
 item_id INT AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(200) NOT NULL,
 department_name VARCHAR(50) NOT NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity INT(10) NOT NULL,
 primary key(item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("prAna Women's Up town Pants", "Womens Clothing", 88, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("prAna Men's Brion Pant 32 in. Dark Ginger", "Mens Clothing", 74.95, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dachstein Woolwear 100% Austrian Boiled Wool Extra Warm Over the Knee Sock", "Mens Clothing",68, 10);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("prAna Women's Steph Pant", "Clothing", 80, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Thermal Mug Hot Stuff Coffee Please, Red", "Kitchen & Dining", 14.00,11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Globe Geminon 35 - Complete Longboard - Ebony/Black", "Skating", 150.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue with White Stars Large Pet Teepee", "Dog Toys", 6.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Otters Holding Hands Hard Lapel Enamel Pin", "Office", 12.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("A-Door-Able Bouncing Mouse Cat Toy", "Cat Toys", 6.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hand Carved Olive Wood Natural Coaster Set of 4 ", "Kitchen & Dining", 12.00, 12);


