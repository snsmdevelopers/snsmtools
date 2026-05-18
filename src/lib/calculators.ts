// ─── EMI Calculator ───────────────────────────────────────────────────────────

export interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface EMIResult {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  amortization: AmortizationRow[];
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  const r = annualRate / 12 / 100;

  let emi: number;
  if (r === 0) {
    emi = principal / tenureMonths;
  } else {
    emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  }

  const totalAmount = emi * tenureMonths;
  const totalInterest = totalAmount - principal;

  const amortization: AmortizationRow[] = [];
  let balance = principal;
  for (let month = 1; month <= tenureMonths; month++) {
    const interest = balance * r;
    const principalPaid = emi - interest;
    balance = Math.max(0, balance - principalPaid);
    amortization.push({
      month,
      emi: Math.round(emi),
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.round(balance),
    });
  }

  return {
    emi: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    amortization,
  };
}

// ─── SIP Calculator ───────────────────────────────────────────────────────────

export interface SIPYearWise {
  year: number;
  invested: number;
  returns: number;
  total: number;
}

export interface SIPResult {
  invested: number;
  returns: number;
  total: number;
  yearWise: SIPYearWise[];
}

export function calculateSIP(
  monthlyAmount: number,
  annualReturn: number,
  years: number
): SIPResult {
  const r = annualReturn / 12 / 100;
  const n = years * 12;

  const total = monthlyAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthlyAmount * n;
  const returns = total - invested;

  const yearWise: SIPYearWise[] = [];
  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const yearTotal =
      monthlyAmount * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    const yearInvested = monthlyAmount * months;
    yearWise.push({
      year: y,
      invested: Math.round(yearInvested),
      returns: Math.round(yearTotal - yearInvested),
      total: Math.round(yearTotal),
    });
  }

  return {
    invested: Math.round(invested),
    returns: Math.round(returns),
    total: Math.round(total),
    yearWise,
  };
}

// ─── FD Calculator ────────────────────────────────────────────────────────────

export interface FDResult {
  maturity: number;
  interest: number;
}

export function calculateFD(
  principal: number,
  annualRate: number,
  years: number,
  compoundingFrequency: number = 4
): FDResult {
  const r = annualRate / 100;
  const n = compoundingFrequency;
  const t = years;
  const maturity = principal * Math.pow(1 + r / n, n * t);
  return {
    maturity: Math.round(maturity),
    interest: Math.round(maturity - principal),
  };
}

// ─── Income Tax Calculator ────────────────────────────────────────────────────

export type AgeGroup = "below60" | "60to80" | "above80";
export type TaxRegime = "old" | "new";

export interface SlabBreakdown {
  slab: string;
  taxableAmount: number;
  taxRate: number;
  tax: number;
}

export interface IncomeTaxResult {
  tax: number;
  cess: number;
  total: number;
  effectiveRate: number;
  slabBreakdown: SlabBreakdown[];
}

export function calculateIncomeTax(
  income: number,
  ageGroup: AgeGroup = "below60",
  regime: TaxRegime = "new"
): IncomeTaxResult {
  let slabs: { limit: number; rate: number; label: string }[];
  let exemptionLimit: number;

  if (regime === "new") {
    // New regime FY 2024-25 (with standard deduction ₹75,000)
    const taxableIncome = Math.max(0, income - 75000);
    exemptionLimit = 3_00_000;
    slabs = [
      { limit: 3_00_000, rate: 0, label: "Up to ₹3L" },
      { limit: 7_00_000, rate: 5, label: "₹3L – ₹7L" },
      { limit: 10_00_000, rate: 10, label: "₹7L – ₹10L" },
      { limit: 12_00_000, rate: 15, label: "₹10L – ₹12L" },
      { limit: 15_00_000, rate: 20, label: "₹12L – ₹15L" },
      { limit: Infinity, rate: 30, label: "Above ₹15L" },
    ];
    return computeTax(taxableIncome, slabs, income);
  }

  // Old regime
  if (ageGroup === "below60") {
    exemptionLimit = 2_50_000;
    slabs = [
      { limit: 2_50_000, rate: 0, label: "Up to ₹2.5L" },
      { limit: 5_00_000, rate: 5, label: "₹2.5L – ₹5L" },
      { limit: 10_00_000, rate: 20, label: "₹5L – ₹10L" },
      { limit: Infinity, rate: 30, label: "Above ₹10L" },
    ];
  } else if (ageGroup === "60to80") {
    exemptionLimit = 3_00_000;
    slabs = [
      { limit: 3_00_000, rate: 0, label: "Up to ₹3L" },
      { limit: 5_00_000, rate: 5, label: "₹3L – ₹5L" },
      { limit: 10_00_000, rate: 20, label: "₹5L – ₹10L" },
      { limit: Infinity, rate: 30, label: "Above ₹10L" },
    ];
  } else {
    exemptionLimit = 5_00_000;
    slabs = [
      { limit: 5_00_000, rate: 0, label: "Up to ₹5L" },
      { limit: 10_00_000, rate: 20, label: "₹5L – ₹10L" },
      { limit: Infinity, rate: 30, label: "Above ₹10L" },
    ];
  }

  return computeTax(income, slabs, income);
}

function computeTax(
  taxableIncome: number,
  slabs: { limit: number; rate: number; label: string }[],
  grossIncome: number
): IncomeTaxResult {
  const slabBreakdown: SlabBreakdown[] = [];
  let tax = 0;
  let prev = 0;

  for (const slab of slabs) {
    if (taxableIncome <= prev) break;
    const upper = Math.min(taxableIncome, slab.limit);
    const slabAmount = upper - prev;
    const slabTax = (slabAmount * slab.rate) / 100;
    slabBreakdown.push({
      slab: slab.label,
      taxableAmount: slabAmount,
      taxRate: slab.rate,
      tax: Math.round(slabTax),
    });
    tax += slabTax;
    prev = slab.limit;
  }

  // 87A rebate: if taxable income ≤ 7L under new regime
  if (taxableIncome <= 7_00_000 && tax > 0) {
    tax = Math.max(0, tax - Math.min(tax, 25000));
  }

  const cess = tax * 0.04;
  const total = tax + cess;
  const effectiveRate = grossIncome > 0 ? (total / grossIncome) * 100 : 0;

  return {
    tax: Math.round(tax),
    cess: Math.round(cess),
    total: Math.round(total),
    effectiveRate: parseFloat(effectiveRate.toFixed(2)),
    slabBreakdown,
  };
}

// ─── GST Calculator ───────────────────────────────────────────────────────────

export type GSTMode = "exclusive" | "inclusive";

export interface GSTResult {
  gst: number;
  cgst: number;
  sgst: number;
  baseAmount: number;
  total: number;
}

export function calculateGST(
  amount: number,
  rate: number,
  mode: GSTMode = "exclusive"
): GSTResult {
  let base: number;
  let gst: number;

  if (mode === "exclusive") {
    base = amount;
    gst = (amount * rate) / 100;
  } else {
    base = (amount * 100) / (100 + rate);
    gst = amount - base;
  }

  const half = gst / 2;
  return {
    gst: Math.round(gst),
    cgst: Math.round(half),
    sgst: Math.round(half),
    baseAmount: Math.round(base),
    total: Math.round(base + gst),
  };
}

// ─── HRA Calculator ───────────────────────────────────────────────────────────

export interface HRAResult {
  exemption: number;
  taxable: number;
  method1: number;
  method2: number;
  method3: number;
}

export function calculateHRA(
  basic: number,
  hra: number,
  rent: number,
  isMetro: boolean
): HRAResult {
  const method1 = hra;
  const method2 = isMetro ? basic * 0.5 : basic * 0.4;
  const method3 = Math.max(0, rent - basic * 0.1);

  const exemption = Math.min(method1, method2, method3);
  const taxable = Math.max(0, hra - exemption);

  return {
    exemption: Math.round(exemption),
    taxable: Math.round(taxable),
    method1: Math.round(method1),
    method2: Math.round(method2),
    method3: Math.round(method3),
  };
}

// ─── PPF Calculator ───────────────────────────────────────────────────────────

export interface PPFYearWise {
  year: number;
  openingBalance: number;
  deposit: number;
  interest: number;
  closingBalance: number;
}

export interface PPFResult {
  maturity: number;
  interest: number;
  yearWise: PPFYearWise[];
}

export function calculatePPF(
  yearlyInvestment: number,
  years: number,
  rate: number = 7.1
): PPFResult {
  const r = rate / 100;
  const yearWise: PPFYearWise[] = [];
  let balance = 0;
  let totalDeposited = 0;

  for (let y = 1; y <= years; y++) {
    const opening = balance;
    const deposit = yearlyInvestment;
    // Interest computed on opening balance + deposit at start of year
    const interest = (opening + deposit) * r;
    balance = opening + deposit + interest;
    totalDeposited += deposit;
    yearWise.push({
      year: y,
      openingBalance: Math.round(opening),
      deposit: Math.round(deposit),
      interest: Math.round(interest),
      closingBalance: Math.round(balance),
    });
  }

  return {
    maturity: Math.round(balance),
    interest: Math.round(balance - totalDeposited),
    yearWise,
  };
}

// ─── Age Calculator ───────────────────────────────────────────────────────────

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthday: { date: Date; daysLeft: number };
}

export function calculateAge(dob: Date, asOf: Date = new Date()): AgeResult {
  let years = asOf.getFullYear() - dob.getFullYear();
  let months = asOf.getMonth() - dob.getMonth();
  let days = asOf.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(asOf.getFullYear(), asOf.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor(
    (asOf.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24)
  );

  const nextBirthdayYear =
    asOf.getMonth() > dob.getMonth() ||
    (asOf.getMonth() === dob.getMonth() && asOf.getDate() >= dob.getDate())
      ? asOf.getFullYear() + 1
      : asOf.getFullYear();

  const nextBirthdayDate = new Date(
    nextBirthdayYear,
    dob.getMonth(),
    dob.getDate()
  );
  const daysLeft = Math.ceil(
    (nextBirthdayDate.getTime() - asOf.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    years,
    months,
    days,
    totalDays,
    nextBirthday: { date: nextBirthdayDate, daysLeft },
  };
}
