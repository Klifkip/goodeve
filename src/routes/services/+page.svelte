<script>
  import Icon from '@iconify/svelte';
</script>

<style>
  :root {
    --bg: #ffffff;
    --text: #1f2937;
    --accent: #1e40af;
    --light: #f3f4f6;
    --border: #e5e7eb;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0f172a;
      --text: #e2e8f0;
      --accent: #60a5fa;
      --light: #1e293b;
      --border: #334155;
    }
  }

  .services {
    background-color: var(--bg);
    color: var(--text);
    margin: 0.5rem; /* Reduced from 1rem */
    padding: 1rem;
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    border-radius: 8px;
  }

  .services h1 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem; /* Reduced from 1.5rem */
    color: var(--accent);
    text-align: center;
  }

  .section {
    margin-bottom: 0.75rem; /* Reduced from 1.5rem */
    background: var(--light);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .section:hover {
    transform: translateY(-4px);
  }

  .section h2 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem; /* Reduced from 0.5rem */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent);
  }

  .section p {
    margin-top: 0.25rem; /* Reduced from 0.5rem */
    font-size: 0.875rem;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  /* Desktop and larger screens */
  @media (min-width: 768px) {
    .services {
      max-width: 900px;
      margin: 1rem auto; /* Reduced from 2rem */
      padding: 2rem;
    }

    .services h1 {
      font-size: 2.75rem;
      margin-bottom: 1rem; /* Reduced from 2rem */
    }

    .section {
      margin-bottom: 1rem; /* Reduced from 2.5rem */
      padding: 1.5rem;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    }

    .section h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem; /* Reduced from default */
    }

    .section p {
      font-size: 1rem;
      margin-top: 0.5rem; /* Reduced from default */
    }

    .icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
</style>

<section class="services">
  <h1>Structural Engineering Services</h1>

  <div class="section">
    <h2>
      <Icon icon="mdi:lightbulb-outline" class="icon" />
      Advanced Design Solutions
    </h2>
    <p>
      Goodeve Structural Inc. delivers innovative structural engineering using cutting-edge software, including proprietary in-house tools. 
      Our designs comply with IBC, ASCE, and local codes, optimizing structural integrity and cost-efficiency for commercial, residential, industrial, and institutional projects.
    </p>
    <p>
      Our licensed Professional Engineers and technologists bring expertise and ingenuity to address complex design challenges.
    </p>
  </div>

  <div class="section">
    <h2>
      <Icon icon="mdi:draw" class="icon" />
      Comprehensive Construction Documents
    </h2>
    <p>
      We produce precise AutoCAD drawings and Autodesk Revit® BIM models for seamless coordination with architects and contractors.
    </p>
    <p>
      Our 3D models enable clash detection, material takeoffs, and integration with MEP systems — delivering accurate plans, sections, and specifications that streamline construction and ensure compliance.
    </p>
  </div>

  <div class="section">
    <h2>
      <Icon icon="mdi:clipboard-check-outline" class="icon" />
      On-Site Supervision & Quality Assurance
    </h2>
    <p>
      Our field engineers provide on-site inspections to monitor construction, ensure design compliance, and resolve issues promptly.
    </p>
    <p>
      We conduct final inspections and issue structural certifications, guaranteeing safe, high-quality structures built to approved specifications.
    </p>
  </div>

  <div class="section">
    <h2>
      <Icon icon="mdi:handshake-outline" class="icon" />
      Our Commitment
    </h2>
    <p>
      We are dedicated to excellence, safety, and reliability — ensuring every client receives personalized, responsive service and solutions that stand the test of time.
    </p>
  </div>
</section>
