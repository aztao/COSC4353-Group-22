

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Login1
 */
@WebServlet("/Login1")
public class Login1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String name=request.getParameter("username");
	      String name1=request.getParameter("password");
	      
	    		  try
	    		  {
	    		  
	    			  Class.forName("oracle.jdbc.driver.OracleDriver");
	    			  Connection c=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","Hussein123");
	    			  
	    			  System.out.println("coneccted");
	    			  
	    String sql="select USER_NAME,PASSWORD from fuel";
		PreparedStatement ps=c.prepareStatement(sql);
		ResultSet rs=ps.executeQuery();
		//rs.getString(1);
		//rs.getString(2);
		while(rs.next())
		{
		if(name.equals(rs.getString(1)) && name1.equals(rs.getString(2)))
		{
			HttpSession session = request.getSession(true); // reuse existing
			// session if exist
			// or create one
			session.setAttribute("user", rs.getString(1));
			session.setMaxInactiveInterval(10); // 30 seconds

			response.sendRedirect("profile.html");
		}
		else
		{
			String message="Wrong Username and Password";
			request.getSession().setAttribute("mes", message);
			response.sendRedirect("index.jsp");
		}
		}
		//System.out.println("Data inserted the database");
		ps.close();
		c.close();
	    		  
	    		  }
	    		  
	    		  catch(Exception e)
	    		  {
	    			  
	    			  e.printStackTrace();
	    		  }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
