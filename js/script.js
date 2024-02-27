"use strict"

document.addEventListener('scroll', () => {
    let nav = document.querySelector(`nav`);

    if(window.scrollY > 0) {
        nav.classList.add(`scrolled`)
    }

    else{
        nav.classList.remove('scrolled')
    }
})

let fadeIn = document.getElementById(`fadein`)

setTimeout(function() {
    fadeIn.style.opacity = '1';
    fadeIn.style.transition = `3s`
});

const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true'; 
  burgerElement.setAttribute('aria-expanded', !isExpanded);
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');

    burgerElement.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdownTrigger = document.getElementById("dropdown-trigger");
    var userDropdown = document.getElementById("user-dropdown");

    dropdownTrigger.addEventListener("mouseover", function() {
        userDropdown.style.display = "block";
    });

    dropdownTrigger.addEventListener("mouseout", function() {
        userDropdown.style.display = "none";
        userDropdown.style.transition = "1s";
    });

    userDropdown.addEventListener("mouseover", function() {
        userDropdown.style.display = "block";
    });

    userDropdown.addEventListener("mouseout", function() {
        userDropdown.style.display = "none";
        userDropdown.style.transition = "1s";
    });
}); 

// FAQ

$(document).ready(function() {
    // Håndterer klik på spørgsmål for at vise svar
    $(".fold_reply").click(function() {
        var target = $(this).data("target");
        
        // Skjuler alle "reply" div'er undtagen den, der er klikket på
        $(".reply").not(target).slideUp("fast");
        
        // Toggler synligheden af målrettet "reply" div
        $(target).slideToggle("slow");
    });

    // Håndterer klik på plus-ikon for at vise dropdown-indhold
    $(".plus").click(function() {
        $(this).next('.dropdown-content').slideToggle("slow");
    });
});

function valgtListeelement(element) {
    // Find den overordnede sektion
    var section = element.closest('section');

    // Fravælg alle listeelementer i samme sektion
    var listeelementer = section.querySelectorAll('li');
    listeelementer.forEach(function(li) {
      li.classList.remove('valgt');
    });

    // Tilføj valgt klasse til det klikkede element
    element.classList.add('valgt');
  }
