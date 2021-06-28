<template>
  <div class="relative mb-5 floating-input">
    <input
      :type="type"
      :id="name"
      :placeholder="name"
      :disabled="isDisabled"
      :readonly="isReadOnly"
      :class="{ disabled: isDisabled || isReadOnly }"
      class="w-full h-16 p-3 border rounded-md border-legend focus:outline-none focus:shadow-focus"
      autocomplete="on"
    />
    <label :for="name" class="label" :class="{ 'text-legend': isDisabled || isReadOnly }">
      {{ name }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isReadOnly: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  &.disabled {
    @apply border-0 bg-lightGrey;
  }

  &::placeholder {
    color: transparent;
  }

  &:focus,
  &:not(:placeholder-shown) {
    @apply pt-8;

    & ~ .label {
      @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
    }
  }
}

.label {
  @apply absolute 
  top-0 
  left-0 
  h-full 
  px-3 
  py-5 
  capitalize 
  transition-all 
  duration-100 
  ease-in-out 
  origin-left 
  transform 
  pointer-events-none;
}
</style>
