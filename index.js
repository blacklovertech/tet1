/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.headings h2',{delay: 200}); 
sr.reveal('.headings h1',{delay: 300}); 
sr.reveal('.headings h3',{delay: 400}); 
sr.reveal('.headings p',{delay: 500});

// Scroll Events
sr.reveal('.events h2',{delay: 200}); 
sr.reveal('.events h5',{delay: 400}); 
sr.reveal('.events .card',{delay: 600}); 

// Scroll Venue
sr.reveal('.venue h3',{delay: 200});
sr.reveal('.venue .carousel',{delay: 300});

// Scroll Account
sr.reveal('.account h3',{delay: 200});
sr.reveal('.account table',{delay: 400});

// Scroll Department
sr.reveal('.about h3',{delay: 200});
sr.reveal('.about .about-content',{delay: 400});

// Scroll Guidelines
sr.reveal('#guide h3',{delay: 200});
sr.reveal('#guide .guide-content',{delay: 400});

// Scroll contact
sr.reveal('#contact h3',{delay: 200});
sr.reveal('#contact .contact-content',{delay: 400});