function createScrollToTopButton() {
    // create the scroll to top button
    var scrollToTop = document.createElement('a');
    scrollToTop.href = '#';
    scrollToTop.className = 'scroll-to-top';
    scrollToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';

    // append the button to the page
    document.body.appendChild(scrollToTop);

    // add the click event listener for the button
    scrollToTop.addEventListener('click', function(event) {
        event.preventDefault();

        // scroll to the top of the page
        window.scrollTo(0, 0);
    });

    // show or hide the button based on the scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });
}
