import { useState, memo } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, Info } from 'lucide-react';
import { PreviewEditor, type LanguageType } from '@/components/preview/preview-editor';
import { FormatSelector } from './converter-format-selector';
import { ItemCount } from './converter-item-count';
import { ProtocolCards } from './converter-protocol-cards';
import { FormatType } from '@/lib/parser';

interface InputSectionProps {
  input: string;
  inputFormat: FormatType;
  inputLanguage: LanguageType;
  inputPlaceholder: string;
  itemCount: number;
  onInputChange: (value: string) => void;
  onFormatChange: (value: FormatType) => void;
  onClear: () => void;
  formatOptions: Array<{ value: FormatType; label: string }>;
  labels: {
    inputLabel: string;
    supportedProtocols: string;
    formatTypes: Record<string, string>;
    clear: string;
    itemsFound: string;
  };
}

export const InputSection = memo(({
  input,
  inputFormat,
  inputLanguage,
  inputPlaceholder,
  itemCount,
  onInputChange,
  onFormatChange,
  onClear,
  formatOptions,
  labels,
}: InputSectionProps) => {
  const t = useTranslations();
  const [dialogOpen, setDialogOpen] = useState(false);

  const infoButton = (
    <DialogTrigger asChild>
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
        <Info className="w-4 h-4" />
      </Button>
    </DialogTrigger>
  );

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle
              className="flex items-center gap-2 cursor-pointer group select-none"
              onClick={() => setDialogOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setDialogOpen(true);
                }
              }}
              title="Click to view supported protocols"
            >
              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="group-hover:underline group-focus-visible:underline decoration-muted-foreground underline-offset-4 transition-all">
                {labels.inputLabel}
              </span>
            </CardTitle>
            <FormatSelector
              value={inputFormat}
              onChange={onFormatChange}
              options={formatOptions}
              infoButton={infoButton}
            />
          </div>
        </CardHeader>
        <CardContent>
          <PreviewEditor
            value={input}
            language={inputLanguage}
            height="300px"
            placeholder={inputPlaceholder}
            onChange={onInputChange}
          />
          <ItemCount
            count={itemCount}
            onClear={onClear}
            clearLabel={labels.clear}
            countLabel={labels.itemsFound}
          />
        </CardContent>
      </Card>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t('dialog.protocolsTitle')}</DialogTitle>
          <DialogDescription>{t('dialog.protocolsDescription')}</DialogDescription>
        </DialogHeader>
        <ProtocolCards />
      </DialogContent>
    </Dialog>
  );
});

InputSection.displayName = 'InputSection';
