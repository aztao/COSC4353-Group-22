<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User Registration</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap-4.0.0.css" rel="stylesheet">

	  <style>
		  .customdiv{
			  height: 90px;
		  }
	  </style>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
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
<body>

<h2>Quotation List</h2>

<ul>
 <li class="nav-item">
                <a class="nav-link" href="createQuotation.jsp">Create Quotation</a>
             </li>
</ul>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    
  </tr>
  <tr>
    <td>Facebook</td>
    <td>Maria Anders</td>
    <td>United States</td>
  </tr>
  <tr>
    <td>Procore Technologies</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Lululemon</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Adobe</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Ultimate Software</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

</body>
</html>
