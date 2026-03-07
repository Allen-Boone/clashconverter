import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ItemCountProps {
  count: number;
  onClear: () => void;
  clearLabel: string;
  countLabel: string;
}

export function ItemCount({ count, onClear, clearLabel, countLabel }: ItemCountProps) {
  return (
    <div className="mt-3 md:mt-4 flex items-center justify-between gap-2 text-xs md:text-sm text-muted-foreground">
      <span className="truncate flex-1 min-w-0">{countLabel.replace('{count}', String(count))}</span>
      {count > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="text-xs shrink-0 h-7 px-2 hover:bg-destructive/10 hover:text-destructive transition-colors"
          title="Clear all items"
          type="button"
        >
          <X className="w-3.5 h-3.5 mr-1" />
          {clearLabel}
        </Button>
      )}
    </div>
  );
}
