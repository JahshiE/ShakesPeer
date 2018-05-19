// Default tab is my_solution
document.getElementById("default_open").click();

function showSolution(event, name_solution) {
    /* Shows the solution content for a specfic name selected in the solution navigator. 
        inputs: event -> event object
                name_solution -> id of article tag to select.
        outputs: no return.
    */
    var i, solution_content, solution_tabs;

    // Setting all articles to display nothing
    solution_content = document.getElementsByTagName("article");
    for (i = 0; i < solution_content.length; i++) {
        solution_content[i].style.display = "none";
    }

    // Setting all solution tabs to be inactive.
    solution_tabs = document.getElementsByClassName("solution_tab");
    for (i = 0; i < solution_tabs.length; i++) {
        solution_tabs[i].className = solution_tabs[i].className.replace(" active", "")
    }

    // Displaying the selected solution content
    document.getElementById(name_solution).style.display = "block";
    event.currentTarget.className += " active";
}

function fillWithFillers() {
    /* Fills in document with filler text
    */
    var paragraphs;
    var filler = "Lorem ipsum dolor sit amet, euismod molestie suavitate mel no, consul appetere forensibus sed te. Ne amet veri pertinax nec, sea no unum oblique voluptua.";
    
    paragraphs = document.getElementsByClassName("filler-p");
    for (i=0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = filler;
    }
}


