<template lang="pug">
v-app
  v-app-bar(:clipped-left="clipped" fixed app)
    v-app-bar-nav-icon(style="color:black" v-on:click="drawer=!drawer")
    NuxtLink#logo-container(style="width:50px" to="/")
      v-img(:src="logo")
    v-spacer
    nuxt-link.ml-4(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" style="color:black;text-decoration:none") {{locale.name}}
  #side-menu-left
    ZenButtonComponent(
      v-for="(button, index) in buttons",
      :key="index",
      :item="button"
    )
  v-main
    v-container
      nuxt
      v-footer(style="background: white")
        v-row.mt-8
          v-col.d-flex.justify-center.align-center(cols="12", md="6")
            div.zen-default-card.rounded-xl.tilted-1(style="min-width: 500px")
              v-row
                v-col.d-flex.justify-center.align-center(cols="4")
                  a {{$t("#layout.landing.menu.order")}}
                  a {{$t("#layout.landing.menu.menu")}}
                  a {{$t("#layout.landing.menu.location")}}
                  a Franchise
                v-col.d-flex.justify-center.align-center(cols="4")
                  a {{$t("#layout.landing.menu.more.delivery")}}
                  a {{$t("#layout.landing.menu.more.loyalty")}}
                  a {{$t("#layout.landing.menu.more.catering")}}
                  a {{$t("#layout.landing.menu.more.news")}}
                  a {{$t("#layout.landing.menu.more.faq")}}
                v-col.d-flex.justify-center.align-center(cols="4")
                  a {{$t("#layout.landing.menu.zenzoo.about")}}
                  a {{$t("#layout.landing.menu.more.faq")}}
                  a {{$t("#layout.landing.menu.more.jobs")}}
                  a {{$t("#layout.landing.menu.zenzoo.feedback")}}
          v-col.d-flex.justify-center.align-center(cols="12", md="6")
            .text-h6.text-md-h5 {{$t("#layout.landing.rights")}}
            v-row(style="width: 100%")
              v-col.text-center(cols="4")
                a {{$t("#layout.landing.cookies")}}
              v-col.text-center(cols="4")
                a {{$t("#layout.landing.terms")}}
              v-col.text-center(cols="4")
                a {{$t("#layout.landing.privacy")}}
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ZenButtonComponent from "@/components/zen-components/zen-button.vue";

@Component({
  components: {
    ZenButtonComponent,
  },
})
export default class DefaultLayout extends Vue {
  imgFooter=require('@/assets/img/general/zenzoo-bubbles-logo.png')
  logo=require('@/assets/img/general/Logo.png')
  instagram=require('@/assets/img/general/instagram.svg')
  facebook=require('@/assets/img/general/facebook.svg')
  burguer=require('@/assets/img/general/burger-menu.svg')

  get availableLocales () {
    if(this.$i18n.locales){

      return this.$i18n.locales
    }
  }

  public buttons: any[] = [
    { text: '#layout.landing.menu.menu', to: "/menu", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.order', to: "/order", hoverColor: "zen-light-blue" },
    { text: '#layout.landing.menu.location', to: "/location", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.zenzoo', to: "/", hoverColor: "zen-light-green" },
    { text: '#layout.landing.menu.more', to: "/", hoverColor: "zen-light-green" },
  ];
}
</script>

<style lang="scss" scoped>
#side-menu-left {
  width: 200px;
  position: fixed;
  left: 50px;
  top: 100px;
  z-index: 10;
} 
.zen-default-card {
  background-color: white;
  border: solid 2px black;
  padding: 1rem;
}
.tilted-1 {
  transform: rotate(1deg);
}
.row a {
  color: black;
}
</style>