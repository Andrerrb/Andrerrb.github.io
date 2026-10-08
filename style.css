/* ======================= GLOBAL CONFIGURATION ======================== */

:root {
    --black: #080808;
    --black-soft: #101010;
    --black-card: #141414;
    --black-light: #1b1b1b;

    --bronze: #8f713f;
    --bronze-bright: #c09a5a;
    --bronze-dark: #5c4728;

    --red: #7d1717;
    --red-bright: #a52525;

    --white: #e8e4dc;
    --white-soft: #b8b3a8;
    --gray: #77736b;

    --border: rgba(143, 113, 63, 0.35);

    --max-width: 1180px;
}


/* ======================= RESET ======================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(143, 113, 63, 0.08),
            transparent 35%
        ),
        var(--black);

    color: var(--white);

    font-family:
        "Courier New",
        Courier,
        monospace;

    line-height: 1.6;

    overflow-x: hidden;
}


body::before {
    content: "";

    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: 0.035;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.5) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.5) 1px,
            transparent 1px
        );

    background-size: 50px 50px;

    z-index: 999;
}


a {
    color: inherit;

    text-decoration: none;
}


button,
a {
    -webkit-tap-highlight-color: transparent;
}


::selection {
    background: var(--bronze);
    color: var(--black);
}


/* ======================= SCROLLBAR ======================== */

::-webkit-scrollbar {
    width: 8px;
}


::-webkit-scrollbar-track {
    background: var(--black);
}


::-webkit-scrollbar-thumb {
    background: var(--bronze-dark);

    border-radius: 2px;
}


::-webkit-scrollbar-thumb:hover {
    background: var(--bronze);
}


/* ======================= NAVIGATION ======================== */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(8, 8, 8, 0.92);

    border-bottom: 1px solid var(--border);

    backdrop-filter: blur(10px);
}


.nav-container {
    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: 0 auto;

    min-height: 70px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


.nav-logo {
    width: 42px;
    height: 42px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 1px solid var(--bronze);

    color: var(--bronze-bright);

    font-weight: bold;

    letter-spacing: 1px;

    transition:
        background 0.3s ease,
        color 0.3s ease,
        box-shadow 0.3s ease;
}


.nav-logo:hover {
    background: var(--bronze);

    color: var(--black);

    box-shadow:
        0 0 20px rgba(192, 154, 90, 0.15);
}


.nav-links {
    display: flex;

    align-items: center;

    gap: 28px;
}


.nav-links a {
    position: relative;

    color: var(--white-soft);

    font-size: 0.72rem;

    letter-spacing: 1.5px;

    transition:
        color 0.25s ease;
}


.nav-links a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 1px;

    background: var(--bronze-bright);

    transition: width 0.25s ease;
}


.nav-links a:hover {
    color: var(--bronze-bright);
}


.nav-links a:hover::after {
    width: 100%;
}


/* ======================= HERO ======================== */

.hero {
    min-height: 100vh;

    display: flex;

    align-items: center;

    position: relative;

    border-bottom: 1px solid var(--border);

    background:
        linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.98),
            rgba(8, 8, 8, 0.85),
            rgba(30, 20, 10, 0.25)
        );
}


.hero::before {
    content: "";

    position: absolute;

    top: 50%;
    right: 7%;

    width: 380px;
    height: 380px;

    border: 1px solid rgba(143, 113, 63, 0.13);

    transform:
        translateY(-50%)
        rotate(45deg);

    box-shadow:
        inset 0 0 0 20px rgba(143, 113, 63, 0.015),
        inset 0 0 0 21px rgba(143, 113, 63, 0.08);
}


.hero-container {
    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: 0 auto;

    padding-top: 80px;

    position: relative;

    z-index: 2;
}


.hero-terminal {
    margin-bottom: 28px;

    color: var(--bronze);

    font-size: 0.78rem;

    letter-spacing: 1px;
}


.hero-terminal p {
    margin-bottom: 4px;
}


.hero-content {
    max-width: 850px;
}


.hero-label,
.section-label {
    color: var(--bronze-bright);

    font-size: 0.72rem;

    letter-spacing: 3px;

    margin-bottom: 12px;
}


.hero h1 {
    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size:
        clamp(
            2.8rem,
            7vw,
            5.5rem
        );

    line-height: 0.95;

    letter-spacing: -2px;

    color: var(--white);

    margin-bottom: 25px;
}


.hero-role {
    color: var(--red-bright);

    font-size: 1rem;

    font-weight: bold;

    letter-spacing: 3px;

    margin-bottom: 20px;
}


.hero-description {
    max-width: 650px;

    color: var(--white-soft);

    font-size: 0.95rem;

    line-height: 1.8;

    margin-bottom: 35px;
}


.hero-actions {
    display: flex;

    flex-wrap: wrap;

    gap: 15px;
}


.btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 46px;

    padding:
        0 22px;

    border: 1px solid var(--bronze);

    font-size: 0.72rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    transition:
        background 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease,
        transform 0.3s ease;
}


.btn:hover {
    transform: translateY(-2px);
}


.btn-primary {
    background: var(--bronze);

    color: var(--black);
}


.btn-primary:hover {
    background: var(--bronze-bright);

    border-color: var(--bronze-bright);
}


.btn-secondary {
    background: transparent;

    color: var(--bronze-bright);
}


.btn-secondary:hover {
    background: rgba(143, 113, 63, 0.1);
}


/* ======================= GENERAL SECTIONS ======================== */

.section {
    width: min(
        calc(100% - 40px),
        var(--max-width)
    );

    margin: 0 auto;

    padding: 120px 0;

    position: relative;
}


.section + .section {
    border-top: 1px solid rgba(143, 113, 63, 0.14);
}


.section-header {
    display: flex;

    align-items: flex-start;

    gap: 18px;

    margin-bottom: 55px;
}


.section-index {
    color: var(--red-bright);

    font-size: 0.75rem;

    font-weight: bold;

    padding-top: 7px;
}


.section-header h2 {
    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size:
        clamp(
            1.8rem,
            4vw,
            2.8rem
        );

    line-height: 1;

    letter-spacing: -1px;

    color: var(--white);
}


/* ======================= ABOUT ======================== */

.about-grid {
    display: grid;

    grid-template-columns:
        minmax(0, 1.3fr)
        minmax(300px, 0.7fr);

    gap: 70px;

    align-items: start;
}


.about-text {
    color: var(--white-soft);

    font-size: 0.9rem;

    line-height: 1.9;
}


.about-text p {
    margin-bottom: 28px;
}


.about-text p:last-child {
    margin-bottom: 0;
}


/* ======================= STATUS PANEL ======================== */

.status-panel {
    border: 1px solid var(--border);

    background:
        linear-gradient(
            135deg,
            rgba(143, 113, 63, 0.08),
            rgba(20, 20, 20, 0.9)
        );

    padding: 30px;

    position: relative;
}


.status-panel::before {
    content: "";

    position: absolute;

    top: -1px;
    left: -1px;

    width: 45px;
    height: 3px;

    background: var(--red-bright);
}


.status-title {
    color: var(--bronze-bright);

    font-size: 0.72rem;

    font-weight: bold;

    letter-spacing: 2px;

    margin-bottom: 20px;
}


.status-line {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    padding: 15px 0;

    border-bottom: 1px solid rgba(143, 113, 63, 0.15);

    font-size: 0.68rem;
}


.status-line:last-child {
    border-bottom: none;
}


.status-line span {
    color: var(--gray);
}


.status-line strong {
    color: var(--white-soft);

    text-align: right;

    font-size: 0.67rem;
}


/* ======================= SKILLS ======================== */

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0, 1fr)
        );

    gap: 20px;
}


.skill-group {
    min-height: 270px;

    padding: 28px;

    border: 1px solid rgba(143, 113, 63, 0.25);

    background: var(--black-card);

    position: relative;

    transition:
        border-color 0.3s ease,
        transform 0.3s ease,
        background 0.3s ease;
}


.skill-group::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 35px;
    height: 2px;

    background: var(--bronze);
}


.skill-group:hover {
    transform: translateY(-4px);

    border-color: var(--bronze);

    background: var(--black-light);
}


.skill-icon {
    color: var(--red-bright);

    font-size: 0.7rem;

    font-weight: bold;

    margin-bottom: 20px;
}


.skill-group h3 {
    color: var(--white);

    font-size: 0.82rem;

    letter-spacing: 1px;

    margin-bottom: 20px;
}


.skill-group p {
    color: var(--gray);

    font-size: 0.75rem;

    line-height: 1.7;

    margin-top: 20px;
}


.skill-tags,
.project-tags,
.experience-tags {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;
}


.skill-tags span,
.project-tags span,
.experience-tags span {
    border: 1px solid rgba(143, 113, 63, 0.35);

    color: var(--bronze-bright);

    padding:
        4px 8px;

    font-size: 0.6rem;

    letter-spacing: 0.8px;

    background: rgba(143, 113, 63, 0.04);
}


/* ======================= PROJECTS ======================== */

.projects-grid {
    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        );

    gap: 25px;
}


.project-card {
    background:
        linear-gradient(
            145deg,
            rgba(143, 113, 63, 0.045),
            rgba(20, 20, 20, 0.95)
        );

    border: 1px solid rgba(143, 113, 63, 0.28);

    padding: 32px;

    position: relative;

    display: flex;

    flex-direction: column;

    min-height: 510px;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}


.project-card::before {
    content: "";

    position: absolute;

    top: -1px;
    left: -1px;

    width: 60px;
    height: 3px;

    background: var(--bronze);
}


.project-card::after {
    content: "";

    position: absolute;

    right: 20px;
    bottom: 20px;

    width: 35px;
    height: 35px;

    border-right: 1px solid rgba(143, 113, 63, 0.2);
    border-bottom: 1px solid rgba(143, 113, 63, 0.2);
}


.project-card:hover {
    transform: translateY(-5px);

    border-color: var(--bronze);

    box-shadow:
        0 12px 35px rgba(0, 0, 0, 0.35);
}


.project-number {
    color: var(--red-bright);

    font-size: 0.65rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 20px;
}


.project-card h3 {
    color: var(--white);

    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size: 1.25rem;

    line-height: 1.15;

    margin-bottom: 18px;
}


.project-card > p {
    color: var(--white-soft);

    font-size: 0.78rem;

    line-height: 1.7;

    margin-bottom: 14px;
}


.project-section {
    margin-top: 10px;

    padding-top: 18px;

    border-top: 1px solid rgba(143, 113, 63, 0.15);
}


.project-section-title {
    display: block;

    color: var(--bronze-bright);

    font-size: 0.62rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 12px;
}


.project-features {
    list-style: none;

    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        );

    gap: 8px 18px;
}


.project-features li {
    position: relative;

    padding-left: 13px;

    color: var(--gray);

    font-size: 0.66rem;

    line-height: 1.5;
}


.project-features li::before {
    content: "▸";

    position: absolute;

    left: 0;

    color: var(--red-bright);
}


.project-card .project-tags {
    margin-top: auto;

    padding-top: 25px;
}


.project-link {
    display: inline-flex;

    align-items: center;

    width: fit-content;

    margin-top: 18px;

    color: var(--bronze-bright);

    font-size: 0.68rem;

    font-weight: bold;

    letter-spacing: 1px;

    border-bottom: 1px solid transparent;

    transition:
        color 0.25s ease,
        border-color 0.25s ease;
}


.project-link:hover {
    color: var(--white);

    border-color: var(--bronze);
}


/* ======================= EXPERIENCE ======================== */

.experience-list {
    display: flex;

    flex-direction: column;

    gap: 25px;
}


.experience-card {
    border: 1px solid rgba(143, 113, 63, 0.28);

    background:
        linear-gradient(
            110deg,
            rgba(143, 113, 63, 0.05),
            rgba(20, 20, 20, 0.95)
        );

    padding: 32px;

    position: relative;

    transition:
        border-color 0.3s ease,
        transform 0.3s ease;
}


.experience-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 45px;
    height: 3px;

    background: var(--red-bright);
}


.experience-card:hover {
    transform: translateX(4px);

    border-color: var(--bronze);
}


.experience-header {
    display: flex;

    justify-content: space-between;

    align-items: flex-start;

    gap: 30px;
}


.experience-status {
    color: var(--red-bright);

    font-size: 0.62rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 7px;
}


.experience-header h3 {
    color: var(--white);

    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size: 1.15rem;

    line-height: 1.2;
}


.experience-company {
    display: block;

    color: var(--bronze-bright);

    font-size: 0.7rem;

    font-weight: bold;

    letter-spacing: 1px;

    margin-top: 7px;
}


.experience-date {
    color: var(--gray);

    font-size: 0.65rem;

    white-space: nowrap;

    padding-top: 3px;
}


.experience-divider {
    height: 1px;

    background: rgba(143, 113, 63, 0.18);

    margin:
        25px 0;
}


.experience-description {
    max-width: 850px;

    color: var(--white-soft);

    font-size: 0.78rem;

    line-height: 1.8;

    margin-bottom: 22px;
}


/* ======================= EDUCATION ======================== */

.education-card {
    border: 1px solid rgba(143, 113, 63, 0.28);

    background: var(--black-card);

    padding: 35px;

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 50px;

    position: relative;
}


.education-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 55px;
    height: 3px;

    background: var(--bronze);
}


.education-status {
    color: var(--red-bright);

    font-size: 0.63rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 12px;
}


.education-main h3 {
    color: var(--white);

    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size: 1.5rem;

    margin-bottom: 8px;
}


.education-course {
    color: var(--bronze-bright);

    font-size: 0.8rem;
}


.education-details {
    display: flex;

    flex-direction: column;

    gap: 20px;
}


.education-details div {
    display: flex;

    flex-direction: column;

    gap: 3px;
}


.education-details span {
    color: var(--gray);

    font-size: 0.6rem;

    letter-spacing: 1px;
}


.education-details strong {
    color: var(--white-soft);

    font-size: 0.68rem;
}


/* ======================= CONTACT ======================== */

.contact-grid {
    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 70px;
}


.contact-status {
    color: var(--red-bright);

    font-size: 0.63rem;

    font-weight: bold;

    letter-spacing: 1.5px;

    margin-bottom: 15px;
}


.contact-introduction h3 {
    color: var(--white);

    font-family:
        "Arial Black",
        Arial,
        sans-serif;

    font-size: 1.8rem;

    margin-bottom: 18px;
}


.contact-introduction > p:last-child {
    max-width: 500px;

    color: var(--white-soft);

    font-size: 0.8rem;

    line-height: 1.8;
}


.contact-links {
    border-left: 1px solid var(--border);

    padding-left: 35px;

    display: flex;

    flex-direction: column;
}


.contact-link {
    display: flex;

    flex-direction: column;

    gap: 3px;

    padding:
        18px 0;

    border-bottom: 1px solid rgba(143, 113, 63, 0.15);

    transition:
        padding-left 0.25s ease;
}


.contact-link:first-child {
    padding-top: 0;
}


.contact-link:hover {
    padding-left: 10px;
}


.contact-label {
    color: var(--bronze-bright);

    font-size: 0.62rem;

    font-weight: bold;

    letter-spacing: 1.5px;
}


.contact-value {
    color: var(--white-soft);

    font-size: 0.75rem;

    word-break: break-word;
}


.contact-link:hover .contact-value {
    color: var(--white);
}


/* ======================= FOOTER ======================== */

footer {
    border-top: 1px solid var(--border);

    padding:
        25px 20px;

    background: #050505;
}


.footer-content {
    width: min(
        100%,
        var(--max-width)
    );

    margin: 0 auto;

    display: flex;

    justify-content: space-between;

    gap: 20px;

    color: var(--gray);

    font-size: 0.6rem;

    letter-spacing: 1px;
}


.footer-content span:last-child {
    color: var(--bronze-dark);
}


/* ======================= TERMINAL CURSOR ======================== */

.terminal-cursor::after {
    content: "█";

    display: inline-block;

    margin-left: 5px;

    color: var(--bronze-bright);

    animation:
        terminalBlink 1s steps(1) infinite;
}


@keyframes terminalBlink {

    0%,
    45% {
        opacity: 1;
    }

    46%,
    100% {
        opacity: 0;
    }

}


/* ======================= RESPONSIVE TABLET ======================== */

@media (max-width: 950px) {

    .nav-links {
        gap: 16px;
    }


    .nav-links a {
        font-size: 0.62rem;
    }


    .about-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }


    .skills-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }


    .projects-grid {
        grid-template-columns: 1fr;
    }


    .project-card {
        min-height: auto;
    }


    .contact-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }


    .contact-links {
        border-left: none;

        border-top: 1px solid var(--border);

        padding-left: 0;

        padding-top: 25px;
    }

}


/* ======================= RESPONSIVE MOBILE ======================== */

@media (max-width: 700px) {

    .nav-container {
        min-height: 60px;

        width: min(
            calc(100% - 25px),
            var(--max-width)
        );
    }


    .nav-logo {
        width: 36px;
        height: 36px;

        font-size: 0.8rem;
    }


    .nav-links {
        gap: 9px;
    }


    .nav-links a {
        font-size: 0.5rem;

        letter-spacing: 0.5px;
    }


    .hero {
        min-height: 90vh;
    }


    .hero::before {
        width: 220px;
        height: 220px;

        right: -80px;

        opacity: 0.5;
    }


    .hero-container {
        width: min(
            calc(100% - 30px),
            var(--max-width)
        );

        padding-top: 80px;
    }


    .hero-terminal {
        font-size: 0.65rem;
    }


    .hero h1 {
        font-size:
            clamp(
                2.7rem,
                14vw,
                4.2rem
            );
    }


    .hero-role {
        font-size: 0.75rem;

        letter-spacing: 2px;
    }


    .hero-description {
        font-size: 0.8rem;
    }


    .hero-actions {
        flex-direction: column;

        align-items: stretch;
    }


    .btn {
        width: 100%;
    }


    .section {
        width: min(
            calc(100% - 30px),
            var(--max-width)
        );

        padding: 80px 0;
    }


    .section-header {
        margin-bottom: 40px;
    }


    .section-header h2 {
        font-size: 1.7rem;
    }


    .section-label {
        font-size: 0.6rem;

        letter-spacing: 2px;
    }


    .skills-grid {
        grid-template-columns: 1fr;
    }


    .skill-group {
        min-height: auto;
    }


    .project-card {
        padding: 25px;
    }


    .project-card h3 {
        font-size: 1.1rem;
    }


    .project-features {
        grid-template-columns: 1fr;
    }


    .experience-card {
        padding: 25px;
    }


    .experience-header {
        flex-direction: column;

        gap: 12px;
    }


    .experience-date {
        order: -1;
    }


    .education-card {
        grid-template-columns: 1fr;

        gap: 35px;

        padding: 25px;
    }


    .footer-content {
        flex-direction: column;

        align-items: center;

        text-align: center;

        font-size: 0.55rem;
    }

}


/* ======================= ACCESSIBILITY ======================== */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }


    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        transition-duration: 0.01ms !important;
    }

}
