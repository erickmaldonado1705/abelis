<template>
  <footer class="bg-blue text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="mb-4">Explora</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/" class="text-white text-decoration-none">Inicio</router-link></li>
            <li class="mb-2"><router-link to="/servicios" class="text-white text-decoration-none">Servicios</router-link></li>
            <li class="mb-2"><router-link to="/sobre-nosotros" class="text-white text-decoration-none">Sobre Nosotros</router-link></li>
            <li><router-link to="/contactanos" class="text-white text-decoration-none">Contáctanos</router-link></li>
          </ul>
        </div>
        
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="mb-4">Nuestras redes sociales</h5>
          <div class="social-icons">
            <a href="https://www.instagram.com/axowebdigital/" class="text-white me-3">
              <i class="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://x.com/AxoWeb" class="text-white me-3">
              <i class="bi bi-twitter-x fs-4"></i>
            </a>
            <a href="https://www.facebook.com/share/15ZUmjNasM/?mibextid=qi2Omg" class="text-white">
              <i class="bi bi-facebook fs-4"></i>
            </a>
          </div>
        </div>
        
        <div class="col-md-4 text-md-end">
          <div class="d-flex justify-content-md-end justify-content-start">
            <div class="footer-logo rounded-circle bg-white p-2 d-flex align-items-center justify-content-center">
              <img
                src="https://i.pinimg.com/736x/88/4a/8e/884a8ed8ebfa49841a40ab82b1b70965.jpg"
                alt="AxoWeb Logo"
                class="img-fluid rounded-logo-footer"
                style="width: 80px; height: 80px;"
              />
            </div>
          </div>
          <p class="mt-3">Axo Web Digital</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icons a {
  transition: transform 0.3s ease;
  display: inline-block;
}

.social-icons a:hover {
  transform: translateY(-3px);
}

/* 👇 Nuevo estilo para el logo redondo del footer */
.rounded-logo-footer {
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
}
</style>
