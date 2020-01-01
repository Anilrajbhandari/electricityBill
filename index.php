<?php 

if (isset($_POST['login'])){
	$error = [];
	print_r($_POST['username']);
	if(isset($_POST['username']) && !empty($_POST['username']))
	{
		$username=$_POST['username'];
		if(strlen("$username")>=8){
		echo 'username has more than eight character';
		}//eof username length
		else{
		$error['username'] = "username should be more than 8 characters";
		}

	}//eof check usernaem
	else{
	$error['username'] = "please enter yousername";
}
	if(isset($_POST['password']) && !empty($_POST['password']))
	{
		echo 'set password sucess';
	}
	//print_r($error);

	}


?>
<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<body>
	<form action="#"  method="post">
		<label>Username</label>
		<input type ="text"placeholder="enter valid username"name='username'>
		<?php 
			if(isset($error['username'])){
			echo $error['username'];
		}
		?>
		

		<br>
		<label>Password</label>
		<input type="password" name="password" placeholder="Enter ur password">
		<br>
		<input type="submit" name="login">
		<br>
		<a href="#bottom">Sign Up</a>
		
	</form>

	<h1>Sign Up</h1>
	<form> 
		<label>Name</label>
		<input type="text" name="name"placeholder="enter ur name">
		<br>
		<label>Username</label>
		<input type="text" name="uname"placeholder="enter ur username">
		<br>
		<label>Email</label>
		<input type="email" name="email"placeholder="enter ur email">	
		<br>
		<label>Password</label>
		<input type="password" name="password"placeholder="enter ur password">
		<br>
		<label>Confirm Password</label>
		<input type="password" name="cpassword"placeholder="enter ur password">
		<br>
		<input type="submit" name="submit">
		<br>
		<a href="#top">Login </a>

	</form>


</body>
</html>