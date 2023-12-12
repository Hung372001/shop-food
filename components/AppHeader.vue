<script lang="ts" setup>
 const user = false
</script>

<template>
  <div id="header">
    <div class="">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 header-logo">
            <NuxtLink class="d-inline-block" href="/">
              <NuxtImg src="/images/logo.png" alt="" width="119px" height="50px"/>
            </NuxtLink>
          </div>
          <div class="col-lg-6">
            <div class="header-menu">
              <ul class="nav justify-content-center">
                <li>
                  <NuxtLink to="/category" class="nav-link header-link px-2">Category</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="nav-link header-link px-2">Contact</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="nav-link header-link px-2">Blog</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 header-cart">
            <ul class="nav float-end">
              <li>
                <NuxtLink to='/' class="position-relative">
                  <Icon name="heroicons-solid:heart" size="20px"/>
                  <span>1</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to='/' class="position-relative">
                  <Icon name="bx:bxs-cart" size="20px"/>
                  <span>1</span>
                </NuxtLink>
              </li>
              <li v-if="!user">
                <NuxtLink to='/' class="position-relative">
                  <Icon name="bx:bxs-user" size="20px"/>
                </NuxtLink>
              </li>
              <li v-if="user">
                <NuxtLink to='/' class="position-relative">
                  <NuxtImg  src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" width="30px" height="30px" class="header-avatar"/>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>