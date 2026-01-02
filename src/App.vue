import Header from './Header.vue'
<template>
  <UApp>
    <Header />

    <Suspense>
      <UMain>
        <RouterView />
      </UMain>
    </Suspense>
  </UApp>
</template>
