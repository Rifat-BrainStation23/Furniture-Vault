<?php
require_once 'views/header.php';
require_once 'views/sidebar.php';
require_once 'models/common.php';
$objcommon = new common();
$result = $objcommon->getcategories();
$resultgroup = $objcommon->getusergroup();
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Create Category</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <form class="form-horizontal" action="process/createcategoryprocess.php" method="post">
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-3" >Category:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" reqrequired="" placeholder="" name="category_name">
                    </div>
                </div>
                <?php
                foreach($resultgroup as $data){ ?>
                  <div class="form-group">
                    <label class="control-label col-sm-2 col-md-4" ><?=$data->usergroup_name?>:</label>
                    <div class="col-sm-10 col-md-8">
                        <label class="radio-inline"><input type="checkbox" checked=""  value="<?=$data->usergroup_id?>" name="catergoryview[]"></label>
                   
                    </div>
                </div>   
            <?php    }
                ?>


                <div class="form-group">        
                    <div class="col-sm-offset-3 col-sm-10">
                        <button type="submit" class="btn btn-success">Add Catergory</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Create Subcategory</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <form class="form-horizontal" action="process/createsubcategoryprocess.php" method="post">
                <div class="form-group">
                    <div class="col-md-offset-3 col-md-8">
                        <select class="form-control " required="" name="category_id">
                            <option value="">Select Category</option>
                        <?php foreach ($result as $data) { 
                 echo '<option value="'.$data->Category_ID.'">'.$data->Category_Name.'</option>';
                        } ?>
                    </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2 col-md-3" >Subcategory:</label>
                    <div class="col-sm-10 col-md-8">
                        <input type="text" class="form-control" placeholder="" required="" name="subcategory_name">
                    </div>
                </div>

                <div class="form-group">        
                    <div class="col-sm-offset-3 col-sm-10">
                        <button type="submit" class="btn btn-success">Add Subcategory</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

<?php
require_once 'views/footer.php';
?>