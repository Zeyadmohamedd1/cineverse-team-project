<template>
  <div class="bg-dark text-white min-vh-100">
    <navbar-component />
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" :key="$route.fullPath" />
      </KeepAlive>

      <!--<KeepAlive>  بيخلي Vue يحتفظ بالصفحة في الذاكرة لما تخرج منها، بدل ما يمسحها ويعملها من جديد.-->
    </RouterView>
    <FooterComponent />
  </div>
</template>



<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>