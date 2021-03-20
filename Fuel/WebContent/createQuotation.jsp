<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Quotation </title>

    <!-- Bootstrap -->
    <link href="css/bootstrap-4.0.0.css" rel="stylesheet">

	  <style>
		  .customdiv{
			  height: 90px;
		  }
	  </style>
  </head>
  <body>
	  <div class="container-fluid">
	  <header class="row">
	  <div class="col-12 bg-danger">
		  <div class="customdiv">
		  
				  <h1>Create Quotation</h1>
		  </div>
	    </div>
	  </header>
  </div>
	
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
             <li class="nav-item">
                <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item active">
                <a class="nav-link" href="profile.html">User Profile</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="quotaition.jsp">Quotation</a>
             </li>
           
          </ul>
          <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
       </div>
    </nav>
	  
    <div class="container">
		  <div class="row">
		  <div class="col-lg-6">
			  <div class="customform">
				  <br>
				   <form actiion="CreateQuotaion" method="post">
				  <div class="form-group">
					  <br>
					  <h1>Create Quotation</h1>
					  
					  <label for="companyname">Company:</label>
					  <input type="text" class="form-control" id="companyname" placeholder="Enter User Company Name" name="companyname"><br>
					  <label for="country">Country:</label>
					  <input type="text" class="form-control" id="country" placeholder="country" name="country"><br>
					  <label for="contact">Contact:</label>
					  <input type="text" class="form-control" id="contact" placeholder="contact" name="contact"><br>
					 
					  </div>
					
					
					                      
                     

                        <input type="submit" class="btn btn-primary" value="Create">
				  </div>	
				  <div style="height: 20px">
					</form>
				</div>
				
				  </form>
				
			  </div>
			  </form>
		    </div>
		    </form>
		  </div>
		  </form>
    
	  
	  
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
    <script src="js/jquery-3.2.1.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed --> 
    <script src="js/popper.min.js"></script>
  <script src="js/bootstrap-4.0.0.js"></script>
  </body>
</html>

</body>
</html>