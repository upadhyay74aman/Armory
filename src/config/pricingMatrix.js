export const pricingMatrix = {
  tiers: {
    basic: { baseRate: 15 },
    pro: { baseRate: 49 },
    enterprise: { baseRate: 199 }
  },
  currencies: {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    INR: { symbol: '₹', rate: 83.5 }
  }
};

export const computePrice = (tierKey, currencyKey, isAnnual) => {
  const { baseRate } = pricingMatrix.tiers[tierKey];
  const { rate } = pricingMatrix.currencies[currencyKey];
  
  let finalPrice = baseRate * rate;
  if (isAnnual) finalPrice *= 0.8; // 20% flat annual discount
  
  return Math.floor(finalPrice).toLocaleString('en-US'); 
};