<template>
  <div class="modal fade animate__animated animate__fadeIn" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title">Crear Nuevo Administrador</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="formData.nombre"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label">Apellido</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="formData.apellido"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label">Número</label>
              <input 
                type="tel" 
                class="form-control" 
                v-model="formData.numero"
                required
              >
            </div>
            
            <div class="mb-3">
              <label class="form-label">Correo</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="formData.correo"
                required
              >
            </div>
            
            <div class="mb-4">
              <label class="form-label">Contraseña</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="formData.password"
                required
              >
            </div>

            <div class="table-responsive mb-4">
              <table class="table">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nombre</td>
                    <td>{{ formData.nombre || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Apellido</td>
                    <td>{{ formData.apellido || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Número</td>
                    <td>{{ formData.numero || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Correo</td>
                    <td>{{ formData.correo || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Contraseña</td>
                    <td>•••••••••</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-person-plus me-2"></i>
                Crear Administrador
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  nombre: '',
  apellido: '',
  numero: '',
  correo: '',
  password: ''
});

const handleSubmit = () => {
  console.log('Datos del administrador:', formData);
  // Aquí iría la lógica para crear el administrador
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

.table {
  font-size: 0.9rem;
}

.table td, .table th {
  padding: 0.75rem;
}
</style>