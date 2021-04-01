

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
@WebServlet("/CreateQuotation")
public class CreateQuotaion extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateQuotaion() {
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
		
	      String companyname=request.getParameter("companyname");
	       String country=request.getParameter("country");
	       String contact=request.getParameter("contact");
	     
	     
	    			    	
	    		  try
	    		  {
	    		  
	    			  Class.forName("oracle.jdbc.driver.OracleDriver");
	    			  Connection c=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","ETHOVIA","ETHOVIA");
	    			  
	    			  System.out.println("coneccted");
	    			  
	    String sql="insert into  QUOTATION(COMPANY_NAME,COUNTRY,CONTACT) values (?,?,?)";
		PreparedStatement ps=c.prepareStatement(sql);
		ps.setString(1,companyname);
		ps.setString(2,country);
		ps.setString(2,contact);
		
		

		
		int x=ps.executeUpdate();
		System.out.println("DATA INSERTED");
		if(x!=0)
		{
			String message="Data inserted to the database";
			response.sendRedirect("quotation.jsp");
			
		}
		else
		{
			String message="Data insertion failed";
			request.getSession().setAttribute("mes", message);
			
		}
		System.out.println("Data is not inserted the database");
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


