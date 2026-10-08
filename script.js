document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ======================= TERMINAL ======================== */

    const terminalLines = document.querySelectorAll(".hero-terminal p");

    if (terminalLines.length) {
        terminalLines.forEach((line, index) => {
            if (!reduceMotion) {
                line.style.opacity = "0";
                line.style.transform = "translateX(-8px)";
                line.style.transition =
                    "opacity 0.45s ease, transform 0.45s ease";

                setTimeout(() => {
                    line.style.opacity = "1";
                    line.style.transform = "translateX(0)";
                }, 250 + index * 450);
            }
        });

        terminalLines[terminalLines.length - 1].classList.add(
            "terminal-cursor"
        );
    }

    /* ======================= SCROLL REVEAL ======================== */

    const revealElements = document.querySelectorAll(
        ".section, .project-card, .skill-group, .experience-card, .education-card"
    );

    if (!reduceMotion && "IntersectionObserver" in window) {
        revealElements.forEach((element) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(18px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";
        });

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    }

    /* ======================= ACTIVE NAV ======================== */

    const navLinks = [...document.querySelectorAll(".nav-links a")];

    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if ("IntersectionObserver" in window) {
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach((link) => {
                            const isActive =
                                link.getAttribute("href") ===
                                `#${entry.target.id}`;

                            link.style.color = isActive
                                ? "var(--bronze-bright)"
                                : "";
                        });
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            navObserver.observe(section);
        });
    }
});
