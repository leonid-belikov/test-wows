import cm from './Filters.module.css'
import { CloseIcon, SearchIcon } from 'ui-kit/icons'
import { useFilterStore } from '../store/useFilterStore.ts'
import type { ChangeEvent } from 'react'
import { shipActions } from 'modules/ship'

const Filters = () => {
  const search = useFilterStore((state) => state.search)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    shipActions.setSearchQuery(value)
  }

  const handleClearClick = () => {
    shipActions.clearSearchQuery()
  }

  return (
    <div className={cm.filters}>
      <div className={cm.search}>
        <SearchIcon className={cm.iconSearch} />
        <input type="text" name="search" value={search} onChange={handleSearchChange} />
        {search && (
          <button type="button" onClick={handleClearClick}>
            <CloseIcon className={cm.iconClose} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Filters
