<template>
  <div class="grid h-full grid-cols-3 gap-4">
    <div class="p-4 border-4 border-dashed border-seaserpent-light">
      <h2 class="h2">Boutons et Icônes</h2>
      <div class="flex flex-col">
        <button type="button" class="btn-primary">Nouvelle demande</button>
        <button type="button" class="btn-primary">Gérer mes jours posés</button>
        <button type="button" class="btn-secondary">Connexion</button>
      </div>

      <div class="flex flex-wrap">
        <span class="icon"><TrashIcon /></span>
        <span class="icon"><CheckIcon size="30"/></span>
        <span class="icon-white"><XIcon /></span>
      </div>

      <div class="mt-5">
        <span class="label-canary">Congés</span>
        <span class="label-seaserpent">rtt</span>
        <span class="label-woodpecker">Repos</span>
      </div>
    </div>

    <div class="p-4 border-4 border-dashed border-woodpecker-light">
      <h2 class="h2">Form</h2>
      <form class="mt-8">
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <Input type="text" name="lastname" :isDisabled="true" />
        <Input type="text" name="firstname" :isReadOnly="true" />
      </form>
    </div>

    <div class="p-4 border-4 border-dashed border-canary-light">
      <h2 class="h2">Cards</h2>
      <Card
        picture="https://picsum.photos/600/400/?image=25"
        name="Emilie Maniglier"
        jobPosition="Développeuse Front-End"
        type="Congés" />
      <Card
        picture="https://picsum.photos/600/400/?image=45"
        name="François Loupias"
        jobPosition="Développeur Full Stack"
        type="RTT"
      />
    </div>
  </div>
</template>

<script>
import { TrashIcon, CheckIcon, XIcon } from '@vue-hero-icons/outline';
import Input from './Input.vue';
import Card from './Card.vue';

export default {
  name: 'Tailwind',
  components: {
    TrashIcon,
    CheckIcon,
    XIcon,
    Card,
    Input
  }
};
</script>
