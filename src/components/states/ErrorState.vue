<script setup lang="ts">
import { AlertCircle } from "lucide-vue-next";
</script>

<template>
  <PlaceholderState>
    <div class="p-6 rounded-full bg-error/40">
      <AlertCircle :size="48" class="text-error" />
    </div>

    <div class="space-y-2 max-w-sm">
      <p class="text-lg md:text-xl font-bold">Nomor Resi tidak ditemukan</p>
      <p class="text-sm md:text-base font-normal text-muted">
        Maaf, nomor resi error tidak terdaftar di sistem kami. Pastikan nomor
        resi dan ekspedisi sudah benar.
      </p>
    </div>
  </PlaceholderState>
</template>
