<template>
  <div class="container py-5 animate__animated animate__fadeIn">
    <div class="text-center mb-5">
      <div class="admin-icon mb-3">
        <i class="bi bi-shield-lock fs-1"></i>
      </div>
      <h2 class="fw-bold">Panel de Administración</h2>
    </div>

    <!-- Navigation Tabs -->
    <div class="nav-container mb-4">
      <div class="custom-nav mx-auto">
        <button 
          class="nav-button" 
          :class="{ 'active': activeTab === 'clientes' }"
          @click="activeTab = 'clientes'"
        >
          <i class="bi bi-people me-2"></i>
          Clientes
        </button>
        <button 
          class="nav-button" 
          :class="{ 'active': activeTab === 'administradores' }"
          @click="activeTab = 'administradores'"
        >
          <i class="bi bi-shield me-2"></i>
          Administradores
        </button>
        <button 
          class="nav-button" 
          :class="{ 'active': activeTab === 'servicios' }"
          @click="activeTab = 'servicios'"
        >
          <i class="bi bi-gear me-2"></i>
          Servicios
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="tab-content">
      <!-- Clientes Tab -->
      <div v-if="activeTab === 'clientes'" class="animate__animated animate__fadeIn">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="input-group">
                  <span class="input-group-text bg-light border-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input 
                    type="text" 
                    class="form-control border-0 bg-light" 
                    placeholder="Buscar cliente..."
                    v-model="searchQuery"
                  >
                </div>
              </div>
              <div class="col-md-6">
                <select 
                  class="form-select border-0 bg-light"
                  v-model="statusFilter"
                >
                  <option value="">Todos los estados</option>
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                  <option value="pendiente">Pendiente</option>
                </select>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Plan del cliente</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(client, index) in filteredClients" :key="index">
                    <td>
                      <input 
                        type="text" 
                        class="form-control border-0 bg-light"
                        v-model="client.name"
                      >
                    </td>
                    <td>
                      <input 
                        type="text" 
                        class="form-control border-0 bg-light"
                        v-model="client.plan"
                      >
                    </td>
                    <td>
                      <input 
                        type="date" 
                        class="form-control border-0 bg-light"
                        v-model="client.startDate"
                      >
                    </td>
                    <td>
                      <input 
                        type="date" 
                        class="form-control border-0 bg-light"
                        v-model="client.endDate"
                      >
                    </td>
                    <td>
                      <select 
                        class="form-select border-0 bg-light"
                        v-model="client.status"
                      >
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                        <option value="pendiente">Pendiente</option>
                      </select>
                    </td>
                    <td>
                      <button class="btn btn-primary btn-sm" @click="saveClient(client)">
                        <i class="bi bi-save me-1"></i>
                        Guardar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Administradores Tab -->
      <div v-if="activeTab === 'administradores'" class="animate__animated animate__fadeIn">
        <div class="card border-0 shadow-sm hover-card">
          <div class="card-body p-4">
            <div class="d-flex align-items-center">
              <div class="admin-create-icon me-4">
                <i class="bi bi-person-plus-fill fs-1"></i>
              </div>
              <div class="flex-grow-1">
                <h4 class="mb-2">Dar de alta Administrador</h4>
                <p class="text-muted mb-0">Crear una nueva cuenta de administrador</p>
              </div>
              <button class="btn btn-primary px-4">
                <i class="bi bi-plus-circle me-2"></i>
                CREAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Servicios Tab -->
      <div v-if="activeTab === 'servicios'" class="animate__animated animate__fadeIn">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm hover-card">
              <div class="card-body p-4">
                <div class="d-flex align-items-center">
                  <div class="service-icon me-4">
                    <i class="bi bi-clipboard-plus fs-1"></i>
                  </div>
                  <div class="flex-grow-1">
                    <h4 class="mb-2">Crear nuevo plan</h4>
                    <p class="text-muted mb-0">Agregar un nuevo plan de servicio</p>
                  </div>
                  <button class="btn btn-primary px-4">
                    <i class="bi bi-plus-circle me-2"></i>
                    CREAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card border-0 shadow-sm hover-card">
              <div class="card-body p-4">
                <div class="d-flex align-items-center">
                  <div class="service-icon me-4">
                    <i class="bi bi-gear-fill fs-1"></i>
                  </div>
                  <div class="flex-grow-1">
                    <h4 class="mb-2">Crear nuevo servicio</h4>
                    <p class="text-muted mb-0">Agregar un nuevo tipo de servicio</p>
                  </div>
                  <button class="btn btn-primary px-4">
                    <i class="bi bi-plus-circle me-2"></i>
                    CREAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('clientes');
const searchQuery = ref('');
const statusFilter = ref('');

const clients = ref([
  {
    name: 'Juan Pérez',
    plan: 'Premium',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'activo'
  },
  {
    name: 'María García',
    plan: 'Básico',
    startDate: '2024-02-01',
    endDate: '2024-08-01',
    status: 'pendiente'
  },
  {
    name: 'Carlos López',
    plan: 'Profesional',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    status: 'activo'
  }
]);

const filteredClients = computed(() => {
  return clients.value.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         client.plan.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = !statusFilter.value || client.status === statusFilter.value;
    return matchesSearch && matchesStatus;
  });
});

const saveClient = (client) => {
  // Aquí iría la lógica para guardar los cambios del cliente
  console.log('Guardando cliente:', client);
};
</script>

<style scoped>
.admin-icon {
  width: 80px;
  height: 80px;
  background-color: var(--primary-coral);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.custom-nav {
  background: white;
  border-radius: 50px;
  padding: 5px;
  display: inline-flex;
  gap: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-button {
  border: none;
  background: none;
  padding: 8px 20px;
  border-radius: 50px;
  color: var(--primary-blue);
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-button.active {
  background-color: var(--primary-coral);
  color: white;
}

.nav-button:hover:not(.active) {
  background-color: #f8f9fa;
}

.admin-create-icon,
.service-icon {
  width: 60px;
  height: 60px;
  background-color: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-coral);
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--primary-coral);
  box-shadow: 0 0 0 0.25rem rgba(233, 79, 55, 0.25);
}

.table > :not(caption) > * > * {
  padding: 1rem 0.75rem;
}

@media (max-width: 768px) {
  .custom-nav {
    flex-direction: column;
    border-radius: 15px;
  }
  
  .nav-button {
    width: 100%;
    text-align: left;
  }
}
</style>