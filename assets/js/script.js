function generateMeal() {
    

    let carb = [
        {
            name:"Fried rice",
            image:"url('./assets/images/fried-rice.jpg')",
            type:"grain",
        },
        {
            name:"Mashed potatoes",
            image:"url('./assets/images/mashed-potatoes.jpg')",
        },
        {
            name:"2 slices of sourdough bread",
            image:"url('./assets/images/2-slices-sourdough.jpg')",
            type:"grain",
        },
        {
            name:"Portion of penne pasta with pesto",
            image:"url('./assets/images/portion-of-penne.jpg')",
            type:"grain",
        },
        {
            name:"Sweet potato fries",
            image:"url('./assets/images/sweet-potato-fries.jpg')",
        },
        
    ];

    let carbSelection = getRandomInt(0, carb.length)
    
    let veg = [
        {
            name:"Roasted asparagus",
            image:"url('./assets/images/roast-asparagus.jpg')",
        },
        {
            name:"Roasted peppers",
            image:"url('./assets/images/roasted-peppers.jpg')",
        },
        {
            name:"Spinach salad",
            image:"url('./assets/images/spinach-salad.jpg')",
        },
        {
            name:"Steamed broccoli",
            image:"url('./assets/images/broccoli.jpg')",
        },
        
    ];

    let vegSelection = getRandomInt(0, veg.length)

    let protein = [
        {
            name:"Pan-fried salmon",
            type:"meat",
            image:"url('./assets/images/pan-fried-salmon.jpg')",
        },
        {
            name:"Pan-seared steak",
            type:"meat",
            image:"url('./assets/images/pan-seared-steak.jpg')",
        },
        {
            name:"Roast cod",
            type:"meat",
            image:"url('./assets/images/roast-cod.jpg')",
        },
        {
            name:"Roast chicken",
            type:"meat",
            image:"url('./assets/images/roast-chicken.jpg')",
        },   
        {
            name:"Curried chickpeas",
            type:"legume",
            image:"url('./assets/images/curried-chickpeas.jpg')",
        },
        {
            name:"Grilled halloumi",
            type:"dairy",
            image:"url('./assets/images/grilled-halloumi.jpg')",
        },
        {    
            name:"Spinach omelette",
            type:"egg",
            image:"url('./assets/images/spinach-omelette.jpg')",
        },
        {    
            name:"Mapo tofu",
            type:"legume",
            image:"url('./assets/images/mapo-tofu.jpg')",
        },
    ];

    let proteinSelection = getRandomInt(0, protein.length)

    if (document.getElementById("vegetarian-diet").checked) {
       
        do {
            proteinSelection = getRandomInt(0, protein.length);
        } while (protein[proteinSelection].type == "meat");
        
    }

    if (document.getElementById("vegan-diet").checked) {
       
        do {
            proteinSelection = getRandomInt(0, protein.length);
        } while (protein[proteinSelection].type == "meat"|| 
            protein[proteinSelection].type == "egg"||
            protein[proteinSelection].type == "dairy");
        
    }

    if (document.getElementById("paleo-diet").checked) {
       
        do {
            proteinSelection = getRandomInt(0, protein.length);
        } while (protein[proteinSelection].type == "legume"||
                protein[proteinSelection].type == "dairy");
        
        do {
            carbSelection = getRandomInt(0, carb.length);
        } while (carb[carbSelection].type == "grain");
    }

    document.getElementById("carb-portion").style.backgroundImage = carb[carbSelection].image;
    document.getElementById("veg-portion").style.backgroundImage = veg[vegSelection].image;
    document.getElementById("protein-portion").style.backgroundImage = protein[proteinSelection].image;

    document.getElementById("carb-result").innerHTML = carb[carbSelection].name;
    document.getElementById("protein-result").innerHTML = protein[proteinSelection].name;
    document.getElementById("veg-result").innerHTML = veg[vegSelection].name;

      
   
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

