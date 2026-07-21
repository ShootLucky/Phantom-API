// Navegação e estrutura do sidebar
const navStructure = [
    {
        title: 'Getting Started',
        links: [
            { name: 'Introdução', id: 'intro' }
        ]
    },
    {
        title: 'Core Systems',
        links: [
            { name: 'Lua VM', id: 'lua-vm' },
            { name: 'Instance System', id: 'instances' }
        ]
    },
    {
        title: 'Rendering',
        links: [
            { name: 'Drawing API', id: 'drawing' },
            { name: 'UI Widgets', id: 'ui' }
        ]
    },
    {
        title: 'Reference',
        links: [
            { name: 'Services', id: 'services' },
            { name: 'Exemplos', id: 'examples' },
            { name: 'Estruturas', id: 'reference' }
        ]
    }
];

let currentActive = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    initializeSearch();
    initializeCodeBlocks();
    initializeScroll();
});

// ============ RENDERIZAR SIDEBAR ============
function initializeSidebar() {
    const sidebarContent = document.getElementById('sidebarContent');
    if (!sidebarContent) return;

    sidebarContent.innerHTML = navStructure.map(section => {
        const linksHTML = section.links.map(link => `
            <li class="nav-link">
                <a href="#${link.id}">${link.name}</a>
            </li>
        `).join('');

        return `
            <div class="nav-section">
                <div class="nav-title">${section.title}</div>
                <ul class="nav-links">
                    ${linksHTML}
                </ul>
            </div>
        `;
    }).join('');

    // Adicionar event listeners aos links
    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    updateActiveNavItem();
}

// ============ NAVEGAÇÃO ============
function handleNavClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const id = href.substring(1);
    const element = document.getElementById(id);

    if (element) {
        // Remover active de todos
        document.querySelectorAll('.nav-link a').forEach(a => {
            a.classList.remove('active');
        });

        // Adicionar active no clicado
        this.classList.add('active');
        currentActive = id;

        // Scroll suave
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============ ATUALIZAR NAV ATIVO ============
function updateActiveNavItem() {
    const sections = document.querySelectorAll('.section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.id;
        }
    });

    if (current && current !== currentActive) {
        document.querySelectorAll('.nav-link a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
        currentActive = current;
    }
}

// ============ BUSCA ============
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase();

        if (term === '') {
            restoreAllContent();
            return;
        }

        searchContent(term);
    });

    // Ctrl+K para focar busca
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

function searchContent(term) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        const title = section.querySelector('h2');

        if (text.includes(term)) {
            section.style.display = 'block';
            highlightTerm(section, term);
        } else {
            section.style.display = 'none';
        }
    });
}

function restoreAllContent() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'block';
        removeHighlights(section);
    });
}

function highlightTerm(element, term) {
    const headers = element.querySelectorAll('h2, h3, h4');
    const paragraphs = element.querySelectorAll('p, .api-desc, .api-params, .api-return');

    [...headers, ...paragraphs].forEach(el => {
        if (el.textContent.toLowerCase().includes(term)) {
            el.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        }
    });
}

function removeHighlights(element) {
    const allElements = element.querySelectorAll('*');
    allElements.forEach(el => {
        el.style.backgroundColor = '';
    });
}

// ============ CODE BLOCKS ============
function initializeCodeBlocks() {
    document.querySelectorAll('.code-block').forEach(block => {
        block.addEventListener('click', function() {
            const code = this.textContent.trim();
            copyToClipboard(code);
            showCopyFeedback(this);
        });
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    textarea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Falha ao copiar:', err);
    }

    document.body.removeChild(textarea);
}

function showCopyFeedback(element) {
    const originalBgColor = element.style.backgroundColor;
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';

    setTimeout(() => {
        element.style.backgroundColor = originalBgColor;
    }, 200);
}

// ============ SCROLL ============
function initializeScroll() {
    window.addEventListener('scroll', function() {
        updateActiveNavItem();
    });
}

// ============ MOBILE MENU ============
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        // Configurações mobile
    } else {
        // Configurações desktop
    }
});

// ============ DARK MODE (opcional) ============
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Restaurar tema salvo
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// ============ PERFORMANCE ============
// Lazy load images se houver
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============ ANALYTICS ============
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_ID', {
            'page_path': window.location.pathname
        });
    }
}

// ============ HELPERS ============
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}