document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});

/*function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function onScrollReveal() {
    var element = document.getElementById('elementToReveal');
    if (isInViewport(element)) {
      element.classList.add('revealed');
      // Remove the scroll listener once revealed to improve performance
      window.removeEventListener('scroll', onScrollReveal);
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', onScrollReveal);*/

  /*cards buttons*/

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function onScrollReveal() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      if (isInViewport(card)) {
        card.classList.add('reveal');
      }
    });
  }






  // Initial check on page load
  document.addEventListener('DOMContentLoaded', onScrollReveal);
  // Add scroll event listener
  window.addEventListener('scroll', onScrollReveal);

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".menu1 button");
    const filterableCards = document.querySelectorAll(".fil .card");

    const filterCards = (category) => {
        filterableCards.forEach(card => {
            const cardCategory = card.dataset.name;
            const parentCol = card.closest('.mywork');
            
            if (category === 'all' || category === cardCategory) {
                parentCol.classList.remove("hide");
            } else {
                parentCol.classList.add("hide");
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.name;
            filterCards(category);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.content-section');
  const navButtons = document.querySelectorAll('.menu li button');

  window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 60;
          if (pageYOffset >= sectionTop) {
              current = section.getAttribute('id');
          }
      });

      navButtons.forEach(button => {
          button.classList.remove('active1');
          const buttonText = button.textContent.toLowerCase();
          if (buttonText === current.toLowerCase()) {
              button.classList.add('active1');
          }
      });
  });
});