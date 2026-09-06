# AGENTS.md

## Contexto del Proyecto

Este proyecto es una **landing page moderna y profesional para un gimnasio**, desarrollada con React, JavaScript, Vite, Tailwind CSS y Framer Motion.

El objetivo es crear una experiencia visual atractiva, energética y profesional que transmita la identidad de un gimnasio moderno y facilite la presentación de sus servicios, clases, planes, entrenadores e instalaciones.

El proyecto debe mantenerse simple, organizado y preparado para poder incorporar nuevas secciones o funcionalidades en el futuro.

---

## Stack Tecnológico

* **Framework:** React + JavaScript (Vite)
* **NO utilizar TypeScript**
* **Estilos:** Tailwind CSS v4
* **Animaciones:** Framer Motion
* **Iconos:** Lucide React
* **Package manager:** pnpm
* **Backend:** NO requerido
* **Base de datos:** NO requerida

No introducir tecnologías adicionales sin autorización previa.

---

# REGLAS ESTRICTAS DE OPERACIÓN

## 1. Inspección antes de modificar

Antes de modificar cualquier archivo:

1. Leer el contenido actual del archivo.
2. Comprender su implementación existente.
3. Identificar componentes y estilos que puedan reutilizarse.
4. Modificar únicamente lo necesario para completar la tarea.
5. Evitar reescrituras completas cuando no sean necesarias.

No modificar archivos sin una razón concreta relacionada con la tarea solicitada.

---

## 2. Regla de alcance

**No hacer más de lo solicitado.**

* No realizar cambios adicionales que no sean necesarios.
* No refactorizar código existente salvo que sea necesario para completar la tarea.
* No cambiar la estructura del proyecto sin una razón clara.
* No reemplazar componentes funcionales por otros únicamente por preferencia personal.
* No introducir nuevas librerías o tecnologías sin autorización.
* Si se detecta una mejora adicional, mencionarla como sugerencia en lugar de implementarla automáticamente.

---

## 3. Comunicación y explicación de cambios

Cada vez que se cree, modifique, elimine o refactorice código:

* Explicar brevemente **qué se modificó**.
* Explicar **cómo se implementó**.
* Explicar **por qué se tomó esa decisión**.

Las explicaciones deben ser claras y concisas.

---

## 4. Dependencias

Queda estrictamente prohibido instalar nuevas dependencias sin solicitar y recibir autorización previa del usuario.

El gestor de paquetes utilizado es **pnpm**.

No ejecutar:

```bash
npm install
```

ni instalar paquetes adicionales sin autorización.

Antes de agregar una dependencia, comprobar si la funcionalidad puede resolverse utilizando las herramientas y librerías que ya existen en el proyecto.

---

## 5. Imágenes y Assets

No descargar imágenes automáticamente.

No agregar URLs externas de imágenes sin autorización.

Priorizar:

* Assets proporcionados por el usuario.
* Imágenes previamente autorizadas.
* Recursos locales almacenados en `src/assets/` o `public/`.

No reemplazar imágenes existentes sin autorización.

Las imágenes utilizadas deben ser coherentes con la identidad visual del gimnasio y transmitir una apariencia profesional y realista.

Evitar imágenes con una apariencia evidente de contenido generado por IA cuando existan alternativas adecuadas.

---

## 6. Estructura de Carpetas

Mantener una estructura simple y organizada:

```text
src/
├── assets/              # Imágenes, logos y recursos locales
├── components/
│   ├── layout/          # Header, Footer, navegación
│   └── sections/        # Secciones principales de la landing
├── data/                # Información estática
├── hooks/               # Custom hooks reutilizables
├── lib/                 # Utilidades reutilizables
├── App.jsx              # Composición principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales mínimos
```

No crear carpetas o archivos innecesarios.

---

## 7. Componentización

Crear componentes reutilizables cuando aporten claridad o eviten duplicación.

No dividir excesivamente los componentes.

Evitar crear componentes para elementos extremadamente simples cuando esto aumente innecesariamente la complejidad.

Las secciones principales de la landing deberían encontrarse dentro de:

```text
src/components/sections/
```

Ejemplos:

```text
Hero.jsx
About.jsx
Classes.jsx
Plans.jsx
Trainers.jsx
Testimonials.jsx
Contact.jsx
```

Utilizar únicamente las secciones que realmente sean necesarias para el proyecto.

---

## 8. Tailwind CSS

Utilizar **Tailwind CSS v4**.

Priorizar las clases utilitarias de Tailwind antes que CSS personalizado.

No utilizar patrones de configuración propios de Tailwind CSS v3 salvo que exista una necesidad real.

No crear `tailwind.config.js` innecesariamente.

Evitar duplicación excesiva de clases cuando pueda resolverse de forma limpia mediante componentes reutilizables.

---

## 9. CSS Global

El archivo `src/index.css` debe mantenerse mínimo.

Debe utilizarse principalmente para:

* Importar Tailwind.
* Variables globales.
* Reset/base styles.
* Configuraciones globales realmente necesarias.
* Variables relacionadas con la identidad visual del gimnasio.

No crear clases globales arbitrarias.

No utilizar CSS personalizado para solucionar problemas que puedan resolverse correctamente mediante Tailwind.

---

## 10. Estilos Inline

Está prohibido utilizar estilos inline en los componentes React:

```jsx
style={{ ... }}
```

Priorizar siempre las clases utilitarias de Tailwind CSS.

Si una situación excepcional requiere estilos dinámicos, evaluar primero si puede resolverse mediante clases de Tailwind.

---

## 11. Dirección Visual

La landing debe transmitir una identidad:

* Energética
* Moderna
* Profesional
* Potente
* Motivadora
* Premium

Priorizar:

* Buena jerarquía visual.
* Tipografía clara y contundente.
* Imágenes protagonistas.
* Espaciado consistente.
* Contraste adecuado.
* Composiciones visuales dinámicas.
* Diseño responsive.
* Secciones visualmente diferenciadas.
* Microinteracciones que aporten calidad.

Evitar:

* Diseño genérico de plantilla.
* Apariencia de dashboard.
* Exceso de cards.
* Exceso de bordes redondeados.
* Exceso de gradientes.
* Sombras exageradas.
* Animaciones innecesarias.
* Elementos visuales saturados.
* Uso excesivo de colores.
* Diseños que parezcan una plantilla SaaS.

La interfaz debe sentirse diseñada específicamente para un gimnasio.

---

## 12. Responsive Design

La landing debe funcionar correctamente en:

* Mobile
* Tablet
* Desktop
* Pantallas grandes

Utilizar un enfoque **mobile-first** mediante las utilidades responsive de Tailwind.

Comprobar especialmente:

* Navegación.
* Hero.
* Imágenes.
* Tipografías.
* Botones.
* Grids.
* Cards.
* Espaciados.
* Secciones con contenido horizontal.

No asumir que un diseño que funciona en desktop funcionará automáticamente en mobile.

---

## 13. Animaciones — Framer Motion

Utilizar **Framer Motion** para mejorar la experiencia visual.

Se pueden utilizar:

* `whileInView`
* `initial`
* `animate`
* `whileHover`
* `whileTap`
* `variants`
* Transiciones
* Apariciones escalonadas
* Microinteracciones

Priorizar animaciones:

* Suaves.
* Rápidas.
* Naturales.
* Elegantes.
* Consistentes.

Las animaciones deben complementar el diseño y no convertirse en el protagonista de la interfaz.

Evitar:

* Animar todos los elementos.
* Animaciones demasiado largas.
* Efectos excesivamente llamativos.
* Movimiento constante que distraiga.
* Animaciones que afecten el rendimiento móvil.

Cuando corresponda, respetar:

```css
prefers-reduced-motion
```

---

## 14. Accesibilidad

Priorizar una accesibilidad básica y correcta.

* Utilizar HTML semántico.
* Utilizar `alt` descriptivo en imágenes relevantes.
* Los botones deben utilizar elementos `<button>`.
* Los enlaces deben utilizar `<a>` cuando correspondan.
* Mantener suficiente contraste entre texto y fondo.
* Los elementos interactivos deben poder utilizarse mediante teclado.
* No utilizar iconos como único indicador de una acción cuando pueda generar confusión.

---

## 15. Código

Priorizar:

* Código simple.
* Componentes legibles.
* Nombres descriptivos.
* Reutilización razonable.
* Separación clara de responsabilidades.
* Evitar duplicación innecesaria.
* Evitar lógica compleja cuando exista una solución más sencilla.

No sobrearquitecturar una landing page.

No introducir patrones complejos sin una necesidad real.

---

## 16. Datos Estáticos

La información estática de la landing debe mantenerse fuera de los componentes cuando sea conveniente.

Utilizar:

```text
src/data/
```

para información como:

* Planes.
* Horarios.
* Clases.
* Entrenadores.
* Testimonios.
* Características.
* Preguntas frecuentes.

Ejemplo:

```js
export const plans = [
  {
    name: "Plan Básico",
    price: "$20.000",
    features: [
      "Acceso al gimnasio",
      "Sala de musculación"
    ]
  }
];
```

No duplicar grandes cantidades de información directamente dentro de JSX.

---

## 17. Rendimiento

Priorizar un buen rendimiento, especialmente en dispositivos móviles.

* Evitar dependencias innecesarias.
* Evitar animaciones costosas.
* No cargar recursos innecesarios.
* Optimizar el uso de imágenes cuando sea posible.
* Evitar renders innecesarios.
* Mantener los componentes simples.

No sacrificar rendimiento únicamente por efectos visuales.

---

## 18. Validación

Después de realizar cambios importantes:

1. Comprobar que la aplicación compile correctamente.
2. Revisar errores de consola.
3. Comprobar que los componentes afectados funcionen.
4. Verificar responsive design cuando corresponda.
5. Comprobar que las animaciones funcionen correctamente.

No considerar una tarea terminada únicamente porque el código fue modificado.

---

## 19. Regla Principal

Antes de implementar cualquier cambio, seguir este orden:

1. **Entender la tarea.**
2. **Inspeccionar el código existente.**
3. **Planificar el cambio mínimo necesario.**
4. **Implementarlo utilizando las tecnologías existentes.**
5. **Comprobar que funcione.**
6. **Explicar qué se hizo, cómo y por qué.**

**No hacer más de lo solicitado.**
