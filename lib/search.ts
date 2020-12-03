export const filterQueries = (query: any) =>
  Object.keys(query)
    .filter((key) => query[key]?.length)
    .reduce<any>((obj, key) => {
      obj[key] = query[key]
      return obj
    }, {})
