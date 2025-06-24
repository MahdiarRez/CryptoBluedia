'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  ArrowLeft,
  Bug,
  Wifi,
  Server,
  Shield,
  Clock,
} from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ERROR_COLORS = {
  primary: '#29C9E1',
  background: 'bg-[#ECFBFD]',
};

const categorizeError = (message: string) => {
  message = message.toLowerCase();

  if (message.includes('network') || message.includes('fetch')) {
    return {
      type: 'network',
      icon: Wifi,
      title: 'Network Connection Error',
      description:
        'Unable to connect to our servers. Please check your internet connection.',
      suggestions: [
        'Check your internet connection',
        'Try refreshing the page',
        "Disable VPN if you're using one",
        'Clear your browser cache',
      ],
    };
  }

  if (message.includes('server') || message.includes('500')) {
    return {
      type: 'server',
      icon: Server,
      title: 'Server Error',
      description:
        "Our servers are experiencing issues. We're working to fix this.",
      suggestions: [
        'Try again in a few minutes',
        'Check our status page',
        'Contact support if the issue persists',
      ],
    };
  }

  if (message.includes('auth') || message.includes('unauthorized')) {
    return {
      type: 'auth',
      icon: Shield,
      title: 'Authentication Error',
      description:
        'There was an issue with your authentication. Please sign in again.',
      suggestions: [
        'Sign out and sign back in',
        'Clear your browser cookies',
        'Check if your session has expired',
      ],
    };
  }

  if (message.includes('timeout') || message.includes('slow')) {
    return {
      type: 'timeout',
      icon: Clock,
      title: 'Request Timeout',
      description: 'The request took too long to complete.',
      suggestions: [
        'Try again with a better connection',
        'Reduce the amount of data being processed',
        'Contact support if this continues',
      ],
    };
  }

  return {
    type: 'generic',
    icon: Bug,
    title: 'Application Error',
    description: 'An unexpected error occurred in the application.',
    suggestions: [
      'Try refreshing the page',
      'Clear your browser cache',
      'Try using a different browser',
      'Contact support with the error details',
    ],
  };
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [isRetrying, setIsRetrying] = useState(false);
  const [errorDetails, setErrorDetails] = useState<ReturnType<
    typeof categorizeError
  > | null>(null);

  useEffect(() => {
    setErrorDetails(categorizeError(error?.message || ''));

    console.error('Application Error:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  }, [error]);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      reset();
    } catch (e) {
      console.error('Retry failed:', e);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleReportError = () => {
    const mailtoLink = `mailto:support@bluedia.com?subject=Error Report&body=${encodeURIComponent(
      `Error Details:\n${JSON.stringify(
        {
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        },
        null,
        2
      )}`
    )}`;
    window.location.href = mailtoLink;
  };

  if (!errorDetails) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${ERROR_COLORS.background}`}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#29C9E1]"></div>
      </div>
    );
  }

  const Icon = errorDetails.icon;

  return (
    <div
      className={`min-h-dvh py-24 flex items-center justify-center p-4 bg-WHITE`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 text-center border border-white/30"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 180 }}
          className="w-20 h-20 bg-[#29C9E1] rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {errorDetails.title}
        </h1>
        <p className="text-gray-600 mb-6">{errorDetails.description}</p>

        <details className="mb-4 text-left text-sm bg-gray-50 rounded-lg p-4">
          <summary className="font-medium cursor-pointer">
            Technical Details
          </summary>
          <div className="mt-2">
            <div>
              <strong>Error:</strong> {error.message}
            </div>
            {error.digest && (
              <div>
                <strong>Error ID:</strong> {error.digest}
              </div>
            )}
            <div>
              <strong>Time:</strong> {new Date().toLocaleString()}
            </div>
          </div>
        </details>

        <div className="text-left mb-6">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#29C9E1]" /> What you can
            try:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {errorDetails.suggestions.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="bg-[#29C9E1] text-white px-6 py-3 rounded-lg hover:brightness-110 disabled:opacity-50"
          >
            <RefreshCw
              className={`w-4 h-4 inline mr-2 ${isRetrying ? 'animate-spin' : ''}`}
            />
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </button>
          <Link
            href="/"
            className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            <Home className="w-4 h-4 inline mr-2" /> Go Home
          </Link>
        </div>

        <div className="mt-4 text-xs text-gray-400">
          Powered by Bluedia • Cryptocurrency Analysis Platform
        </div>
      </motion.div>
    </div>
  );
}
