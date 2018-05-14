document.getElementById("default_open").click();


function showSolution(event, name_solution) {


    var i, solution_content, solution_tabs;


    solution_content = document.getElementsByTagName("article");
    for (i = 0; i < solution_content.length; i++) {
        solution_content[i].style.display = "none";
    }

    solution_tabs = document.getElementsByClassName("solution_tab");
    for (i = 0; i < solution_tabs.length; i++) {
        solution_tabs[i].className = solution_tabs[i].className.replace(" active", "")
    }

    document.getElementById(name_solution).style.display = "block";
    // alert(event.currentTarget.className);
    event.currentTarget.className += " active";
}

