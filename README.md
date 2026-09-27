# FitZone — Premium Fitness Landing Page

Landing page premium para un gimnasio contemporáneo, construida con React y una dirección visual propia: **Athletic Noir**. Todo el sitio está localizado al español (neutro latinoamericano).

> **Demo:** <!-- TODO: agregar URL del deploy -->
>
> **Capturas:** <!-- TODO: agregar capturas desktop (1440px) y mobile (390px) en `docs/screenshots/` -->

## Stack

| Tecnología    | Uso                          |
| ------------- | ---------------------------- |
| React 19      | UI por componentes           |
| Vite 8        | Build y dev server           |
| Tailwind CSS v4 | Sistema de diseño (`@theme`) |
| Framer Motion 13 | Reveals y microinteracciones |
| Lucide React  | Iconografía                  |
| pnpm          | Gestión de paquetes          |

Sin backend, sin base de datos, sin librerías de scroll ni de animación adicionales.

## Secciones

Orden real de composición en `src/App.jsx`, cada una con un rol narrativo propio:

| Orden | Sección      | Responde a…                                  |
| ----- | ------------ | -------------------------------------------- |
| 1     | Hero         | Por qué entrenar acá (promesa + prueba social inicial) |
| 2     | Programs     | Qué puedo entrenar (rutas por disciplina)    |
| 3     | Facilities   | Dónde voy a entrenar (zonas del gimnasio)    |
| 4     | Trainers     | Quién me guía (coaches con especialidad)     |
| 5     | Schedule     | Cuándo hay clases (grilla semanal LUN–SÁB)   |
| 6     | Memberships  | Cuánto cuesta (3 planes comparables)         |
| 7     | Testimonials | A quién le funcionó (prueba en voz propia)   |
| 8     | About        | Cómo se entrena acá (método y cultura)       |
| 9     | FAQ          | Qué me frena (objeciones, acordeón accesible)|
| 10    | Footer       | Cómo cierro (marca + acción + contacto)      |

## Sistema de diseño — Athletic Noir

Dirección oscura, atlética y editorial. Referencias conceptuales: Equinox, Barry's, Nike Training.

**Tokens** (`src/index.css`, `@theme`):

| Token              | Valor     | Uso                        |
| ------------------ | --------- | -------------------------- |
| `gym-dark`         | `#0a0a0a` | Fondo principal            |
| `gym-surface`      | `#141414` | Superficies y tarjetas     |
| `gym-border`       | `#262626` | Bordes sutiles             |
| `gym-accent`       | `#ffb800` | Acento (amarillo, uso restringido) |
| `gym-accent-hover` | `#ffd060` | Hover del acento           |
| `gym-text` / muted | `#ffffff` / `#a1a1aa` | Texto principal / secundario |

**Tipografías:** Outfit (display, black/uppercase) + JetBrains Mono (etiquetas, zonas, datos).

**Reglas aplicadas:** radio `rounded-xl` único en tarjetas, hairlines `border-white/[0.06]`, container `max-w-7xl`, ritmo vertical `py-16 sm:py-20 lg:py-24`, sin glassmorphism, sin gradientes decorativos, sin sombras duras.

## Responsive

* Breakpoints estándar (`sm`/`md`/`lg`/`xl`) + rangos de precisión `max-sm:` y `640–1023px` donde el diseño lo exige (verificados en el CSS compilado).
* Hero con `min-h-[100dvh]`, altura por contenido en tablets portrait para evitar aire artificial.
* Schedule con scroll horizontal contenido en su wrapper (el `body` nunca scrollea en X).
* Imágenes con `width`/`height` explícitos y `aspect-ratio` por CSS (sin CLS).

## Accesibilidad

* Skip link, landmarks (`header`/`main`/`footer`), una sola jerarquía `h1`→`h2`.
* Foco visible (`focus-visible:ring-2`) en todos los elementos interactivos.
* FAQ como acordeón con `aria-expanded`/`aria-controls`; Schedule con patrón tabs (`tablist`/`tab`/`tabpanel`).
* Teléfono y email como enlaces `tel:`/`mailto:`; iconos decorativos con `aria-hidden`.
* `alt` descriptivos en español + dimensiones en todas las imágenes.
* `prefers-reduced-motion` global + `useReducedMotion` en cada sección animada.

## Motion

Reveals de entrada únicos (`opacity` + `translateY` 12–24px, easing `[0.16, 1, 0.3, 1]`, duraciones 0.25–0.6s, staggers cortos). Sin parallax, sin scroll-jacking, sin librerías de smooth scroll: el desplazamiento es 100% nativo con `scroll-behavior: smooth` y `scroll-padding-top` calibrado al header.

## Imágenes

Campaña fotográfica local en `src/assets/images/` (13 JPG, misma dirección de color y grading). Hero con `fetchPriority` alta; resto con `loading="lazy"` y `decoding="async"`.

> **Deuda conocida:** ~8 MB totales sin compresión AVIF/WebP ni `srcset` (sin tooling disponible en el entorno). Mejora futura opcional, sin impacto en estructura.

## Estructura del proyecto

```text
src/
├── assets/images/       # Campaña fotográfica local
├── components/
│   ├── Header.jsx       # Navegación sticky + menú mobile accesible
│   ├── sections/        # 10 secciones (Hero → Footer)
│   └── ui/              # Card, PricingCard, TrainerCard
├── data/gymData.js      # Contenido: nav, planes, coaches, horarios, FAQ, testimonios
├── App.jsx              # Composición + skip link
├── main.jsx             # Entrada
└── index.css            # Tokens, base, reduced-motion
```

## Cómo correrlo

```bash
pnpm install
pnpm dev      # desarrollo
pnpm build    # build de producción
pnpm lint     # ESLint
pnpm preview  # vista previa del build
```

## Limitaciones honestas

* Programs reutiliza las fotos de zonas de Facilities (pendiente visual opcional: diversificar).
* Sin tests automatizados ni backend: es una landing de presentación.

## Autor

<!-- TODO: nombre, rol y links (portfolio, LinkedIn, GitHub) -->
