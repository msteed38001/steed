document.addEventListener('DOMContentLoaded', function () {
    var NAV = [
        { label: 'Data Engineering', href: 'index.html' },
        { label: 'Core Profile', href: 'index.html#overview' },
        { label: 'Production Pipelines', href: 'index.html#projects' },
        {
            label: 'Technical Docs',
            children: [
                { label: 'Nightly ERP Pipeline', href: 'engineering-sops/processing.html' },
                { label: 'Validation Rules', href: 'engineering-sops/processing.html#validation-rules' },
                { label: 'Recovery Protocol', href: 'engineering-sops/processing.html#recovery' },
				{ label: 'BOM Reference', href: 'viewer.html?page=pages/md_test.html' }
            ]
        },
        { label: 'View Technical Runbook & SOP', href: 'engineering-sops/processing.html', class: 'sop-link' }
    ];

    var nav = document.getElementById('site-nav');
    if (!nav) return;

    var base = document.querySelector('script[src$="nav.js"]').src.replace(/js\/nav\.js$/, '');
    var here = window.location.pathname.split('/').pop() || 'index.html';

    function buildItem(item) {
        if (item.children) {
            var childHtml = item.children.map(buildItem).join('');
            return '<details class="nav-dropdown">' +
                       '<summary>' + item.label + '</summary>' +
                       '<div class="nav-dropdown-menu">' + childHtml + '</div>' +
                   '</details>';
        }
        var cls = '';
        if (item.class) cls = item.class;
        else {
            var file = item.href.split('#')[0].split('/').pop();
            if (file === here && item.href.indexOf('#') === -1) cls = 'active';
        }
        return '<a href="' + base + item.href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + item.label + '</a>';
    }

    nav.className = 'navbar';
    nav.innerHTML =
        '<div class="container">' +
            '<button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">' +
                '<span></span><span></span><span></span>' +
            '</button>' +
            '<div class="nav-links">' +
                NAV.map(buildItem).join('') +
            '</div>' +
        '</div>';

    var toggle = nav.querySelector('.nav-toggle');
    var links = nav.querySelector('.nav-links');

    toggle.addEventListener('click', function () {
        var isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.classList.toggle('open', isOpen);
    });
});