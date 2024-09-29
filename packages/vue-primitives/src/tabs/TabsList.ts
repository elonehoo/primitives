import type { RadixPrimitiveReturns } from '../shared/index.ts'
import { type MutableRefObject, useRef } from '../hooks/index.ts'
import { type RovingFocusGroupRootProps, useRovingFocusGroupRoot } from '../roving-focus/index.ts'
import { mergeHooksAttrs } from '../shared/index.ts'
import { useTabsContext } from './TabsRoot.ts'

export interface TabsListProps {
  loop?: RovingFocusGroupRootProps['loop']
}

export interface UseTabsListProps {
  elRef?: MutableRefObject<HTMLElement | undefined>
  loop?: RovingFocusGroupRootProps['loop']
}

export function useTabsList(props: UseTabsListProps): RadixPrimitiveReturns {
  const elRef = props.elRef || useRef<HTMLElement>()
  const setTemplateEl = props.elRef ? undefined : (value: HTMLElement | undefined) => elRef.current = value

  const context = useTabsContext('TabsList')

  const rovingFocusGroupRoot = useRovingFocusGroupRoot({
    elRef,
    currentTabStopId: undefined,
    orientation: context.orientation,
    loop: props.loop ?? true,
    dir: context.dir,
  })

  return {
    attrs(extraAttrs = []) {
      const attrs = {
        'ref': setTemplateEl,
        'role': 'tablist',
        'aria-orientation': context.orientation,
      }

      mergeHooksAttrs(attrs, [rovingFocusGroupRoot.attrs(), ...extraAttrs])

      return attrs
    },
  }
}
