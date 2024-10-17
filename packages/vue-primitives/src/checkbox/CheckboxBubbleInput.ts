import type { MutableRefObject } from '@oku-ui/hooks'
import type { CheckedState } from './CheckboxRoot.ts'

export interface CheckboxBubbleInputProps {
  checked: CheckedState
  control: HTMLElement | undefined
  bubbles: MutableRefObject<boolean>
}
