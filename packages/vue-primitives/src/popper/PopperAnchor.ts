import type { RadixPrimitiveReturns, RefOrRefObject } from '../shared/typeUtils.ts'
import { onMounted } from 'vue'
import { type MutableRefObject, useRef } from '../hooks/index.ts'
import { mergePrimitiveAttrs } from '../shared/mergeProps.ts'
import { type Measurable, usePopperContext } from './PopperRoot.ts'

export interface PopperAnchorProps {
  virtualRef?: MutableRefObject<Measurable>
}

export interface UsePopperAnchorProps {
  el?: RefOrRefObject<HTMLElement | undefined>
  virtualRef?: MutableRefObject<Measurable>
}

export function usePopperAnchor(props: UsePopperAnchorProps = {}): RadixPrimitiveReturns {
  const context = usePopperContext('PopperAnchor')

  const el = props.el ?? useRef<HTMLElement>()
  const setTemplateEl
    = props.virtualRef
      ? undefined
      : props.el ? undefined : (value: HTMLElement | undefined) => el.value = value

  onMounted(() => {
    context.onAnchorChange(props.virtualRef?.value || el.value)
  })

  return {
    attrs(extraAttrs) {
      const attrs = {
        elRef: setTemplateEl,
      }

      if (extraAttrs && extraAttrs.length > 0) {
        mergePrimitiveAttrs(attrs, extraAttrs)
      }

      return attrs
    },
  }
}
