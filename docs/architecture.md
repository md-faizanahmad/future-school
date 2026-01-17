<section>
  <header>
    <h1>FutureSchool Technical Manifesto</h1>
    <p><em>Immersive Storytelling & High-Performance Education UI</em></p>
  </header>

  <hr />

  <article>
    <h2>1. The Vision & Purpose</h2>
    <p>
      To build an immersive, storytelling-driven school website that positions today’s children as the <strong>"World's Future."</strong> The site must feel like a premium digital experience while maintaining the highest standards for SEO and accessibility.
    </p>
  </article>

  <article>
    <h2>2. Core Pillars (The Non-Negotiables)</h2>
    --------------------------------------------------
    <h3> Pillar 1: Hybrid Architecture (SEO + Motion)</h3>
    <p>We utilize a <strong>"Dual-Layer Component"</strong> strategy:</p>
    <ul>
      <li><strong>Server-Side Layer (RSC):</strong> All text, headings, and semantic data are rendered on the server for instant crawler indexing.</li>
      <li><strong>Client-Side Layer (RCC):</strong> Framer Motion and GSAP handle the "visual shell" around the content.</li>
    </ul>
----------------------------------------
    <h3>📱 Pillar 2: Mobile-First "Swipe" Experience</h3>
    <p>Implementation of <strong>Section Snapping</strong> and <strong>Horizontal Swiping</strong> to replace traditional long-scrolling. <em>Goal: Less scroll, more interaction.</em></p>
-------------------------------------------
    <h3>✨ Pillar 3: Heavy Smooth Motion (60 FPS)</h3>
    <p>Use of <code>will-change-transform</code> and GPU-accelerated properties only. Animations must be "liquid" without lagging on mobile devices.</p>
--------------------------------------
    <h3>🔍 Pillar 4: Semantic & Accessible SEO</h3>
    <p>Proper <code>h1</code>-<code>h6</code> hierarchy, <code>rel</code> attributes, <code>hreflang</code>, and <code>aria-label</code> support for all animated elements.</p>
  </article>

  <article>
    <h2>3. Design System & Palette (Light Mode)</h2>
    -----------------------------------------------
    <table border="1">
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
        <tr>
          <td><strong>Canvas White</strong></td>
          <td><code>--background</code></td>
          <td>High-clarity background for motion.</td>
        </tr>
      </tbody>
    </table>
  </article>

  <article>
    <h2>4. Developer "Handshake" Rules</h2>
    <ul>
      <li><strong>SEO Integrity:</strong> Never wrap primary text in client-only tags that hide them from crawlers.</li>
      <li><strong>Mobile Testing:</strong> Test "Swipe" logic on physical devices before committing.</li>
      <li><strong>File Splitting:</strong> Maintain a clear boundary between <code>ClientWrapper.tsx</code> and <code>ServerData.tsx</code>.</li>
    </ul>
  </article>

  <aside>
    <h2>5. Team "Fresh Start" Prompt</h2>
    <blockquote>
      "We are building 'FutureSchool,' a high-motion storytelling school website using Next.js 15, Tailwind v4, and Framer Motion. The project is Light Mode only. Architecture: Server-side content for SEO + Client-side 'heavy motion' wrappers. Key features: Mobile-first swipe interactions, OKLCH colors (Scholar Blue/Radiant Gold), and strict semantic HTML. Prioritize 60fps performance and Google Crawler visibility."
    </blockquote>
  </aside>

  <footer>
    <p><small>Proprietary Technical Documentation &copy; 2026 FutureSchool Team</small></p>
  </footer>
</section>
