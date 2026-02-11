import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { isValidEmail, getSignupUrl, saveLandingLead } from '@/lib/supabase';

function EmailCaptureForm({ source, variant = 'light' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const isDark = variant === 'dark';

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Save lead — never block conversion even if this fails
    await saveLandingLead(email, source);

    setStatus('success');

    // Redirect to SaaS signup after brief delay
    setTimeout(() => {
      window.open(getSignupUrl(email), '_blank', 'noopener,noreferrer');
    }, 800);
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 justify-center lg:justify-start">
        <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-300' : 'text-green-600'}`} />
        <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
          You're in! Redirecting to setup...
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={`flex-1 px-4 py-3 rounded-lg text-base border focus:outline-none focus:ring-2 transition-colors ${
            isDark
              ? 'bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-white/30'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-[#2563eb]/30'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 ${
            isDark
              ? 'bg-white text-[#2563eb] hover:bg-blue-50'
              : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white'
          }`}
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Start Free
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {errorMsg && (
        <p className={`mt-2 text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>{errorMsg}</p>
      )}
      <p className={`mt-2 text-xs ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>
        Free forever. No credit card required.
      </p>
    </form>
  );
}

export default EmailCaptureForm;
