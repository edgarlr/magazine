export const partition = <T>(array: T[], cb: (i: T) => boolean): T[][] =>
  array.reduce(
    (acc, item) => {
      acc[cb(item) ? 0 : 1].push(item)
      return acc
    },
    [[], []] as T[][]
  )
