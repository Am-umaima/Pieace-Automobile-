 console.log("hey beauty  ");
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();



// console.log(pieces);
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
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const ArrayCoppy =Array.from(pieces);
    ArrayCoppy.sort(function(a,b)
    {
        return a.prix -b.prix;
    });
      
    console.log(ArrayCoppy);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
    });

    console.log(piecesFiltrees);
});

const btncroissant =document.querySelector(".btn-detrier");
btncroissant.addEventListener("click",function () {
    const copyArray = Array.from(pieces);
    copyArray.sort(function(a,b){
        return b.prix- a.prix;
    });
    console.log(copyArray)
});

const buttondescription = document.querySelector(".btn-descrop");
buttondescription.addEventListener("click", function(){
    const filteresitems =pieces.filter(function (pieces) {
        return !pieces.categorie;
    });
     console.log(filteresitems)
})

// const show = document.querySelector(".HellaGood");
// show.addEventListener("click",function () {
    
    const newPart = document.createElement("article");
    
    const newTxt =document.createElement("ul");
    for (let index = 0; index < pieces.length; index++) {
        const list = document.createElement("li");
        list.innerText=pieces[index].nom;
        // list.innerText=pieces.map(function (pieces) {
        //     console.log("adikher  "+pieces[index])
        // return pieces.nom;
    // });
    newTxt.appendChild(list);
    }
   
    newPart.appendChild(newTxt);
    document.querySelector(".fiches").appendChild(newPart)
// })


