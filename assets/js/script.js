function generateMeal() {
    
    document.getElementById("veg-portion").style.backgroundImage = "url('./assets/images/roastbroc.png')";
    document.getElementById("carb-portion").style.backgroundImage = "url('./assets/images/rice.png')";
    
    let carb = [
        "url('./assets/images/rice.png')",
        "url('./assets/images/mashed-potatoes.jpg')",
        "url('./assets/images/logo.png')"
    ];

    let carbSelection = getRandomInt(0, carb.length)
    
    let veg = [
        "url('./assets/images/roastbroc.png')",
        "url('./assets/images/roast-asparagus.jpg')",
        "url('./assets/images/roasted-peppers.jpg')",
        "url('./assets/images/spinach-salad.jpg')",
        "url('./assets/images/fried-carrots-and-broccoli.jpg')",
    ];

    let vegSelection = getRandomInt(0, veg.length)

    let protein = [
        "url('./assets/images/pan-fried-salmon.jpg')",
        "url('./assets/images/pan-seared-steak.jpg')",
        "url('./assets/images/roast-cod.jpg')",
        "url('./assets/images/roast-chicken.jpg')",
    ]

    let proteinSelection = getRandomInt(0, veg.length)

    document.getElementById("carb-portion").style.backgroundImage = carb[carbSelection];
    document.getElementById("veg-portion").style.backgroundImage = veg[vegSelection];
    document.getElementById("protein-portion").style.backgroundImage = protein[proteinSelection];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}