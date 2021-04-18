<template lang="pug">
v-app
  div#movil-menu.d-flex.d-lg-none
    v-app-bar.bg-zen-green(app fixed style="z-index:20")
      nuxt-link.ml-4(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" style="color:white;text-decoration:none") {{locale.name}}
      v-spacer
      div#logo-container(style="width:50px")
        v-img(:src="logo")
      v-spacer
      div.ml-4(style="width:20px")
        a(target="_blank" href="https://www.instagram.com/zenzoobubbles/")
          img(:src="instagram")
      div.ml-4(style="width:20px")
        a(target="_blank" href="https://www.facebook.com/zenzoobubbles")
          img(:src="facebook")
      //-v-app-bar-nav-icon(style="color:white" v-on:click="drawer=!drawer")
  div#side-menu-left.flex.v-container.d-none.d-lg-flex
      div.side-menu-bg
      div.pl-6.pt-6#logo.flex.h-container.items.h-center(style="width:90px")
        v-img(:src="logo")
      div.pl-2.mt-8#idiomas
        nuxt-link.ml-4(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" style="color:white;text-decoration:none") {{locale.name}}
      div(style="height:440px")
      //-div#button-container.mt-8.pl-6
          ZenButtonComponent(v-for="(button,index) in buttons" :key="index" :item="button")
      div.text-center.mt-8.bg-zen-green(style="width:120px;font-size:.75em")
        a(style="color:white") Covid 19 method
      div.text-center.mt-2.bg-zen-green(style="width:120px;font-size:.75em")
        a(style="color:white") Special offer
  v-navigation-drawer(v-model="drawer" absolute temporary style="z-index:12;width:100%").bg-zen-lgreen

  v-main(style="width:100%!important")
    v-container.pa-0
      nuxt
      v-footer(style="background:white")
        v-row.mt-8
          v-col(cols="12" md="6").d-lg-flex.d-none.justify-center.align-center
            div.zen-card.rounded-xl(style="min-width:500px").tilted-1
              v-row.menu-text
                v-col.d-flex.flex-column.align-center(cols="4")
                  a {{$t("#layout.landing.menu.order")}}
                  a {{$t("#layout.landing.menu.menu")}}
                  a {{$t("#layout.landing.menu.location")}}
                  a {{$t("#layout.landing.menu.zenzoo.franchise")}}
                v-col.d-flex.flex-column.align-center(cols="4")
                  a {{$t("#layout.landing.menu.more.delivery")}}
                  a {{$t("#layout.landing.menu.more.loyalty")}}
                  a {{$t("#layout.landing.menu.more.catering")}}
                  a {{$t("#layout.landing.menu.more.news")}}
                  a {{$t("#layout.landing.menu.more.faq")}}
                v-col.d-flex.flex-column.align-center(cols="4")
                  a {{$t("#layout.landing.menu.zenzoo.about")}}
                  a {{$t("#layout.landing.menu.more.contact")}}
                  a {{$t("#layout.landing.menu.zenzoo.jobs")}}
                  a {{$t("#layout.landing.menu.zenzoo.feedback")}}
          v-col(cols="12" lg="6").d-flex.flex-column.justify-center.align-center
            div.d-flex.d-lg-none(style="margin-left:auto;margin-right:auto")
              img(:src="imgFooter" width="300px")
            div.d-none.d-lg-flex(style="margin-left:auto;margin-right:auto")
              img(:src="imgFooter" width="400px")
            div.d-flex.d-lg-none.text-h6.text-md-h5(style="text-align:center;font-size:16px!important") {{$t("#layout.landing.rights")}}
            div.d-none.d-lg-flex.text-h6.text-md-h5 {{$t("#layout.landing.rights")}}
            v-row(style="width:100%").menu-text
              v-col(cols="4").text-center
                a.d-flex.d-lg-none.justify-center.align-center(style="font-size:8px") {{$t("#layout.landing.cookies")}}
                a.d-none.d-lg-flex.justify-center.align-center {{$t("#layout.landing.cookies")}}
              v-col(cols="4").text-center
                a.d-flex.d-lg-none.justify-center.align-center(style="font-size:8px") {{$t("#layout.landing.terms")}}
                a.d-none.d-lg-flex.justify-center.align-center {{$t("#layout.landing.terms")}}
              v-col(cols="4").text-center
                a.d-flex.d-lg-none.justify-center.align-center(style="font-size:8px") {{$t("#layout.landing.privacy")}}
                a.d-none.d-lg-flex.justify-center.align-center {{$t("#layout.landing.privacy")}}
    div.pa-4( style="display:flex;justify-content:center; align-items:center").d-lg-none.bg-zen-green.d-none.justify-center.align-center
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.menu")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.order")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.location")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.more.contact")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.more.delivery")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.more.loyalty")}}
      a.ml-2.zen-title(style="color:white;font-size:.75em") {{$t("#layout.landing.menu.zenzoo.franchise")}}

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ZenButtonComponent from '@/components/zen-components/zen-button.vue'
@Component({
  components:{
      ZenButtonComponent
  },
})
export default class LandingLayout extends Vue {
  imgFooter=require('@/assets/img/general/zenzoo-bubbles-logo.png')
  logo=require('@/assets/img/general/Logo.png')
  instagram=require('@/assets/img/general/instagram.svg')
  facebook=require('@/assets/img/general/facebook.svg')
  burguer=require('@/assets/img/general/burger-menu.svg')
  drawer=false;
  public buttons: any[] = [
    { text: '#layout.landing.menu.menu', to: "/menu", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.order', to: "/order", hoverColor: "zen-light-blue" },
    { text: '#layout.landing.menu.location', to: "/location", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.zenzoo', to: "/", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.more', to: "/", hoverColor: "zen-light-green" },
  ];
  get availableLocales () {
    if(this.$i18n.locales){
      return this.$i18n.locales
    }
  }
}
</script>

<style lang="scss" >

#side-menu-left{
  width: 200px;
  position: fixed;
  left:0;
  top:0;
  z-index: 10;
}
.side-menu-bg{
    background-color: #008d7f;
    height: 800px;
    width: 120px;
    opacity: .6;
    margin-top: 0;
    position: absolute;
    z-index: -1;
}
.zen-card{
  background-color: white;
  border:solid 2px black;
  padding: 1rem;
}
.tilted-1{
  transform: rotate(1deg);
}
.v-row a {
  color: black !important;;
}
.menu-text{
  text-decoration: none;
  font-family: 'Frankfurter';
  a{
    color: black !important;
  }
  a:hover{
    color: #75ca82 !important;
  }
}
.mobile-text{
    font-size: 16px!important;
}
.mobile-h1{
    font-size:20px!important;
}

</style>