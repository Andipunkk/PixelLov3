
# PixelLov3! 
### *"En un mundo de alta definición, el amor en píxeles es el más puro."*

**PixelLov3!** es un generador de cartas virtuales donde el usuario no solo envía un mensaje, sino que protagoniza una pequeña aventura en pixel art. Tú diseñas a los personajes, el sistema crea la historia y tu pareja vive la experiencia.
---

## ¿Cómo funciona la experiencia?

El proyecto se divide en tres actos:

1.  **Laboratorio de Píxeles (Remitente):** Personalizas tu avatar y el de tu pareja (cabello, ropa, colores). Al terminar, el sitio genera un **link único** que contiene toda la configuración de los personajes.
    
2.  **La Entrega (La Minihistoria):** Cuando el destinatario abre el link, comienza una secuencia animada. Tu personaje aparece con pequeños dialogos para entregarle la carta en un escenario retro.
    
3.  **El Gran Dilema:** Aparece la pregunta: *¿Quieres ser mi San Valentín?* * **Botón SÍ:** Desbloquea la animación final feliz.
    * **Botón NO:** ¡Es una trampa! El botón se escapa, se encoge o se burla del usuario, porque en PixelLov3! el "No" no es una opción válida.

---

## Stack Tecnológico

Este proyecto está construido con:

* **HTML5:** Estructura de la escena y el editor.
* **CSS3 (Pixel-Art Focus):** * `image-rendering: pixelated;` para que los dibujos no se vean borrosos.
    * `@keyframes` para las animaciones de besar y los corazones flotantes.
    * Diseño responsivo para que se vea bien en móviles.
* **JavaScript (Vanilla):** * Manejo de **URLSearchParams** para pasar los diseños de una página a otra sin necesidad de base de datos.
    * Lógica del botón "rebelde" que huye del cursor.

---

## Estética Visual

* **Tipografía:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) para ese sentimiento de videojuego clásico.
* **Sprites:** Personajes construidos por capas (Base + Cabello + Ropa) usando `z-index`.
* **Paleta:** Colores vibrantes estilo GameBoy Color.

---

## Estructura del Proyecto

```text
PixelLov3/
├── index.html          # Editor de personajes e inicio.
├── historia.html       # La escena de la animación y propuesta.
├── css/
│   └── style.css       # Magia visual y animaciones pixel-art.
└── js/
    ├── editor.js       # Lógica para elegir personajes y generar link.
    └── historia.js     # Lógica de la animación y botones interactivos.
