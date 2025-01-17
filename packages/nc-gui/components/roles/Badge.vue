<script lang="ts" setup>
import { RoleColors, RoleIcons, RoleLabels } from 'nocodb-sdk'
import { toRef } from '#imports'

const props = withDefaults(
  defineProps<{
    role: keyof typeof RoleLabels
    clickable?: boolean
    inherit?: boolean
    border?: boolean
  }>(),
  {
    clickable: false,
    inherit: false,
    border: true,
  },
)

const roleRef = toRef(props, 'role')
const clickableRef = toRef(props, 'clickable')
const inheritRef = toRef(props, 'inherit')
const borderRef = toRef(props, 'border')

const roleProperties = computed(() => {
  const role = roleRef.value

  const color = RoleColors[role]
  const icon = RoleIcons[role]
  const label = RoleLabels[role]

  return {
    color,
    icon,
    label,
  }
})
</script>

<template>
  <div
    class="flex items-center !border-0"
    :class="{
      'cursor-pointer': clickableRef,
    }"
    style="width: fit-content"
  >
    <NcBadge class="!h-auto !px-[8px]" :color="roleProperties.color" :border="borderRef">
      <div
        class="badge-text flex items-center gap-[4px]"
        :class="{
          'text-purple-500': roleProperties.color === 'purple',
          'text-blue-500': roleProperties.color === 'blue',
          'text-green-500': roleProperties.color === 'green',
          'text-orange-500': roleProperties.color === 'orange',
          'text-yellow-500': roleProperties.color === 'yellow',
          'text-red-500': roleProperties.color === 'red',
          'text-gray-300': !roleProperties.color,
        }"
      >
        <GeneralIcon :icon="roleProperties.icon" />
        {{ roleProperties.label }}
        <GeneralIcon v-if="clickableRef" icon="arrowDown" />
      </div>
    </NcBadge>
    <div class="flex-1"></div>
    <!--
    <a-tooltip v-if="inheritRef" placement="bottom">
      <div class="text-gray-400 text-xs p-1 rounded-md">Workspace Role</div>
    </a-tooltip>
    -->
  </div>
</template>

<style scoped lang="scss"></style>
