const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
    upperBtn = document.querySelector("#btnUp"),
    downBtn = document.querySelector("#btnDown")
    // iconSet = body.querySelector("#icon-set");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
        
    })
    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    })
    downBtn.addEventListener("click",()=>{
    })