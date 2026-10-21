# Mari Carmen — El arte del cabello

Landing estática para Peluquería Mari Carmen, señoras y caballeros. C. Sevilla, 4, 11670 El Bosque, Cádiz. Teléfono facilitado: **685 807 415**.

## Abrir localmente

Abre `index.html` directamente en un navegador moderno o usa Live Server desde esta carpeta. No requiere instalación, compilación, frameworks ni servicios externos. Las fotografías, fuentes y licencias están guardadas localmente. Google Maps necesita conexión; llamar requiere una aplicación compatible con `tel:`.

HTML5, CSS3 y JavaScript vanilla. Sin Netlify, despliegues, analítica, formularios, reservas en línea, WhatsApp ni horarios inventados.

## Reconstrucción visual

Rediseño completo del HTML, CSS y comportamiento de servicios, manteniendo los datos del negocio facilitados en el encargo:

- Portada tipográfica de ancho completo y fotografía panorámica de manos trabajando. Sin texto superpuesto a imágenes ni división en dos columnas.
- Manifiesto tipográfico, sin fotografía lateral: «Cada corte cuenta.»
- Índice continuo de servicios sobre negro tinta, con separadores y desplegables nativos `details/summary`. Fotografías contextuales al pasar el puntero, enfocar con teclado o abrir en escritorio; siempre visibles en móvil. Las categorías se identifican como propuestas pendientes de confirmar.
- Mosaico fotográfico de seis escenas, proporciones y posiciones distintas, espacios vacíos deliberados y diálogo de ampliación accesible.
- Franja horizontal CORTE → COLOR → ACABADO. Representación ilustrativa del oficio, ajena a cualquier protocolo específico del salón.
- Contacto en gris humo con titular y teléfono protagonistas, datos en forma de directorio y acciones de llamada, copia y Maps.

Paleta: blanco `#FFFFFF`, humo `#ECECEB`, tinta `#181818`, acero `#607784` y plata `#C6CBCF`. No quedan estilos burdeos ni titulares serif en los archivos activos.

Antes de implementar se revisaron en modo lectura Miel El Bosque, Panadería El Rescoldo, La Casa del Muro, La Casita de El Bosque, Café-Pub Andalucía y El Bosque Vending 24h. Se evitaron sus combinaciones serif/sans, composiciones superpuestas, bloques alternos de presentación, tarjetas de producto y contactos con grandes botones sobre fondos oscuros. El encargo pide explícitamente una gran marca sobre fotografía panorámica; se desarrolla con tipografía sans, marca separada en dos palabras y jerarquía propia. No se copiaron componentes ni recursos de esos proyectos y no se modificaron sus archivos.

## Información y funciones

Nombre, dirección, actividad y teléfono proceden del usuario. No se ha realizado una llamada de verificación. No se afirman antigüedad, precios, premios, horarios, reseñas, técnicas especializadas ni marcas utilizadas. Las categorías de servicios no están confirmadas y se indica tanto en el encabezado como al desplegar cada una.

«Pedir cita» enlaza a `#contacto`. Menú móvil con estado accesible, cierre al seleccionar un destino o pulsar Escape y traslado de foco al destino. Servicios operables con teclado y sin JavaScript mediante controles HTML nativos. Con JavaScript, abrir un servicio cierra los demás.

Galería con diálogo nativo: navegación por botones o flechas, cierre con Escape, botón de cierre o clic en el fondo exterior y devolución del foco al origen. Copia del número mediante Clipboard API; método alternativo para archivos locales y mensaje para copia manual si el navegador lo impide. La llamada y la ruta de Maps dependen de las aplicaciones externas.

Las apariciones de fotografías mediante recorte suave, transiciones y desplazamiento respetan `prefers-reduced-motion`, incluso si la preferencia cambia durante la visita. Sin JavaScript las fotografías y el contenido siguen visibles. Menú móvil, ampliación de galería y copia requieren JavaScript.

## Fotografías y licencias

Todas las fotografías son **stock ilustrativo** y se identifican como tales en portada, servicios, mosaico y proceso. No muestran el local, equipo, clientes ni trabajos de Mari Carmen. No se han facilitado imágenes propias autorizadas del negocio.

Las catorce fotografías son distintas, sin repeticiones entre secciones ni duplicados binarios. La ampliación muestra la fotografía seleccionada; no constituye otra fotografía. Se priorizan manos, herramientas y cabello; las personas no son protagonistas. Se han descartado los interiores de salón y retratos de la versión anterior.

Fuente y licencia común: [Pexels License](https://www.pexels.com/license/), consultada el 21 de octubre de 2026. Permite uso comercial y modificaciones sujeto a sus restricciones, entre ellas no insinuar respaldo de personas o marcas. Las escenas se mantienen como fotografías, sin generación ni alteración de anatomía.

| Archivo | Uso y fuente |
| --- | --- |
| `img/senoras-proceso.jpg` | Portada · Godwin Torres · [Manos, tijeras y peine, 18186525](https://www.pexels.com/photo/hair-cutting-in-salon-in-close-up-view-18186525/) |
| `img/corte-femenino.jpg` | Servicio 01 · [Corte desde atrás, 3356170](https://www.pexels.com/photo/person-cutting-hair-3356170/) |
| `img/corte-masculino.jpg` | Servicio 02 · [Tijeras y peine, 15659507](https://www.pexels.com/photo/brunette-getting-haircut-15659507/) |
| `img/coloracion-mechones.jpg` | Servicio 03 · [Aplicación con brocha, 4981476](https://www.pexels.com/photo/close-up-shot-of-an-applying-hair-coloring-4981476/) |
| `img/servicio-acabado.jpg` | Servicio 04 · Deni Priyo · [Secado y cepillado, 10028673](https://www.pexels.com/photo/close-up-of-women-hairdressing-10028673/) |
| `img/corte-manos.jpg` | Mosaico 01 · Nataliya Vaitkevich · [Corte de puntas, 8467965](https://www.pexels.com/photo/a-person-cutting-hair-8467965/) |
| `img/gesto-color.jpg` | Mosaico 02 · [Brocha y papel de aluminio, 20894394](https://www.pexels.com/photo/hair-coloring-in-beauty-salon-20894394/) |
| `img/secado-cepillo.jpg` | Mosaico 03 · Daniil Kondrashin · [Cepillo y secador, 14615061](https://www.pexels.com/photo/hairdresser-making-woman-hairstyle-14615061/) |
| `img/caballeros-proceso.jpg` | Mosaico 04 · [Máquina en la nuca, 3356174](https://www.pexels.com/photo/person-using-hair-razor-on-man-s-hair-3356174/) |
| `img/utensilios.jpg` | Mosaico 05 · [Tijeras y accesorios, 7518712](https://www.pexels.com/photo/close-up-hair-cutting-tools-7518712/) |
| `img/gesto-peinado.jpg` | Mosaico 06 · cottonbro studio · [Tenacilla y mechón, 7440125](https://www.pexels.com/photo/woman-holding-a-curling-iron-7440125/) |
| `img/proceso-corte.jpg` | Proceso / corte · cottonbro studio · [Tijeras sobre cabello, 3993447](https://www.pexels.com/es-es/foto/manos-gente-mujer-nina-3993447/) |
| `img/proceso-color.jpg` | Proceso / color · cottonbro studio · [Preparación de tinte, 3993292](https://www.pexels.com/photo/person-holding-black-comb-with-hair-dye-3993292/) |
| `img/acabado-cabello.jpg` | Proceso / acabado · Engin Akyurt · [Textura desde atrás, 3065208](https://www.pexels.com/photo/woman-s-hairstyle-3065208/) |

JPEG optimizados: 1400–1800 px en las nuevas descargas, calidad 84–85; archivos conservados de la selección anterior a 1600 px y calidad 84. Recursos de fotografía en torno a 3,7 MB en total, carga diferida excepto portada. Encuadres mediante `object-fit: cover` y posiciones específicas; ampliación con `object-fit: contain`. Rutas relativas, sin solicitudes a bancos de imágenes durante la visita.

## Tipografía y marca

Titulares y marca: **Space Grotesk**. Textos: **IBM Plex Sans**. Archivos variables locales en `css/`, descargados de [Google Fonts](https://github.com/google/fonts), carpetas `ofl/spacegrotesk` y `ofl/ibmplexsans`. Licencias SIL OFL 1.1 incluidas en `css/OFL-space-grotesk.txt` y `css/OFL-plex-sans.txt`. Favicon geométrico SVG creado para esta identidad. Sin recursos tipográficos de otros proyectos.

## SEO y accesibilidad

Título, descripción, Open Graph y JSON-LD `HairSalon` con los datos facilitados. No se inventa un dominio: canonical, `og:url` y URL absoluta para la imagen social deben completarse si se publica en el futuro. Esta entrega no incluye publicación.

HTML semántico, idioma español, salto a contenido, textos alternativos, nombres de controles, foco visible, navegación por teclado, diálogo modal nativo y estado de copia anunciado. Contraste de texto y tamaños revisados; no se ha realizado una auditoría con lector de pantalla.

## Comprobaciones ejecutadas

Chrome headless, servidor HTTP local, 21 de octubre de 2026:

- Capturas de 375, 768, 1440 y 1920 px revisadas visualmente; capturas de página completa en escritorio y móvil.
- Sin desbordamiento horizontal, imágenes rotas, fuentes ausentes ni destinos internos inexistentes en esos anchos.
- Catorce imágenes distintas con textos alternativos; verificación de hashes y carga completa.
- Menú móvil: abrir, cerrar al elegir una sección y cambio del estado accesible.
- Servicios: activar `summary` con Enter, abrir una categoría cerrando la anterior; imágenes visibles en móvil sin hover.
- Seis escenas de mosaico: apertura de cada una, avance, Escape y devolución del foco.
- Copia de teléfono con mensaje de éxito; todos los enlaces `tel:` apuntan a `+34685807415`; cita apunta a contacto.
- Movimiento reducido con desplazamiento automático; sintaxis JavaScript comprobada con `node --check`.
- Sin errores JavaScript ni errores de recursos registrados por Chrome.

Informes y capturas en `.qa/`, excluidos por `.gitignore`. Copia de la versión anterior en `.qa/before-redesign/`; recursos retirados en su subcarpeta `unused-assets/`. No se han realizado llamadas, reservas, viajes de prueba a Maps ni pruebas en dispositivos físicos u otros navegadores. No se ha desplegado la web.
