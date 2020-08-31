const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchor = document.getElementsByTagName('a');
anchor[0].textContent = siteContent.nav["nav-item-1"];
anchor[1].textContent = siteContent.nav["nav-item-2"];
anchor[2].textContent = siteContent.nav["nav-item-3"];
anchor[3].textContent = siteContent.nav["nav-item-4"];
anchor[4].textContent = siteContent.nav["nav-item-5"];
anchor[5].textContent = siteContent.nav["nav-item-6"];

/*added new anchor elements*/
let navNew = document.querySelector('nav');

let anchorAppend = document.createElement('a')
let anchorTextAppend = document.createTextNode('Appended')
anchorAppend.appendChild(anchorTextAppend);
anchorAppend.href = '#';
navNew.appendChild(anchorAppend);

let anchorPrepend = document.createElement('a')
let anchorTextPrepended = document.createTextNode('Prepended')
anchorPrepend.appendChild(anchorTextPrepended);
anchorPrepend.href = '#';
navNew.prepend(anchorPrepend)

/*change color of anchor elements*/
for (let i = 0; i<anchor.length; i++){
  anchor[i].style.color = 'green'
}

let header = document.querySelector('h1');
header.innerHTML = 'DOM<br> IS<br> AWESOME' //siteContent['cta']['h1']
// header.textContent = siteContent['cta']['h1']

let button = document.querySelector('button');
button.textContent = siteContent.cta.button

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let hfour = document.querySelectorAll('h4')
hfour[0].textContent = siteContent["main-content"]["features-h4"]

let ptag = document.getElementsByTagName('p')
ptag[0].textContent = siteContent["main-content"]["features-content"]


hfour[1].textContent = siteContent["main-content"]["about-h4"]
ptag[1].textContent = siteContent["main-content"]["about-content"]

let img = document.getElementById('middle-img')
img.setAttribute('src', siteContent["main-content"]["middle-img-src"])

hfour[2].textContent = siteContent["main-content"]["services-h4"]
ptag[2].textContent = siteContent["main-content"]["services-content"]

hfour[3].textContent = siteContent["main-content"]["product-h4"]
ptag[3].textContent = siteContent["main-content"]["product-content"]

hfour[4].textContent = siteContent["main-content"]["vision-h4"]
ptag[4].textContent = siteContent["main-content"]["vision-content"]

hfour[5].textContent = siteContent["contact"]["contact-h4"]
ptag[5].innerHTML = '123 Way 456 Street<br>Somewhere, USA' //siteContent["contact"]["address"]
// ptag[5].textContent = siteContent['contact']['address']
ptag[6].textContent = siteContent["contact"]["phone"]
ptag[7].textContent = siteContent["contact"]["email"]

ptag[8].textContent = siteContent['footer']['copyright']