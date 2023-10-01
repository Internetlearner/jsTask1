
/* start header */
let header = document.createElement("header");

let headerContnet = document.createElement("div");
headerContnet.style.cssText = "display: flex; justify-content: space-between; padding: 15px; align-items: center";

let logo = document.createElement("span");
logo.innerText = "Logo";
logo.style.cssText = "color: green; font-size: 25px; font-weight: bold";

let navEles = document.createElement("ul");

let homeBtn = document.createElement("li");
homeBtn.innerText = "Home";
navEles.appendChild(homeBtn);

let about = document.createElement("li");
about.innerText = "About";
navEles.appendChild(about);

let service = document.createElement("li");
service.innerText = "Service";
navEles.appendChild(service)

let contact = document.createElement("li");
contact.innerText = "Contact";
navEles.appendChild(contact);

headerContnet.appendChild(logo);
headerContnet.appendChild(navEles);
header.appendChild(headerContnet);
document.body.appendChild(header);

document.querySelector("ul").style.cssText = "display: flex;";
let lis = document.querySelectorAll("li");
lis.forEach(function(li){
    li.style.cssText = "list-style: none; padding: 5px; margin: 5px; cursor: pointer; color: gray";

})

/* start body content */
let content = document.createElement("div");
content.style.cssText = "padding: 10px; background-color: gray; margin: 0px; display: flex; flex-wrap: wrap; gap: 20px; height: calc(100vh - 220px)";

let product = document.createElement("div");

for(let i =0; i < 15; i++){
    let productNum = document.createElement("h3");
    let productDescrip = document.createElement("span");
    newProduct = product.cloneNode(true);
    productNum.textContent = i+1;
    productDescrip.textContent = "product";
    productDescrip.style.color = "gray";

    newProduct.style.cssText = "display: flex; flex-direction: column; justify-content: center; border: none; border-radius: 5px; background-color: white; text-align: center; padding: 20px; width: calc(33.333% - 54px);";
    newProduct.appendChild(productNum);
    newProduct.appendChild(productDescrip);

    content.appendChild(newProduct);
}
document.body.appendChild(content);




/* start footer */
let footer = document.createElement("footer");
footer.style.cssText = "color: white; background-color: green; display: flex;text-align: center; height: 80px; justify-content: center";
let copyRights = document.createElement("h3");
copyRights.textContent ="copy right 2023";

footer.appendChild(copyRights);

document.body.appendChild(footer);
