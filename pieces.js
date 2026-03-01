import { ajoutListenersAvis } from "./avis.js";
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();



// console.log(pieces);
function AfficerPices(pieces) {

    for (let index = 0; index < pieces.length; index++) {
        const article = pieces[index];

        const sectionFiches = document.querySelector(".fiches");
        const ArticleBalise = document.createElement("article");

        const imageElement =document.createElement("img")
        imageElement.src=article.image;

        const nomArticle =document.createElement("h2")
        nomArticle.innerText=article.nom;

        const prixElement =document.createElement("p")
        prixElement.innerText=`prix : ${article.prix}  ${article.prix <20 ? "€" : "€€€"} `;

        const categorieElement =document.createElement("p")
        categorieElement.innerText=article.categorie ?? "aucune catégorie";

        const descriptionElement =document.createElement("p")
        descriptionElement.innerText=article.description ?? "Pas de description pour le moment.";

        const disponElement =document.createElement("p")
        disponElement.innerText=article.disponibilite ? "En stock" : "Rupture de stock";
        ArticleBalise.appendChild(imageElement);
        ArticleBalise.appendChild(nomArticle);
        ArticleBalise.appendChild(prixElement);
        ArticleBalise.appendChild(categorieElement);
        ArticleBalise.appendChild(descriptionElement);
        ArticleBalise.appendChild(disponElement);

        sectionFiches.appendChild(ArticleBalise);

    }   
    ajoutListenersAvis();
}
AfficerPices(pieces);



const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const ArrayCoppy =Array.from(pieces);
    ArrayCoppy.sort(function(a,b)
    {
        return a.prix -b.prix;
    });
      document.querySelector(".fiches").innerHTML="";
      AfficerPices(ArrayCoppy);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML="";
    AfficerPices(piecesFiltrees);
});

const btncroissant =document.querySelector(".btn-detrier");
btncroissant.addEventListener("click",function () {
    const copyArray = Array.from(pieces);
    copyArray.sort(function(a,b){
        return b.prix- a.prix;
    });
    document.querySelector(".fiches").innerHTML="";
    AfficerPices(copyArray);
});

const buttondescription = document.querySelector(".btn-descrop");
buttondescription.addEventListener("click", function(){
    const filteresitems =pieces.filter(function (pieces) {
        return !pieces.description;
    });
    document.querySelector(".fiches").innerHTML="";
    AfficerPices(filteresitems);
    
});


const RangerPrix = document.querySelector("#Rangeprices");
RangerPrix.addEventListener("input",function () {
    document.querySelector(".valuety").innerText=RangerPrix.value+ "€";
    const filterdbyRange=pieces.filter(function (pieces) {
       return pieces.prix<=RangerPrix.value;
    })
   document.querySelector(".fiches").innerHTML="";
    AfficerPices(filterdbyRange);
    
})