import { computed, onBeforeUnmount, onMounted, type Ref, shallowRef } from 'vue'
import { usePresence } from '../presence/index.ts'
import { mergePrimitiveAttrs, type PrimitiveDefaultProps, type RadixPrimitiveGetAttrs, type RadixPrimitiveReturns } from '../shared/index.ts'
import { useTabsContext } from './TabsRoot.ts'
import { makeContentId, makeTriggerId } from './utils.ts'

export interface TabsContentProps {
  value: string

  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: boolean
}

export const DEFAULT_TABS_CONTENT_PROPS = {
  forceMount: undefined,
} satisfies PrimitiveDefaultProps<TabsContentProps>

export interface UseTabsContentProps {
  el?: Ref<HTMLElement | undefined>
  value: () => string
  forceMount?: boolean
}

export function useTabsContent(props: UseTabsContentProps): RadixPrimitiveReturns<{
  isPresent: Ref<boolean>
  attrs: RadixPrimitiveGetAttrs
}> {
  const el = props.el || shallowRef<HTMLElement>()
  const setElRef = props.el ? undefined : (value: HTMLElement | undefined) => el.value = value

  const context = useTabsContext('TabsContent')
  const triggerId = computed(() => makeTriggerId(context.baseId, props.value()))
  const contentId = computed(() => makeContentId(context.baseId, props.value()))
  const isSelected = computed(() => context.value.value === props.value())

  let isMountAnimationPrevented = isSelected.value

  let rAf: number

  onMounted(() => {
    rAf = requestAnimationFrame(() => {
      isMountAnimationPrevented = false
    })
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(rAf)
  })

  let isPresent: Ref<boolean>
  if (props.forceMount)
    isPresent = shallowRef(true)
  else
    isPresent = usePresence(el, () => isSelected.value)

  return {
    isPresent,
    attrs(extraAttrs) {
      const attrs = {
        'elRef': setElRef,
        'id': contentId.value,
        'data-state': isSelected.value ? 'active' : 'inactive',
        'data-orientation': context.orientation,
        'rele': 'tabpanel',
        'aria-labelledby': triggerId.value,
        'hidden': !isPresent.value,
        'tabindex': 0,
        'style': {
          animationDuration: isMountAnimationPrevented ? '0s' : undefined,
        },
      }

      if (extraAttrs && extraAttrs.length > 0) {
        mergePrimitiveAttrs(attrs, extraAttrs)
      }

      return attrs
    },
  }
}
