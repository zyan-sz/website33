document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.classList.toggle("hidden");
    });
  }

  window.setLanguage = function (lang) {
    document.querySelectorAll("[data-lang-en]").forEach((el) => {
      const translation = el.getAttribute(`data-lang-${lang}`);
      if (translation) el.innerText = translation;
    });

    // Change direction and language
    const html = document.documentElement;
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
    }

    // Close dropdown
    if (langMenu) langMenu.classList.add("hidden");
  };
});
