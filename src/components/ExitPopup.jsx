import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

const SESSION_KEY = 'sparkquote_exit_popup_shown';
const MOBILE_IDLE_MS = 30000;

function ExitPopup() {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(true);
  }, []);

  const close = useCallback(() => setVisible(false), []);

  // Desktop: mouse leaves viewport (clientY <= 0)
  useEffect(() => {
    function handleMouseLeave(e) {
      if (e.clientY <= 0) show();
    }
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [show]);

  // Mobile: 30s idle (resets on touch/scroll)
  useEffect(() => {
    let timer = null;

    function resetTimer() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(show, MOBILE_IDLE_MS);
    }

    // Only set up idle detection on touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      resetTimer();
      window.addEventListener('touchstart', resetTimer, { passive: true });
      window.addEventListener('scroll', resetTimer, { passive: true });
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('touchstart', resetTimer);
      window.removeEventListener('scroll', resetTimer);
    };
  }, [show]);

  // Escape key to close
  useEffect(() => {
    if (!visible) return;
    function handleKey(e) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [visible, close]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 animate-fade-in" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-slide-in-from-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Wait — don't miss out!
          </h3>
          <p className="text-gray-600">
            Start capturing leads in 60 seconds. Enter your email to get started free.
          </p>
        </div>

        <EmailCaptureForm source="exit-popup" variant="light" />
      </div>
    </div>
  );
}

export default ExitPopup;
