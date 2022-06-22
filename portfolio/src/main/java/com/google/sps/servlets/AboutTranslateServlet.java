package com.google.sps.servlets;
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/translateabout")
public class AboutTranslateServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String par = request.getParameter("par");
    String languageCode = request.getParameter("lc");

    Translate translate = TranslateOptions.getDefaultInstance().getService();
    Translation translation =
        translate.translate(par, Translate.TranslateOption.targetLanguage(languageCode));
    String translatedText = translation.getTranslatedText();

    response.setContentType("text/html; charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().println(translatedText);
  }
}
