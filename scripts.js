function connect () {
    var searchTerm = document.getElementById("searchBox").value ;
    document.getElementById("searchBox").value = "" ; 
                    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 
 
     fetch (url)
     .then (res=> res.json() )
     .then (data => display(data.meals) );
 }
 
 
 function display (items){
 
     var oldContent = document.getElementById("container");
     oldContent.textContent = "";
     for (var i=1; i<items.length; i++){
      
      var newDiv = document.createElement("div");
      newDiv.innerHTML = `Meal id: <b> ${items[i-1].idMeal}</b><br>
                          Meal Title: <b> ${items[i-1].strMeal}</b> <br>
                          <img src="${items[i-1].strMealThumb}"> <br>
                          Cooking Instructions: ${items[i-1].strInstructions} <br> <br>`;
      newDiv.classList.add("innerStyle");
 
       oldContent.appendChild(newDiv);
 
     }
 
 }