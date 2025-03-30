export function formatCurrency(
    amount: number,
    currency: string,
    locale: string,
    options: Intl.NumberFormatOptions = {}
): string {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        ...options,
    });

    return formatter.format(amount);
}

export function getCurrencySymbol (locale: string, currency: string) {
    return (0).toLocaleString(
      locale,
      {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }
    ).replace(/\d/g, '').trim()
}