import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const { name, email, message } = data;

  // Simple validation (replace this with real logic or email service)
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400
    });
  }

  console.log('New contact form submission:', { name, email, message });

  // Simulate processing (e.g. emailing, database, etc.)
  return new Response(JSON.stringify({ success: true }), {
    status: 200
  });
};
