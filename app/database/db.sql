create table users (
id serial primary key, 
firstname varchar not null,
lastname varchar not null,
phone varchar not null,
address varchar not null,
idAuth int not null unique,
img varchar null,
status varchar not null,
createdAt  timestamp default current_timestamp,
updatedAt timestamp null
);

create table authentication(
id int auto_increment primary key,
email varchar not null,
password varchar not null,
type_A varchar not null,
role varchar not null,
status varchar not null,
isloggin int not null,
lastLogin timestamp null,
createdAt timestamp default current_timestamp
);

create table categories(
    id serial primary key,
    name varchar not null,
    idRestaurant int null,
    logo varchar null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp null
);

create table restaurant (
    id serial primary key, 
    name varchar not null,
    description varchar not null, 
    schedule varchar not null,
    logo varchar not null,
    address varchar not null,
    lat varchar not null,
    long varchar not null,
    status varchar not null 
    idauth serial not null
);