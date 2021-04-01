

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Registration
 */
@WebServlet("/Registration")
public class Registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Registration() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
	      String user=request.getParameter("username");
	       String password=request.getParameter("password");
	      // String cpassword=request.getParameter("EMP_ADDRESS");
	     
	    			    	
	    		  try
	    		  {
	    		  
	    			  Class.forName("oracle.jdbc.driver.OracleDriver");
	    			  Connection c=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","Hussein123");
	    			  
	    			  System.out.println("coneccted");
	    			  
	    String sql="insert into  FUEL(USER_NAME,PASSWORD) values (?,?)";
		PreparedStatement ps=c.prepareStatement(sql);
		ps.setString(1,user);
		ps.setString(2,password);
		//ps.setString(3,cpassword);
		

		
		int x=ps.executeUpdate();
		System.out.println("DATA INSERTED");
		if(x!=0)
		{
			String message="Data inserted to the database";
			response.sendRedirect("index.jsp");
			//System.out.println("mohit");
		}
		else
		{
			String message="Data insertion failed";
			request.getSession().setAttribute("mes", message);
			
		}
		System.out.println("Data inserted the database");
		ps.close();
		c.close();
		
		
		System.out.println("Data saved");
	    		  }
	    		  
	    		  catch(Exception e)
	    		  {
	    			  
	    			  e.printStackTrace();
	    		  }
		}

		

	}


