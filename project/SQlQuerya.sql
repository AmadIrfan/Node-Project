/*
create table course(
id	varchar(max) not null,
name varchar(20) not null,
description varchar(max) null,
createDate datetime not null,
updateDate datetime not null,
courseCode varchar(8) not null,
limitStudent int not null,
isOnline bit NOT null, 
);
create table Students(
id	varchar(max) not null,
name varchar(20) not null,
email varchar(20) not null,
password varchar(20) not null,
phoneNo varchar(13) not null,
fatherName varchar(50) not null,
createDate datetime not null,
updateDate datetime not null,
);
INSERT INTO course (id, name, description, createDate, updateDate, limitStudent) VALUES ('12345', 'AI', 'this is Ai course', '2023-10-13', '2023-10-13', 40)

Select * from course;


drop table course;
drop table Students;
*/
