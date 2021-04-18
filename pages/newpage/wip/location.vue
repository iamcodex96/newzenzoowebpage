<template lang="pug">
    v-layout
        v-container.flex.v-container.items.h-center.v-center
          ZenSectionComponent(color="#ffe76a" :patron="2")
            template(v-slot:sectionItem)
              div#title-container.h-full.flex.v-container.items.h-center.v-center
                  div.text-h4.text-md-h2.zen-location-title.rounded-xl.tilted-2 Zenzoo
                  div.text-h4.text-md-h2.zen-location-title.rounded-xl.tilted-1 Shops
              div.h-full.flex.v-container.items.h-center.v-center.mt-12
                  div.text-h6.text-center(v-html="textHeader")
              div#card-container(style="max-width:1300px")
                  v-row.pa-8
                      v-col(cols="12" lg="4" v-for="(cc,i) in cardContent" :key="i").flex.h-container.items.h-center.v-center
                          div.card-holder.flex.v-container.items.h-center.v-center
                              div.text-h5.text-md-h4 {{cc.city}}
                              v-card.rounded-xl.zen-border
                                  v-img.zen-border(:src="cc.img" height="200px").rounded-xl
                                  div.pa-8  
                                      div.text-h6 {{cc.number}}
                                      div.text-h6 {{cc.street}}
                                      div.text-h6 Service : {{cc.service}}
                                      div.text-h6 Opening hours :
                                      div.text-body-1 Sunday : {{cc.opening}}
                                      div.text-body-1 Monday : {{cc.opening}}
                                      div.text-body-1 Tuesday : {{cc.opening}}
                                      div.text-body-1 Wednesday : {{cc.opening}}
                                      div.text-body-1 Thursday : {{cc.opening}}
                                      div.text-body-1 Friday : {{cc.opening}}
                                      div.text-body-1 Saturday : {{cc.opening}}
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ZenSectionComponent from '@/components/zen-components/zen-section.vue';
import ZenCardTextComponent from '@/components/zen-components/zen-text-card.vue';
@Component({
  layout:'default',
  components:{
      ZenSectionComponent,
      ZenCardTextComponent
  },
  head:{
    title:'Location'
  }
})
export default class Location extends Vue {
    textHeader:string='Discover our Zenzoo shops, find your nearest one!<br/>In order to be able to offer the best quality ot the products, and the<br/>service, Zenzoo is expanding by out own rhythm, please be patient if<br>we\'ve not reached your city yet, please apply in <a>Franchise</a> if you hace a<br/> colaboration idea or simply contact us for your most desired Zenzoo<br/>location. See you soon in Zenzoo!'
    barcelonaImg = require('@/assets/img/location/zenzoo-local-barcelona.png')
    cardContent:any[]=[
        {city:'BARCELONA',number:'+34 933 01 91 67',street:'Carrer bonsuces 6', service:'Take away', opening:'11:00 - 22:00', img:this.barcelonaImg},
        {city:'MADRID',number:'+34 933 01 91 67',street:'Carrer bonsuces 6', service:'Take away', opening:'11:00 - 22:00', img:this.barcelonaImg},
        {city:'SALAMANCA',number:'+34 933 01 91 67',street:'Carrer bonsuces 6', service:'Take away', opening:'11:00 - 22:00', img:this.barcelonaImg},
    ]
}
</script>

<style lang="css">
  #zen-location{
    position: relative;
    background-color:  #ffe76a;
  }
  .zen-location-title{
    border:solid 2px black;
    padding: 20px;
    background: white;
  }
  .tilted-1{
    margin-top:-10px ;
    transform: rotate(1deg);
  }
  .tilted-2{
    transform: rotate(-3deg);
  }
  .zen-border{
      border:solid 2px black!important;;
  }
</style>