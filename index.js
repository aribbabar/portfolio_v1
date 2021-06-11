function animateSkills() {
    let skills = document.getElementsByClassName("skill-container");
    let counter = 0;

    let elementsDone = new Set();

    document.addEventListener("scroll", scrollCheck);

    function scrollCheck() {
        for(let i = 0;i < skills.length;i++) {
            if(skills[i].getBoundingClientRect().top - window.innerHeight <= 0) {
                setTimeout(setWidth, 100, skills[i], i);
            }
        }

        // Check if all widths are set, if so, remove the scroll event listener
        if(elementsDone.size == 10) {
            document.removeEventListener("scroll", scrollCheck);
        }
    }

    function setWidth(element, index) {
        switch(element.firstElementChild.innerHTML) {
            case "Java":
                element.lastElementChild.firstElementChild.style.width = "90%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "C#":
                element.lastElementChild.firstElementChild.style.width = "80%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "C":
                element.lastElementChild.firstElementChild.style.width = "90%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "HTML &amp; CSS":
                element.lastElementChild.firstElementChild.style.width = "60%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "Vanilla JavaScript":
                element.lastElementChild.firstElementChild.style.width = "50%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "Basic Graphic Designing":
                element.lastElementChild.firstElementChild.style.width = "40%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;

            case "Positivity":
                element.lastElementChild.firstElementChild.style.width = "100%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "Adaptability":
                element.lastElementChild.firstElementChild.style.width = "80%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "Teamwork":
                element.lastElementChild.firstElementChild.style.width = "85%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;
            case "Communication":
                element.lastElementChild.firstElementChild.style.width = "75%";
                elementsDone.add(element.firstElementChild.innerHTML);
                break;

            default:
                break;
        }

        setTimeout(function() {
            element.lastElementChild.firstElementChild.style.transition = "0s";
        }, 1000);
    }
}

animateSkills();