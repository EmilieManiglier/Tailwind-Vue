<template>
  <div class="card relative shadow-card bg-white px-5 py-4 mb-4">
    <span class="icon-borderless text-legend absolute top-0 right-0"><ChatIcon /></span>

    <div class="card-header flex">
      <div class="w-10 h-10 rounded-full mr-2 overflow-hidden">
        <img :src="picture" :alt="`photo de ${name}`" class="h-full w-full object-cover" />
      </div>
      <div class="flex flex-col">
        <span class="text-text">{{ name }}</span>
        <span class="text-legend text-sm">{{ jobPosition }}</span>
      </div>
    </div>

    <div class="card-body">
      <div class="flex items-center">
        <span>01/07/2021</span>
        <span class="icon-borderless text-text cursor-pointer"><ArrowNarrowRightIcon /></span>
        <span>02/07/2021</span>
      </div>

      <span class="label-seaserpent">{{ type }}</span>
      <span>x5</span>
    </div>

    <div class="card-footer mt-4 relative">
      <span class="text-legend text-xs">le 25/06/2021</span>

      <div class="flex absolute right-0 bottom-0">
        <span class="icon-white w-9 h-9 cursor-pointer"><XIcon /></span>
        <span class="icon w-9 h-9 cursor-pointer"><CheckIcon size="30"/></span>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, XIcon, ChatIcon, ArrowNarrowRightIcon } from '@vue-hero-icons/outline';

export default {
  name: 'Card',
  components: {
    CheckIcon,
    XIcon,
    ChatIcon,
    ArrowNarrowRightIcon
  },
  props: {
    picture: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    jobPosition: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>
