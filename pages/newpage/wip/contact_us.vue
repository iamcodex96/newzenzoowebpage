<template lang="pug">
    v-layout
        v-container#zen-about.flex.v-container.items.h-center.v-center
            div#title-container.h-full.flex.v-container.items.h-center.v-center
                div.text-h4.text-md-h2.zen-contact-title.rounded-xl.tilted-2 Contact
                div.text-h4.text-md-h2.zen-contact-title.rounded-xl.tilted-1 Us
            div.h-full.flex.v-container.items.h-center.v-center.mt-12
                div.zen-text.text-h6.text-center Any questions? Before we reach you, you can check the FAQ first! If it’s an order issue, you can also call our shops for an rapid solution, please see Shops info for the contact number
            div.zen-card-default.mt-8
                form
                    div.zen-text-field
                        label.text-h5 First name :
                        input(type="text")
                    div.zen-text-field
                        label.text-h5 Last name :
                        input(type="text")
                    div.zen-text-field
                        label.text-h5 Email :
                        input(type="text")
                    div.zen-text-field
                        label.text-h5 Type of issue :
                        input(type="text")
                    div.zen-text-field
                        label.text-h5 Subject :
                        input(type="text")
                    button.zen-button-submit(type="button") send!
                
                
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout:'default',
})
export default class About extends Vue {
    public tab=null;
}
</script>

<style lang="css">
    .zen-text{
        width: 600px;
    }
    #zen-about{
    position: relative;
    background:#75ca82;
    }
    .zen-card-default{
        position: relative;
        max-width: 700px;
        padding:2rem;
        border-radius: 20px;
        background: white;
    }
    #zen-location{
        background:#88ceeb;
    }

    .zen-button-submit{
        padding: 1rem;
        border-radius: 20px;
        -webkit-box-shadow: -10px 10px 0px 0px rgba(0,0,0,1);
        -moz-box-shadow: -10px 10px 0px 0px rgba(0,0,0,1);
        box-shadow: -10px 10px 0px 0px rgba(0,0,0,1);
        float: right;
    }
    .zen-text-field{
        border: solid 2px black;
        border-radius: 30px;
        padding: 2rem;
        margin-top:1rem;
        margin-left:3rem;
    }
    
    .zen-text-field input{
        width: 100%;
        border-bottom: solid #008d7f 2px;
        padding: .5rem;
    }

    .zen-contact-title{
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
    .v-tab{
        margin-right: 1rem;
        margin-left: 1rem;
        background-color:#eeae50;
        border-radius: 5px;
    }
    .v-tabs{
        background-color: rgba(255, 255, 255, 0)!important;
    }
    .theme--light.v-tabs-items {
        background-color: transparent;
        margin: 10px;
    }

</style>