export interface ExchangeRate {
    base: string;
    date: Date;
    rates: Record<string, number>;
    isSuccessful: true;
    time: Date;
}

export type ChangeType =
    | "from"
    | "to";

export const initialFromRate: string = 'UAH';
export const initialToRate: string = 'UAH';
export const currencies: string[] = ['UAH', 'USD', 'EUR', 'GIP', 'PLN'];
