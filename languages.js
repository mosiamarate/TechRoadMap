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

document.addEventListener('DOMContentLoaded', () => {
    setupPage(languages, 'languagesGrid', 'searchInput', 'filterSelect', 'completionCounter', 'language');
});
