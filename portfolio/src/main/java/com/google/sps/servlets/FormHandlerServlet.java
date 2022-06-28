package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String textValue = request.getParameter("text-input");
    Gson gson = new Gson();
    String json = gson.toJson(textValue);
    System.out.println("recommended: " + json);
    response.setContentType("text/html;");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().println(json);
  }
  //old code following the tutorial. Kept as comment for future reference
  /*@Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("You recommended: " + textValue);

    // Write the value to the response so the user can see it.
    response.getWriter().println("You recommended: " + textValue);

    //response.sendRedirect("https://jhong-sps-summer22.appspot.com/");

  }*/
}

