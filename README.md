# Casa Fran Eventos 🥂

Sitio web oficial y Landing Page para **Casa Fran**, servicio de banquetería integral y producción de eventos ubicado en la VI Región (Doñihue y Coltauco), Chile.

Desarrollado con tecnologías modernas para asegurar velocidad, SEO y una experiencia de usuario de lujo ("Premium").

## 🚀 Características Principales

* **Diseño UX/UI Premium:** Estética elegante con paleta de colores personalizada (Navy Blue & Rose Gold).
* **Totalmente Responsive:** Adaptable a móviles, tablets y escritorio (Mobile First).
* **Next.js 15 (App Router):** Última versión del framework para máximo rendimiento y SEO.
* **Animaciones Suaves:**
    * **Preloader (Splash Screen):** Pantalla de carga inicial con el logo.
    * **Scroll Reveal:** Elementos que aparecen suavemente al bajar.
    * **Navbar Dinámico:** Cambia de transparente a sólido al hacer scroll.
* **Galería Interactiva (Lightbox):** Visualización de fotos en pantalla completa.
* **Secciones Clave:**
    * Servicios (Bodas, Graduaciones, Empresas).
    * Testimonios (Prueba social).
    * Preguntas Frecuentes (Acordeón FAQ).
* **Formulario Funcional:** Integrado con **Formspree** para envío de correos directo sin backend complejo.
* **Botón Flotante:** Acceso directo a WhatsApp.

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Next.js 15](https://nextjs.org/)
* **Lenguaje:** TypeScript / React
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Animaciones:** Framer Motion / CSS Transitions
* **Formularios:** [@formspree/react](https://formspree.io/)
* **Iconos:** Lucide React
* **Despliegue:** Vercel

## 📦 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu computadora:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/casa_fran.git](https://github.com/tu-usuario/casa_fran.git)
    cd casa_fran
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Configuración

### Formulario de Contacto
El proyecto utiliza **Formspree** para manejar los envíos del formulario.
El ID del formulario está configurado en el componente `ContactForm.tsx`.

Para cambiar el correo de destino:
1. Crea una cuenta en [Formspree](https://formspree.io/).
2. Crea un nuevo formulario y obtén tu nuevo ID.
3. Reemplaza el ID en `useForm("TU_NUEVO_ID")` en el código.

### Imágenes
Las imágenes se encuentran en la carpeta `/public/images/`.
* Logo: `/public/images/logo1.png`
* Hero Background: `/public/images/hero-bg.jpg`

## 🚀 Despliegue (Deploy)

La forma más fácil de publicar este sitio es usando **Vercel** (los creadores de Next.js).

1.  Sube tu código a GitHub.
2.  Importa el repositorio en Vercel.
3.  Vercel detectará automáticamente la configuración.
4.  ¡Listo! Tu sitio estará online en minutos con HTTPS incluido.

## 📄 Licencia

Este proyecto es de uso privado para Casa Fran Eventos.

---
Desarrollado con ❤️ para Casa Fran.
