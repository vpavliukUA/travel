export interface Currency {
  Code: string;
  Symbol: string;
  ThousandsSeparator: string;
  DecimalSeparator: string;
  SymbolOnLeft: boolean;
  SpaceBetweenAmountAndSymbol: boolean;
  RoundingCoefficient: number;
  DecimalDigits: number;
}

export interface CurrenciesState {
  data: Currency[] | null;
  loading: boolean;
  error: boolean;
}

export interface Country {
  Code: string;
  Name: string;
}

export interface CountriesState {
  data: Country[] | null;
  loading: boolean;
  error: boolean;
}

export interface Locale {
  Code: string;
  Name: string;
}

export interface LocalesState {
  data: Locale[] | null;
  loading: boolean;
  error: boolean;
}
