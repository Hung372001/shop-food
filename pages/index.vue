<script lang="ts" setup>
const show = ref(true)
const dropDown = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div :class="show ? 'show':''" class="categories dropdown " @click="dropDown">
          <div class="categories-all ">
            <Icon class="text-white " name="octicon:three-bars-16" size="16px"/>
            <span>All departments</span>
            <Icon class="text-white  " name="material-symbols:keyboard-arrow-down" size="18px"/>
          </div>
          <ul id="navbarDropdown" aria-labelledby="navbarDropdownLbl"
              class="dropdown-menu dropdown-menu-right  show  p-0">
            <li v-for="i in 10" class="dropdown-item">
              <NuxtLink :to="'/category/'+i">
                {{ i }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-9">
        <div style="overflow: hidden;margin-bottom: 30px;">
          <div class="search float-start">
            <input class="search-input" placeholder="What do you need ?"/>
            <button class="search-button">SEARCH</button>
          </div>
          <div class="float-end">
            <div class="phone">
              <div class="phone-icon">
                <Icon name="material-symbols:call-sharp"  size="18"/>
              </div>
              <div class="phone-text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
        </div>

        <div class="banner" style="  background-image: url('/images/banner.jpg')">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<y></y>