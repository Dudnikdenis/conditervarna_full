CREATE TABLE users(
    useer_id serial PRIMARY KEY, 
    name VARCHAR(15)
    );

CREATE TABLE forwork(
    img_id serial PRIMARY KEY, 
    name VARCHAR(15)
    );    

create table imgWork (
	img_id serial not null,
	url character varying(100),
	name character varying(20)
);

insert into public.imgWork(url) 
values ('http://localhost:3002/images/work/6.jpg');

select * from public.imgwork;