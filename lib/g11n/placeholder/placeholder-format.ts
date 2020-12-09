
interface PlaceholderDateFormat {
    format: string
}
interface PlaceholderNumberFormat {
    decimalPoints: 0 | 1 | 2 | 3 | 4 | 5 | 6
    rounding: 'ceil' | 'floor' | 'round'
    commaSpaces: 3 | 4
}

export type PlaceholderFormat = PlaceholderDateFormat | PlaceholderNumberFormat