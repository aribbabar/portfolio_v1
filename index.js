function animateSkills() {
    let skills = document.getElementsByClassName("skill-container");

    document.addEventListener("scroll", function() {

        for(let i = 0;i < skills.length;i++) {
            if(skills[i].getBoundingClientRect().top - window.innerHeight <= 0) {
                setTimeout(setWidth, 500, skills[i]);
            }
        }
    });

    function setWidth(element) {
        switch(element.firstElementChild.innerHTML) {
            case "Java":
                element.lastElementChild.firstElementChild.style.width = "90%";
                break;
            case "C#":
                element.lastElementChild.firstElementChild.style.width = "85%";
                break;
            case "C":
                element.lastElementChild.firstElementChild.style.width = "90%";
                break;
            case "HTML &amp; CSS":
                element.lastElementChild.firstElementChild.style.width = "60%";
                break;
            case "Vanilla JavaScript":
                element.lastElementChild.firstElementChild.style.width = "50%";
                break;
            case "Basic Graphic Designing":
                element.lastElementChild.firstElementChild.style.width = "50%";
                break;

            case "Positivity":
                element.lastElementChild.firstElementChild.style.width = "100%";
                break;
            case "Adaptability":
                element.lastElementChild.firstElementChild.style.width = "80%";
                break;
            case "Teamwork":
                element.lastElementChild.firstElementChild.style.width = "85%";
                break;
            case "Communication":
                element.lastElementChild.firstElementChild.style.width = "75%";
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