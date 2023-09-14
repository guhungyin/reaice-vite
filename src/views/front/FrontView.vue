<script>
import { RouterView } from 'vue-router';
import NewsComponent from '../../components/front/NewsComponent.vue'
import HeaderComponent from '../../components/front/HeaderComponent.vue'
import FooterComponent from '../../components/front/FooterComponent.vue'
import MobileMenuComponent from '../../components/front/MobileMenuComponent.vue'
import PageTopComponent from '../../components/front/PageTopComponent.vue'

export default {
  components: {
    RouterView,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    PageTopComponent
  }
}

</script>

<template>
  <div>
    <NewsComponent></NewsComponent>
    <HeaderComponent></HeaderComponent>
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
    <MobileMenuComponent></MobileMenuComponent>
    <PageTopComponent></PageTopComponent>
  </div>
</template>