/*Create a project in the Google Cloud Console and enable the Cloud SQL and Cloud Storage APIs.
Create a Cloud SQL instance and a database within the instance.
Create a Cloud Storage bucket and set the appropriate permissions for it.
Install the necessary Node.js packages to interact with Cloud SQL and Cloud Storage. You can use the following command to install them:
css
Copy code
npm install --save @google-cloud/storage mysql*/
const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'abhi',
  password: 'Adconnect123',
  database: 'AppdevDB'
});

// create the User table
connection.query('CREATE TABLE User (user_id INT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(100) NOT NULL)', function(error, results, fields) {
  if (error) throw error;
  console.log('User table created successfully');
});

// create the User_PI table
connection.query('CREATE TABLE User_PI (user_id INT PRIMARY KEY, address VARCHAR(100) NOT NULL, city VARCHAR(50) NOT NULL, state VARCHAR(50) NOT NULL, zip_code VARCHAR(10) NOT NULL)', function(error, results, fields) {
  if (error) throw error;
  console.log('User_PI table created successfully');
});

// create the Product table
connection.query('CREATE TABLE Product (product_id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, description VARCHAR(1000) NOT NULL, price DECIMAL(10, 2) NOT NULL)', function(error, results, fields) {
  if (error) throw error;
  console.log('Product table created successfully');
});

// create the Placed_Order table
connection.query('CREATE TABLE Placed_Order (order_id INT PRIMARY KEY, user_id INT NOT NULL, product_id INT NOT NULL, quantity INT NOT NULL, order_date DATE NOT NULL, FOREIGN KEY (user_id) REFERENCES User(user_id), FOREIGN KEY (product_id) REFERENCES Product(product_id))', function(error, results, fields) {
  if (error) throw error;
  console.log('Placed_Order table created successfully');
});

// create the Order_Tracking table
connection.query('CREATE TABLE Order_Tracking (order_id INT PRIMARY KEY, status VARCHAR(50) NOT NULL, update_date DATE NOT NULL, FOREIGN KEY (order_id) REFERENCES Placed_Order(order_id))', function(error, results, fields) {
  if (error) throw error;
  console.log('Order_Tracking table created successfully');
});

// close the MySQL connection
connection.end();
