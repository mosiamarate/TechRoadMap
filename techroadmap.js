// Roadmap Data
    const roadmaps = [
      { id: "cloud-engineer", title: "🌩️ Cloud Engineer", category: "cloud" },
      { id: "cybersecurity", title: "🔐 Cybersecurity Specialist", category: "security" },
      { id: "frontend-dev", title: "🌐 Frontend Web Developer", category: "coding" },
      { id: "backend-dev", title: "🖥️ Backend Developer", category: "coding" },
      { id: "fullstack-dev", title: "🌍 Full Stack Developer", category: "coding" },
      { id: "ml-engineer", title: "🧠 Machine Learning Engineer", category: "data" },
      { id: "devops", title: "🧰 DevOps Engineer", category: "cloud" },
      { id: "blockchain", title: "🔗 Blockchain Developer", category: "coding" },
      { id: "game-dev", title: "🎮 Game Developer", category: "coding" },
      { id: "data-analyst", title: "📊 Data Analyst", category: "data" },
      { id: "network-engineer", title: "📡 Network Engineer", category: "security" },
    ];

    // DOM Elements
    const grid = document.getElementById("roadmapGrid");
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");

    // Render Roadmaps
    function renderRoadmaps() {
      const searchText = searchInput.value.toLowerCase();
      const selectedCategory = filterSelect.value;
      grid.innerHTML = "";

      roadmaps
        .filter(r =>
          (selectedCategory === "all" || r.category === selectedCategory) &&
          r.title.toLowerCase().includes(searchText)
        )
        .forEach(r => {
          const completed = localStorage.getItem(r.id) === "true";
          const card = document.createElement("div");
          card.className = `glass-card p-4 rounded-xl cursor-pointer hover:bg-white/10 transition duration-300 ${completed ? "completed" : ""}`;
          card.onclick = () => {
            const confirmed = confirm(`Mark "${r.title}" as completed?`);
            if (confirmed) {
              localStorage.setItem(r.id, "true");
              renderRoadmaps();
            }
          };
          card.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${r.title}</h2>
            <a href="roadmaps/${r.id}.html" class="text-blue-400">View Roadmap</a>
          `;
          grid.appendChild(card);
        });
    }

    // Event Listeners
    searchInput.addEventListener("input", renderRoadmaps);
    filterSelect.addEventListener("change", renderRoadmaps);

    // Initial Render
    renderRoadmaps();