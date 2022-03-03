INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
INSERT INTO users(email, first_name, last_name, password, username) VALUES('yas@turkflix.com','yas', 'yas', '$2a$10$CptVVd8dbAVis.OIu0zR8erL4EwHqykuLjhrSubT1F2wgstGU8QHW', 'yas');
INSERT INTO user_roles(user_id,role_id) VALUES(1,2);