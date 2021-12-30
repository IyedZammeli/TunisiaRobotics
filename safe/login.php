<?PHP
$connect=mysqli_connect("localhost","root","","club");
session_start();


$msg="";
if(isset($_POST['email']) && isset($_POST['password'])){
$email=$_POST['email'];
$pass=$_POST['password'];

if(empty($email) || empty($pass)){
	$msg= "fill all inputs";
}else{
		$sql="select * from users where email like '$email' and password like '$pass'";
		$query=mysqli_query($connect,$sql);
	
		if(mysqli_num_rows($query)==0)
			$msg="email/password incorrect !!";
		else{
			$rslt=mysqli_fetch_array($query);
			$_SESSION['name']=$rslt['name'];
			$_SESSION['email']=$rslt['email'];
			$_SESSION['password']=$rslt['password'];
			
			header("location: http://localhost/profile.php");
		}
	}
}


?>

<html>

<h1><?PHP echo "$msg";?></h1>

<form action="" method="post">


<input type="text" name="email" placeholder="enter your email"/><br>

<input type="password" name="password" placeholder="*******"/><br>


<input type="submit" value="LOGIN" />

</form>


</html>