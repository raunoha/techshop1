import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "cart": "Cart ",
      "admin": "To admin view",
       "contact": "Contact",
       "shops": "Our shops",
        "maintain-categories": "Maintain-categories",
       "maintain-shops": "Maintain-shops",
       "add-product": "Add-product",
       "maintain-product": "Maintain-product",
       'tk':"piece",
       "Logi sisse":"Log in",
       "Registreeru":"Sign up",
       "Maksa":"BUY",
       "Kõik poed":"All shops",
      
    }
  },
  ee: {
    translation: {
      "cart": "Ostukorv",
      "admin": "Admin vaatesse",
        "contact": "Kontakt",
        "shops": "Meie poed",
        "maintain-categories": "Halda kategooriaid",
       "maintain-shops": "Halda poode",
       "add-product": "Lisa toode",
       "maintain-products": "Halda tooteid",
       "Add to cart": "Lisa ostukorvi",
       "Category Others": " Teised tooted",
       'Sort A-Z' : "A-Z",
       "Sort Z-A": "Z-A",
       "Price Ascending":"Hind kahanev",
       "Price Descending": "Hind suurenev",
       'smartphones': "Nuti Telefonid",
       'laptops': "Sülearvutid",
       'memory bank': " Mälu kettad",
       'jeans':"Teksa püksid",
       'usb drive':"USB pulgad",
       "robot vacuum":"Robot tolmuimeja",
       'Cart is empty.':"Ostukorv on tühi",
       'Delete':"Kustuta",
       'Empty':"Eemalda tooted",
       'Add products':"Lisa Toode",
       'Total Value:':"Ostukorvi summa",
       'Total of:':"Toodete",
       'products in cart!':"kogus",
       'Edit':"Muuda",
       "piece":"tk",
       "Name":"Nimi",
       "Message":"Sõnum",
       "Phone":"Telefon",
       "Send":"Saada sõnum",
       "Add Product":"Lisa toode",
       "Product added!": "Toode Lisatud Ostukorvi!",
       'Item added cart!':"Lisatud Ostukorvi",
       "New product added": "Uus tode lisatud",
       'There are': "On",
       'items in the cart':"toodet ostukorvis",
       'remove-item':"Eemalda toode",
       'Total':"Kogusumma",
       'Shopping cart is empty':"Ostukorv on tühi",
       'Add product':"Lisa toode",
       'Empty cart':"Tühjenda ostukorv",
       'There is':"Ostukorvis on",
       'item in the cart':"toodet",
       "Deleted!":"Kustutatud",
       "Feel free to reach out to us with any questions, comments, or feedback. We'll get back to you as soon as possible!":"Kõigi küsimuste korral võtke meiega julgelt ühendust,kommentaare või tagasisidet. Võtame teiega esimesel võimalusel ühendust!",
       

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;