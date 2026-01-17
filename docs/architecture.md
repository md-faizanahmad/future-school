<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FutureSchool | Technical Manifesto</title>
    <style>
        :root {
            --primary: #1e3a8a;    /* Scholar Blue */
            --accent: #f59e0b;     /* Radiant Gold */
            --success: #10b981;    /* Sage Green */
            --bg: #ffffff;
            --text: #0f172a;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: var(--text);
            background: var(--bg);
            margin: 0;
            padding: 0;
        }
        header {
            background: var(--primary);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }
        h1 { font-size: 3rem; margin: 0; letter-spacing: -0.05em; }
        h2 { border-bottom: 2px solid var(--accent); display: inline-block; margin-top: 3rem; }
        .pillar {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .card {
            border: 1px solid #e2e8f0;
            padding: 1.5rem;
            border-radius: 1rem;
            transition: transform 0.3s ease;
        }
        .card:hover { transform: translateY(-5px); border-color: var(--accent); }
        .badge {
            display: inline-block;
            background: var(--accent);
            color: var(--text);
            padding: 0.2rem 0.8rem;
            border-radius: 2rem;
            font-size: 0.8rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        th, td {
            text-align: left;
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }
        th { background: #f8fafc; }
        .prompt-box {
            background: #f1f5f9;
            border-left: 5px solid var(--primary);
            padding: 1.5rem;
            font-family: monospace;
            border-radius: 0.5rem;
        }
        footer {
            text-align: center;
            padding: 4rem;
            font-size: 0.9rem;
            color: #64748b;
        }
    </style>
</head>
<body>

<header>
    <h1>FutureSchool</h1>
    <p>Technical Manifesto & Architecture Guide</p>
</header>

<div class="container">
    <section id="vision">
        <h2>1. The Vision & Purpose</h2>
        <p>To build an immersive, storytelling-driven school website that positions today’s children as the <strong>"World's Future."</strong> The site must feel like a premium digital experience while maintaining the highest standards for SEO and accessibility.</p>
    </section>

    <section id="pillars">
        <h2>2. Core Pillars (The Non-Negotiables)</h2>
        <div class="pillar">
            <article class="card">
                <span class="badge">🚀 Pillar 1</span>
                <h3>Hybrid Architecture (SEO + Motion)</h3>
                <p>We utilize a <strong>"Dual-Layer Component"</strong> strategy to ensure Google can read our content while users enjoy heavy animations.</p>
                <ul>
                    <li><strong>Server-Side Layer (RSC):</strong> All text, headings, and semantic data are rendered on the server.</li>
                    <li><strong>Client-Side Layer (RCC):</strong> Framer Motion and GSAP handle the "visual shell" without blocking data.</li>
                </ul>
            </article>

            <article class="card">
                <span class="badge">📱 Pillar 2</span>
                <h3>Mobile-First "Swipe" Experience</h3>
                <p>Instead of traditional scrolling, we implement <strong>Section Snapping</strong> and <strong>Horizontal Swiping</strong>.</p>
                <p><em>Goal: "Less scroll, more interaction."</em></p>
            </article>

            <article class="card">
                <span class="badge">✨ Pillar 3</span>
                <h3>Heavy Smooth Motion (60 FPS)</h3>
                <p>Animations must be high-impact but "liquid." Using GPU-accelerated properties (Scale, Opacity, Translate) to ensure performance on all devices.</p>
            </article>

            <article class="card">
                <span class="badge">🔍 Pillar 4</span>
                <h3>Semantic & Accessible SEO</h3>
                <p>Built for humans and bots. Proper H1-H6 hierarchy, aria-labels, and <code>prefers-reduced-motion</code> support.</p>
            </article>
        </div>
    </section>

    <section id="design">
        <h2>3. Design System & Palette</h2>
        <table>
            <thead>
                <tr>
                    <th>Token</th>
                    <th>Variable</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Scholar Blue</strong></td>
                    <td><code>--primary</code></td>
                    <td>Foundation, Trust, Headers.</td>
                </tr>
                <tr>
                    <td><strong>Radiant Gold</strong></td>
                    <td><code>--accent</code></td>
                    <td>The "Spark," CTAs, Motion Trails.</td>
                </tr>
                <tr>
                    <td><strong>Sage Green</strong></td>
                    <td><code>--success</code></td>
                    <td>Success stories, Creative sections.</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section id="rules">
        <h2>4. Developer "Handshake" Rules</h2>
        <ul>
            <li><strong>Don't Lose the SEO:</strong> Never wrap indexable text in client-only tags that hide them from crawlers.</li>
            <li><strong>Component Splitting:</strong> Keep <code>ClientComponent.tsx</code> separate from <code>ServerData.tsx</code>.</li>
            <li><strong>Light Mode Only:</strong> Do not implement dark mode; it compromises the "Bright Future" aesthetic and motion clarity.</li>
        </ul>
    </section>

    <section id="prompt">
        <h2>5. Team "Fresh Start" Prompt</h2>
        <div class="prompt-box">
            "We are building 'FutureSchool,' a high-motion storytelling school website using Next.js 15, Tailwind v4, and Framer Motion. The project is Light Mode only. Architecture: Server-side content for SEO + Client-side 'heavy motion' wrappers. Key features: Mobile-first swipe interactions, OKLCH colors (Scholar Blue/Radiant Gold), and strict semantic HTML. Prioritize 60fps performance and Google Crawler visibility."
        </div>
    </section>
</div>

<footer>
    &copy; 2026 FutureSchool Project | Proprietary Technical Documentation
</footer>

</body>
</html>
