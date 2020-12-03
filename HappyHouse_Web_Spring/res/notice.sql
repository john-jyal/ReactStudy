CREATE TABLE `notice` (
   `noticeno`   int PRIMARY KEY auto_increment ,
   `userid`    VARCHAR(20) NULL,
   `subject`     VARCHAR(100) NULL,
   `content`     VARCHAR(2000) NULL,
   `regtime`    TIMESTAMP   NOT NULL DEFAULT current_timestamp,
   constraint `notice_to_member_fk` foreign key (`userid`) 
   references  `userinfo` (`userid`)
);