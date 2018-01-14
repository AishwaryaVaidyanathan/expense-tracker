drop table if exists users ;
create table users
(
    u_id  serial primary key,
    name varchar(16),
    email varchar(16),
    password text,
    budget float,
    UNIQUE(email)
);

drop table if exists expenses;
create table expenses
(
    ex_id serial primary key,
    item varchar(20),
    amount float,
    ex_date date,
    U_id int references users(u_id)
    ON DELETE CASCADE ON UPDATE SET NULL
);