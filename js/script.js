// ===============================
// Active Navbar On Scroll
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function activeMenu() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("text-primary", "font-bold");

                if (link.getAttribute("href") === "#" + sectionId) {
                    link.classList.add("text-primary", "font-bold");
                }
            });
        }
    });
}

window.addEventListener("scroll", activeMenu);

// ===============================
// Dark Mode
// ===============================

const html = document.documentElement;
const themeBtn = document.getElementById("theme-toggle-button");

if (localStorage.getItem("theme")) {
    html.classList.toggle(
        "dark",
        localStorage.getItem("theme") === "dark"
    );
}

themeBtn?.addEventListener("click", () => {
    html.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        html.classList.contains("dark") ? "dark" : "light"
    );
});

// ===============================
// Portfolio Filter
// ===============================

const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove(
                "active",
                "from-primary",
                "to-secondary",
                "text-white"
            );

            btn.classList.add(
                "bg-white",
                "dark:bg-slate-800",
                "text-slate-600",
                "dark:text-slate-300"
            );
        });

        button.classList.add(
            "active",
            "from-primary",
            "to-secondary",
            "text-white"
        );

        button.classList.remove(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300"
        );

        portfolioItems.forEach((item) => {
            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {
                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 100);
            } else {
                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 200);
            }
        });
    });
});
// ===============================
// Testimonials Slider
// ===============================

const testimonials = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("next-testimonial");
const prevBtn = document.getElementById("prev-testimonial");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
    if (!testimonials.length) return;

    testimonials.forEach((slide) => {
        slide.classList.add("hidden");
        slide.classList.remove("active");
    });

    dots.forEach((dot) => dot.classList.remove("active"));

    testimonials[index].classList.remove("hidden");
    testimonials[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

if (testimonials.length) {
    showSlide(currentSlide);

    nextBtn?.addEventListener("click", () => {
        currentSlide++;

        if (currentSlide >= testimonials.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    prevBtn?.addEventListener("click", () => {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = testimonials.length - 1;
        }

        showSlide(currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(() => {
        currentSlide++;

        if (currentSlide >= testimonials.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }, 5000);
}

// ===============================
// Settings Sidebar
// ===============================

const gearBtn = document.getElementById("settings-toggle");
const sidebar = document.getElementById("settings-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

gearBtn?.addEventListener("click", () => {
    sidebar?.classList.toggle("translate-x-full");
});

closeSidebar?.addEventListener("click", () => {
    sidebar?.classList.add("translate-x-full");
});

// ===============================
// Theme Colors
// ===============================

const colorOptions = document.querySelectorAll(".theme-color");

colorOptions.forEach((color) => {
    color.addEventListener("click", () => {
        const value = color.dataset.color;

        document.documentElement.style.setProperty(
            "--primary-color",
            value
        );

        localStorage.setItem("themeColor", value);
    });
});

const savedColor = localStorage.getItem("themeColor");

if (savedColor) {
    document.documentElement.style.setProperty(
        "--primary-color",
        savedColor
    );
}

// ===============================
// Fonts
// ===============================

const fontOptions = document.querySelectorAll(".font-option");

fontOptions.forEach((font) => {
    font.addEventListener("click", () => {
        const family = font.dataset.font;

        document.body.style.fontFamily = family;

        localStorage.setItem("fontFamily", family);
    });
});

const savedFont = localStorage.getItem("fontFamily");

if (savedFont) {
    document.body.style.fontFamily = savedFont;
}

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
    if (!scrollBtn) return;

    if (window.scrollY > 500) {
        scrollBtn.classList.remove("hidden");
        scrollBtn.classList.add("flex");
    } else {
        scrollBtn.classList.add("hidden");
        scrollBtn.classList.remove("flex");
    }
});

scrollBtn?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});