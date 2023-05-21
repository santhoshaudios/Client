if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} else {
  // Pageview
  updateCounter('type=pageview');
}

function updateCounter(type) {
  fetch('https://api.santhoshaudios.in/viewcount?'+type) 
    .then(res => res.json())
    .then(data => {
      console.log("Page Count"+data.pageviews) 
      console.log("Visit Count"+data.visits) 
    })
}

sessionStorage.setItem('visit', 'x');