import { memo } from 'react';

interface KernelFeaturesProps {
  features: string[];
  title: string;
  description: string;
}

export const KernelFeatures = memo(({ title, description, features }: KernelFeaturesProps) => (
  <div className="space-y-3">
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1 break-words">{description}</p>
    </div>
    <ul className="space-y-1 text-sm">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2 min-w-0">
          <span className="text-muted-foreground mt-0.5 shrink-0">-</span>
          <span className="break-words">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
));

KernelFeatures.displayName = 'KernelFeatures';
