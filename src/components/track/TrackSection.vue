<script setup lang="ts">
const histories = [
  {
    date: "2026-01-07 09:35:05",
    desc: "[Cikarang Barat DC] Paket telah diterima Pusat Sortir",
  },
  {
    date: "2026-01-07 03:56:40",
    desc: "Parcel [TO20260107TKPMT] transporting to [Cikarang Barat DC]",
  },
  {
    date: "2026-01-07 01:43:50",
    desc: "[Transit Point Karawaci DC] Paket telah diterima Pusat Sortir",
  },
  {
    date: "2026-01-06 22:55:05",
    desc: "Parcel [TO20260106SZT2V] transporting to [Transit Point Karawaci DC]",
  },
  {
    date: "2026-01-06 21:47:50",
    desc: "[Cikupa 2 First Mile Hub] Paket telah diterima Pick-up Hub",
  },
  {
    date: "2026-01-06 20:50:56",
    desc: "[Cikupa 2 First Mile Hub] Paket anda telah diambil dari penjual",
  },
  {
    date: "2026-01-06 12:03:10",
    desc: "Nomor Resi Pengiriman telah dibuat",
  },
];
</script>

<template>
  <UContainer
    as="section"
    class="px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
  >
    <TrackSummary />
    <TrackHistory :histories="histories" />
  </UContainer>
</template>
