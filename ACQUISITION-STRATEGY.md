# Estrategia de Adquisición — Clientes Nuevos B2B

**Objetivo:** que clínicas y doctores que no te conocen lleguen a fancywater.mx y compren directo con Stripe, sin pasar por WhatsApp.
**Presupuesto:** <$10,000 MXN/mes. **Situación actual:** ya corres Google Ads + Meta Ads, con poco resultado.

Con ese presupuesto la prioridad no es gastar más — es dejar de perder lo que ya gastas en dos fugas concretas: una técnica (probable problema de políticas en Google Ads) y una de producto (el embudo mandaba a todos a negociar por WhatsApp en vez de comprar). La segunda ya se corrigió parcialmente en `/mayoreo` en esta sesión.

---

## 1. Prioridad #0: revisar por qué Google Ads rinde mal

Antes de tocar presupuesto o creatividades, hay que descartar un problema real y común: Google prohíbe los términos **"Botox", "Botulinum", "Botulinum Toxin" y "Toxin"** en cualquier página de destino de un anuncio — si aparecen, el anuncio se rechaza o el dominio completo pierde alcance. Tu sitio usa "Toxinas Botulínicas" como categoría entera en home, `/toxinas`, y una guía llamada literalmente "Nabota vs Botox".

La página `/mayoreo` ya se construyó específicamente sin esos términos (buena decisión previa) — pero hay que confirmar:

- Que **todas** las campañas de Search/Display apunten solo a `/mayoreo` o `/productos`, nunca a home, `/toxinas` o las guías con "Botox" en el texto.
- Si buscas keywords que incluyan "botox" o "toxina botulínica", en 2026 Google exige certificación de anuncios de salud para esa categoría — revisa en tu cuenta (Configuración → Verificación de identidad del anunciante / Certificaciones) si la tienes. Sin ella, esos anuncios simplemente no salen, aunque la cuenta muestre "activa".
- Meta es más permisivo con nombres de marca (si puedes seguir usando "Nabota", "Botox" en creatividades de Facebook/Instagram), pero prohíbe fotos de antes/después tipo comparación lado a lado — si tus anuncios usan ese formato, se limitan silenciosamente.

Esto por sí solo puede explicar gran parte del "poco resultado" sin que el problema sea presupuesto o creatividad.

*(Fuentes: [Google Ads Healthcare Policy](https://support.google.com/adspolicy/answer/176031), [Meta Health & Wellness Policy](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/))*

## 2. El embudo tenía que dejar de terminar en WhatsApp

`/mayoreo` — tu página pensada para tráfico pagado — guiaba el 100% del tráfico a "Cotizar por WhatsApp". Con presupuesto limitado, cada clic pagado que termina en una conversación manual (que tú tienes que atender, cotizar y dar seguimiento) cuesta mucho más por venta que uno que cae directo en Stripe. Ya agregué un botón "Comprar en línea ahora" en el nav, el hero y el CTA final de `/mayoreo`, con nota de que el precio es el mismo — falta que subas ese cambio (el git lock pendiente de la conversación anterior).

## 3. Reasignación dentro de tu presupuesto actual

En vez de pedirte más dinero, reordena el que ya gastas:

- **Pausa o reduce Display/Awareness genérico** (impresiones baratas, intención baja) si lo estás corriendo — para B2B con presupuesto chico casi nunca convierte.
- **Concentra en Search de intención alta**: keywords tipo "distribuidor VOL:TENA México", "comprar Nabota mayoreo", "proveedor insumos medicina estética Monterrey", "dónde comprar ácido hialurónico profesional". Menos volumen, más barato por clic, mucho más cerca de comprar.
- **Activa remarketing** (Meta + Google) a quien visitó `/mayoreo` o `/productos` sin comprar — es la audiencia más barata y de mayor conversión que existe, y ya tienes el pixel y el tag instalados. Anuncio simple: "Ya viste el catálogo — compra en línea, mismo precio, sin cotización."

## 4. Canales de costo bajo o cero (para complementar, no reemplazar los ads)

- **Google Business Profile** — regístralo si no existe, categoría distribuidor médico/insumos estéticos, Monterrey. Gratis, y clínicas que buscan proveedor local sí usan Maps/Google directo.
- **Las 10 guías que ya existen en `/guias`** son un activo real de SEO (Nabota vs Botox, cómo elegir toxina, PLLA, etc.) — confirma que el sitemap esté enviado en Google Search Console; si nunca se conectó, es la acción de mayor apalancamiento gratis que puedes hacer hoy.
- **Contenido orgánico en Instagram/Facebook** reusando esas guías como carruseles — encaja con el tono "clínica-lujo" de la marca y es gratis.
- **Referidos de tus clientes actuales** — ya tienes doctores satisfechos (los testimonios en home son reales). Un mensaje simple ofreciéndoles algo por cada colega que refieran y compre es el canal más barato que existe para B2B.

## 5. Un doctor nuevo no confía igual que uno que ya te conoce

Tus clientes de WhatsApp compran porque ya te conocen. Uno nuevo que llega por un anuncio no tiene ese historial y va a dudar antes de pagar con tarjeta a un desconocido. El sitio ya tiene buenas señales (lote/caducidad verificable, testimonios, FAQ), pero para tráfico frío conviene reforzar en `/productos` y `/mayoreo`:
- Mencionar explícitamente el RFC/razón social y dirección física del almacén en Monterrey (ya aparece parcial, hacerlo más visible).
- Un sello o mención concreta de "pago procesado por Stripe, el mismo procesador que usan [ejemplos reconocibles]" — ya está en el FAQ, podría subir más arriba en `/mayoreo`.

## 6. Próximos 30 días

| Semana | Acción |
|---|---|
| 1 | Confirmar certificación de salud en Google Ads y auditar landing pages de cada campaña activa (que ninguna use "Botox/Toxina/Toxin"). Subir el cambio de `/mayoreo` (resolver el git lock). |
| 1 | Activar remarketing Meta + Google a visitantes de `/mayoreo` y `/productos`. |
| 2 | Pausar Display genérico si existe; mover ese presupuesto a Search de intención alta. |
| 2 | Registrar/optimizar Google Business Profile. Confirmar sitemap en Search Console. |
| 3 | Lanzar 3–4 posts orgánicos en Instagram reusando las guías existentes. |
| 3 | Mandar mensaje de referidos a tu base actual de doctores. |
| 4 | Revisar métricas: costo por clic, tasa de conversión a compra en `/mayoreo` y `/productos`, comparar antes/después. |

## Lo que necesito de ti para avanzar más rápido

Conectar Google Ads y Meta (o Windsor.ai/Supermetrics si prefieres uno solo para ambos) me deja ver directo qué keywords/campañas están activas, cuáles se están rechazando por política, y el gasto real — en vez de que me pases capturas de pantalla.
