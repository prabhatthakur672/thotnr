// cn — joins Tailwind class strings, filtering out falsy values
// Usage: cn('base-class', condition && 'conditional-class', 'another-class')
export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const formatDate = (date, locale = 'en-US') =>
  new Intl.DateTimeFormat(locale).format(date)
