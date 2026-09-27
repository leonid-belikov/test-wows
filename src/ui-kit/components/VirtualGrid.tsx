import { type Key, useLayoutEffect, useMemo, useRef, useState } from 'react'
import cm from './VirtualGrid.module.css'
import { useVirtualizer } from '@tanstack/react-virtual'

const MIN_ITEM_WIDTH = 320
const GAP = 10
const ASPECT_RATIO = 16 / 9

type Props<T> = {
  items: Array<T>
}

const VirtualGrid = <T extends { id: Key }>({ items }: Props<T>) => {
  const [columnsCount, setColumnsCount] = useState(1)
  const [rowHeight, setRowHeight] = useState(200)

  const scrollRef = useRef<HTMLDivElement>(null)
  const columnsCountRef = useRef(columnsCount)

  columnsCountRef.current = columnsCount

  const rows = useMemo(() => {
    const result = []
    for (let i = 0; i < items.length; i += columnsCount) {
      result.push(items.slice(i, i + columnsCount))
    }
    return result
  }, [columnsCount, items])

  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => rowHeight + GAP,
  })
  const virtualizerRef = useRef(virtualizer)

  virtualizerRef.current = virtualizer

  useLayoutEffect(() => {
    if (!scrollRef.current) return

    let rafId: number | null = null

    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect
      if (width <= 0) return

      const initItems = virtualizerRef.current.getVirtualItems()
      const cols = Math.max(1, Math.floor((width + GAP) / (MIN_ITEM_WIDTH + GAP)))
      const totalGapsWidth = (cols - 1) * GAP
      const columnWidth = (width - totalGapsWidth) / cols
      const computedRowHeight = columnWidth / ASPECT_RATIO

      setRowHeight(computedRowHeight)
      virtualizerRef.current.measure()

      const isAtTop = initItems[0]?.index === 0

      if (cols !== columnsCountRef.current) {
        if (rafId) {
          cancelAnimationFrame(rafId)
        }
        const prevCols = columnsCountRef.current
        setColumnsCount(cols)

        if (!isAtTop) {
          rafId = requestAnimationFrame(() => {
            const centerRowVirtualIndex = Math.floor(initItems.length / 2)
            const centerRowIndex = initItems[centerRowVirtualIndex]?.index
            const anchorItemIndex = centerRowIndex * prevCols
            const newRowIndex = Math.ceil(anchorItemIndex / cols)
            virtualizerRef.current.scrollToIndex(newRowIndex, {
              align: 'center',
              behavior: 'instant',
            })
          })
        }
      }
    })

    observer.observe(scrollRef.current)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={scrollRef} className={cm.container}>
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((row) => {
          const items = rows[row.index]
          return (
            <div
              key={row.key}
              className={cm.row}
              style={{
                height: `${row.size}px`,
                transform: `translateY(${row.start}px)`,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className={cm.card}
                  style={{
                    height: `${row.size - 10}px`,
                  }}
                >
                  Card {item.id} (row {row.index})
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VirtualGrid
