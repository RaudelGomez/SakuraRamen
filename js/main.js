function changeLanguage() {
  var img = document.getElementById("language").src;

  let menuNavLink = document.getElementById("menu-nav-link");
  let locationNavLink = document.getElementById("location-nav-link");
  let aboutNavLink = document.getElementById("about-nav-link");
  let heroSubtitle = document.getElementById("hero-subtitle");
  let subHeadlineHowToOrder = document.getElementById(
    "sub-headline-how-to-order"
  );
  let pickYourNoodleFigcaption = document.getElementById(
    "pick-your-noodle-figcaption"
  );
  let pickYourBrothFigcaption = document.getElementById(
    "pick-your-broth-figcaption"
  );
  let addYourToppingsFigcaption = document.getElementById(
    "add-your-toppings-figcaption"
  );

  let subHadlineOurMenu = document.getElementById("sub-headline-our-menu");
  let ingredientChicken = document.querySelectorAll(".ingredient-chicken");

  let ingredientBeef = document.querySelectorAll(".ingredient-beef");
  let ingredientShrimp = document.querySelectorAll(".ingredient-shrimp");
  let subHeadlineFindUsAt = document.getElementById("sub-headline-find-us-at");

  if (img.indexOf("germany.png") != -1) {
    document.getElementById("language").src =
      "../assets/img/6_flage/united-states.png";

    menuNavLink.innerHTML = "MENÜ";
    locationNavLink.innerHTML = "STANDORT";
    aboutNavLink.innerHTML = "ÜBER UNS";
    heroSubtitle.innerHTML = "DIE BESTEN RAMEN DER STADT";
    subHeadlineHowToOrder.innerHTML = "WIE BESTELLE ICH?";
    pickYourNoodleFigcaption.innerHTML = "Wählen Sie <br> Ihre Nudeln";
    pickYourBrothFigcaption.innerHTML = "Wählen Sie <br> Ihre Brühe";
    addYourToppingsFigcaption.innerHTML = "Füge deine <br> Toppings hinzu";
    subHadlineOurMenu.innerHTML = "UNSER MENÜ";
    ingredientChicken.forEach((element) => {
      element.innerHTML = "HÜHNCHEN";
    });
    ingredientBeef.forEach((element) => {
      element.innerHTML = "RIND";
    });
    ingredientShrimp.forEach((element) => {
      element.innerHTML = "GARNELEN";
    });

    subHeadlineFindUsAt.innerHTML = "SIE FINDEN UNS AUF";
  } else {
    document.getElementById("language").src =
      "../assets/img/6_flage/germany.png";

    menuNavLink.innerHTML = "MENU";
    locationNavLink.innerHTML = "LOCATION";
    aboutNavLink.innerHTML = "ABOUT";
    subHeadlineHowToOrder.innerHTML = "HOW TO ORDER";
    pickYourNoodleFigcaption.innerHTML = "Pick your <br> noodle";
    pickYourBrothFigcaption.innerHTML = "Pick your <br> broth";
    addYourToppingsFigcaption.innerHTML = "Add your <br > toppings";
    subHadlineOurMenu.innerHTML = "OUR MENU";
    ingredientChicken.forEach((element) => {
      element.innerHTML = "CHICKEN";
    });
    ingredientBeef.forEach((element) => {
      element.innerHTML = "BEEF";
    });

    ingredientShrimp.forEach((element) => {
      element.innerHTML = "SHRIMP";
    });

    subHeadlineFindUsAt.innerHTML = "FIND US AT";
  }
}
