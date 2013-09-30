 var userpassword = '';
 function select() { 
	  console.log('SelectQuesry js');
	  datab.transaction(function (tx) {
	  tx.executeSql('SELECT * FROM USER', [], function (tx, results) {
	   var len = results.rows.length, i;
	   
	  for (i = 0; i < len; i++){
		userpassword= results.rows.item(i).password;
	   }
	 }, null);
	});
}
