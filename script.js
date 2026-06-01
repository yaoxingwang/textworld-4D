function copyBibtex() {
    const code = document.querySelector('.bibtex-box code');
    const btn = document.querySelector('.copy-btn');
    if (!code || !btn) return;

    navigator.clipboard.writeText(code.textContent).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = 'rgba(34, 197, 94, 0.25)';
        btn.style.borderColor = 'rgba(34, 197, 94, 0.5)';
        btn.style.color = '#166534';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 2000);
    }).catch(() => {
        btn.textContent = 'Failed';
        setTimeout(() => {
            btn.textContent = 'Copy';
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
