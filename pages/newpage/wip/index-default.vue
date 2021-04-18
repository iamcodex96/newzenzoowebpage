<template lang="pug">
    v-layout.pa-0.ma-0
        v-container#coming-soon.pa-0.d-flex.justify-center.align-center
            v-img.d-none.d-lg-flex(:src="img")
            v-img.d-flex.d-lg-none(:src="imgM")
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ZenSectionComponent from '@/components/zen-components/zen-section.vue';
import ZenCardTextComponent from '@/components/zen-components/zen-text-card.vue';
@Component({
  layout: "empty",
  components:{
      ZenSectionComponent,
      ZenCardTextComponent
  },
})
export default class WorkInProgressPage extends Vue {
    img = require('@/assets/img/Pagina temporal.jpg');
    imgM = require('@/assets/img/Pagina temporal M.jpg');
}
</script>

<style lang="scss">

    #coming-soon{
        height: 100vh;
    }

</style>