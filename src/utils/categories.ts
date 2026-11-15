export interface ProjectCategory {
    label: string;
    key: string;
    bg: string;
    fg: string;
    border: string;
}

/**
 * Maps category terms to distinct sticker color palettes.
 */
function getCategoryColor(key: string): { bg: string; fg: string; border: string } {
    const k = key.toLowerCase();

    if (k.includes('power') || k.includes('puissance') || k.includes('güç')) {
        return { bg: 'var(--t-yellow)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('embedded') || k.includes('embarqué') || k.includes('gömülü')) {
        return { bg: 'var(--blue)', fg: 'var(--white)', border: '2px solid var(--white)' };
    }
    if (k.includes('robot') || k.includes('robotik')) {
        return { bg: 'var(--green)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('autonomous') || k.includes('autonome') || k.includes('otonom')) {
        return { bg: 'var(--t-green)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('instrumentation') || k.includes('ölçüm') || k.includes('mesure') || k.includes('sensor')) {
        return { bg: 'var(--t-blue)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('automation') || k.includes('automatisation') || k.includes('otomasyon')) {
        return { bg: 'var(--t-pink)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('iot') || k.includes('internet') || k.includes('nesnelerin')) {
        return { bg: 'var(--p-blue)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('vision') || k.includes('görme') || k.includes('image')) {
        return { bg: 'var(--p-yellow)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }
    if (k.includes('ai') || k.includes('ia') || k.includes('yapay zeka')) {
        return { bg: 'var(--red)', fg: 'var(--white)', border: '2px solid var(--white)' };
    }
    if (k.includes('control') || k.includes('contrôle') || k.includes('kontrol')) {
        return { bg: 'var(--p-green)', fg: 'var(--ink)', border: '2px solid var(--white)' };
    }

    return { bg: 'var(--surface-2)', fg: 'var(--ink)', border: '2px solid var(--ink)' };
}

/**
 * Splits composite category strings (e.g. "Power Electronics & Embedded Systems")
 * into discrete fixed categories and provides designated colors.
 */
export function parseProjectCategories(categoryStr: string): ProjectCategory[] {
    if (!categoryStr || typeof categoryStr !== 'string') return [];

    // Split on '&', ' and ', ' et ', ' ve '
    const parts = categoryStr
        .split(/\s*(?:&|\bet\b|\bve\b)\s*/i)
        .map((p) => p.trim())
        .filter(Boolean);

    return parts.map((part) => {
        // Capitalize first character of each word for clean presentation
        const capitalized = part.charAt(0).toUpperCase() + part.slice(1);
        const color = getCategoryColor(part);

        return {
            label: capitalized,
            key: part.toLowerCase(),
            bg: color.bg,
            fg: color.fg,
            border: color.border,
        };
    });
}
