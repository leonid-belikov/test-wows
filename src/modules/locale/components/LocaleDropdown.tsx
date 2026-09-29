import { Locale } from '../model'
import { Dropdown } from 'ui-kit'
import { useLocaleStore } from '../store/useLocaleStore'
import cm from './LocaleDropdown.module.css'

const convert = (value: string): string => value.replace(/_/g, '-')

const LocaleDropdown = () => {
  const selectedLocale = useLocaleStore((state) => state.selectedLocale)
  const setLocale = useLocaleStore((state) => state.setLocale)

  const items = Object.values(Locale)

  const handleValueChange = (value: string) => {
    setLocale(value as Locale)
  }

  return (
    <Dropdown.DropdownMenu modal={false}>
      <Dropdown.DropdownMenuTrigger isHighlighted={false}>
        <div className={cm.label}>{convert(selectedLocale)}</div>
      </Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent sideOffset={2}>
        <Dropdown.DropdownMenuRadioGroup
          className={cm.group}
          value={selectedLocale}
          onValueChange={handleValueChange}
        >
          {items.map((item) => {
            return (
              <Dropdown.DropdownMenuRadioItem key={item} value={item}>
                <div className={cm.label}>{convert(item)}</div>
              </Dropdown.DropdownMenuRadioItem>
            )
          })}
        </Dropdown.DropdownMenuRadioGroup>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  )
}

export default LocaleDropdown
