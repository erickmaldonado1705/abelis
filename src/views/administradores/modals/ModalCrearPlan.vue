<template>
  <div class="modal fade animate__animated animate__fadeIn" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title">Crear Nuevo Plan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="form-label">Nombre del Plan</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="planName"
                required
              >
            </div>

            <div class="benefits-list mb-4">
              <h6 class="mb-3">Beneficios Incluidos:</h6>
              <div class="benefit-item">
                <i class="bi bi-palette me-2"></i>
                DISEÑO UI/UX
              </div>
              <div class="benefit-item">
                <i class="bi bi-globe me-2"></i>
                PÁGINA WEB
              </div>
              <div class="benefit-item">
                <i class="bi bi-envelope me-2"></i>
                CORREO EMPRESARIAL
              </div>
              <div class="benefit-item">
                <i class="bi bi-megaphone me-2"></i>
                MARKETING DIGITAL (ESPECIALIZADO O AUTOMATIZADO)
              </div>
              <div class="benefit-item">
                <i class="bi bi-robot me-2"></i>
                AUTOMATIZACIONES
              </div>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-plus-circle me-2"></i>
                Crear Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const planName = ref('');

const handleSubmit = () => {
  console.log('Nuevo plan:', {
    nombre: planName.value,
    beneficios: [
      'DISEÑO UI/UX',
      'PÁGINA WEB',
      'CORREO EMPRESARIAL',
      'MARKETING DIGITAL',
      'AUTOMATIZACIONES'
    ]
  });
  // Aquí iría la lógica para crear el plan
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

.benefits-list {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.benefit-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.benefit-item:hover {
  transform: translateX(5px);
}

.benefit-item i {
  color: var(--primary-coral);
}
</style>