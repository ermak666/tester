// Загрузка контента из localStorage или файла по умолчанию
async function loadContent() {
    let data = localStorage.getItem('siteContent');
    if (!data) {
        const response = await fetch('data/content.json');
        data = await response.text();
        localStorage.setItem('siteContent', data);
    }
    return JSON.parse(data);
}

// Рендер страницы
async function renderPage() {
    const content = await loadContent();
    const path = window.location.pathname;

    if (path.includes('catalog')) {
        document.getElementById('catalog-container').innerHTML = content.catalog.html;
    } else if (path.includes('product')) {
        document.getElementById('product-detail').innerHTML = content.product.html;
    } else if (path.includes('index') || path === '/') {
        document.getElementById('main-content').innerHTML = content.index.html;
    }
}

renderPage();
