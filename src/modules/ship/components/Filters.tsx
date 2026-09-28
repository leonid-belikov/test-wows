import cm from './Filters.module.css'
import Search from './Search.tsx'
import VehicleTypeDropdown from './VehicleTypeDropdown.tsx'
import LevelDropdown from './LevelDropdown.tsx'
import NationDropdown from './NationDropdown.tsx'
import { FiltersIcon } from 'ui-kit/icons'
import { shipActions } from 'modules/ship'

const Filters = () => {
  const handleResetClick = () => {
    shipActions.resetAllFilters()
  }

  return (
    <div className={cm.filters}>
      <Search />
      <FiltersIcon className={cm.filterIcon} />
      <VehicleTypeDropdown />
      <LevelDropdown />
      <NationDropdown />
      <button className={cm.reset} type="button" onClick={handleResetClick}>
        reset all
      </button>
    </div>
  )
}

export default Filters
