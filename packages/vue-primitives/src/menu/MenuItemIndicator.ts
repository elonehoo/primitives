import type { CheckedState } from '../checkbox/index.ts'
import type { PrimitiveProps } from '@oku-ui/primitive'
import { createContext } from '@oku-ui/hooks'

export interface MenuItemIndicatorProps {
  as?: PrimitiveProps['as']
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}

export interface ItemIndicatorContext {
  checked: () => CheckedState
}

export const [provideItemIndicatorContext, useItemIndicatorContext] = createContext<ItemIndicatorContext>('MenuItemIndicator', {
  checked: () => false,
})
