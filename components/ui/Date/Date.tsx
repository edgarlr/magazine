import { CSSProperties } from 'react'
import cn from 'classnames'
import { getFormattedDate } from '@lib/dateFormatter'

type Props = {
  date: string
  style?: CSSProperties
  className?: string
}

function Date({ date, style, className = '' }: Props) {
  return (
    <p style={style} className={cn('text-xs text-primary-60', className)}>
      <time dateTime={date}>{getFormattedDate(date)}</time>
    </p>
  )
}

export default Date
