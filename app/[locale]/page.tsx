import { Converter } from '@/components/converter';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Info, Download } from 'lucide-react';
import { JSONLDStructuredData } from '@/components/seo/seo-head';
import { locales } from '@/i18n';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Validate locale and set request locale for next-intl
  if (!locales.includes(locale as any)) {
    return <div>Unsupported locale</div>;
  }

  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 items-center justify-between px-4 md:px-8 lg:max-w-6xl">
          <div className="flex items-center gap-2">
            <Image src="/clash_converter_linear.svg" alt="ClashConverter" width={180} height={60} className="max-w-[140px] md:max-w-none" />
          </div>
          <nav className="flex items-center gap-1 md:gap-1.5" aria-label="Main navigation">
            <Link href="/resources">
              <button className="group flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-md hover:bg-accent min-h-10 min-w-10" aria-label={t('resources.menuTitle')}>
                <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">{t('resources.menuTitle')}</span>
              </button>
            </Link>
            <Link href="/about">
              <button className="group flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-md hover:bg-accent min-h-10 min-w-10" aria-label={t('about')}>
                <Info className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">{t('about')}</span>
              </button>
            </Link>
            <div className="w-px h-6 bg-border mx-0.5 hidden sm:block" aria-hidden="true" />
            <LanguageToggle />
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main>
        <Converter />
        <JSONLDStructuredData locale={locale} type="all" pageType="home" />
      </main>
    </div>
  );
}
