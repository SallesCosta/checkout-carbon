export const masks = {
  phone(value: string) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  cpf(value: string) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },
  email(value: string) {
    return value.replace(/[^a-zA-Z0-9@._-]/g, '').replace(/@.*\./, '@.')
  },

  creditCard(value: string) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .trim()
  },
  day(value: string) {
    const cleanValue = value.replace(/\D+/g, '')
    const day = Number(cleanValue)

    if (day > 31) {
      return ''
    }

    return day.toString()
  },
}
