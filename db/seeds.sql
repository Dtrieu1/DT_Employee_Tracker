INSERT INTO department (name)
VALUES 
    ('Finance'), 
    ('Marketing'),
    ('Legal'),
    ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Sales Associate', 30000.00, 1 ),
    ('Financial Advisor', 50000.00, 2),
    ('Lawyer', 70000.00, 3),
    ('Sales Manager', 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Sam', 'Johnson', 1, 1),
    ('Mckenzie', 'Enter', 2, 2),
    ('Brad', 'Kennedy', 3, 1),
    ('Ashley', 'Smith', 4, 2);