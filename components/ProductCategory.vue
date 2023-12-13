<script setup lang="ts">

</script>

<template>
  <Carousel  :items-to-show="4" :transition="2000"  snapAlign='start'  :autoplay="2000">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
         <div class="col-12 product-category-item">
            <NuxtImg src="https://themewagon.github.io/ogani/img/categories/cat-2.jpg" class="w-full"  height="270px"/>
             <h5>
               <NuxtLink>
                 Dried Fruit
               </NuxtLink>
             </h5>
         </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>

</style>