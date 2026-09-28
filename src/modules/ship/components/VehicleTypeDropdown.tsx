import { Dropdown } from 'ui-kit'
import { VehicleTypeName } from 'modules/vehicle-type/model'
import { useFilterStore } from '../store/useFilterStore.ts'
import { VehicleTypeIcon, VehicleTypeLabel } from 'modules/vehicle-type'
import { shipActions } from 'modules/ship'
import cm from './VehicleTypeDropdown.module.css'

const VehicleTypeDropdown = () => {
  const vehicleTypes = Object.values(VehicleTypeName)

  const filters = useFilterStore((state) => state.vehicleType)
  const hasChecked =
    Object.values(filters).some((item) => item) && Object.values(filters).some((item) => !item)

  const handleCheckedChange = (vehicleType: VehicleTypeName, value: boolean) => {
    shipActions.updateVehicleTypesFilter(vehicleType, value)
  }

  return (
    <Dropdown.DropdownMenu modal={false}>
      <Dropdown.DropdownMenuTrigger hasChecked={hasChecked}>Type</Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent sideOffset={10}>
        {vehicleTypes.map((vehicleType) => (
          <Dropdown.DropdownMenuCheckboxItem
            key={vehicleType}
            checked={filters[vehicleType]}
            onCheckedChange={(value: boolean) => {
              handleCheckedChange(vehicleType, value)
            }}
          >
            <div className={cm.item}>
              <VehicleTypeIcon value={vehicleType} />
              <VehicleTypeLabel value={vehicleType} />
            </div>
          </Dropdown.DropdownMenuCheckboxItem>
        ))}
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  )
}

export default VehicleTypeDropdown
