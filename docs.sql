// To create new users
insert into users(name,email,password) 
values ('aishu','ashvaithe',md5('aishu'));


//validate user login

select * from users where email='ashvaithe' and password=md5('aishu');

// update budget in users
UPDATE users SET budget = 1500 WHERE u_id = 1;

// insert into expenses
insert into expenses(item,amount,ex_date,u_id)
values('dinner',250,'12-01-2018',1);

// delete from expenses
delete from expenses where u_id=1 and ex_id=1;