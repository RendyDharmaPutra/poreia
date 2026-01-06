<template>
  <section class="md:col-span-1 flex flex-col space-y-6 w-full max-w-full">
    <TrackStatus :status="`DELIVERED`" />
    <TrackDetails
      :awb="`gjrigjreigjff`"
      :courier="`J&T Express`"
      :service="`Regular (REG)`"
    />
  </section>
</template>
