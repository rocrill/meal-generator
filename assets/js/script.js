function generateMeal() {
    
    document.getElementById("veg-portion").style.backgroundImage = "url('./assets/images/roastbroc.png')";
    document.getElementById("carb-portion").style.backgroundImage = "url('./assets/images/rice.png')";
    
    let carb = [
        "url('./assets/images/rice.png')",
        "url('./assets/images/roastbroc.png')",
        "url('./assets/images/logo.png')"
    ];

    let carbSelection = getRandomInt(0, carb.length)
    
    document.getElementById("carb-portion").style.backgroundImage = carb[carbSelection];
    /*document.getElementById("veg-portion").style.backgroundImage = carb[carbSelection];*/
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}