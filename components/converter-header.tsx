import Image from 'next/image';

interface ConverterHeaderProps {
  title: string;
  subtitle: string;
}

export function ConverterHeader({ title, subtitle }: ConverterHeaderProps) {
  return (
    <div className="text-center space-y-3 md:space-y-4 mb-4 md:mb-6">
      <Image
        src="/clash_converter.svg"
        alt={title}
        width={240}
        height={80}
        className="mx-auto max-w-[180px] md:max-w-none hover:opacity-90 transition-opacity"
      />
      <p className="text-sm md:text-base text-muted-foreground px-4 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
