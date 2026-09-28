import cm from './Filters.module.css'
import Search from './Search'
import VehicleTypeDropdown from './VehicleTypeDropdown'
import LevelDropdown from './LevelDropdown'
import NationDropdown from './NationDropdown'
import { FiltersIcon } from 'ui-kit/icons'
import { shipActions } from 'modules/ship'

const Filters = () => {
  const handleResetClick = () => {
    shipActions.resetAllFilters()
  }

  return (
    <div className={cm.filters}>
      <Search />
      <div className={cm.filterBox}>
        <FiltersIcon className={cm.filterIcon} />
        <VehicleTypeDropdown />
        <LevelDropdown />
        <NationDropdown />
        <button className={cm.reset} type="button" onClick={handleResetClick}>
          reset all
        </button>
      </div>
    </div>
  )
}

export default Filters
