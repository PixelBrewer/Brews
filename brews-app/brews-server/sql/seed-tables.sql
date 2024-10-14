INSERT INTO users (username, email) VALUES
('john_doe', 'john.doe@example.com'),
('jane_smith', 'jane.smith@example.com'),
('coffee_lover', 'coffee.lover@example.com');
INSERT INTO manufacturers (name, country) VALUES
('Coffee Co.', 'USA'),
('Bean Bros.', 'Canada'),
('Java House', 'Colombia');
INSERT INTO coffee_beans (name, roast, price, manufacturer_id) VALUES
('Smooth Sunrise', 'Light', 12.99, 1),
('Bold Night', 'Dark', 14.99, 1),
('Rich Colombian', 'Medium', 11.49, 3),
('Espresso Blend', 'Dark', 15.99, 2);
INSERT INTO purchases (coffee_bean_id, place_bought, date_bought) VALUES
(1, 'Local Coffee Shop', '2024-10-01'),
(2, 'Grocery Store', '2024-10-05'),
(3, 'Online Store', '2024-10-10'),
(4, 'Cafe Downtown', '2024-10-12');
INSERT INTO ratings (coffee_bean_id, user_id, rating, review, date_rated) VALUES
(1, 1, 5, 'Absolutely loved this one! Perfect for mornings.', '2024-10-02'),
(2, 2, 4, 'Strong flavor, good for evenings.', '2024-10-06'),
(3, 3, 5, 'Rich and smooth, my favorite Colombian blend!', '2024-10-11'),
(4, 1, 3, 'A bit too strong for my taste, but not bad.', '2024-10-13');
