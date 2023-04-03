<template>
  <Card v-if="!size" class="ncc_flex ncc_flex-col ncc_items-center ncc_justify-center">
    <div class="ncc_px-3 ncc_py-3">
      <h1 class="ncc_text-center ncc_text-3xl ncc_text-gray-500 ncc_font-light">
        Component not available
      </h1>
    </div>
  </Card>
  <Card v-else class="ncc_flex ncc_items-center ncc_justify-center">
    <div class="ncc_flex-1 ncc_pl-8 ncc_pr-3">
      <h1 class="ncc_text-3xl ncc_text-80 ncc_font-light">
        Cache
      </h1>
      <div v-if="size" class="ncc_mt-3">
        Cache Size: <code>{{ size }}</code>
      </div>
    </div>
    <div v-if="size" class="ncc_flex-2 ncc_pr-8 ncc_pl-3 ncc_text-right">
      <div class="ncc_flex ncc_flex-col">
        <button @click="flushCache" v-bind:class="getClassList()">
          <span v-if="isLoadingData" v-html="loaderIcon"></span>
          Flush
        </button>
      </div>
    </div>
  </Card>
</template>

<script>
import { ROUTE } from '../constants';

export default {
  props: ['card'],
  data() {
    return {
      isLoadingData: false,
      size: null
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    loaderIcon() {
      return '<svg viewBox="0 0 128 128" class="ncc_w-4 ncc_h-4 ncc_mr-2"><g><path d="M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z" fill="#eef3fb" fill-opacity="1"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="-90 64 64" dur="600ms" repeatCount="indefinite"></animateTransform></g></svg>';
    }
  },
  methods: {
    init() {
      this.size = this.card.size;
    },
    getClassList() {
      let sClassList = 'ncc_text-white ncc_text-sm ncc_px-4 ncc_py-2 ncc_font-medium ncc_rounded-md ncc_flex ncc_items-center';
      if (!this.isLoadingData) {
        sClassList += ' ncc_bg-red-500 hover:ncc_bg-red-400';
      } else {
        sClassList += ' ncc_bg-red-400 ncc_cursor-default';
      }

      return sClassList;
    },
    async flushCache() {
      if (this.isLoadingData) {
        return
      }

      this.isLoadingData = true;

      await Nova.request().delete(ROUTE.API_CACHE_DELETE)
        .then((response) => {
          const { data } = response.data;
          if (!data) {
            return;
          }

          this.size = data.size;
        });

      this.isLoadingData = false;
    }
  }
}
</script>
