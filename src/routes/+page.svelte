<style>
  .home {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 1.5rem;
    font-family: system-ui, sans-serif;
    line-height: 1.7;
    color: #1f2937;
  }

  /* Make the banner responsive */
  .home img {
    width: 100%;           /* fills container width */
    height: auto;           /* keeps proportions */
    display: block;         /* removes inline gaps */
    border-radius: 8px;     /* optional: soft corners */
    object-fit: cover;      /* crops nicely on narrow screens */
  }

  /* Optional: make image behave like a banner */
  @media (max-width: 600px) {
    .home img {
      height: 160px;        /* fixed banner height on phones */
      object-fit: cover;    /* crop nicely */
    }
  }

  .home h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 1.5rem 0;
    color: #1e40af;
  }

  @media (max-width: 600px) {
    .home h1 {
      font-size: 1.8rem; /* smaller heading on phones */
    }
  }

  .home ul {
    margin-left: 1.2rem;
    list-style: disc;
  }

  .home blockquote {
    font-style: italic;
    margin-top: 2.5rem;
    border-left: 4px solid #1e40af;
    padding-left: 1rem;
    color: #4b5563;
  }
</style>

<section class="home">
  <img src="/gmp-home-banner4-920x210.webp" alt="Construction banner">
  <h1>WELCOME</h1>

  <p>
    At <strong>Goodeve Structural Inc.</strong>, we deliver trusted structural engineering solutions for
    buildings of all shapes, sizes, and complexities. Since 1979, we’ve helped shape Ottawa’s skyline through
    innovative, cost-effective design and a strong commitment to quality.
  </p>

  <p>
    We work hand-in-hand with architects, developers, and contractors to provide responsive service,
    clear communication, and technically sound engineering — from concept to construction.
  </p>

  <p>
    With decades of experience in <strong>reinforced concrete</strong>,
    <strong>structural steel</strong>, and <strong>wood construction</strong>, our team ensures every
    structure is safe, durable, and efficient.
  </p>

  <p>
    Our firm is organized into three specialized departments:
  </p>

  <ul>
    <li><strong>Design</strong></li>
    <li><strong>Building Technology</strong></li>
    <li><strong>Construction</strong></li>
  </ul>

  <p>
    This structure allows us to bring focused expertise to every stage of your project.
  </p>

  <blockquote>
    “We shape our buildings; thereafter, they shape us.”<br />
    — Winston Churchill
  </blockquote>
</section>
