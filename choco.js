let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "images/plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "images/plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "images/baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "images/cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "images/nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "images/orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "images/pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "images/rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "images/toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "images/plain_hybrid.jpg",
    },
  ];

let showDetails = true;
const toggleDetails = () => {
    showDetails = !showDetails;
    if(showDetails) {
        $("p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription").show();
        } 
        else {
          $("p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription").hide();
    }
};

const highlightRandomChocolate = () => {
    // Reset by unhighlightening all first
    $(".chocolateWrapper .box").css("background-color", "blanchedalmond");

    let randomIndex = Math.floor(Math.random() * chocs.length);
    console.log(randomIndex);
    $(".chocolateWrapper .box:eq(" + randomIndex + ")").css(
      "background-color",
      "#FFF985"
    );
  
    alert("Give this number to cashier,  let cashier know " +
        chocs[randomIndex].chocName + ": " + (randomIndex + 1)
    );
  };
  

const seed = () => {
    let theWrapper = document.createElement("div");
    console.log("Wrapper: ", theWrapper); // make sure to view this
    chocs.forEach((choc) => {
        // just using JS
        console.log(choc);

        // create a box to hold the chocolate info
        let chocDiv = document.createElement("div");
        chocDiv.classList.add("box");

        // create a header to hold the name of the chocolate
        let chocHeader = document.createElement("h2");
        chocHeader.textContent = choc.chocName;

        // add the image to the box
        let pChocImg = document.createElement("img");
        pChocImg.src = choc.img;

        // add a paragraph for the chocolate description
        let pChocDescription = document.createElement("p");
        pChocDescription.textContent = choc.description;

        // add paragraph to hold the calories
        let pChocCalories = document.createElement("p");
        pChocCalories.textContent = "Calories: " + choc.calories;

        // create a paragraph to hold the ingredients
        let pChocIngredients = document.createElement("p");
        pChocIngredients.textContent = choc.ingredients;

        // add all new items to the chocolate div box, to hold everything in the box
        chocDiv.append(chocHeader);
        chocDiv.appendChild(pChocImg);
        chocDiv.appendChild(pChocDescription);
        chocDiv.appendChild(pChocCalories);
        chocDiv.appendChild(pChocIngredients);

        pChocDescription.classList.add("chocolateDescription");
        pChocCalories.classList.add("chocolateCalories");
        pChocIngredients.classList.add("chocolateIngredients");

        theWrapper.append(chocDiv);
    });

    // add the wrapper div to the document after the last paragraph
    $("p:last").after(theWrapper);

    // Use JS to add a class - this is the class that describes flex
    theWrapper.classList.add("chocolateWrapper");
};

  

$(document).ready(seed);