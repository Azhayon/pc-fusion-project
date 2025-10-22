document.addEventListener("DOMContentLoaded", () =>{
    const searchContainer = document.getElementById("search-container");
    const searchIcon = document.querySelector("#search-container .fa");
    const searchInput = document.querySelector("#search-container input");

    function toggleSearchBar(){
        const isActive = searchContainer.classList.toggle("active");
        if(isActive){
            searchInput.focus();
        }
        else{
            searchInput.value = "";
        }
    }

    function closeSearchBar(event){
        if(!searchContainer.contains(event.target)){
            searchContainer.classList.remove("active");
            searchInput.value = "";
        }
    }

    function closeOnEsc(event){
        if(event.key === "Escape"){
            searchContainer.classList.remove("active");
            searchInput.value = "";
        }
    }

    searchIcon.addEventListener("click", toggleSearchBar);
    document.addEventListener("click", closeSearchBar);
    document.addEventListener("keydown", closeOnEsc);
})