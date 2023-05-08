if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} 

function updateCounter(type) {

  fetch('/api?'+type) // Dynamic request with URL parameter
    .then(res => res.json())
    .then(data => {
       // Display visits to user
       console.log(data.count);
    })

}

sessionStorage.setItem('visit', 'x');