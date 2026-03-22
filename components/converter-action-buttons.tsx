import { Button } from '@/components/ui/button';
import { Download, Copy } from 'lucide-react';

interface ActionButtonsProps {
  onDownload: () => void;
  onCopy: () => void;
  disabled?: boolean;
  downloadLabel: string;
  copyLabel: string;
}

export function ActionButtons({ onDownload, onCopy, disabled, downloadLabel, copyLabel }: ActionButtonsProps) {
  return (
    <div className="mt-2 flex gap-3">
      {/* Download Button - Primary with gradient */}
      <Button
        onClick={onDownload}
        disabled={disabled}
        className="flex-1 h-11 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-bold neo-button transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        size="sm"
        title={disabled ? 'No content to download' : downloadLabel}
      >
        <Download className="w-4 h-4 mr-2 shrink-0" />
        <span className="hidden md:inline truncate">{downloadLabel}</span>
      </Button>
      {/* Copy Button - Secondary with neo style */}
      <Button
        variant="outline"
        onClick={onCopy}
        disabled={disabled}
        size="sm"
        className="h-11 rounded-full bg-lavender-50 text-slate-700 font-bold border-white/60 neo-button transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 min-w-[56px]"
        title={disabled ? 'No content to copy' : copyLabel}
      >
        <Copy className="w-4 h-4 shrink-0" />
        <span className="hidden md:inline ml-2 truncate">{copyLabel}</span>
      </Button>
    </div>
  );
}
