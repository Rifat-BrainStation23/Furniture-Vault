<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';

?>
<div id="page-wrapper">
<h4 class=" text-info text-center  h3"></h4>
<?php
if(isset($_SESSION['msg']))
{
    $msg=$_SESSION['msg'];
    unset($_SESSION['msg']);
}
if(isset($_SESSION['errors']))
{
    $errors=$_SESSION['errors'];
        unset($_SESSION['errors']);

}

?>
<div class="row">
    <span class=" col-xs-4 col-xs-offset-4 alert-danger"  style="font-size:15px;" ><?php if(isset($msg))
    {echo $msg;}?></span>

</div>
<div class="row">
    <span class=" col-xs-4 col-xs-offset-4 alert-warning"  style="font-size:15px;" ><?php if(isset($errormsg))
    {echo $errormsg;unset($errormsg);}?></span>

</div>

<div class="container" style="height: 500px;">
	<h3>Change Password.</h3>
	<hr>
	<form action="process/changepassword.php" method="post">
		<div class="form-group col-xs-10 ">
			<label for="oldpassword" class="col-xs-2 form-label">Old password</label>
			<!--WArning Goes here-->
		
			<div class="col-xs-8">
				<input class="form-control" type="password" name="opassword" value="<?php ?>" placeholder="XXXXXXXXX">
					<span class="text-danger">
				<?php 
                                if(isset($errors['opassword']))
                                {
                                    echo $errors['opassword'];
                                }
		?>
			</span>
			</div>
		</div>
		<div class="form-group col-xs-10 ">
			<label for="newpassword" class="col-xs-2 form-label">new password</label>
			<!--WArning Goes here-->
		
			<div class="col-xs-8">
				<input class="form-control" type="password" name="password" value="<?php ?>" placeholder="XXXXXXXXX">
					<span class="text-danger">
				<?php 
		 if(isset($errors['password']))
                                {
                                    echo $errors['password'];
                                }
		?>
			</span>
			</div>
		</div>
		<div class="form-group col-xs-10 ">
			<label for="newcpassword" class="col-xs-2 form-label">confirm new password</label>
			<!--WArning Goes here-->
			<span class="text-danger">
				<?php 
		 if(isset($errors['cpassword']))
                                {
                                    echo $errors['cpassword'];
                                }
		?>
			</span>
			<div class="col-xs-8">
				<input class="form-control" type="password" name="cpassword" value="<?php ?>" placeholder="XXXXXXXXX">
				<span class="help-text"></span>
			</div>
		</div>
		<div class="col-xs-2 col-xs-offset-3 row">
			<input class="btn btn-warning form-control" type="submit" value="Update">
		
		</div>
	</form>
</div>
</div>
<?php
require_once 'views/footer.php';
?>