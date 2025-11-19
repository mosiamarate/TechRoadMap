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
      { id: "ux-ui-designer", title: "🎨 UX/UI Designer", category: "coding" },
      { id: "it-support-specialist", title: "💻 IT Support Specialist", category: "security" },
      { id: "network-technician", title: "🔧 Network Technician", category: "security" },
    ];

document.addEventListener('DOMContentLoaded', () => {
    setupPage(roadmaps, 'roadmapGrid', 'searchInput', 'filterSelect', 'completionCounter', 'roadmap');
    const roadmapCountStat = document.getElementById('roadmapCountStat');
    if (roadmapCountStat) roadmapCountStat.textContent = `${roadmaps.length}+`;
});