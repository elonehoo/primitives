/// <reference types="resize-observer-browser" />

import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'

interface Size {
  width: number
  height: number
}

function useSize(element: Ref<HTMLElement | null>) {
  const size = ref<Size | undefined>(undefined)

  watchEffect((onInvalidate) => {
    if (element.value) {
      size.value = { width: element.value.offsetWidth, height: element.value.offsetHeight }

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return

        // Since we only observe the one element, we don't need to loop over the
        // array
        if (!entries.length)
          return

        const entry = entries[0]
        let width: number
        let height: number

        if ('borderBoxSize' in entry) {
          const borderSizeEntry = entry.borderBoxSize
          // iron out differences between browsers
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry
          width = borderSize.inlineSize
          height = borderSize.blockSize
        }
        else {
          // for browsers that don't support `borderBoxSize`
          // we calculate it ourselves to get the correct border box.
          width = element.value!.offsetWidth
          height = element.value!.offsetHeight
        }

        size.value = { width, height }
      })

      resizeObserver.observe(element.value, { box: 'border-box' })

      onInvalidate(() => resizeObserver.unobserve(element.value!))
    }
    else {
      // We only want to reset to `undefined` when the element becomes `null`,
      // not if it changes to another element.
      size.value = undefined
    }
  })

  return size
}

export { useSize }