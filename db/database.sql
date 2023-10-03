create database if not exists ghostband;

use ghostband;
create table albums(
    idAlbum int(10) primary key auto_increment,
    nameAlbum varchar(35),
    numSongs int(10),
    date_published date,
    image varchar(50));

create table members(
    idMember int(10) primary key auto_increment,
    real_name varchar(35),
    nickname varchar(35),
    instrument varchar(30),
    image varchar(50));

create table songs(
    idSong int(10) primary key auto_increment,
    title varchar(35),
    duration varchar(15),
    albumFk int(10),
    date_published date,
    image varchar(50),
    foreign key(albumFk) references albums(idAlbum));