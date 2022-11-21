const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-icerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

/* Kodlar Buradan aşağıya */

//************************************************

let nav_items = document.querySelectorAll("nav a");

nav_items.forEach((item, index) => {
  let sira = index + 1;
  item.textContent = siteContent["nav"]["nav-item-" + sira];
  item.setAttribute('class', 'italic')
});

//************************************************

let logo_img = document.querySelector("#logo-img");

logo_img.src = siteContent["images"]["logo-img"];

//************************************************

let cta_text_h1 = document.querySelector(".cta-text h1");
cta_text_h1.textContent = siteContent["cta"]["h1"];

let cta_text_button = document.querySelector(".cta-text button");
cta_text_button.textContent = siteContent["cta"]["button"];

//************************************************

let cta_img = document.querySelector("#cta-img");
cta_img.src = siteContent["images"]["cta-img"];

//************************************************

let top_content_h4 = document.querySelectorAll(".main-content .top-content .text-content h4")[0];
top_content_h4.textContent = siteContent["ana-icerik"]["özellikler-h4"];

let top_content_p = document.querySelectorAll(".main-content .top-content .text-content p")[0];
top_content_p.textContent = siteContent["ana-icerik"]["özellikler-içerik"];

let top_content_h4_1 = document.querySelectorAll(".main-content .top-content .text-content h4")[1];
top_content_h4_1.textContent = siteContent["ana-icerik"]["hakkımızda-h4"];

let top_content_p_1 = document.querySelectorAll(".main-content .top-content .text-content p")[1];
top_content_p_1.textContent = siteContent["ana-icerik"]["hakkımızda-içerik"];

//************************************************

let middle_img = document.querySelector("#middle-img");
middle_img.src = siteContent["images"]["accent-img"];

//************************************************

let bottom_content_h4 = document.querySelectorAll(".bottom-content .text-content h4")[0];
bottom_content_h4.textContent = siteContent["ana-icerik"]["servisler-h4"];

let bottom_content_p = document.querySelectorAll(".bottom-content .text-content p")[0];
bottom_content_p.textContent = siteContent["ana-icerik"]["servisler-içeriği"];

let bottom_content_h4_1 = document.querySelectorAll(".bottom-content .text-content h4")[1];
bottom_content_h4_1.textContent = siteContent["ana-icerik"]["ürünler-h4"];

let bottom_content_p_1 = document.querySelectorAll(".bottom-content .text-content p")[1];
bottom_content_p_1.textContent = siteContent["ana-icerik"]["ürünler-içeriği"];

let bottom_content_h4_2 = document.querySelectorAll(".bottom-content .text-content h4")[2];
bottom_content_h4_2.textContent = siteContent["ana-icerik"]["vizyon-h4"];

let bottom_content_p_2 = document.querySelectorAll(".bottom-content .text-content p")[2];
bottom_content_p_2.textContent = siteContent["ana-icerik"]["vizyon-içeriği"];

//************************************************

let contact = document.querySelector(".contact");
let contact_h4 = contact.querySelector("h4");
let contact_p = contact.querySelectorAll("p");

contact_h4.textContent = siteContent["iletisim"]["iletişim-h4"];
contact_p[0].textContent = siteContent["iletisim"]["adres"];
contact_p[1].textContent = siteContent["iletisim"]["telefon"];
contact_p[2].textContent = siteContent["iletisim"]["email"];

//************************************************

let footer_anchor = document.querySelector("footer a");
footer_anchor.textContent = siteContent["footer"]["copyright"];
footer_anchor.setAttribute("class","bold");