<template lang="pug">
    v-layout.pa-0.ma-0
        v-container.pa-0
            div#zen-header-container.d-flex(style="overflow:hidden")
                div#zen-header.d-lg-none.mt-12(style="position:relative;height:400px")
                    div#buble-tea-mcontainer.d-flex(style="height:400px;position:absolute;left:5vw")
                        //- img(:src="vaso" width="80%")
                        //- img(:src="jelly" )
                        //- img(:src="lNaranja" )
                        //- img(:src="lAzul")
                        //- img(:src="lVerde")
                        //- img(:src="littleMissBubble")
                        //- img(:src="pajita" )
                        //- img(:src="poppings" )
                        //- img(:src="tapioca")
                        //- img(:src="vaso2" width="80%")
                        img(:src="bubbleTeaM" height="100%")
                    div#zen-header-mtext(style="position:absolute;right:-130vw;top:40px;z-index:10;width:300px")
                        h1.header-text.zen-title(style="color:#008d7f;font-size:32px!important;line-height: 117.2%;" v-html="$t('#page.home.header.text')")
                v-row.d-none.d-lg-flex
                    v-col#zen-buble-tea(lg="6")
                        div#buble-tea-container
                            //- img(:src="vaso" style="bottom:0;left:310px;z-index:1" width="50%")
                            //- img(:src="jelly" style="bottom:200px;left:510px" )
                            //- img(:src="lNaranja" style="top:400px;left:550px")
                            //- img(:src="lAzul" style="top:200px;left:410px")
                            //- img(:src="lVerde" style="top:500px;left:500px")
                            //- img(:src="littleMissBubble" style="top:270px;left:650px;width:150px")
                            //- img(:src="pajita" style="top:0;left:310px;z-index:10")
                            //- img(:src="poppings" style="bottom:100px;left:510px")
                            //- img(:src="tapioca" style="top:270px;left:350px;width:150px")
                            //- img(:src="vaso2" style="bottom:-100px;left:300px;z-index:30" width="50%")
                            img(:src="bubbleTeaM" height="100%")
                    v-col#zen-header-text.d-flex.justify-center.align-center(lg="6")
                        h1.header-text.zen-title(style="color:#008d7f" v-html="$t('#page.home.header.text')")
            v-row
                v-col(cols="12").order-2.order-lg-1
                    div#zen-video
                        div#video
                            video(width="100%" controls autoplay muted)
                                source(:src="zenzooVideo")
                v-col(cols="12").order-1.order-lg-2
                    div#zen-sliding-text
                        div#outer(ref="outer")
                            div#loop(ref="loop")
                                div#content(ref="content" v-html="$t('#page.home.news.text')")
            div#zen-instagram.d-none.d-lg-flex
                v-row.pl-3.pr-3
                    v-col.pa-0(lg="10")
                        div#pics
                            div.instapics(v-for="(pic,i) in instagram.data" :key="i")
                                img(:src="pic.media_url" width="300px")
                    v-col(lg="2" style="background-color:#eeae50;padding:0!important")
                        a(target="_blank" href="https://www.instagram.com/zenzoobubbles/")
                            img(:src="instagramBtn" width="100%")
            div#zen-sections
                ZenSectionComponent(color="#75ca82" :patron="1")
                    template(v-slot:sectionItem)
                        v-row.pa-8(style="position:relative")
                            v-col(cols="4" lg="6" style="z-index:10").p-relative.d-none.d-lg-flex
                                v-row
                                    v-col(lg="8")
                                        v-img(:src="pajitasBio" width="650" style="max-width:none")
                                    v-col(lg="4")
                                        ZenCardTextComponent.zen-title(color="#88ceeb" :shadow="false" :text="$t('#page.home.eco.usage')" width="240px")
                                        ZenCardTextComponent.zen-title(color="#88ceeb" :movil="true" :shadow="false" :text="$t('#page.home.eco.compostable')" width="240px")
                            v-col(cols="6").d-flex.d-lg-none
                                v-img(:src="pajitasBio" width="340px" style="position:absolute;height:80%;left:-25%;bottom:0;z-index:10")
                                ZenCardTextComponent.zen-title(color="#88ceeb" :shadow="false" :text="$t('#page.home.eco.usage')" width="100px" style="z-index:10;position:absolute;top:50px;font-size:.7em;left:100px")
                                ZenCardTextComponent.zen-title(color="#88ceeb" :movil="true" :shadow="false" :text="$t('#page.home.eco.compostable')" width="100px" style="z-index:10;position:absolute;top:100px;font-size:.7em;left:100px")

                            v-col.d-flex.flex-column.justify-center.align-center(cols="6" lg="6")
                                h1.zen-title.section-text.d-none.d-lg-flex.ml-8(style="color:white;z-index:10" v-html="$t('#page.home.eco.eco-friendly')")
                                h1.ml-8.zen-title.mobile-h1.section-mtext.ml-8.d-flex.d-lg-none(style="color:white;font-size:1.5em;z-index:10" v-html="$t('#page.home.eco.eco-friendly')")
                                ZenCardTextComponent.ml-8.zen-title(color="#ffe76a" :shadow="true" text="Preorder!" style="z-index:10").d-flex.d-lg-none
                ZenSectionComponent(color="#ffe76a" :patron="2")
                    template(v-slot:sectionItem)
                        v-row
                            v-col(lg="6" style="z-index:10").pa-0.d-flex.justify-center.align-center
                                v-row.pa-16
                                    v-col(cols="6").d-flex.justify-center.align-center
                                        h1.zen-title.section-text.d-none.d-lg-flex.ml-8(style="color:black" v-html="$t('#page.home.location')")
                                        h1.zen-title.mobile-h1.section-mtext.d-flex.d-lg-none(style="color:blackM" v-html="$t('#page.home.location')")
                                    v-col(cols="6" style="font-family:'Happyshaking'!important")
                                        a(style="text-decoration:none" target="_blank" href="https://g.page/Zenzoo-bubbletea?share")
                                            ZenCardTextComponent(color="#88ceeb" style="color:white;" :shadow="false" text="Salamanca" width="160px")
                                        a(style="text-decoration:none" target="_blank" href="https://goo.gl/maps/mQRLHkj6s2rKE6ci6")
                                            ZenCardTextComponent(color="#008d7f" style="color:white" :shadow="false" text="Barcelona" width="160px")
                                        a(style="text-decoration:none" target="_blank" href="https://g.page/zenzoo?share")
                                            ZenCardTextComponent(color="#75ca82" style="color:white" :shadow="false" text="Madrid" width="160px")
                            v-col(lg="6").p-relative.pa-0.d-none.d-lg-flex
                                v-img(:src="localBcn"  width="550" style="float:right;margin-right:12px;z-index:10")
                ZenSectionComponent(color="#eeae50" :patron="4")
                    template(v-slot:sectionItem)
                        v-row.pa-4
                            v-col(cols="6" lg="6" style="z-index:10").pa-0.d-flex.flex-column.justify-center.align-center.text-center
                                h1.zen-title.section-text.d-none.d-lg-flex.ml-8(style="color:black;z-index:10") {{ $t('#page.home.menu.title') }}
                                h1.zen-title.mobile-h1.section-text.d-flex.d-lg-none.ml-8(style="color:black;font-size:1.2em;z-index:10") {{ $t('#page.home.menu.title') }}
                                h1.zen-title.d-none.d-lg-flex.ml-8(style="color:black;font-size:2em;z-index:10" v-html="$t('#page.home.menu.text')") 
                                h1.zen-title.d-flex.mobile-text.d-lg-none.ml-8(style="color:black;font-size:1em;z-index:10" v-html="$t('#page.home.menu.m.text')")  
                            v-col(cols="6" lg="6").p-relative.pa-0.d-flex.d-lg-none.flex-column.justify-center.align-center(style="z-index:2")
                                img(:src="catering" style="z-index:11;margin-left:100px" width="400px")
                            v-col(cols="6" lg="6").p-relative.pa-0.d-none.d-lg-flex.flex-column.justify-center.align-center
                                img(:src="catering" style="z-index:11" width="80%")
                ZenSectionComponent(color="#88ceeb" :patron="3")
                    template(v-slot:sectionItem)
                        v-row.pa-4
                            v-col(cols="6" style="z-index:10").d-flex.d-lg-none
                                v-img(:src="deliveryM" width="400px")
                            v-col(cols="6" lg="6" style="z-index:10").d-none.d-lg-flex
                                v-img(:src="delivery" width="70%")
                            v-col(cols="6" style="z-index:10").d-flex.flex-column.justify-center.align-center.zen-title
                                h1.zen-title.section-text.d-none.d-lg-flex.ml-8(style="color:black;") {{ $t('#page.home.delivery.title') }}
                                h1.zen-title.mobile-h1.section-text.d-flex.d-lg-none(style="color:black;font-size:1.5em") {{ $t('#page.home.delivery.title') }}
                                ZenCardTextComponent(color="#dde9aa" :shadow="true" :text="$t('#page.home.delivery.m-text')" width="120px").d-flex.mobile-text.d-lg-none
                                h1.zen-title.d-none.d-lg-flex.ml-8(style="color:black;font-size:2em" v-html="$t('#page.home.delivery.text')")  
            div#press.pa-8
                div.press-title
                    h1.zen-title.d-none.d-lg-flex.justify-center.align-center(style="font-size:3em") {{$t("#page.home.interviews.title")}}
                    h1.zen-title.mobile-h1.d-flex.d-lg-none.justify-center.align-center {{$t("#page.home.interviews.title")}}
                div.press-holder.mt-8
                    v-row
                        v-col(cols="12" lg="4")
                            div.interview
                                h2.interview-title.d-none.d-lg-flex.justify-center.align-center(style="font-size:2em") {{$t("#page.home.interviews.timeout")}}
                                h2.interview-title.mobile-text.d-flex.d-lg-none.justify-center.align-center {{$t("#page.home.interviews.timeout")}}
                                a.press-img-container.mt-8(style="width:100%" target="_blank" href="https://www.timeout.es/barcelona/es/bares-y-pubs/zenzoo?fbclid=IwAR3uTd8khh-ZK12E8AM5OaywLnxdI3E01g9qVzAEMRAnl_dcDkbOMQ0M6Og")
                                    v-img.press-images(:src="pressImg02")
                                
                        v-col(cols="12" lg="4")
                            div.interview
                                h2.interview-title.d-none.d-lg-flex.justify-center.align-center(style="font-size:2em")  {{$t("#page.home.interviews.forbes")}}
                                h2.interview-title.mobile-text.d-flex.d-lg-none.justify-center.align-center  {{$t("#page.home.interviews.forbes")}}
                                a.press-img-container.mt-8(style="width:100%" target="_blank" href="https://forbesjapan.com/articles/detail/30769/2/1/1")
                                    v-img.press-images(:src="pressImg01" )
                        v-col(cols="12" lg="4")
                            div.interview
                                h2.interview-title.d-none.d-lg-flex.justify-center.align-center(style="font-size:2em") {{$t("#page.home.interviews.tvbs")}}
                                h2.interview-title.mobile-text.d-flex.d-lg-none.justify-center.align-center {{$t("#page.home.interviews.tvbs")}}
                                a.press-img-container.mt-8(style="width:100%" target="_blank" href="https://www.facebook.com/watch/?v=1839708542762693")
                                    v-img.press-images(:src="pressImg03")
            div#rate.pa-8.mt-4
                v-row.d-none.d-lg-flex
                    v-col(lg="5" style="display:flex;justify-content:center; align-items:center")
                        v-row.d-none.d-lg-flex.justify-center.align-center
                            v-col(cols="7")
                                h1.zen-title.section-text.ml-8(style="color:black" v-html="$t('#page.home.review.text')")
                            v-col.zen-title.section-text(cols="5" v-html="'五星<br/>評價'")  
                               
                        h1.zen-title.section-mtext.ml-8.d-flex.d-lg-none(style="color:black" v-html="$t('#page.home.review.text')")
                            
                    v-col(lg="3").d-flex.justify-center.align-center
                        div(style="display:inline-block")
                            img.ml-4(:src="starImg" width="30px")
                            img.ml-4(:src="starImg" width="30px")
                            img.ml-4(:src="starImg" width="30px")
                            img.ml-4(:src="starImg" width="30px")
                            img.ml-4(:src="starImg" width="30px")
                    v-col(lg="4").d-flex.flex-column.justify-center.align-center.zen-title
                        ZenCardTextComponent(color="#ffe76a" :shadow="true" :text="$t('#page.home.review.rev')")
                        h1.zen-title.section-text.ml-8(style="color:black") {{$t("#page.home.review.give")}}
                        ZenCardTextComponent(color="#ffe76a" :shadow="true" :text="$t('#page.home.review.feedback')")
                v-row.d-flex.d-lg-none
                    v-col(cols="6")
                        div.mt-4.ml-4.zen-title
                            ZenCardTextComponent(color="#ffe76a" :shadow="true" :text="$t('#page.home.review.rev')" style="font-size:1.3em")
                            ZenCardTextComponent(color="#ffe76a" :shadow="true" :text="$t('#page.home.review.feedback')" style="font-size:1.3em")
                    v-col(cols="6").d-flex.d-lg-none.flex-column.justify-center.align-center
                        h1.zen-title.text-center( style="font-size:1.5em!important" v-html="$t('#page.home.review.fivestar')")
                        div(style="display:inline-block")
                            img.ml-1(:src="starImg" width="19")
                            img.ml-1(:src="starImg" width="19")
                            img.ml-1(:src="starImg" width="19")
                            img.ml-1(:src="starImg" width="19")
                            img.ml-1(:src="starImg" width="19")

            div#foto_bot.overflow-0.d-flex.justify-center.align-center
                img(:src="bottomImg" width="100%").d-none.d-lg-flex
                img(:src="bottomImg" width="700px").d-flex.d-lg-none
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ZenSectionComponent from '@/components/zen-components/zen-section.vue';
import ZenCardTextComponent from '@/components/zen-components/zen-text-card.vue';
@Component({
  layout: "landing",
  components:{
      ZenSectionComponent,
      ZenCardTextComponent
  },
  head:{
      title:'Home'
  }
})
export default class HomePage extends Vue {

    pajitasBio=require('@/assets/img/Landing/pajitas-biodegradable.png')
    localBcn=require('@/assets/img/Landing/zenzoo-local-barcelona.png')
    instagramBtn = require('@/assets/img/Landing/follow-us-instagram.png');
    pressImg01 = require('@/assets/img/Landing/forbes-entrevista-zenzoo.png');
    pressImg02 = require('@/assets/img/Landing/timeout-entrevista-zenzoo.png');
    pressImg03 = require('@/assets/img/Landing/tvbs-entrevista-zenzoo.png');
    bottomImg = require('@/assets/img/Landing/bottom_picture.png');
    starImg = require('@/assets/img/Landing/estrella.png');
    delivery = require('@/assets/img/Landing/zenzoo-envio-al-domicilio.png');
    catering = require('@/assets/img/Landing/evento-catering.png');
    deliveryM = require('@/assets/img/Landing/zenzoo-envio-al-domicilio_m.png');

    //Video
    zenzooVideo = require('@/assets/img/Landing/video/Zenzoo_Corporativo.mp4')

    //Bubble Tea
    jelly = require('@/assets/img/Landing/bublee_tea/jelly.png');
    lAzul = require('@/assets/img/Landing/bublee_tea/liquido-azul.png');
    lNaranja = require('@/assets/img/Landing/bublee_tea/liquido-naranja.png');
    lVerde = require('@/assets/img/Landing/bublee_tea/liquido-verde.png');
    littleMissBubble = require('@/assets/img/Landing/bublee_tea/little-miss-bubble.png');
    pajita = require('@/assets/img/Landing/bublee_tea/pajita.png');
    poppings = require('@/assets/img/Landing/bublee_tea/poppings.png');
    tapioca = require('@/assets/img/Landing/bublee_tea/tapioca-bubble.png');
    vaso = require('@/assets/img/Landing/bublee_tea/vaso.png');
    vaso2 = require('@/assets/img/Landing/bublee_tea/vaso2.png');
    bubbleTeaM = require('@/assets/img/Landing/bublee_tea/imagen_web_movil.png')

    public outer:any|null=null;
    public content:any|null=null;
    public loop:any|null=null;
    public instagram:any={};

    created(){
        this.getInstagram();
        console.log(this.bubbleTeaM);
        
    }

    //Mounted
    mounted(){
        this.outer = this.$refs.outer;
        this.content = this.$refs.content;
        this.repeatContent(this.content,this.outer.offsetWidth)
        this.loop = this.$refs.loop;
        this.loop.innerHTML = this.loop.innerHTML + this.loop.innerHTML;
        console.log(this.instagram)
    }

    async getInstagram(){

    // !IMPORTANT - THIS NEEDS TO CHANGE BECAUSE THIS IS MY PERSONAL ACCOUNT ON nocodeapi.com SO PLEASE CREATE A ACCOUNT
        const instagram =this.$axios.$get('https://v1.nocodeapi.com/iamcodex/instagram/uOjcOvTokkLtvHFN?limit=5').then(res=>{
            console.log(res)
            this.instagram = res;
            
        }).catch(err=>{
            console.log(err);
        })
    }

    repeatContent(element:any,till:number) {
        let html = element.innerHTML;
        let counter = 0; // prevents infinite loop
        
        while (element.offsetWidth < till && counter < 100) {
            element.innerHTML += html;
            counter += 1;
        }
    }

}
</script>

<style lang="scss">

#outer {
    overflow: hidden;
    width: 100%;
}

#outer div {
    display: inline-block;
}

#loop {
    white-space: nowrap;
    animation: loop-anim 5s linear infinite;
}

.overflow-0{
    overflow: hidden;
}

@keyframes loop-anim {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -50% /* This works because of the div between "outer" and "loop" */
    }
}

.happy-title{
    font-family: 'Happyshaking'!important;
}

#zen-buble-tea{
    position: relative;
    display: flex;
    justify-content: center;
    height: 700px;
}
#buble-tea-container img{
    position: absolute;
    
}

#buble-tea-mcontainer{
    position: relative;
}
#buble-tea-mcontainer img{
    position: absolute;
    
}
#zen-header-container{
    position: relative;
}
#pics{
    display: flex;
    width: 100%;
    .instapics{
    flex:20%;
        img{
            float: left;
            width:  100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


.header-text{
    font-size: 5em;
}
#zen-video{
    width:100%;
    display:flex;
    justify-content: center;
}

#video{
    width: 1200px;
    background:#eeae50;
}

#zen-sliding-text{
    height: 150px;
    width: 100%;
    display:flex;
    align-items: center;
    font-family: 'Frankfurter'!important;
    font-size: 2.5em;
    color:#008d7f;
}

#press{
    margin-top:2em ;
}
#rate{
    width: 100%;
    background-color:#008d7f ;
}
.zen-title{
    font-family: 'Frankfurter'!important;
}
.press-title{
    display: flex;
    justify-content: center;
}
.interview{
    text-align: center;
    font-family: 'Frankfurter'!important;
}
.press-images:hover{
    border:solid 5px #008d7f;
    border-radius: 45px;
}
.press-img-container{
    display: inline-block;
    justify-content: center;
}
.section-text{
    font-size: 3em;
}

.section-mtext{
    font-size: 1.75em;
}
.p-relative{
    position: relative;
}
</style>