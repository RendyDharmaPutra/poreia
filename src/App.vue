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
