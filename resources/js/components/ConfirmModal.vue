<template>
  <Modal :show="show"
    role="alertdialog"
    size="sm"
    @modal-close="handleClose">
      <form class="space-y-6 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" @keydown="handleKeydown" @submit.prevent="handleConfirm">
        <slot/>
        <ModalFooter>
          <div class="ml-auto">
            <LinkButton
                type="button"
                data-testid="cancel-button"
                dusk="cancel-delete-button"
                @click.prevent="handleClose"
                class="mr-3"
            >
                {{ __('Cancel') }}
            </LinkButton>

            <Button
              type="submit"
              ref="runButton"
              dusk="confirm-action-button"
              :loading="working"
              variant="solid"
              class="border text-left appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed inline-flex items-center justify-center shadow h-9 px-3 bg-red-500 border-red-500 hover:[&:not(:disabled)]:bg-red-400 hover:[&:not(:disabled)]:border-red-400 text-white dark:text-red-950"
            >
            {{ __('Confirm') }}
            </Button>
          </div>
        </ModalFooter>

      </form>
  </Modal>
</template>


<script setup>
import { ref, watchEffect } from 'vue';
const emit = defineEmits(['close', 'confirm']);
const confirmButton = ref(null);
watchEffect(() => {
  // Only focus when mounted (e.g. if hidden through :show)
  if (confirmButton.value) {
    confirmButton.value.focus();
  }
});


const handleClose = () => {
  emit('close');
};

const handleConfirm = () => {
  emit('confirm');
};

</script>
