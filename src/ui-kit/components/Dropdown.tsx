import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cm from './Dropdown.module.css'
import cx from 'clsx'

export const DropdownMenu = DropdownMenuPrimitive.Root

type DropdownMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Trigger
> & {
  hasChecked: boolean
  ref?: React.Ref<HTMLButtonElement>
}

export const DropdownMenuTrigger = ({ ref, hasChecked, ...props }: DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger
    className={cx(cm.trigger, {
      [cm.hasChecked]: hasChecked,
    })}
    {...props}
    ref={ref}
  />
)

type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
> & {
  ref?: React.Ref<HTMLDivElement>
}

export const DropdownMenuContent = ({ children, ref, ...props }: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content {...props} ref={ref} className={cm.content}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
}

type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
> & {
  ref?: React.Ref<HTMLDivElement>
}

export const DropdownMenuCheckboxItem = ({
  children,
  ref,
  onSelect,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cm.item}
      ref={ref}
      onSelect={(e) => {
        e.preventDefault()
        onSelect?.(e)
      }}
      {...props}
    >
      {children}
      <DropdownMenuPrimitive.ItemIndicator />
    </DropdownMenuPrimitive.CheckboxItem>
  )
}
