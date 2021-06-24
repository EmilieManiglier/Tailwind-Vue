<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input"
    />
    <label :for="name" class="label">{{ name }}</label>
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
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  @apply 
    relative 
    border-legend 
    h-14 
    w-full 
    rounded-md
    border
    my-5
    overflow-hidden
    focus-within:shadow-focus
    focus:border-text;

  &.disabled {
    @apply bg-legend;
  }
}

.label {
  @apply absolute top-1/2 transform -translate-y-1/2 duration-300 origin-0 text-legend capitalize;
}

.input {
  @apply block w-full h-full appearance-none focus-within:outline-none  py-2 px-3;

  &:focus-within ~ .label,
  &:not(:placeholder-shown) ~ .label {
    @apply transform scale-75 -translate-y-6 text-legend;
  }
}

</style>
