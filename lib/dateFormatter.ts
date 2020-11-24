export const getFormattedDate = (dateToformat: Date | string | number) => {
  const date = new Date(dateToformat)
  const year = date.getFullYear()

  const actualYear = new Date().getFullYear()

  if (year < actualYear)
    return date.toLocaleDateString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

  return date.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
  })
}
