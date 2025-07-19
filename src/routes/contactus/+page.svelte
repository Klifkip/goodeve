<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  let name = '';
  let email = '';
  let message = '';
  let success = false;
  let error = '';

  async function submitForm() {
    error = '';
    const res = await fetch('/contactus', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      name = '';
      email = '';
      message = '';
      success = true;
    } else {
      const data = await res.json();
      error = data?.error ?? 'Something went wrong.';
      success = false;
    }
  }
</script>

<style>
  :global(body) {
    background-color: var(--bg);
    color: var(--text);
    transition: all 0.3s ease;
  }

  :root {
    --bg: #ffffff;
    --text: #1f2937;
    --accent: #1e40af;
    --border: #e5e7eb;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #111827;
      --text: #e5e7eb;
      --accent: #60a5fa;
      --border: #374151;
    }
  }

  .contact {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 1.5rem;
    font-family: system-ui, sans-serif;
  }

  h1 {
    font-size: 2.2rem;
    color: var(--accent);
    margin-bottom: 1rem;
    text-align: center;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background-color: var(--bg);
    color: var(--text);
  }

  label {
    font-weight: 500;
    display: block;
    margin-bottom: 0.3rem;
  }

  button {
    background-color: var(--accent);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  .info-item {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  .map {
    margin-top: 2rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
  }

  .message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
  }

  .success {
    background-color: #d1fae5;
    color: #065f46;
  }

  .error {
    background-color: #fee2e2;
    color: #991b1b;
  }
</style>

<section class="contact">
  <h1>Contact Us</h1>

  <form on:submit|preventDefault={submitForm}>
    <div class="form-group">
      <label for="name"><Icon icon="mdi:account-outline" /> Name</label>
      <input id="name" bind:value={name} required />
    </div>

    <div class="form-group">
      <label for="email"><Icon icon="mdi:email-outline" /> Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>

    <div class="form-group">
      <label for="message"><Icon icon="mdi:message-text-outline" /> Message</label>
      <textarea id="message" bind:value={message} required></textarea>
    </div>

    <button type="submit">
      <Icon icon="mdi:send" style="margin-right: 0.4rem" />
      Send Message
    </button>

    {#if success}
      <div class="message success">✅ Your message was sent successfully.</div>
    {/if}

    {#if error}
      <div class="message error">❌ {error}</div>
    {/if}
  </form>

  <div class="contact-info" style="margin-top: 2rem">
    <div class="info-item">
      <Icon icon="mdi:office-building-marker" />
      <div>
        <strong>Goodeve Structural Inc.</strong><br />
        77 Auriga Drive, Unit 18<br />
        Ottawa, ON K2E 7Z7
      </div>
    </div>

    <div class="info-item">
      <Icon icon="mdi:phone" />
      <div><strong>Phone:</strong> (613) 226-4558</div>
    </div>

    <div class="info-item">
      <Icon icon="mdi:fax" />
      <div><strong>Fax:</strong> (613) 226-4959</div>
    </div>

    <div class="info-item">
      <Icon icon="mdi:email" />
      <div>
        <strong>Email:</strong>
        <a href="mailto:mail@goodevestructural.ca">mail@goodevestructural.ca</a>
      </div>
    </div>
  </div>

  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.690835060209!2d-75.7183845!3d45.343223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce095a1c9dc3e7%3A0xf4e395c2a6d94c6!2s77%20Auriga%20Dr%2C%20Ottawa%2C%20ON%20K2E%207Z7%2C%20Canada!5e0!3m2!1sen!2sca!4v1721058812345"
      width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
