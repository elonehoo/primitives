<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useVModel } from '@vueuse/core'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@oku-ui/primitives'
import { capitalize, computed, ref, useSlots, type VNode, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<{
  modelValue: 'css' | 'tailwind' | 'pinceau' | 'unocss'
}>()
const emits = defineEmits<{
  'update:modelValue': [payload: 'css' | 'tailwind' | 'pinceau' | 'unocss']
}>()

const cssFramework = useVModel(props, 'modelValue', emits)

const slots = useSlots()
const slotsFramework = computed(() => slots.default?.().map(slot => slot.props?.key?.toString()?.replace('_', '')) ?? [])

const cssFrameworkOptions = computed(() => [
  { label: 'UnoCSS', value: 'unocss' },
  { label: 'TailwindCSS', value: 'tailwind' },
  { label: 'CSS', value: 'css' },
  { label: 'Pinceau', value: 'pinceau' },
].filter(i => slotsFramework.value.includes(i.value)))

const tabs = computed(
  () => {
    const currentFramework = slots.default?.().find((slot) => {
      return slot.props?.key?.toString() === `_${cssFramework.value}`
    })

    const typeOrder = ['vue', 'ts', 'js', 'css']

    const childSlots = (currentFramework?.children as VNode[]).sort((a, b) => {
      const aType = a?.props?.title.split('.').pop()
      const bType = b?.props?.title.split('.').pop()
      const typeComparison = typeOrder.indexOf(aType) - typeOrder.indexOf(bType)

      if (typeComparison !== 0) {
        return typeComparison
      }
      return a?.props?.title.localeCompare(b?.props?.title)
    })

    return childSlots?.map((slot, index) => {
      return {
        label: slot.props?.title || `${index}`,
        component: slot,
      }
    }) || []
  },
)

const open = ref(false)

const codeScrollWrapper = ref<HTMLElement | undefined>()
const buttonRef = ref<HTMLElement | undefined>()
const currentTab = ref('index.vue')

watch(open, () => {
  if (!open.value) {
    codeScrollWrapper.value!.scrollTo({
      top: 0,
    })
  }
})
</script>

<template>
  <TabsRoot
    v-model="currentTab"
    class="bg-[var(--vp-code-block-bg)] border border-neutral-700/40 rounded-b-lg overflow-hidden"
    @update:model-value="open = true"
    default-value="index.vue"
  >
    <div class="bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2">
      <div class="flex justify-between items-center w-full text-[13px]">
        <TabsList class="flex">
          <TabsTrigger
            v-for="(tab, index) in tabs"
            :key="index"
            :value="tab.label"
            tabindex="-1"
            class="text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
          >
            {{ tab.label }}
          </TabsTrigger>
        </TabsList>
        <div>
          <select
            v-model="cssFramework"
            @change="currentTab = 'index.vue'"
            class="bg-stone-800 rounded-sm w-[115px] text-xs py-1 pl-2 pr-1"
          >
            <option
              v-for="framework in cssFrameworkOptions"
              :key="framework.label"
              :value="framework.value"
            >
              {{ capitalize(framework.label ?? '') }}
            </option>
          </select>
          <!-- <SelectRoot
            v-model="cssFramework"
            @update:model-value="currentTab = 'index.vue'"
          >
            <SelectTrigger class="flex items-center justify-between bg-stone-800 rounded-sm w-[115px] text-xs py-1 pl-2 pr-1">
              <SelectValue />
              <Icon
                icon="radix-icons:chevron-down"
                class="h-3.5 w-3.5"
              />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent class="border border-stone-700 min-w-[115px] bg-stone-800 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]">
                <SelectViewport class="p-[5px]">
                  <SelectItem
                    v-for="framework in cssFrameworkOptions"
                    :key="framework.label"
                    class="text-xs leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                    :value="framework.value"
                  >
                    <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <Icon icon="radix-icons:check" />
                    </SelectItemIndicator>

                    <SelectItemText>
                      {{ capitalize(framework.label ?? '') }}
                    </SelectItemText>
                  </SelectItem>
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </SelectRoot> -->
        </div>
      </div>
    </div>
    <div
      ref="codeScrollWrapper"
      :key="cssFramework"
      class="pb-10 block custom"
      :class="`${open ? 'overflow-scroll h-full min-h-[150px] max-h-[80vh]' : 'overflow-hidden h-[150px]'}`"
    >
      <TabsContent
        v-for="tab in tabs"
        :key="tab.label"
        :value="tab.label"
        as="template"
      >
        <div class="relative -mt-5 text-base">
          <component
            :is="tab.component"
            class="border-0"
          />
        </div>
      </TabsContent>
      <div
        class="bg-gradient-to-t from-[#161618FF] to-[#16161800] bottom-[1px] left-[1px] right-[1px] h-20 flex items-center justify-center absolute rounded-b-lg"
      >
        <button
          ref="buttonRef"
          class="mt-4 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border-neutral-700 border"
          @click="open = !open"
        >
          {{ open ? "Collapse code" : "Expand code" }}
        </button>
      </div>
    </div>
  </TabsRoot>
</template>

<style scoped>
:deep(*) {
  color: white;
}
</style>
