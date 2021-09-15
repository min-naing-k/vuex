<template>
  <div class="home">
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('Todos', ['greeting']),
  },
};
</script>
