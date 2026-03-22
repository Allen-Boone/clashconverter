import React, { memo } from 'react';

interface KernelFeaturesProps {
  features: string[];
  title: string;
  description: string;
}

export const KernelFeatures = memo(({ title, description, features }: KernelFeaturesProps) => (
  <div className="space-y-4">
    <div className="p-4 rounded-[20px] bg-gradient-to-br from-lavender-100 to-lavender-200 border border-lavender-300">
      <h4
        className="text-base font-black text-slate-700"
        style={{ fontFamily: 'Nunito, sans-serif' }}
      >
        {title}
      </h4>
      <p className="text-sm text-slate-500 mt-2 break-words font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {description}
      </p>
    </div>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-start gap-3 p-3 rounded-[16px] bg-lavender-50 border border-white/60 transition-all duration-300 hover:-translate-y-0.5 neo-card-hover"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 neo-button shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-sm font-medium text-slate-700 break-words" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
));

KernelFeatures.displayName = 'KernelFeatures';
