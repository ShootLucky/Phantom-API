// ============ TRANSLATIONS ============
const translations = {
    pt: {
        navGettingStarted: 'Getting Started',
        navIntro: 'Introdução',
        navCore: 'Core Systems',
        navLuaVM: 'Lua VM',
        navGC: 'Garbage Collector',
        navInstances: 'Instance System',
        navRendering: 'Rendering',
        navDrawing: 'Drawing API',
        navUI: 'UI Widgets',
        navReference: 'Reference',
        navServices: 'Services',
        navExamples: 'Exemplos',
        navStructs: 'Estruturas',

        searchPlaceholder: 'Buscar...',

        introTitle: 'Introdução',
        introDesc: 'Fragment proporciona um poderoso mecanismo de scripts Lua com uma API completa para:',
        introItem1: 'Manipulação de objetos de jogo através do sistema de instâncias',
        introItem2: 'Desenho de baixo nível com formas, texto e linhas',
        introItem3: 'Widgets UI interativos e menus',
        introItem4: 'Serviços para players, workspace, lighting e muito mais',

        luaVMTitle: 'Lua Virtual Machine',
        luaVMDesc: 'Gerenciamento do motor Lua e execução de scripts.',

        instanceTitle: 'Sistema de Instâncias',
        instanceDesc: 'Modelo de objeto hierárquico para organizar objetos do jogo. Todos os objetos herdam de <code>instance</code>.',
        instanceBasicProps: 'Propriedades Básicas',
        instanceParentChild: 'Relacionamentos Parent-Child',
        instanceAttributes: 'Atributos',

        drawingTitle: 'Drawing API',
        drawingDesc: 'Primitivos de desenho de baixo nível para renderizar na tela.',
        drawingProps: 'Propriedades de Objects',

        uiTitle: 'UI Widget System',
        uiDesc: 'Crie elementos de interface interativos.',
        uiTabMgmt: 'Gerenciamento de Abas',
        uiWidgetTypes: 'Tipos de Widgets',
        uiWidgetValues: 'Valores de Widget',

        servicesTitle: 'Services',
        servicesDesc: 'Serviços globais fornecendo acesso aos principais sistemas do jogo.',

        examplesTitle: 'Exemplos de Código',
        examplesUI: 'Criar Painel de Configurações',
        examplesDrawing: 'Desenhar na Tela',
        examplesInstances: 'Trabalhar com Instâncias',

        refTitle: 'Referência de Estruturas',

        footerText: '&copy; 2024 Fragment Lua API Documentation v1.0',

        langBtn: 'EN',
    },
    en: {
        navGettingStarted: 'Getting Started',
        navIntro: 'Introduction',
        navCore: 'Core Systems',
        navLuaVM: 'Lua VM',
        navGC: 'Garbage Collector',
        navInstances: 'Instance System',
        navRendering: 'Rendering',
        navDrawing: 'Drawing API',
        navUI: 'UI Widgets',
        navReference: 'Reference',
        navServices: 'Services',
        navExamples: 'Examples',
        navStructs: 'Structures',

        searchPlaceholder: 'Search...',

        introTitle: 'Introduction',
        introDesc: 'Fragment provides a powerful Lua scripting engine with a complete API for:',
        introItem1: 'Game object manipulation through the instance system',
        introItem2: 'Low-level drawing with shapes, text, and lines',
        introItem3: 'Interactive UI widgets and menus',
        introItem4: 'Services for players, workspace, lighting, and more',

        luaVMTitle: 'Lua Virtual Machine',
        luaVMDesc: 'Lua engine management and script execution.',

        instanceTitle: 'Instance System',
        instanceDesc: 'Hierarchical object model for organizing game objects. All objects inherit from <code>instance</code>.',
        instanceBasicProps: 'Basic Properties',
        instanceParentChild: 'Parent-Child Relationships',
        instanceAttributes: 'Attributes',

        drawingTitle: 'Drawing API',
        drawingDesc: 'Low-level drawing primitives for rendering on screen.',
        drawingProps: 'Object Properties',

        uiTitle: 'UI Widget System',
        uiDesc: 'Create interactive interface elements.',
        uiTabMgmt: 'Tab Management',
        uiWidgetTypes: 'Widget Types',
        uiWidgetValues: 'Widget Values',

        servicesTitle: 'Services',
        servicesDesc: 'Global services providing access to core game systems.',

        examplesTitle: 'Code Examples',
        examplesUI: 'Create Settings Panel',
        examplesDrawing: 'Drawing on Screen',
        examplesInstances: 'Working with Instances',

        refTitle: 'Structures Reference',

        footerText: '&copy; 2024 Fragment Lua API Documentation v1.0',

        langBtn: 'PT',
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';

// ============ SIDEBAR NAV ============
const navStructure = {
    pt: [
        { title: 'Getting Started', links: [{ name: 'Introdução', id: 'intro' }] },
        { title: 'Core Systems', links: [
            { name: 'Lua VM', id: 'lua-vm' },
            { name: 'Instance System', id: 'instances' }
        ]},
        { title: 'Rendering', links: [
            { name: 'Drawing API', id: 'drawing' },
            { name: 'UI Widgets', id: 'ui' }
        ]},
        { title: 'Reference', links: [
            { name: 'Services', id: 'services' },
            { name: 'Exemplos', id: 'examples' },
            { name: 'Estruturas', id: 'reference' }
        ]}
    ],
    en: [
        { title: 'Getting Started', links: [{ name: 'Introduction', id: 'intro' }] },
        { title: 'Core Systems', links: [
            { name: 'Lua VM', id: 'lua-vm' },
            { name: 'Instance System', id: 'instances' }
        ]},
        { title: 'Rendering', links: [
            { name: 'Drawing API', id: 'drawing' },
            { name: 'UI Widgets', id: 'ui' }
        ]},
        { title: 'Reference', links: [
            { name: 'Services', id: 'services' },
            { name: 'Examples', id: 'examples' },
            { name: 'Structures', id: 'reference' }
        ]}
    ]
};

let currentActive = null;

// ============ INIT ============
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeSidebar();
    initializeSearch();
    initializeCodeBlocks();
    initializeScroll();
});

// ============ LANGUAGE ============
function initializeLanguage() {
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = translations[currentLang].langBtn;
        btn.addEventListener('click', function() {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            applyTranslations();
            initializeSidebar();
            btn.textContent = translations[currentLang].langBtn;
        });
    }
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];

    const map = {
        searchInput: 'searchPlaceholder',
        introTitle: 'introTitle',
        introDesc: 'introDesc',
        introItem1: 'introItem1',
        introItem2: 'introItem2',
        introItem3: 'introItem3',
        introItem4: 'introItem4',
        luaVMTitle: 'luaVMTitle',
        luaVMDesc: 'luaVMDesc',
        instanceTitle: 'instanceTitle',
        instanceDesc: 'instanceDesc',
        instanceBasicProps: 'instanceBasicProps',
        instanceParentChild: 'instanceParentChild',
        instanceAttributes: 'instanceAttributes',
        drawingTitle: 'drawingTitle',
        drawingDesc: 'drawingDesc',
        drawingProps: 'drawingProps',
        uiTitle: 'uiTitle',
        uiDesc: 'uiDesc',
        uiTabMgmt: 'uiTabMgmt',
        uiWidgetTypes: 'uiWidgetTypes',
        uiWidgetValues: 'uiWidgetValues',
        servicesTitle: 'servicesTitle',
        servicesDesc: 'servicesDesc',
        examplesTitle: 'examplesTitle',
        examplesUI: 'examplesUI',
        examplesDrawing: 'examplesDrawing',
        examplesInstances: 'examplesInstances',
        refTitle: 'refTitle',
        footerText: 'footerText',
    };

    for (const [id, key] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'INPUT') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    }
}

// ============ SIDEBAR ============
function initializeSidebar() {
    const sidebarContent = document.getElementById('sidebarContent');
    if (!sidebarContent) return;

    const sections = navStructure[currentLang];

    sidebarContent.innerHTML = sections.map(section => {
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

    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    updateActiveNavItem();
}

// ============ NAVIGATION ============
function handleNavClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const id = href.substring(1);
    const element = document.getElementById(id);

    if (element) {
        document.querySelectorAll('.nav-link a').forEach(a => {
            a.classList.remove('active');
        });
        this.classList.add('active');
        currentActive = id;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

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

// ============ SEARCH ============
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
        if (text.includes(term)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function restoreAllContent() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'block';
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
    } catch (err) {}
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
