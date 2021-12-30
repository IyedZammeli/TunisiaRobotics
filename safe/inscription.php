<?PHP
$connect=mysqli_connect("localhost","root","","club");


if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['conf_pass'])){
$name=$_POST['name'];
$email=$_POST['email'];
$pass=$_POST['password'];
$conf_pass=$_POST['conf_pass'];

if(empty($name) || empty($email) || empty($pass) || empty($conf_pass)){
	$msg= "fill all inputs";
}else{


	if($pass!=$conf_pass){
		$msg= "password mismatch !!";
	}else{

	$sql="select * from users where email like '$email'";
	$rslt=mysqli_query($connect,$sql);
		
	
	if(mysqli_num_rows($rslt)!=0)
		$msg= "account already exist !!";
	else{
		$sql="insert into users values (0,'$name', '$email','$pass')";
		$rslt=mysqli_query($connect,$sql) or die (mysqli_error($connect));

		$msg="MERCI !!";
	}
	}
}
}

?>
<style>
.thanks{
	color:red;
	font-size:40px;
}

</style>

<html>
<div class="thanks"><?PHP echo "$msg"; ?></div>
</html>