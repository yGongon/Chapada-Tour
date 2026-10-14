export function parsePriceToNumber(priceStr: string): number {
  if (!priceStr) return 0;
  // Extracts digits and decimal comma, e.g. "R$ 1.900,00" -> 1900.00
  const cleaned = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
  return parseFloat(cleaned) || 0;
}

export function formatPriceBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export interface PricingCalculation {
  unitPrice: number;
  totalOriginal: number;
  hasDiscount: boolean;
  discountPercent: number;
  unitWithDiscount: number;
  totalWithDiscount: number;
  savedAmount: number;
  unitPriceFormatted: string;
  totalOriginalFormatted: string;
  unitWithDiscountFormatted: string;
  totalWithDiscountFormatted: string;
  savedAmountFormatted: string;
}

export function calculatePixDiscount(priceStr: string, count: number = 1): PricingCalculation {
  const unitPrice = parsePriceToNumber(priceStr);
  const safeCount = Math.max(1, count);
  const totalOriginal = unitPrice * safeCount;
  const hasDiscount = safeCount >= 2;
  const discountPercent = hasDiscount ? 10 : 0;
  
  const unitWithDiscount = unitPrice * 0.9;
  const totalWithDiscount = hasDiscount ? totalOriginal * 0.9 : totalOriginal;
  const savedAmount = hasDiscount ? totalOriginal - totalWithDiscount : 0;

  return {
    unitPrice,
    totalOriginal,
    hasDiscount,
    discountPercent,
    unitWithDiscount,
    totalWithDiscount,
    savedAmount,
    unitPriceFormatted: formatPriceBRL(unitPrice),
    totalOriginalFormatted: formatPriceBRL(totalOriginal),
    unitWithDiscountFormatted: formatPriceBRL(unitWithDiscount),
    totalWithDiscountFormatted: formatPriceBRL(totalWithDiscount),
    savedAmountFormatted: formatPriceBRL(savedAmount),
  };
}
