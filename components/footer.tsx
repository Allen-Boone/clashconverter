"use client"
import { useTranslations } from 'next-intl';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'clashconverter@gmail.com';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className="w-full py-12 md:py-16 bg-[#0a0a0c] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">

          {/* Left Section - Brand & Info */}
          <div className="flex flex-col gap-6">
            {/* Brand Mark */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#00B8D9] flex items-center justify-center">
                <div className="w-4 h-4 bg-white/90 rounded-sm" />
              </div>
              <span
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ClashConverter
              </span>
            </div>

            {/* Description */}
            <p
              className="text-[#6B6B6F] text-sm leading-relaxed max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('description') || 'Professional proxy configuration converter. Transform proxy protocols into Clash YAML and Sing-Box JSON formats instantly.'}
            </p>

            {/* Copyright - Mono styled */}
            <div className="flex items-center gap-4 pt-2">
              <span
                className="text-xs text-[#6B6B6F] uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                © {currentYear}
              </span>
              <div className="h-px w-8 bg-white/10" />
              <span
                className="text-xs text-[#6B6B6F] uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {t('rights')}
              </span>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex flex-col gap-4 md:items-end">
            {/* Section Label */}
            <span
              className="text-[10px] text-[#6B6B6F] uppercase tracking-[0.2em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t('connect')}
            </span>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Email Button */}
              <button
                onClick={() => setShowEmail(true)}
                className="group relative flex items-center gap-3 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 overflow-hidden"
                type="button"
                aria-label={showEmail ? 'Hide contact email' : 'Show contact email'}
              >
                {/* Hover accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Mail className="w-4 h-4 text-[#6B6B6F] group-hover:text-[#00D9FF] transition-colors duration-300" />
                <span className="text-sm font-medium text-[#9A9A9E] group-hover:text-white transition-colors duration-300">
                  {showEmail ? CONTACT_EMAIL : t('contact')}
                </span>
              </button>

              {/* GitHub Button */}
              <a
                href="https://github.com/sunway910/clashconverter"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Github className="w-4 h-4 text-[#6B6B6F] group-hover:text-[#00D9FF] transition-colors duration-300" />
                <span className="text-sm font-medium text-[#9A9A9E] group-hover:text-white transition-colors duration-300">
                  GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6B6F] group-hover:text-[#00D9FF] transition-all duration-300 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Technical Divider */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Status Indicator */}
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
              <span
                className="text-xs text-[#6B6B6F] uppercase tracking-wider"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                System Operational
              </span>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-6">
              <span
                className="text-xs text-[#6B6B6F]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Built with Next.js 16
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
