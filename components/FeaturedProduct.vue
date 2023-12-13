<script lang="ts" setup>
const active = ref(0)
const data = [
  {
    id: 0,
    name: "All",
    class: '*'
  },
  {
    id: 1,
    name: "Oranges",
    class: '.oranges'
  },
  {
    id: 2,
    name: "Fresh Meat",
    class: '.fresh-meat'
  },
  {
    id: 3,
    name: "Vegetables",
    class: ".vegetables"
  }

]
const food = [
  {
    id: 1,
    name: 'Crab Pool Security',
    type: "vegetables",
    price: "$30.00",
    image: 'https://themewagon.github.io/ogani/img/featured/feature-6.jpg'
  },
  {
    id: 2,
    name: 'Crab Pool Security',
    type: "oranges",
    price: "$30.00",
    image: 'https://themewagon.github.io/ogani/img/featured/feature-1.jpg'
  },
  {
    id: 3,
    name: 'Crab Pool Security',
    type: "vegetables",
    price: "$30.00",
    image: 'https://themewagon.github.io/ogani/img/featured/feature-2.jpg'
  }, {
    id: 4,
    name: 'Crab Pool Security',
    type: "fresh-meat",
    price: "$30.00",
    image: 'https://themewagon.github.io/ogani/img/featured/feature-4.jpg'
  }

]
const handleClickActive = (key) => {
  active.value = key
}
onMounted(async () => {
  const mixitup = await import('mixitup')
  setTimeout(() => {
    mixitup.default('.mixitup-gallery', {
      selectors: {
        target: '.mix'
      },
      animation: {
        duration: 400,
        nudge: true,
        reverseOut: true,
        effects: 'fade translateY(-100%)'
      }
    });
  }, 1000);
})

</script>

<template>
  <div class="row featured ">
    <div class="section-title">
      <h2>Featured Product</h2>
    </div>
    <ClientOnly>
      <div class="featured-controls">
        <ul>
          <li v-for="item in data" :key="item.id" :class="item.id === active ?'active':'' " :data-filter="item.class"
              @click="handleClickActive(item.id)">{{ item.name }}
          </li>
        </ul>
      </div>
      <div id="MixItUpE3548C" class="row mixitup-gallery ">
        <div v-for="item in food" :class="'col-3 mix featured-item '+item.type">
          <div class="position-relative overflow-hidden" style="width: 270px">
            <img :src="item.image">
            <ul class="featured-hover">
              <li>
                <NuxtLink to="/">
                  <Icon name="material-symbols:favorite" size="18"/>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/">
                  <Icon name="ant-design:retweet-outlined" size="18"/>
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/">
                  <Icon name="material-symbols:shopping-cart" size="18"/>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="featured-text">
            <h6>
              <NuxtLink to="/">{{ item.name }}</NuxtLink>
            </h6>
            <h5>{{ item.price }}</h5>
          </div>
        </div>
      </div>
    </ClientOnly>

  </div>

</template>

<style scoped>

</style>