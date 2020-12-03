use ssafydb;
-- DROP TABLE `userinfo`;

CREATE TABLE `userinfo` (
	`userid`	VARCHAR(20) 	PRIMARY KEY,
	`username`	VARCHAR(20) 	NOT NULL,
	`userpwd`	VARCHAR(100) 	NOT NULL,
	`email`		VARCHAR(2000),
	`phone` 	VARCHAR(2000),
	`joindate` 	TIMESTAMP		NOT NULL DEFAULT current_timestamp
);

INSERT INTO userinfo (userid, username, userpwd, email, phone)
VALUES('admin', '관리자', 'admin', 'admin@ssafy.com','010-1111-1111');

INSERT INTO userinfo (userid, username, userpwd, email, phone)
VALUES('ssafy', '김싸피', 'ssafy', 'ssafy@ssafy.com','010-2222-2222');

select * from userinfo;
commit;