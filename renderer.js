function setupPage(items, gridId, searchId, filterId, counterId, pageType) {
    const grid = document.getElementById(gridId);
    const searchInput = document.getElementById(searchId);
    const filterSelect = document.getElementById(filterId);
    const completionCounter = document.getElementById(counterId);

    function render() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = filterSelect.value;
        grid.innerHTML = "";
        let completedCount = 0;

        items
            .filter(item =>
                (selectedCategory === "all" || item.category === selectedCategory) &&
                item.title.toLowerCase().includes(searchText)
            )
            .forEach(item => {
                const isCompleted = localStorage.getItem(item.id) === "true";
                if (isCompleted) {
                    completedCount++;
                }
                const card = document.createElement("div");
                card.className = `glass-card p-4 rounded-xl cursor-pointer hover:bg-white/10 transition duration-300 ${isCompleted ? "completed" : ""}`;
                
                card.onclick = () => {
                    localStorage.setItem(item.id, !isCompleted);
                    render();
                };

                const linkPath = pageType === 'roadmap' ? `roadmaps/${item.id}.html` : `languages/${item.id}.html`;
                const linkText = pageType === 'roadmap' ? 'View Roadmap' : 'Learn More';

                card.innerHTML = `
                    <h2 class="text-xl font-bold mb-2">${item.title}</h2>
                    <a href="${linkPath}" class="text-blue-400" onclick="event.stopPropagation()">${linkText}</a>
                `;
                grid.appendChild(card);
            });
        
        if (completionCounter) {
            completionCounter.textContent = `Completed: ${completedCount} / ${items.length}`;
        }
    }

    searchInput.addEventListener("input", render);
    filterSelect.addEventListener("change", render);

    render();
}