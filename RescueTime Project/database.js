
 quiz=0;	
  datab = openDatabase('allatone', '1.0', 'Test DB', 2 * 1024 * 1024);
	datab.transaction(function (tx) {
      console.log('into db');
	  tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id unique, firstname, lastname, email, password)');
});


  
