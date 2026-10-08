// ======================= COGITATOR SYSTEM ========================

document.addEventListener("DOMContentLoaded", () => {

    // ======================= REDUCED MOTION ========================

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    // ======================= TERMINAL INITIALIZATION ========================

    const terminalLines = document.querySelectorAll(".hero-terminal p");

    if (terminalLines.length > 0) {

        terminalLines.forEach((line, index) => {

            line.style.opacity = "0";
            line.style.transform = "translateX(-10px)";
            line.style.transition = "opacity 0.4s ease, transform 0.4s ease";

            if (prefersReducedMotion) {
                line.style.opacity = "1";
                line.style.transform = "translateX(0)";
                return;
            }

            setTimeout(() => {

                line.style.opacity = "1";
                line.style.transform = "translateX(0)";

            }, 400 + (index * 500));

        });

        const lastLine = terminalLines[terminalLines.length - 1];

        setTimeout(() => {
            lastLine.classList.add("terminal-cursor");
        }, prefersReducedMotion ? 0 : 1900);
    }


    // ======================= SCROLL REVEAL ========================

    const revealElements = document.querySelectorAll(
        "section, .project-card, .status-panel, .skill-group"
    );

    if (!prefersReducedMotion && "IntersectionObserver" in window) {

        revealElements.forEach((element) => {

            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

        });

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    }


    // ======================= NAVIGATION ========================

    const navLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    const sections = document.querySelectorAll("section[id]");

    if (navLinks.length > 0 && sections.length > 0) {

        const updateActiveNavigation = () => {

            let currentSection = "";

            sections.forEach((section) => {

                const sectionTop = section.offsetTop - 180;

                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute("id");
                }

            });

            navLinks.forEach((link) => {

                const target = link.getAttribute("href");

                if (target === `#${currentSection}`) {

                    link.style.color = "var(--bronze-bright)";

                } else {

                    link.style.color = "";

                }

            });

        };

        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            { passive: true }
        );

        updateActiveNavigation();
    }


    // ======================= CURRENT YEAR ========================

    const footer = document.querySelector("footer");

    if (footer) {

        footer.innerHTML = footer.innerHTML.replace(
            /©\s*\d{4}/,
            `© ${new Date().getFullYear()}`
        );

    }


    // ======================= SYSTEM ONLINE ========================

    console.log(
        "%cCOGITATOR SYSTEM ONLINE",
        "color: #b08d57; font-weight: bold; font-size: 16px;"
    );

    console.log(
        "%cAndré Batista | Software Developer",
        "color: #aaa;"
    );

});
