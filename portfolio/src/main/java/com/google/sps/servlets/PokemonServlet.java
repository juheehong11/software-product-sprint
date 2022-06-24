package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /pokemon URL. Try runninsg a server and navigating to /pokemon! */
@WebServlet("/pokemon")
public class PokemonServlet extends HttpServlet {
  String[] pokemons = {"Pikachu", "Pichu", "Piplup"};
  Gson gson = new Gson();
  String json = gson.toJson(pokemons);
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}
