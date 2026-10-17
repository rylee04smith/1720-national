// importy the JSON formatted data
import { parks } from "../data/parks.mjs";
//console.log(parks);

const destination = document.querySelector("#allparks");

parks.forEach((park) => {
const packcard = document.createElement("div");

//park photo and name
const parksection = document.createElement("section");
const parkname = document.createElement("h2");
const parkphoto = document.createElement("img");
parkname.innerText = park.name;
parkphoto.src =`images/${park.photo}`;
parkphoto.width = 600;
parkphoto.height = 300;
parkphoto.alt = park.name;
parkphoto.loading = "lazy";
parksection.appendChild(parkphoto);
parksection.appendChild(parkname);

//park description
const parkdesc = document.createElement("p");
parkdesc.innerText = park.description;


// park established date
const parkest = document.createElement("p");
parkest.innerHTML = `<span>ESTABLISHED: ${park.established}</span>`;


// park size
const parksize = document.createElement("p");
parksize.innerHTML = `<span>PARK SIZE: ${park.size}</span>`;

//park rating
const parkrating = document.createElement("p");

switch (park.rating) {
    case 5:
        parkrating.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
        break;
    case 4:
        parkrating.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#10025;";
        break;
    case 3:
        parkrating.innerHTML = "&#9733; &#9733; &#9733; &#10025; &#10025;";
        break;
    case 2:
        parkrating.innerHTML = "&#9733; &#9733; &#10025; &#10025; &#10025;";
        break;
    case 1:
        parkrating.innerHTML = "&#9733; &#10025; &#10025; &#10025; &#10025;";
        break;

        default:
            parkrating.innerHTML = "No rating available";
}

// park web link
const parkurl = document.createElement("a");
parkurl.innerText = "Learn more about this park";
parkurl.href = park.url;
parkurl.target = "_blank";



//build each card
packcard.appendChild(parksection);
packcard.appendChild(parkdesc);
packcard.appendChild(parkest);
packcard.appendChild(parksize);
packcard.appendChild(parkrating);
packcard.appendChild(parkurl);

destination.appendChild(packcard);
})