/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//navigation global variables
const navigation = document.getElementById('navbar__list');


/**
 * sections global variables
 */
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * use 
*/
const isInViewport = (element) => {
    const boundary = element.getBoundingClientRect();
    return (
        boundary.top >= 0 &&
        boundary.left >= 0 &&
        boundary.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        boundary.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildnav = () => {
    
    let navUI = '';
    // looping over all sections based on the "querySelectorAll" in the sections global variables above 
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all html elements to the navigation
    navigation.innerHTML = navUI;
};


// Add class 'active' to section when near top of viewport

const setActiveClass = () => {
    for (let i=0; i < sections.length; i++){
        if (isInViewport(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
};

// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');

    //scroll smooth on click

    for (link of links) {
        links.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
                top: offsetTop,
                behavior: 'smooth',

            })
        })       
    }
}

scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('scroll', function(){
    setActiveClass();
});
// Build menu 
buildnav();
// Scroll to section on link click


/**  Set sections as active
 * 
*/