document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[data-target]');
    const details = document.querySelectorAll('.details');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            details.forEach(detail => {
                if (detail.id === target) {
                    detail.classList.toggle('visible');
                } else {
                    detail.classList.remove('visible');
                }
            });
        });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target');
            modals.forEach(modal => {
                if (modal.id === target) {
                    modal.classList.remove('hidden');
                } else {
                    modal.classList.add('hidden');
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').classList.add('hidden');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.add('hidden');
        }
    });
});