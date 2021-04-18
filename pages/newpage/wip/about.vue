<template lang="pug">
    v-layout
        v-container#zen-about.flex.v-container.items.h-center.v-center
            div#title-container.h-full.flex.v-container.items.h-center.v-center
                div.text-h4.text-md-h2.zen-title.rounded-xl.tilted-2 About
                div.text-h4.text-md-h2.zen-title.rounded-xl.tilted-1 Us
            div.mt-4
                v-tabs(v-model="tab" centered  background-color="transparent")
                    v-tab(href="#tab-1") Since 2013
                    v-tab(href="#tab-2") Philosophy
                    v-tab(href="#tab-3") Value
                v-tabs-items(v-model="tab" ).mt-4
                    v-tab-item(value="tab-1")
                            div.zen-card-1.mb-8
                                div.text-h5 Homemade bubble tea since 2013 
                                div.text-body-1.mt-6 Et ut eleifend mattis sem posuere vulputate fermentum id non. Ut pretium ipsum vestibulum quisque nullam. Netus porta eleifend neque volutpat risus tellus id egestas. Hac eget posuere mauris ultrices mauris, non. Eros, pulvinar consequat mollis fames. Dolor pellentesque suspendisse quam pulvinar nibh ac. Eleifend elit lectus eu amet est. Ultricies nLorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis urna venenatis dolor cursus. Vel eros urna, euismod sit blandit amet semper. Vitae curabitur quis accumsan orci, blandit egestas pellentesque. Non eget euismod eget vitae mauris. In elementum quisque id ut praesent. In condimentum neque tincidunt vitae vitae aliquet faucibus nullam nunc. Dictum lectus dignissim nulla sed dictum feugiat augue. Eu.
                    v-tab-item(value="tab-2")
                            div.zen-card-1.mb-8
                                div.text-h5 Our philosophy 
                                div.text-body-1.mt-6 Et ut eleifend mattis sem posuere vulputate fermentum id non. Ut pretium ipsum vestibulum quisque nullam. Netus porta eleifend neque volutpat risus tellus id egestas. Hac eget posuere mauris ultrices mauris, non. Eros, pulvinar consequat mollis fames. Dolor pellentesque suspendisse quam pulvinar nibh ac. Eleifend elit lectus eu amet est. Ultricies nLorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis urna venenatis dolor cursus. Vel eros urna, euismod sit blandit amet semper. Vitae curabitur quis accumsan orci, blandit egestas pellentesque. Non eget euismod eget vitae mauris. In elementum quisque id ut praesent. In condimentum neque tincidunt vitae vitae aliquet faucibus nullam nunc. Dictum lectus dignissim nulla sed dictum feugiat augue. Eu.
                    v-tab-item(value="tab-3")
                            div.zen-card-1.mb-8
                                div.text-h5 Bubble tea spriit
                                div.text-body-1.mt-6 Et ut eleifend mattis sem posuere vulputate fermentum id non. Ut pretium ipsum vestibulum quisque nullam. Netus porta eleifend neque volutpat risus tellus id egestas. Hac eget posuere mauris ultrices mauris, non. Eros, pulvinar consequat mollis fames. Dolor pellentesque suspendisse quam pulvinar nibh ac. Eleifend elit lectus eu amet est. Ultricies nLorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis urna venenatis dolor cursus. Vel eros urna, euismod sit blandit amet semper. Vitae curabitur quis accumsan orci, blandit egestas pellentesque. Non eget euismod eget vitae mauris. In elementum quisque id ut praesent. In condimentum neque tincidunt vitae vitae aliquet faucibus nullam nunc. Dictum lectus dignissim nulla sed dictum feugiat augue. Eu.
            div.full.h-container.flex.items.h-center.mt-4
                v-img(src="https://picsum.photos/400")
                v-img(src="https://picsum.photos/400")
                v-img(src="https://picsum.photos/400")
                v-img(src="https://picsum.photos/400")
                
                
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
    #zen-about{
    position: relative;
    background-color:  #ffe76a;
    }
    .zen-card-1{
        max-width: 900px;
        padding:2rem;
        border-radius: 20px;
        background: white;
        -webkit-box-shadow: 25px 25px 0px 5px #22C7B3;
        -moz-box-shadow: 25px 25px 0px 5px #22C7B3;
        box-shadow: 25px 25px 0px 5px #22C7B3;
    }
    #zen-location{
        background:#88ceeb;
    }

    .zen-title{
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