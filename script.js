document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search');
    const movieItems = document.querySelectorAll('.movie-item');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        movieItems.forEach(item => {
            const titleElement = item.querySelector('.movie-title');
            
            // If the item has a title Real movies
            if (titleElement) {
                const titleText = titleElement.textContent.toLowerCase();
                
                if (titleText.includes(searchTerm)) {
                    item.style.display = "block"; // Show match
                } else {
                    item.style.display = "none";  // Hide non-match
                }
            } 
            // If it's a "Coming Soon" placeholder (No title)
            else {
                // Hide placeholders if user is searching, show them if search is empty
                item.style.display = searchTerm === "" ? "block" : "none";
            }
        });
    });
});
