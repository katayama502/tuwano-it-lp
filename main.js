tailwind.config = {
theme: {
    extend: {
        colors: {
            tsuwano: {
                base: '#FDFBF7', // 和紙のようなオフホワイト
                red: '#C84C38',  // 石州瓦レッド
                green: '#2D5238', // 深い森のグリーン
                yellow: '#F4B942', // 学びのアクセント
                text: '#4A3B32',  // 優しいこげ茶
            }
        },
        fontFamily: {
            sans: ['"Zen Maru Gothic"', 'sans-serif'],
            hand: ['"Yomogi"', 'cursive'],
        },
        borderRadius: {
            '4xl': '2.5rem',
        }
    }
}
}



// Icons Initialization
lucide.createIcons();

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // 一度表示したら監視を終了
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.fade-in-section');
sections.forEach(section => {
    observer.observe(section);
});
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
