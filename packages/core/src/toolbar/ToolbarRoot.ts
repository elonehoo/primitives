import type { MaybeRefOrGetter, Ref } from 'vue'
import { type Direction, useDirection } from '../direction/index.ts'
import { createContext, type MutableRefObject, useRef } from '../hooks/index.ts'
import { type RovingFocusGroupRootProps, useRovingFocusGroupRoot } from '../roving-focus/index.ts'
import { mergePrimitiveAttrs, type PrimitiveDefaultProps, type RadixPrimitiveReturns } from '../shared/index.ts'

export interface ToolbarRootProps {
  orientation?: RovingFocusGroupRootProps['orientation']
  loop?: RovingFocusGroupRootProps['loop']
  dir?: RovingFocusGroupRootProps['dir']
}

export const DEFAULT_TOOLBAR_ROOT_PROPS = {
  loop: undefined,
} satisfies PrimitiveDefaultProps<ToolbarRootProps>

export interface ToolbarContext {
  orientation: RovingFocusGroupRootProps['orientation']
  dir: Ref<Required<RovingFocusGroupRootProps>['dir']>
}
export const [provideToolbarContext, useToolbarContext] = createContext<ToolbarContext>('Toolbar')

export interface UseToolbarRootProps {
  elRef?: MutableRefObject<HTMLElement | undefined>
  orientation?: RovingFocusGroupRootProps['orientation']
  loop?: RovingFocusGroupRootProps['loop']
  dir?: MaybeRefOrGetter<Direction | undefined>
}

export function useToolbarRoot(props: UseToolbarRootProps = {}): RadixPrimitiveReturns {
  const { orientation = 'horizontal', loop = true } = props

  const elRef = props.elRef ?? useRef<HTMLElement>()
  const setElRef = props.elRef ? undefined : (value: HTMLElement | undefined) => elRef.value = value

  const dir = useDirection(props.dir)

  provideToolbarContext({
    orientation,
    dir,
  })

  const rovingFocusGroupRoot = useRovingFocusGroupRoot({
    elRef,
    orientation,
    loop,
    dir,
  })

  return {
    attrs(extraAttrs = []) {
      const attrs = {
        'elRef': setElRef,
        'role': 'toolbar',
        'aria-orientation': orientation,
        'dir': dir.value,
      }

      mergePrimitiveAttrs(attrs, [rovingFocusGroupRoot.attrs(), ...extraAttrs])

      return attrs
    },
  }
}
