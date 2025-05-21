<template>
  <div class="modal fade animate__animated animate__fadeIn" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title">Crear Nuevo Servicio</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label">Nombre del Servicio</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="formData.nombre"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label">Descripción</label>
              <textarea 
                class="form-control" 
                rows="4" 
                v-model="formData.descripcion"
                required
              ></textarea>
            </div>
            
            <div class="mb-4">
              <label class="form-label">Imagen del Servicio</label>
              <div class="image-upload-container">
                <input 
                  type="file" 
                  class="form-control" 
                  accept="image/*"
                  @change="handleImageChange"
                  required
                >
                <div v-if="imagePreview" class="image-preview mt-2">
                  <img :src="imagePreview" alt="Preview" class="img-fluid rounded">
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-plus-circle me-2"></i>
                Crear Servicio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  nombre: '',
  descripcion: '',
  imagen: null
});

const imagePreview = ref(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.imagen = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  console.log('Nuevo servicio:', formData);
  // Aquí iría la lógica para crear el servicio
};
</script>

<style scoped>
.modal-content {
  border-radius: 15px;
}

.form-control {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 0.75rem;
}

.form-control:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}

.image-preview {
  max-width: 200px;
  margin: 0 auto;
}

.image-preview img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>