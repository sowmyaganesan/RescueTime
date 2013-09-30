function SignInCtrl($scope) {
	var userpassword = '';
	  
	  
	$scope.signInUser = function() {
		$scope.auth = false;
		$scope.hasUser = false;
		
		// DB Query 
			  console.log('SelectQuesry js',datab);
			  datab.transaction(function (tx) {
			  //var selectQuery = "SELECT * FROM USER WHERE email = '" + $scope.inputemail + "'";
			  var selectQuery = "SELECT * FROM USER WHERE EMAIL='sganesan@gmail.com'";
			  console.log(selectQuery);
			  tx.executeSql(selectQuery, [], function (tx, results) {
			  
			   var len = results.rows.length, i;
			   
			  for (i = 0; i < len; i++){
				userpassword= results.rows.item(i).password;
			   }
			   console.log('into selectquery',results.rows.length, userpassword,len);
			 }, null);
			});
		console.log('uss', userpassword);
		if (userpassword != '') {
			$scope.hasUser = true;
			$scope.password = userpassword;
			if ($scope.inputpassword == $scope.password) {
				$scope.auth = true;
				console.log("signin success");
				$scope.alertMessage= "SignIn Successful!"; // TODO: Redirect to Landing Page.
			} 
		} 
	
		if (!$scope.hasUser) {
			$scope.alertMessage= "Incorrect Email";
			
		}else if (!$scope.auth){
			$scope.alertMessage= "Incorrect Password";
		}
	};
	
	
}


