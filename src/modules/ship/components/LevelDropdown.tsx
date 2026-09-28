import { Dropdown } from 'ui-kit'
import { useFilterStore } from '../store/useFilterStore'
import { shipActions } from 'modules/ship'
import ShipLevel from './ShipLevel'

const LEVELS = Array.from({ length: 11 }).map((_, i) => i + 1)

const LevelDropdown = () => {
  const filters = useFilterStore((state) => state.level)
  const hasChecked =
    Object.values(filters).some((item) => item) && Object.values(filters).some((item) => !item)

  const handleCheckedChange = (level: number, value: boolean) => {
    shipActions.updateLevelFilter(String(level), value)
  }

  return (
    <Dropdown.DropdownMenu modal={false}>
      <Dropdown.DropdownMenuTrigger isHighlighted={hasChecked}>Level</Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent sideOffset={12}>
        {LEVELS.map((level) => (
          <Dropdown.DropdownMenuCheckboxItem
            key={level}
            checked={filters[level]}
            onCheckedChange={(value: boolean) => {
              handleCheckedChange(level, value)
            }}
          >
            <ShipLevel value={level} />
          </Dropdown.DropdownMenuCheckboxItem>
        ))}
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  )
}

export default LevelDropdown
