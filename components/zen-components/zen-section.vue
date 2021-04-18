<template lang="pug">
    div#section-container(:style="styleBackground")
        div
            slot(name="sectionItem").section-item
        div.section-pattern(:style="stylePatron")
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'nuxt-property-decorator'

/**
 * This component is for the sections with patterns inside so you can reuse it as a HTML tag
 * ZenSectionComponent(patron=int color=hexcolor)
 */
@Component({})
export default class ZenSectionComponent extends Vue{

    //root:string="http://localhost:3000";
    root:string="http://zenzoo.es";

    @Prop()
    patron:number|undefined;

    @Prop()
    color:string|undefined;

    pattern07=require('@/assets/img/general/patrones/zenzoo pattern made-07.png')
    pattern08=require('@/assets/img/general/patrones/zenzoo pattern made-08.png')
    pattern09=require('@/assets/img/general/patrones/zenzoo pattern made-09.png')
    pattern10=require('@/assets/img/general/patrones/zenzoo pattern made-10.png')
    pattern11=require('@/assets/img/general/patrones/zenzoo pattern made-11.png')
    pattern12=require('@/assets/img/general/patrones/zenzoo pattern made-12.png')

    //Patters

    public get styleBackground(){
        if(this.color){
            return {backgroundColor:this.color}
        }
    }

    public get stylePatron(){
        let pattern = null;
        if(this.patron){
            switch(this.patron){
                case 1 : pattern= {backgroundImage:`url('${this.root + this.pattern07}')`,zIndex:1};break;
                case 2 : pattern= {backgroundImage:`url('${this.root + this.pattern08}')`,zIndex:1};break;
                case 3 : pattern= {backgroundImage:`url('${this.root + this.pattern09}')`,zIndex:1};break;
                case 4 : pattern= {backgroundImage:`url('${this.root + this.pattern10}')`,zIndex:1};break;
                case 5 : pattern= {backgroundImage:`url('${this.root + this.pattern11}')`,zIndex:1};break;
                case 6 : pattern= {backgroundImage:`url('${this.root + this.pattern12}')`,zIndex:1};break;
            }
        }
        console.log(pattern);
        return pattern;
    }

}
</script>
<style>
    #section-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .section-pattern{
        position: absolute;
        width: 100%;
        height: 100%;
        background-size:cover;
        background-position: center;
        top:0;
        z-index: 2;
    }
    .section-item{
        z-index: 10!important;
    }
    
</style>