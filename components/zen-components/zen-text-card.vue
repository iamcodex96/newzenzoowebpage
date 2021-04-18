<template lang="pug">
    div
        div.not-movil.d-none.d-lg-flex
            div#zencard.with-shadow(v-if="shadow" :style="styleBackground" :class="isMovil")
                div.zencardtext {{text}}
            div#zencard(v-else :style="styleBackground" :class="isMovil")
                div.zencardtext {{text}}
        div.movil.d-flex.d-lg-none
            div#zencard.with-shadow(v-if="shadow" :style="styleBackground")
                div.zencardtext {{text}}
            div#zencard(v-else :style="styleBackground")
                div.zencardtext {{text}}
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'nuxt-property-decorator'
@Component({})
export default class ZenCardTextComponent extends Vue{


    public get styleBackground(){
        if(this.color){
            return {backgroundColor:this.color,width:this.width}
        }
    }

    public get isMovil(){
        return this.movil?'movil':'';
    }

    @Prop()
    width:string|undefined;

    @Prop()
    movil:boolean|undefined;

    @Prop()
    shadow:boolean|undefined;

    @Prop()
    color:string|undefined;

    @Prop()
    text:string|undefined;
}
</script>
<style lang="scss">
.not-movil{

    #zencard{
        padding: 1rem;
        align-items: center;
        font-size: 1.75em;
        margin: 1rem;
        transform: rotate(-6deg);
    }
    .with-shadow{
        box-shadow: 12px 12px 0px 0px #000000 ;
    }   
}

.movil{
    #zencard{
        padding: .3rem!important;
        align-items: center;
        justify-items: center;
        margin: .3rem!important;
        transform: rotate(-6deg);
    }
    .with-shadow{
        box-shadow: 4px 4px 0px 0px #000000 ;
    }
}

    
</style>