import type { PrimitiveProps } from '../primitive/index.ts'

export interface InfoRootProps {
  as?: PrimitiveProps['as']
  defaultOpen?: boolean
  value?: boolean
}

export type InfoRootEmits = {
  'update:value': [value: boolean]
}
