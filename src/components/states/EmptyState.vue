<script setup lang="ts">
import { Search } from "lucide-vue-next";
</script>

<template>
  <PlaceholderState>
    <div class="p-6">
      <Search :size="48" class="text-muted/50" />
    </div>

    <div class="space-y-2 max-w-sm">
      <p class="text-lg md:text-xl font-bold">Siap Melacak Paket?</p>
      <p class="text-sm md:text-base font-normal text-muted">
        Masukkan nomor resi Anda di atas untuk melihat detail perjalanan dan
        estimasi paket sampai.
      </p>
    </div>
  </PlaceholderState>
</template>
