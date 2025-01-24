// Add this to your existing script.js

$(document).ready(function () {
    $('.slick-slider').slick({
        centerMode: true,
        centerPadding: '40px',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        lazyLoad: 'ondemand',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                },
            },
        ],
    });
});

const sections = {
    prime: {
      title: "Prime",
      description: "Strategy and action sports for the squad",
      buttonText: "View All 4 Activities",
    },
    studio: {
      title: "Studio",
      description: "Short format, big thrills served à la carte",
      buttonText: "View All 3 Activities",
    },
    union: {
      title: "Union",
      description: "Classic favourites for recreational sports",
      buttonText: "View All 7 Activities",
    },
    junior: {
      title: "Junior",
      description: "Toddler-sized fun for little champs",
      buttonText: "View All 2 Activities",
    },
    pixel: {
      title: "Pixel",
      description: "Shoot, race, and more in the gamer’s den",
      buttonText: "View All 5 Activities",
    },
  };

  // Function to update content dynamically
  function updateContent(section) {
    const { title, description, buttonText } = sections[section];

    // Update content
    document.getElementById("content-title").textContent = title;
    document.getElementById("content-description").textContent = description;
    document.getElementById("content-button").textContent = buttonText;

    // Highlight the active icon
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("bg-white", "rounded-full", "text-black");
    });
    document.getElementById(`${section}-icon`).classList.add("bg-white", "rounded-full", "text-black");
  }



  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('[data-dropdown]');
    const dropdowns = document.querySelectorAll('[id$="-DROPDOWN"].mt-1');
    const mobileMenuToggle = document.querySelector('[data-collapse-toggle="mega-menu-full"]');
    const mobileMenu = document.getElementById('mega-menu-full');

    dropdownButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownId = button.getAttribute('data-dropdown');
            const dropdown = document.getElementById(dropdownId);

            // Close all other dropdowns
            dropdowns.forEach(function (el) {
                if (el.id !== dropdownId) {
                    el.classList.add('hidden');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('hidden');
        });
    });

    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.add('hidden');
        });
    });
});