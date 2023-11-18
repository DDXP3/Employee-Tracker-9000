INSERT INTO department (name)
VALUES("Alonely"),
      ("Duo"),
      ("Trio");

INSERT INTO role (title, salary, department_id)
VALUES("so", .01, 1),
      ("uno", 1, 2),
      ("dos", 100, 2),
      ("ib", 50, 3),
      ("ob", 100, 3),
      ("peb", 150, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("I","Am", 1, NULL),
      ("Thing", "One", 2, NULL),
      ("Thing", "Two", 3, 2),
      ("Some", "Thing", 4, NULL),
      ("Sum", "Thing", 5, 4),
      ("Some", "Ting", 6, 4);
