import type { MutableRefObject } from '@oku-ui/hooks'
import type { PrimitiveProps } from '@oku-ui/primitive'

export interface RadioGroupItemProps {
  as?: PrimitiveProps['as']
  disabled?: boolean
  value: string

  name?: string
}

export type RadioGroupItemEmits = {
  mousedown: [event: MouseEvent]
  keydown: [event: KeyboardEvent]
  focus: [event: FocusEvent]
  click: [event: MouseEvent]
}

export type RadioGroupItemSlots = {
  default: (props: {
    isFormControl: boolean
    input: {
      control: HTMLButtonElement | undefined
      bubbles: MutableRefObject<boolean>
      name?: string
      value: string
      checked: boolean
      required?: boolean
      disabled?: boolean
    }
  }) => any
}

export const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
