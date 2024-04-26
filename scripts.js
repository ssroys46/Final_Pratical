function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            display(data.meals);
            if (data.meals) {
                addSeeMoreButton();
            }
        });
}

function display(items) {
    var container = document.getElementById("container");
    container.textContent = "";
    for (var i = 0; i < 5; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal id: <b>${items[i].idMeal}</b><br>s
                            Meal Title: <b>${items[i].strMeal}</b> <br>
                            <img src="${items[i].strMealThumb}"> <br>
                            Cooking Instructions: ${items[i].strInstructions} <br> <br>`;
        newDiv.classList.add("innerStyle");
        container.appendChild(newDiv);
    }
}

function addSeeMoreButton() {
    var container = document.getElementById("container");
    var seeMoreButton = document.createElement("button");
    seeMoreButton.textContent = "See More";
    seeMoreButton.addEventListener('click', function() {
        showMore();
    });
    container.appendChild(seeMoreButton);
}

function showMore() {
    var searchTerm = document.getElementById("searchBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayAll(data.meals);
        });
}

function displayAll(items) {
    var container = document.getElementById("container");
    container.textContent = "";
    for (var i = 0; i < items.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal id: <b>${items[i].idMeal}</b><br>
                            Meal Title: <b>${items[i].strMeal}</b> <br>
                            <img src="${items[i].strMealThumb}"> <br>
                            Cooking Instructions: ${items[i].strInstructions} <br> <br>`;
        newDiv.classList.add("innerStyle");
        container.appendChild(newDiv);
    }
}
