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
    <div className="mt-3 md:mt-4 flex gap-2">
      <Button
        onClick={onDownload}
        disabled={disabled}
        className="flex-1 text-sm min-w-0"
        size="sm"
        title={disabled ? 'No content to download' : downloadLabel}
      >
        <Download className="w-4 h-4 mr-1 md:mr-2 shrink-0" />
        <span className="hidden md:inline truncate">{downloadLabel}</span>
      </Button>
      <Button
        variant="outline"
        onClick={onCopy}
        disabled={disabled}
        size="sm"
        className="min-w-0"
        title={disabled ? 'No content to copy' : copyLabel}
      >
        <Copy className="w-4 h-4 shrink-0" />
        <span className="hidden md:inline ml-1 md:ml-2 truncate">{copyLabel}</span>
      </Button>
    </div>
  );
}
