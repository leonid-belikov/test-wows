import cm from './Main.module.css'
import { useMqStore } from '../index.ts'
import cx from 'clsx'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

const MIN_ITEM_WIDTH = 320
const GAP = 10
const ASPECT_RATIO = 16 / 9
const ITEMS = Array.from({ length: 1049 }).map((_, i) => i + 1)

const Main = () => {
  const isHiddenSidebar = useMqStore((state) => state.isHiddenSidebar)

  const [columnsCount, setColumnsCount] = useState(1)
  const [rowHeight, setRowHeight] = useState(200)

  const scrollRef = useRef<HTMLDivElement>(null)
  const columnsCountRef = useRef(columnsCount)

  columnsCountRef.current = columnsCount

  const rows = useMemo(() => {
    const result = []
    for (let i = 0; i < ITEMS.length; i += columnsCount) {
      result.push(ITEMS.slice(i, i + columnsCount))
    }
    return result
  }, [columnsCount])

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

      const currentVirtualItems = virtualizerRef.current.getVirtualItems()
      const centerRowVirtualIndex = Math.floor(currentVirtualItems.length / 2)
      const centerRowIndex = currentVirtualItems[centerRowVirtualIndex].index
      const anchorItemIndex = centerRowIndex * columnsCountRef.current

      const cols = Math.max(1, Math.floor((width + GAP) / (MIN_ITEM_WIDTH + GAP)))
      const totalGapsWidth = (cols - 1) * GAP
      const columnWidth = (width - totalGapsWidth) / cols
      const computedRowHeight = columnWidth / ASPECT_RATIO

      if (cols !== columnsCountRef.current) {
        if (rafId) {
          cancelAnimationFrame(rafId)
        }
        setColumnsCount(cols)
        const newRowIndex = Math.floor(anchorItemIndex / cols)
        rafId = requestAnimationFrame(() => {
          virtualizerRef.current.scrollToIndex(newRowIndex, {
            align: 'center',
            behavior: 'smooth',
          })
        })
      }

      setRowHeight(computedRowHeight)
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
    <main
      className={cx(cm.main, {
        [cm.compressed]: !isHiddenSidebar,
      })}
    >
      <div ref={scrollRef} className={cm.content}>
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
                {items.map((num) => (
                  <div
                    key={num}
                    className={cm.card}
                    style={{
                      height: `${row.size - 10}px`,
                    }}
                  >
                    Card {num} (row {row.index})
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Main
