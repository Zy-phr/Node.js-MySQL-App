DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES  ("Amazon Echo", "Devices", 99.99, 56),
        ("Amazon Echo Dot", "Devices", 39.99, 50),
        ("Instant Pot 7-in-1 Multi-Functional Pressure Cooker, 6 Quart", "Home", 99.95, 16),
        ("TechMatte Car Mount", "Cell Phone & Accessories", 7.99, 52),
        ("Fire HD 8 Tablet with Alexa", "Devices", 99.99, 33),
        ("SanDisk 32GB Ultra Class Memory Card", "Computers", 12.49, 30),
        ("Sony XB950B1 Extra Bass Wireless Headphones", "Cell Phone & Accessories", 148.00, 45),
        ("iRobot Roomba 652 Robotic Vacuum Cleaner", "Home", 369.99, 9),
        ("Anker Bluetooth SoundBuds Headphones", "Cell Phone & Accessories", 25.99, 17),
        ("Kindle Paperwhite E-reader", "Devices", 189.99, 6),
        ("Fire TV Stick with Alexa Voice Remote", "Devices", 39.99, 10),
        ("Importer520 16-Foot Premium Active USB 2.0 Extender Cable", "Cell Phone & Accessories", 7.95, 2),
        ("Oral-B Pro 7000 SmartSeries Electric Toothbrush", "Health & Personal Care", 114.94, 7),
        ("TaoTronics Dimmable LED Desk Lamp with USB Charging Port", "Home", 32.99, 11),
        ("23andMe DNA Test", "Health & Personal Care", 199.00, 7);
