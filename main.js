// ============ TRANSLATIONS ============
const translations = {
    pt: {
        navGettingStarted: 'Getting Started',
        navIntro: 'Introdução',
        navQuickStart: 'Início Rápido',
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
        navLuaAPI: 'API Lua',
        navGlobals: 'Funções Globais',
        navTasks: 'task & input',
        navTypes: 'Tipos de Dados',
        navBit32: 'bit32',
        navEvents: 'Sinais e Conexões',

        searchPlaceholder: 'Buscar...',

        introTitle: 'Introdução',
        introDesc: 'Phantom (código-fonte <code>fragment</code>) proporciona um motor de scripts Lua embutido com uma API no estilo Roblox. Com ela você pode:',
        introItem1: 'Ler e manipular o mundo do jogo através de instâncias, atributos e propriedades',
        introItem2: 'Desenhar na tela com quadrados, texto e linhas (a renderização é automática a cada frame)',
        introItem3: 'Criar menus e widgets interativos com a biblioteca <code>ui</code>',
        introItem4: 'Usar serviços: <code>Players</code>, <code>Workspace</code>, <code>RunService</code>, <code>UserInputService</code>, <code>HttpService</code>, <code>TweenService</code> e <code>Lighting</code>',

        quickstartTitle: 'Início Rápido',
        quickstartDesc: 'Quatro testes simples para validar que a API está funcionando. Cada bloco é independente.',
        quickstartRun: '1. Executar e imprimir',

        luaVMTitle: 'Lua Virtual Machine',
        luaVMDesc: 'Gerenciamento do motor Lua e execução de scripts.',

        instanceTitle: 'Sistema de Instâncias',
        instanceDesc: 'Modelo de objeto hierárquico para organizar objetos do jogo. Todos os objetos herdam de <code>instance</code>.',
        instanceBasicProps: 'Propriedades Básicas',
        instanceParentChild: 'Relacionamentos Parent-Child',
        instanceAttributes: 'Atributos',
        instancePropsEvents: 'Propriedades e Eventos',

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

        globalsTitle: 'Funções Globais',
        globalsDesc: 'Funções de nível global adicionadas ao ambiente Lua.',

        tasksTitle: 'task & input',
        tasksDesc: 'Agendamento de tarefas e leitura de entrada do usuário.',

        typesTitle: 'Tipos de Dados',
        typesDesc: 'Tipos vetoriais e de transformação disponíveis no Lua.',

        bit32Title: 'Biblioteca bit32',
        bit32Desc: 'Operações bit a bit sobre inteiros sem sinal de 32 bits.',

        eventsTitle: 'Sinais e Conexões',
        eventsDesc: 'Conecte funções a eventos. <code>Connect</code> retorna uma conexão que pode ser desconectada.',

        examplesTitle: 'Exemplos de Código',
        examplesUI: 'Criar Painel de Configurações',
        examplesDrawing: 'Desenhar na Tela',
        examplesInstances: 'Trabalhar com Instâncias',
        examplesTween: 'Animar Propriedades com TweenService',
        examplesEvents: 'Eventos e Conexões',

        refTitle: 'Referência de Estruturas',

        footerText: '&copy; 2026 Phantom Lua API Documentation v1.1',

        langBtn: 'EN',
    },
    en: {
        navGettingStarted: 'Getting Started',
        navIntro: 'Introduction',
        navQuickStart: 'Quick Start',
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
        navLuaAPI: 'Lua API',
        navGlobals: 'Global Functions',
        navTasks: 'task & input',
        navTypes: 'Data Types',
        navBit32: 'bit32',
        navEvents: 'Signals & Connections',

        searchPlaceholder: 'Search...',

        introTitle: 'Introduction',
        introDesc: 'Phantom (source code <code>fragment</code>) provides an embedded Lua scripting engine with a Roblox-style API. With it you can:',
        introItem1: 'Read and manipulate the game world through instances, attributes, and properties',
        introItem2: 'Draw on screen with squares, text, and lines (rendering is automatic every frame)',
        introItem3: 'Create interactive menus and widgets with the <code>ui</code> library',
        introItem4: 'Use services: <code>Players</code>, <code>Workspace</code>, <code>RunService</code>, <code>UserInputService</code>, <code>HttpService</code>, <code>TweenService</code>, and <code>Lighting</code>',

        quickstartTitle: 'Quick Start',
        quickstartDesc: 'Four simple tests to verify the API is working. Each block is independent.',
        quickstartRun: '1. Run and print',

        luaVMTitle: 'Lua Virtual Machine',
        luaVMDesc: 'Lua engine management and script execution.',

        instanceTitle: 'Instance System',
        instanceDesc: 'Hierarchical object model for organizing game objects. All objects inherit from <code>instance</code>.',
        instanceBasicProps: 'Basic Properties',
        instanceParentChild: 'Parent-Child Relationships',
        instanceAttributes: 'Attributes',
        instancePropsEvents: 'Properties & Events',

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

        globalsTitle: 'Global Functions',
        globalsDesc: 'Global-level functions added to the Lua environment.',

        tasksTitle: 'task & input',
        tasksDesc: 'Task scheduling and user input reading.',

        typesTitle: 'Data Types',
        typesDesc: 'Vector and transformation types available in Lua.',

        bit32Title: 'bit32 Library',
        bit32Desc: 'Bitwise operations on unsigned 32-bit integers.',

        eventsTitle: 'Signals & Connections',
        eventsDesc: 'Connect functions to events. <code>Connect</code> returns a connection that can be disconnected.',

        examplesTitle: 'Code Examples',
        examplesUI: 'Create Settings Panel',
        examplesDrawing: 'Drawing on Screen',
        examplesInstances: 'Working with Instances',
        examplesTween: 'Animating Properties with TweenService',
        examplesEvents: 'Events & Connections',

        refTitle: 'Structures Reference',

        footerText: '&copy; 2026 Phantom Lua API Documentation v1.1',

        langBtn: 'PT',
    }
};

function getStoredLang() {
    try {
        const value = localStorage.getItem('lang');
        return translations[value] ? value : 'pt';
    } catch (err) {
        return 'pt';
    }
}

function storeLang(lang) {
    try {
        localStorage.setItem('lang', lang);
    } catch (err) {}
}

let currentLang = getStoredLang();

// ============ SIDEBAR NAV ============
const navStructure = {
    pt: [
        { title: 'Getting Started', links: [
            { name: 'Introdução', id: 'intro' },
            { name: 'Início Rápido', id: 'quickstart' }
        ]},
        { title: 'Core Systems', links: [
            { name: 'Lua VM', id: 'lua-vm' },
            { name: 'Instance System', id: 'instances' }
        ]},
        { title: 'Rendering', links: [
            { name: 'Drawing API', id: 'drawing' },
            { name: 'UI Widgets', id: 'ui' }
        ]},
        { title: 'Lua API', links: [
            { name: 'Funções Globais', id: 'globals' },
            { name: 'task & input', id: 'tasks' },
            { name: 'Tipos de Dados', id: 'types' },
            { name: 'bit32', id: 'bit32' },
            { name: 'Sinais e Conexões', id: 'events' }
        ]},
        { title: 'Reference', links: [
            { name: 'Services', id: 'services' },
            { name: 'Exemplos', id: 'examples' },
            { name: 'Estruturas', id: 'reference' }
        ]}
    ],
    en: [
        { title: 'Getting Started', links: [
            { name: 'Introduction', id: 'intro' },
            { name: 'Quick Start', id: 'quickstart' }
        ]},
        { title: 'Core Systems', links: [
            { name: 'Lua VM', id: 'lua-vm' },
            { name: 'Instance System', id: 'instances' }
        ]},
        { title: 'Rendering', links: [
            { name: 'Drawing API', id: 'drawing' },
            { name: 'UI Widgets', id: 'ui' }
        ]},
        { title: 'Lua API', links: [
            { name: 'Global Functions', id: 'globals' },
            { name: 'task & input', id: 'tasks' },
            { name: 'Data Types', id: 'types' },
            { name: 'bit32', id: 'bit32' },
            { name: 'Signals & Connections', id: 'events' }
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
            storeLang(currentLang);
            applyTranslations();
            initializeSidebar();
            btn.textContent = translations[currentLang].langBtn;
        });
    }
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang] || translations.pt;

    const map = {
        searchInput: 'searchPlaceholder',
        introTitle: 'introTitle',
        introDesc: 'introDesc',
        introItem1: 'introItem1',
        introItem2: 'introItem2',
        introItem3: 'introItem3',
        introItem4: 'introItem4',
        quickstartTitle: 'quickstartTitle',
        quickstartDesc: 'quickstartDesc',
        quickstartRun: 'quickstartRun',
        luaVMTitle: 'luaVMTitle',
        luaVMDesc: 'luaVMDesc',
        instanceTitle: 'instanceTitle',
        instanceDesc: 'instanceDesc',
        instanceBasicProps: 'instanceBasicProps',
        instanceParentChild: 'instanceParentChild',
        instanceAttributes: 'instanceAttributes',
        instancePropsEvents: 'instancePropsEvents',
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
        globalsTitle: 'globalsTitle',
        globalsDesc: 'globalsDesc',
        tasksTitle: 'tasksTitle',
        tasksDesc: 'tasksDesc',
        typesTitle: 'typesTitle',
        typesDesc: 'typesDesc',
        bit32Title: 'bit32Title',
        bit32Desc: 'bit32Desc',
        eventsTitle: 'eventsTitle',
        eventsDesc: 'eventsDesc',
        examplesTitle: 'examplesTitle',
        examplesUI: 'examplesUI',
        examplesDrawing: 'examplesDrawing',
        examplesInstances: 'examplesInstances',
        examplesTween: 'examplesTween',
        examplesEvents: 'examplesEvents',
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
