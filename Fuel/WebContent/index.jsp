<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> --%>

    
<head>
        <title>User Login</title><meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
        <link rel="stylesheet" href="css/matrix-login.css" />
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>


    </head>
    <body>
     

   
    <div id="loginbox">            
            <form id="loginform" class="form-vertical" action="Login1" name="formLogin" onsubmit="return validate();">
				  <p align="center"> ${mes}</p>
         		 <c:remove var="mes" scope="session" />
				 <div class="control-group normal_text"> <h3><span><img src="img/aaa.png" style="width:50px;"></span><img src="img/ad.png" alt="Logo" / style="width:130px; center"></h3></div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_lg"><i class="icon-user"> </i></span><input type="text" name="username" id="username"  placeholder="Username" />
                        </div>
                    </div><br>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="password" name="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                </div><br>
                
                
                <div class="form-actions">
                    
                    <span class="pull-left"><input type="submit" class="btn btn-success" value="Login" ></span>
                   
                </div>
            </form>
            
           
        
        </div>
        	    <script>
        	    // only for popup and checking blank field only]
          function validate(){
        		var username = document.getElementById("username").value;
        		var password = document.getElementById("password").value;
        		if(username == ""){
        		    alert("Please enter a User Name")
        		    formLogin.username.focus();
        		    return false;
        		}
        		if(password == ""){
        		    alert("Please enter a Password");
        		    formLogin.pass.focus();
        		    return false;
        		}
        		
        		}
       </script>
        <script src="js/jquery.min.js"></script>  
        <script src="js/matrix.login.js"></script> 
    </body>

</html>