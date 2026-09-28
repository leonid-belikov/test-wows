import { Dropdown } from 'ui-kit'
import { useFilterStore } from '../store/useFilterStore'
import { shipActions } from 'modules/ship'
import { NationName } from 'modules/nation/model'
import { NationLabel } from 'modules/nation'

const NationDropdown = () => {
  const nations = Object.values(NationName)

  const filters = useFilterStore((state) => state.nation)
  const hasChecked =
    Object.values(filters).some((item) => item) && Object.values(filters).some((item) => !item)

  const handleCheckedChange = (nation: NationName, value: boolean) => {
    shipActions.updateNationFilter(nation, value)
  }

  return (
    <Dropdown.DropdownMenu modal={false}>
      <Dropdown.DropdownMenuTrigger hasChecked={hasChecked}>Nation</Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent sideOffset={12}>
        {nations.map((nation) => (
          <Dropdown.DropdownMenuCheckboxItem
            key={nation}
            checked={filters[nation]}
            onCheckedChange={(value: boolean) => {
              handleCheckedChange(nation, value)
            }}
          >
            <NationLabel value={nation} />
          </Dropdown.DropdownMenuCheckboxItem>
        ))}
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  )
}

export default NationDropdown
