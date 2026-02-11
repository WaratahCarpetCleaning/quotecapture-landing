const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SAAS_SIGNUP_URL = import.meta.env.VITE_SAAS_SIGNUP_URL || 'https://servicebot-saas-mvp.vercel.app';

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getSignupUrl(email) {
  const url = new URL(SAAS_SIGNUP_URL);
  if (email) {
    url.searchParams.set('email', email);
  }
  return url.toString();
}

export async function saveLandingLead(email, source) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase not configured — skipping lead save');
    return { ok: false };
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/landing_leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, source }),
    });

    return { ok: res.ok };
  } catch (err) {
    console.error('Failed to save lead:', err);
    return { ok: false };
  }
}
