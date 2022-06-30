package com.google.sps.servlets;

import java.io.IOException;
import java.util.regex.*;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* takes the contents of the textarea in the book recommendation form, 
   modifies the content to be capitalized properly, and writes the result to response */
@WebServlet("/book-recommender")
public class BookRecommenderFormServlet extends HttpServlet {

  // takes a STRING as an input; capitalises first CHAR of each WORD and returns the result
  public String eachFirstCharUpperCase(String txt) {
    String regex = "\\b(.)(.*?)\\b";
    String result = Pattern.compile(regex).matcher(txt).replaceAll(
            matche -> matche.group(1).toUpperCase() + matche.group(2)
    );
    return result;
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String textValue = request.getParameter("text-input");
    //Gson gson = new Gson();
    //String json = gson.toJson(textValue);
    //System.out.println("recommended: " + json);
    System.out.println("recommended: " + textValue);
    response.setContentType("text/html;");
    response.setCharacterEncoding("UTF-8");
    //response.getWriter().println(json);
    textValue = eachFirstCharUpperCase(textValue);
    response.getWriter().println(textValue);
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

