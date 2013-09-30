
var db=datab;
       console.log(db);
       db.transaction(function (tx) {
	var query= "INSERT INTO USER (id, firstname, lastname, email, password) VALUES (1,'Sowmya','Ganesan', 'sganesan@gmail.com', '$$11abc')";
    tx.executeSql(query);
});