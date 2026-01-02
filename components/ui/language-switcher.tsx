"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const t = useTranslations("languageSwitcher");

  const handleLocaleChange = (newLocale: Locale) => {
    // Définir le cookie de préférence
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    // Rafraîchir la page pour appliquer la nouvelle langue
    router.refresh();
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-2">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`flex items-center gap-3 py-3 px-3 rounded-lg transition-colors ${
              locale === loc
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <span className="text-xl">{localeFlags[loc]}</span>
            <span className="font-medium">{localeNames[loc]}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{localeFlags[locale]}</span>
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`flex items-center gap-3 cursor-pointer ${
              locale === loc ? "bg-accent" : ""
            }`}
          >
            <span className="text-lg">{localeFlags[loc]}</span>
            <span>{localeNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
