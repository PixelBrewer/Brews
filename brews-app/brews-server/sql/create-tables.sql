CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT
);
CREATE TABLE manufacturers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    country TEXT
);
CREATE TABLE coffee_beans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    roast TEXT,
    price DECIMAL(5, 2),
    manufacturer_id INTEGER,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);
CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coffee_bean_id INTEGER,
    place_bought TEXT,
    date_bought DATE,
    FOREIGN KEY (coffee_bean_id) REFERENCES coffee_beans(id)
);
CREATE TABLE ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coffee_bean_id INTEGER,
    user_id INTEGER,
    rating INTEGER CHECK(rating BETWEEN 0 AND 5),
    review TEXT,
    date_rated DATE,
    FOREIGN KEY (coffee_bean_id) REFERENCES coffee_beans(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
