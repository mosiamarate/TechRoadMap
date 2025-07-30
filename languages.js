const languages = [
            { id: "javascript", title: "JavaScript 🟨", category: "languages" },
            { id: "python", title: "Python 🐍", category: "languages" },
            { id: "java", title: "Java ☕", category: "languages" },
            { id: "react", title: "React.js ⚛️", category: "frameworks" },
            { id: "angular", title: "Angular 🅰️", category: "frameworks" },
            { id: "django", title: "Django 🌿", category: "frameworks" },
            { id: "nodejs", title: "Node.js 🌐", category: "technologies" },
            { id: "docker", title: "Docker 🐳", category: "technologies" },
            { id: "kubernetes", title: "Kubernetes ☸️", category: "technologies" },
            { id: "aws", title: "AWS ☁️", category: "technologies" },
            { id: "azure", title: "Azure 🔵", category: "technologies" },
            { id: "gcp", title: "Google Cloud Platform 🌥️", category: "technologies" },
            { id: "html-css", title: "HTML & CSS 🌐", category: "languages" },
            { id: "ruby-on-rails", title: "Ruby on Rails 💎", category: "frameworks" },
            { id: "flask", title: "Flask ⚗️", category: "frameworks" },
            { id: "swift", title: "Swift 🐦", category: "languages" },
            { id: "php", title: "PHP 🐘", category: "languages" },
            { id: "typescript", title: "TypeScript 🔷", category: "languages" },
            { id: "csharp", title: "C# 🎵", category: "languages" },
            { id: "go", title: "Go 🐹", category: "languages" },
            { id: "rust", title: "Rust 🦀", category: "languages" },
            { id: "flutter", title: "Flutter 🦋", category: "frameworks" },
            { id: "vuejs", title: "Vue.js 🟩", category: "frameworks" },
            { id: "laravel", title: "Laravel 🔴", category: "frameworks" }
        ];

        const grid = document.getElementById("languagesGrid");
        const searchInput = document.getElementById("searchInput");
        const filterSelect = document.getElementById("filterSelect");

        function renderLanguages() {
            const searchText = searchInput.value.toLowerCase();
            const selectedCategory = filterSelect.value;
            grid.innerHTML = "";

            languages
                .filter(l =>
                    (selectedCategory === "all" || l.category === selectedCategory) &&
                    l.title.toLowerCase().includes(searchText)
                )
                .forEach(l => {
                    const completed = localStorage.getItem(l.id) === "true";
                    const card = document.createElement("div");
                    card.className = `glass-card p-4 rounded-xl cursor-pointer hover:bg-white/10 transition duration-300 ${completed ? "completed" : ""}`;
                    card.onclick = () => {
                        const confirmed = confirm(`Mark "${l.title}" as completed?`);
                        if (confirmed) {
                            localStorage.setItem(l.id, true);
                            renderLanguages();
                        }
                    };
                    card.innerHTML = `
                        <h2 class="text-xl font-bold mb-2">${l.title}</h2>
                        <a href="languages/${l.id}.html" class="text-blue-400">Learn More</a>
                    `;
                    grid.appendChild(card);
                });
        }

        searchInput.addEventListener("input", renderLanguages);
        filterSelect.addEventListener("change", renderLanguages);

        renderLanguages();
        document.addEventListener("DOMContentLoaded", () => {
            renderLanguages();
            const completedLanguages = languages.filter(l => localStorage.getItem(l.id) === "true");
            completedLanguages.forEach(l => {
                const cards = document.querySelectorAll(".glass-card");
                cards.forEach(card => {
                    if (card.querySelector("h2") && card.querySelector("h2").innerText === l.title) {
                        card.classList.add("completed");
                    }
                });
            });
        });
