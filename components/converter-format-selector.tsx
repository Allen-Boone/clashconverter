import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cpu, Info } from 'lucide-react';
import { FormatType } from '@/lib/parser';

interface FormatSelectorProps {
  value: FormatType;
  onChange: (value: FormatType) => void;
  options: Array<{ value: FormatType; label: string }>;
  infoButton?: React.ReactNode;
}

export function FormatSelector({ value, onChange, options, infoButton }: FormatSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 neo-button">
        <Cpu className="w-4 h-4 text-white" />
      </div>
      <Select value={value} onValueChange={(val) => onChange(val as FormatType)} aria-label="Select format">
        <SelectTrigger className="w-full min-w-[120px] max-w-[160px] h-9 rounded-full bg-lavender-50 border-white/60 text-sm font-semibold text-slate-700 neo-pressed focus:ring-2 focus:ring-lavender-500/30 focus:bg-white transition-all duration-300">
          <SelectValue className="truncate" />
        </SelectTrigger>
        <SelectContent className="rounded-[20px] border-white/60 bg-lavender-50 neo-card">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="rounded-[12px] mb-1 font-medium text-slate-700 hover:bg-lavender-200 hover:text-lavender-600 transition-colors duration-200 last:mb-0"
            >
              <span className="truncate block max-w-[200px]">{option.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {infoButton}
    </div>
  );
}
