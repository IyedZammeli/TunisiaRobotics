<?PHP
$connect=mysqli_connect("localhost","root","","club");
session_start();
$msg="";

if(!isset ($_SESSION['name']) || empty($_SESSION['name'])){
	header("location:http://localhost/");
	exit;
}else{
	
	if(isset($_POST['modify'])){
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['password']))
		$msg="fill all inputs";
	else{
		$name=$_POST['name'];
		$email=$_POST['email'];
		$pass=$_POST['password'];

		$sql="update users set name='$name',email='$email',password='$pass'";
		$query=mysqli_query($connect,$sql);
		
		$_SESSION['name']=$name;
		$_SESSION['email']=$email;
		$_SESSION['password']=$pass;
		
		$msg="MODIFICATION DONE !!";
	}
	
	}
	
	
	
	
	if(isset($_POST['remove'])){
		
		
	}
	
}

?>


<html>

<h1><?PHP echo "$msg"; ?></h1>

<form action="" method="post">


<input type="text" name="name" placeholder="enter your name" value="<?PHP echo($_SESSION['name']);?>"/><br>
<input type="text" name="email" placeholder="enter your email" value="<?PHP echo($_SESSION['email']);?>"/><br>

<input type="password" name="password" placeholder="*******" value="<?PHP echo($_SESSION['password']);?>"/><br>


<input type="submit" name="modify" value="MODIFY" />

</form>



<form....

<input type="submit" name="remove" value="remove" />

</html>