<template lang="pug">
    v-btn.zen-button.rounded-xl(:class="item.hoverColor" :to="item.to") {{ $t(item.text) }}
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from 'nuxt-property-decorator'
@Component({})
export default class ZenButtonComponent extends Vue{

    @Model()
    item:any;
}
</script>
<style>
    .zen-button{
        background-color: white ;
        min-height: 70px;
        width: 150px;
        border:black solid 2px;
        margin-top: -.5rem;
    }
    .zen-button::before{
        content:"";
        background-color: white ;
        min-height: 90px;
        width: 170px;
        margin-left:-10px ;
        margin-top:-10px ;
    }
    .zen-light-green:hover{
        background: #75ca82 !important;
        color:white;
    }
    .happy-title{
        font-family: 'Happysha';
    }
</style>