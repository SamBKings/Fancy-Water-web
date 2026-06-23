#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const BASE = path.join(__dirname);

const WA = 'https://wa.me/528134188472?text=Hola%20Fancy%20Water%2C%20me%20interesa%20cotizar';

// ── GUIDE DATA ────────────────────────────────────────────────────────────────

const GUIDES = [
  {
    slug: 'nabota-vs-botox',
    title: 'Nabota vs Botox en México: diferencias técnicas, precio y dónde comprar',
    metaDesc: 'Nabota (Daewoong) vs Botox (Allergan) en México: diferencias técnicas, eficacia clínica, duración y precio por unidad. Guía para médicos y profesionales de medicina estética.',
    date: '2026-06-23',
    intro: 'Cuando un médico estético busca una toxina botulínica coreana en México, Nabota es la primera opción que aparece. La comparación con Botox es inevitable: ambos son onabotulinumtoxinA purificada, con el mismo mecanismo de acción sobre la placa neuromuscular, pero provienen de laboratorios diferentes y se procesan con tecnologías distintas.',
    relatedProducts: [
      { slug:'nabota-100u',  name:'Nabota 100U',  price:1500, img:'nabota.png',       cat:'Toxina Botulínica' },
      { slug:'nabota-200u',  name:'Nabota 200U',  price:1900, img:'nabota200-solo.jpg', cat:'Toxina Botulínica' },
      { slug:'innotox-100u', name:'Innotox 100U', price:1350, img:'innotox-new.webp',  cat:'Toxina Botulínica' },
    ],
    content: `
<p>Cuando un médico estético busca una toxina botulínica coreana en México, Nabota es la primera opción que aparece. La comparación con Botox es inevitable: ambos son <strong>onabotulinumtoxinA purificada</strong>, con el mismo mecanismo de acción sobre la placa neuromuscular, pero provienen de laboratorios diferentes y se procesan con tecnologías distintas.</p>

<h2>El origen de Nabota</h2>
<p>Nabota es fabricada por <strong>Daewoong Pharmaceutical</strong> (Corea del Sur) bajo la molécula DWP-450, con tecnología de purificación <strong>HiPure™</strong> diseñada para reducir al mínimo la carga proteica. La misma formulación fue aprobada en EE.UU. como <em>Jeuveau®</em> por la FDA en 2019 y en Europa como <em>Nuceiva®</em> por la EMA en 2020. Esta doble aprobación en los mercados regulatorios más exigentes del mundo es una señal sólida de su estándar de calidad.</p>

<p>Botox, en cambio, es fabricado por <strong>Allergan / AbbVie</strong> y lleva más de 30 años en el mercado. Es la referencia mundial, respaldada por el mayor volumen de evidencia clínica acumulada de cualquier toxina botulínica.</p>

<h2>Comparación técnica</h2>
<table>
  <tr><th>Característica</th><th>Nabota 100U</th><th>Botox 100U</th></tr>
  <tr><td>Fabricante</td><td>Daewoong (Corea)</td><td>Allergan / AbbVie (EE.UU.)</td></tr>
  <tr><td>Molécula</td><td>DWP-450 · OnabotulinumtoxinA</td><td>OnabotulinumtoxinA</td></tr>
  <tr><td>Tecnología</td><td>HiPure™ (alta pureza)</td><td>Proceso Allergan</td></tr>
  <tr><td>Aprobación EE.UU.</td><td>Jeuveau® (FDA 2019)</td><td>Botox® (FDA 1989)</td></tr>
  <tr><td>Inicio de acción</td><td>2–5 días</td><td>3–7 días</td></tr>
  <tr><td>Duración estética</td><td>3–6 meses</td><td>3–6 meses</td></tr>
</table>

<h2>¿Cuál elegir?</h2>
<p>Para la gran mayoría de indicaciones estéticas —glabela, frente, patas de gallo, mentón, cuello—, Nabota ofrece <strong>resultados clínicamente equivalentes a Botox</strong> con un precio significativamente más accesible por unidad. Esto la convierte en la opción más eficiente para clínicas con alto volumen de aplicaciones.</p>

<p>Botox sigue siendo la referencia en indicaciones terapéuticas complejas (espasticidad, hiperhidrosis grave) o cuando el paciente tiene un historial documentado de respuesta óptima específica. Para uso estético de rutina, Nabota representa el mejor balance entre calidad certificada y costo operativo.</p>

<p>También existe <strong>Innotox 100U</strong>, la primera toxina botulínica <em>líquida</em> del mundo (Medytox, Corea): elimina la variabilidad de reconstitución y permite dosificación más precisa, siendo una tercera opción de alto valor para clínicas que buscan máximo control clínico.</p>
`,
    faqs: [
      { q: '¿Nabota y Botox tienen el mismo efecto clínico?', a: 'Sí. Ambos contienen toxina botulínica tipo A purificada con el mismo mecanismo de acción. Los estudios comparativos muestran resultados equivalentes en las principales indicaciones estéticas. La diferencia principal es el fabricante, la tecnología de purificación y el precio.' },
      { q: '¿Cuánto dura Nabota comparado con Botox?', a: 'La duración de Nabota es comparable a la de Botox: entre 3 y 6 meses según la indicación, la dosis y el paciente. No hay diferencia clínicamente relevante en duración entre ambas toxinas para uso estético estándar.' },
      { q: '¿Nabota está aprobada por la FDA?', a: 'Sí. La misma molécula de Nabota (DWP-450) fue aprobada por la FDA de EE.UU. en 2019 como Jeuveau® y por la EMA europea en 2020 como Nuceiva®. En México se distribuye bajo la marca Nabota.' },
      { q: '¿Dónde comprar Nabota original en México?', a: 'Nabota 100U y Nabota 200U están disponibles en Fancy Water, distribuidores en México. Enviamos desde Monterrey, Nuevo León, con cadena de frío garantizada. Pedidos en línea o por WhatsApp.' },
    ],
  },

  {
    slug: 'que-es-lipo-lab-ppc',
    title: 'Lipo Lab PPC: qué es, cómo funciona y protocolo de aplicación para médicos',
    metaDesc: 'Guía completa sobre Lipo Lab PPC (fosfatidilcolina 1,000 mg) en México: mecanismo de acción, áreas de tratamiento, protocolo de sesiones y resultados esperados.',
    date: '2026-06-23',
    intro: 'Lipo Lab PPC es una de las lipoenzimas inyectables con mayor reconocimiento internacional para el tratamiento de adiposidad localizada. Su principio activo, la fosfatidilcolina (PPC) a 1,000 mg por ampolleta, actúa directamente sobre la membrana del adipocito para facilitar su eliminación natural.',
    relatedProducts: [
      { slug:'lipo-lab-ppc',           name:'Lipo Lab PPC',     price:1400, img:'lipolab.jpg',        cat:'Lipoenzima Inyectable' },
      { slug:'voltena-n1-body-serum',  name:'VOL:TENA N°1',    price:2300, img:'voltena1-solo.jpg',  cat:'Lipoenzima · VOL:TENA' },
      { slug:'liporase',               name:'Liporase',         price:1500, img:'liporase.webp',      cat:'Seguridad Clínica' },
    ],
    content: `
<p>Lipo Lab PPC es una de las lipoenzimas inyectables con mayor reconocimiento internacional para el tratamiento de adiposidad localizada sin cirugía. Su principio activo, la <strong>fosfatidilcolina (PPC)</strong> al 1,000 mg por ampolleta certificada KFDA, actúa directamente sobre la membrana lipídica del adipocito para facilitar su eliminación natural.</p>

<h2>Mecanismo de acción</h2>
<p>La fosfatidilcolina es un fosfolípido estructural presente en las membranas celulares. Cuando se inyecta en alta concentración en el tejido adiposo subcutáneo, actúa como un <strong>tensioactivo biológico</strong>: desestabiliza la bicapa lipídica de la membrana del adipocito, provoca su lisis y libera los triglicéridos almacenados. Estas grasas son luego procesadas y eliminadas por el sistema linfático y el hígado.</p>

<p>A diferencia de tratamientos físicos (criolipólisis, HIFU), Lipo Lab PPC permite al médico un <strong>control anatómico preciso</strong> sobre qué zona tratar, la profundidad y la cantidad de producto, lo que resulta en mayor personalización del resultado.</p>

<h2>Indicaciones y áreas de tratamiento</h2>
<ul>
  <li><strong>Cabeza y cuello:</strong> Doble mentón, papada, bola de Bichat (modelado facial)</li>
  <li><strong>Tronco:</strong> Abdomen superior e inferior, flancos, espalda baja</li>
  <li><strong>Extremidades:</strong> Cara interna de brazos y muslos, rodillas</li>
</ul>

<h2>Protocolo estándar</h2>
<p>El protocolo habitual consiste en <strong>4 a 6 sesiones</strong> separadas por 21 a 28 días. La técnica de inyección es subcutánea profunda con aguja de 30G, en cuadrícula con separación de 1.5 cm entre puntos de inyección. La dosis máxima varía por área (entre 2 y 10 mL por sesión).</p>

<p>Es fundamental combinar cada sesión con <strong>masaje linfático post-procedimiento</strong> para optimizar la eliminación del tejido lisado y reducir la inflamación transitoria. Los resultados son visibles desde la 2ª o 3ª sesión y mejoran progresivamente.</p>

<h2>Certificación</h2>
<p>Lipo Lab PPC cuenta con <strong>certificación KFDA</strong> (Korea Food & Drug Administration), el organismo regulatorio coreano equivalente a la FDA estadounidense. La caja contiene 10 viales de 10 mL a 1,000 mg de fosfatidilcolina cada uno. Fancy Water distribuye Lipo Lab PPC original con cadena de frío garantizada desde Monterrey.</p>
`,
    faqs: [
      { q: '¿Cuántas sesiones de Lipo Lab PPC se necesitan?', a: 'El protocolo estándar es de 4 a 6 sesiones, separadas por 21 a 28 días entre cada una. Los resultados son visibles desde la 2ª o 3ª sesión y mejoran progresivamente con cada aplicación.' },
      { q: '¿Lipo Lab PPC es seguro?', a: 'Sí. Lipo Lab PPC tiene certificación KFDA. Como todo procedimiento médico inyectable, debe ser aplicado por un profesional de la salud capacitado. Los efectos secundarios más comunes son inflamación temporal y sensibilidad en el área tratada durante 2–5 días.' },
      { q: '¿Para qué áreas del cuerpo sirve Lipo Lab PPC?', a: 'Es efectivo en doble mentón y papada, abdomen, flancos, cara interna de brazos y muslos, espalda y rodillas. También se usa para modelado facial en la bola de Bichat.' },
      { q: '¿Cuánto tarda en verse el resultado de Lipo Lab PPC?', a: 'Los primeros cambios son visibles entre la 2ª y 3ª sesión. El resultado final se aprecia 4 a 8 semanas después de completar el protocolo completo de 4 a 6 sesiones.' },
    ],
  },

  {
    slug: 'rellenos-dermicos-acido-hialuronico',
    title: 'Rellenos dérmicos de ácido hialurónico: guía para médicos estéticos en México',
    metaDesc: 'Guía completa para médicos sobre rellenos de ácido hialurónico en México: tipos, reticulación, selección por indicación, marcas disponibles y reversal con hialuronidasa.',
    date: '2026-06-23',
    intro: 'Los rellenos dérmicos de ácido hialurónico son la segunda categoría de tratamientos estéticos inyectables más utilizada en el mundo. Su versatilidad — desde arrugas finas hasta volumetría estructural — los convierte en un elemento esencial en cualquier consultorio de medicina estética.',
    relatedProducts: [
      { slug:'juvederm-voluma',   name:'Juvéderm Voluma',       price:4200, img:'juvederm.webp',         cat:'Ácido Hialurónico' },
      { slug:'revolax',           name:'Revolax 1.1ml',          price:1020, img:'revolax.webp',           cat:'Ácido Hialurónico' },
      { slug:'dermalax-implant',  name:'Dermalax Implant Plus', price:1600, img:'dermalax-implant.webp',  cat:'AH · Alta Viscosidad' },
    ],
    content: `
<p>Los rellenos dérmicos de ácido hialurónico son la segunda categoría de tratamientos estéticos inyectables más utilizada en el mundo, solo después de la toxina botulínica. Su versatilidad —desde arrugas finas hasta volumetría estructural profunda— los convierte en un elemento esencial en cualquier consultorio de medicina estética en México.</p>

<h2>¿Por qué se retícula el ácido hialurónico?</h2>
<p>El AH natural se degrada rápidamente in vivo en 24–48 horas. Para uso como relleno dérmico, el AH se <strong>retícula químicamente</strong> mediante BDDE (butanediol diglycidil éter), creando una red tridimensional que resiste la degradación enzimática y prolonga su duración a 12–24 meses según el producto.</p>

<p>La cantidad de reticulación y el peso molecular del AH determinan dos propiedades clave del filler: la <strong>cohesividad</strong> (resistencia a la deformación) y la <strong>elasticidad</strong> (recuperación de forma). A mayor G prime (módulo de elasticidad), mayor proyección y soporte estructural.</p>

<h2>Selección por indicación y profundidad</h2>
<table>
  <tr><th>Profundidad</th><th>Indicación</th><th>Productos disponibles</th></tr>
  <tr><td>Dérmica superficial</td><td>Líneas finas, piel fina periocular</td><td>Revolax Fine, Elasty F Plus</td></tr>
  <tr><td>Dérmica media</td><td>Surcos nasolabiales, labios, líneas de marioneta</td><td>Revolax Deep, Elasty D Plus</td></tr>
  <tr><td>Dérmica profunda</td><td>Arrugas profundas, volumen moderado</td><td>Revolax Sub-Q, Elasty G Plus</td></tr>
  <tr><td>Supraperióstica</td><td>Pómulos, mentón, mandíbula, proyección</td><td>Juvéderm Voluma, Dermalax Implant Plus</td></tr>
</table>

<h2>Reversibilidad: la ventaja más importante</h2>
<p>Una de las características más importantes del AH como relleno es su <strong>reversibilidad total</strong>. La hialuronidasa (Liporase, 1,500 IU) disuelve el filler de AH en minutos mediante hidrólisis enzimática. Esto es especialmente crítico para el manejo de <strong>complicaciones vasculares</strong> —la emergencia más grave en medicina estética—, donde la velocidad de respuesta puede prevenir daños irreversibles.</p>

<p>Todo consultorio que aplique rellenos dérmicos debe tener Liporase disponible en cada sesión. No tenerla no es una opción clínica aceptable.</p>

<h2>Diferencias entre marcas</h2>
<p><strong>Juvéderm Voluma (Allergan/AbbVie)</strong> usa tecnología Vycross® que combina cadenas largas y cortas de AH para máxima cohesividad y duración (hasta 24 meses). Es el gold standard para volumetría facial profunda. <strong>Revolax y Dermalax Implant (Across, Corea)</strong> ofrecen reticulación monofásica de alta densidad con excelente relación costo-eficacia y resultados predecibles.</p>
`,
    faqs: [
      { q: '¿Cuánto dura un relleno de ácido hialurónico?', a: 'Depende del producto y la zona. Los fillers de alta cohesividad para volumetría (Juvéderm Voluma) duran hasta 24 meses. Los rellenos para surcos y labios, entre 9 y 18 meses. Los skin boosters de AH no reticulado tienen menor duración (3–6 meses).' },
      { q: '¿Se puede disolver un relleno de ácido hialurónico?', a: 'Sí. La hialuronidasa (Liporase, 1,500 IU) disuelve los rellenos de AH reticulado en minutos. Es el producto de seguridad más crítico en un consultorio de fillers y debe estar disponible en cada sesión.' },
      { q: '¿Cuál es la diferencia entre Revolax y Juvéderm Voluma?', a: 'Juvéderm Voluma usa tecnología Vycross® (Allergan) para alta cohesividad y duración hasta 24 meses — ideal para volumetría profunda. Revolax usa reticulación monofásica coreana con excelente perfil de seguridad y precio más accesible. La elección depende de la indicación y el presupuesto del paciente.' },
      { q: '¿Dónde comprar rellenos dérmicos originales en México?', a: 'Fancy Water distribuye Juvéderm Voluma (Allergan), Revolax, Dermalax Implant Plus y Elasty. Todos originales con número de lote verificable, cadena de frío garantizada y envío desde Monterrey a toda la república.' },
    ],
  },

  {
    slug: 'bioestimuladores-plla-colageno',
    title: 'Bioestimuladores PLLA en México: Pllagen vs Estella para regeneración de colágeno',
    metaDesc: 'Guía sobre bioestimuladores de ácido poliláctico (PLLA) en México: cómo funcionan, diferencias entre Pllagen PLLA y Estella PLLA 200, protocolo y resultados esperados.',
    date: '2026-06-23',
    intro: 'El ácido poli-L-láctico (PLLA) representa un cambio de paradigma en el rejuvenecimiento inyectable: en lugar de rellenar directamente, actúa como un bioestimulador que desencadena la producción natural de colágeno y elastina en la dermis. Los resultados son más graduales pero también más duraderos: hasta 24 meses.',
    relatedProducts: [
      { slug:'pllagen-plla',  name:'Pllagen PLLA',    price:2200, img:'pllagen.jpg',  cat:'Bioestimulador · PLLA' },
      { slug:'estella-plla',  name:'Estella PLLA 200', price:3500, img:'estella.jpg', cat:'Bioestimulador · PLLA' },
      { slug:'hyaron-prefilled', name:'Hyaron Prefilled', price:1950, img:'hyaron.jpg', cat:'Skin Booster' },
    ],
    content: `
<p>El ácido poli-L-láctico (PLLA) representa un cambio de paradigma en el rejuvenecimiento inyectable: en lugar de rellenar directamente, actúa como un <strong>bioestimulador</strong> que desencadena la producción natural de colágeno y elastina en la dermis. Los resultados son más graduales que los de los rellenos convencionales, pero también más duraderos: hasta 24 meses tras un protocolo completo.</p>

<h2>¿Cómo funciona el PLLA?</h2>
<p>Las microesferas de PLLA actúan como un <strong>andamio biológico temporal</strong>. Al inyectarse en la dermis profunda, generan una respuesta inflamatoria controlada que activa los fibroblastos locales. Estas células producen colágeno de novo alrededor de las microesferas, las cuales se bioabsorben gradualmente (en 9–18 meses). El resultado final es tejido regenerado propio del paciente, no un material exógeno.</p>

<p>A diferencia de los rellenos de AH, la mejora con PLLA no es inmediata: se hace visible a partir de las 4–8 semanas y continúa mejorando durante meses mientras el colágeno madura y se organiza.</p>

<h2>Pllagen PLLA (VOL:TENA) — 45 mg PLLA + 13 mg AH</h2>
<p>Pllagen combina <strong>45 mg de PLLA</strong> con 13 mg de ácido hialurónico no reticulado como vehículo. El AH proporciona hidratación inmediata visible desde la primera sesión mientras el PLLA actúa a profundidad. Cada caja trae 5 sets (vial de polvo + suero booster de 5 mL), ideal para un protocolo completo de mesoterapia facial.</p>

<p>Reconstitución rápida (~3 minutos). Aguja 31–33G a 1–2 mm de profundidad, técnica de mesoterapia.</p>

<h2>Estella PLLA 200 (Kuber Science) — 200 mg PLLA de 4ª generación</h2>
<p>Estella es una formulación de cuarta generación con <strong>200 mg de PLLA por vial</strong>, concentración significativamente mayor a generaciones anteriores. Sus microesferas esféricas uniformes de 20–50 μm reducen el riesgo de formación de nódulos. Se reconstituye con 8–10 mL de agua para inyección en ~10 minutos con vórtex.</p>

<p>Mayor concentración la hace ideal para <strong>correcciones volumétricas marcadas</strong>, pérdida significativa de tejido o pacientes con mayor degradación de colágeno.</p>

<h2>¿Cuál elegir?</h2>
<table>
  <tr><th></th><th>Pllagen PLLA</th><th>Estella PLLA 200</th></tr>
  <tr><td>PLLA por set</td><td>45 mg</td><td>200 mg</td></tr>
  <tr><td>Generación</td><td>3ª generación</td><td>4ª generación</td></tr>
  <tr><td>Vehículo adicional</td><td>AH 13 mg (hidratación inmediata)</td><td>Agua para inyección</td></tr>
  <tr><td>Perfil de paciente</td><td>Rejuvenecimiento difuso, preventivo</td><td>Corrección volumétrica marcada</td></tr>
  <tr><td>Duración esperada</td><td>Hasta 18–24 meses</td><td>Hasta 24 meses</td></tr>
</table>
`,
    faqs: [
      { q: '¿Cuánto dura un tratamiento con PLLA?', a: 'Los resultados de los bioestimuladores PLLA duran hasta 24 meses. A diferencia de los rellenos, la mejora es gradual — visible desde las 4–8 semanas — y continúa mejorando durante meses mientras el colágeno nuevo madura.' },
      { q: '¿Cuántas sesiones de PLLA se necesitan?', a: 'El protocolo estándar es de 2 a 3 sesiones separadas por 4 a 6 semanas, seguidas de una sesión de mantenimiento al año. El número exacto depende del grado de pérdida de colágeno y los objetivos del paciente.' },
      { q: '¿Cuál es la diferencia entre Pllagen y Estella PLLA?', a: 'Pllagen PLLA (45mg + AH 13mg) incluye ácido hialurónico para hidratación inmediata, en 5 sets por caja. Estella PLLA 200 tiene mayor concentración de PLLA (200mg/vial) y microesferas de 4ª generación para menor riesgo de nódulos. Estella es mejor opción para correcciones volumétricas mayores.' },
      { q: '¿Dónde comprar Pllagen PLLA y Estella en México?', a: 'Ambos están disponibles en Fancy Water. Pllagen PLLA pertenece a la línea VOL:TENA de la cual somos distribuidores exclusivos en América. Estella PLLA 200 de Kuber Science. Envío a toda México desde Monterrey.' },
    ],
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

function fmt(n) { return n.toLocaleString('es-MX'); }

function faqJsonLd(faqs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  });
}

function articleJsonLd(g) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDesc,
    datePublished: g.date,
    dateModified: g.date,
    author: { '@type': 'Organization', name: 'Fancy Water', url: 'https://www.fancywater.mx' },
    publisher: { '@type': 'Organization', name: 'Fancy Water', url: 'https://www.fancywater.mx' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.fancywater.mx/guias/${g.slug}` }
  });
}

function relatedCard(p) {
  return `
    <a href="/${p.slug}" class="rel-card">
      <div class="rel-card-img">
        <img src="/assets/products/${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="rel-card-body">
        <p class="rel-card-cat">${p.cat}</p>
        <h3 class="rel-card-name">${p.name}</h3>
        <p class="rel-card-price">$${fmt(p.price)} <span>MXN</span></p>
      </div>
    </a>`;
}

function faqHtml(faqs) {
  return faqs.map(f => `
    <div class="pfaq-item">
      <button class="pfaq-q" type="button">
        ${f.q}
        <span class="pfaq-icon"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="1" x2="5" y2="9"/><line x1="1" y1="5" x2="9" y2="5"/></svg></span>
      </button>
      <div class="pfaq-a"><div class="pfaq-a-inner"><p>${f.a}</p></div></div>
    </div>`).join('');
}

// ── PAGE TEMPLATE ─────────────────────────────────────────────────────────────

function generateGuidePage(g) {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${g.title} · Fancy Water</title>
  <meta name="description" content="${g.metaDesc}" />
  <link rel="canonical" href="https://www.fancywater.mx/guias/${g.slug}" />
  <meta property="og:type"        content="article" />
  <meta property="og:url"         content="https://www.fancywater.mx/guias/${g.slug}" />
  <meta property="og:title"       content="${g.title}" />
  <meta property="og:description" content="${g.metaDesc}" />
  <meta property="og:locale"      content="es_MX" />
  <!-- Meta Pixel -->
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','1719743502723643');fbq('track','PageView');
  </script>
  <!-- Google tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16457503800"></script>
  <script>
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());gtag('config','AW-16457503800');
    function gtagWhatsApp(url){var open=function(){window.open(url,'_blank','noopener');};if(typeof gtag==='undefined'){open();return;}gtag('event','ads_conversion_Contactar_1',{});gtag('event','conversion',{send_to:'AW-16457503800/kElMCPK6t8EcELioxqc9',event_callback:open});}
  </script>
  <script type="application/ld+json">${articleJsonLd(g)}</script>
  <script type="application/ld+json">${faqJsonLd(g.faqs)}</script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.fancywater.mx/"},{"@type":"ListItem","position":2,"name":"Guías","item":"https://www.fancywater.mx/guias"},{"@type":"ListItem","position":3,"name":"${g.title}","item":"https://www.fancywater.mx/guias/${g.slug}"}]}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png" />
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--navy:#2D3147;--tinta:#1A1A2E;--grafito:#5A5A72;--ash:#9898A6;--paper:#F4F3EF;--snow:#FAFAF8;--bone:#EAE9E4;--linea:#E0DFD9;--ease-out:cubic-bezier(0.23,1,0.32,1)}
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:var(--snow);color:var(--tinta);-webkit-font-smoothing:antialiased}
    a{color:inherit;text-decoration:none}
    img{display:block;max-width:100%;height:auto}

    /* NAV */
    .site-nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;height:72px;background:rgba(250,250,248,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--linea)}
    .nav-logo{display:flex;align-items:center;gap:12px}
    .nav-logo img{height:64px;width:auto;mix-blend-mode:multiply}
    .nav-brand{font-family:'Inter',sans-serif;font-size:22px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:var(--tinta);white-space:nowrap;line-height:1}
    .nav-actions{display:flex;align-items:center;gap:12px}
    .btn-ghost-sm{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:var(--grafito);padding:8px 16px;border:1px solid var(--linea);border-radius:50px;transition:border-color .2s,color .2s}
    .btn-ghost-sm:hover{border-color:var(--navy);color:var(--navy)}
    .btn-wa-sm{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;padding:9px 18px;border-radius:50px;background:#25D366;display:flex;align-items:center;gap:6px;transition:opacity .2s}
    .btn-wa-sm:hover{opacity:.88}

    /* BREADCRUMB */
    .breadcrumb{padding:14px 5vw;font-size:11px;letter-spacing:.5px;color:var(--ash);border-bottom:1px solid var(--linea);background:var(--paper)}
    .breadcrumb a{color:var(--ash);transition:color .2s}.breadcrumb a:hover{color:var(--navy)}
    .breadcrumb span{color:var(--tinta);font-weight:500}

    /* ARTICLE */
    .article-wrap{max-width:740px;margin:0 auto;padding:56px 5vw 80px}
    .article-label{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:16px}
    .article-title{font-family:'Playfair Display',serif;font-size:clamp(26px,4vw,42px);line-height:1.18;margin-bottom:20px;font-weight:700}
    .article-intro{font-size:16px;color:var(--grafito);line-height:1.75;margin-bottom:40px;padding-bottom:32px;border-bottom:1px solid var(--bone)}
    .article-body h2{font-family:'Playfair Display',serif;font-size:22px;margin:36px 0 14px;font-weight:700}
    .article-body p{font-size:14px;color:var(--grafito);line-height:1.8;margin-bottom:16px}
    .article-body ul{margin:0 0 20px 20px;list-style:disc}
    .article-body ul li{font-size:14px;color:var(--grafito);line-height:1.75;margin-bottom:6px}
    .article-body strong{color:var(--tinta);font-weight:600}
    .article-body em{font-style:italic}
    .article-body table{width:100%;border-collapse:collapse;margin:20px 0 28px;font-size:13px}
    .article-body table th{background:var(--navy);color:#fff;padding:10px 14px;text-align:left;font-weight:600}
    .article-body table td{padding:9px 14px;border-bottom:1px solid var(--bone);color:var(--grafito)}
    .article-body table tr:nth-child(even) td{background:var(--paper)}

    /* FAQ */
    .guide-faq{background:var(--paper);padding:56px 5vw}
    .guide-faq-inner{max-width:740px;margin:0 auto}
    .pfaq-eyebrow{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:12px}
    .pfaq-heading{font-family:'Playfair Display',serif;font-size:28px;margin-bottom:32px;line-height:1.2}
    .pfaq-heading em{font-style:italic}
    .pfaq-item{border-bottom:1px solid var(--linea)}
    .pfaq-q{width:100%;background:none;border:none;text-align:left;padding:18px 0;font-size:14px;font-weight:600;color:var(--tinta);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:'Inter',sans-serif}
    .pfaq-icon{flex-shrink:0;transition:transform .3s var(--ease-out)}
    .pfaq-item.open .pfaq-icon{transform:rotate(45deg)}
    .pfaq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s var(--ease-out)}
    .pfaq-a-inner{overflow:hidden}
    .pfaq-a-inner p{padding-bottom:18px;font-size:13px;color:var(--grafito);line-height:1.75}
    .pfaq-item.open .pfaq-a{grid-template-rows:1fr}

    /* RELATED */
    .related-section{padding:56px 5vw;border-top:1px solid var(--bone)}
    .related-inner{max-width:740px;margin:0 auto}
    .related-eyebrow{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:10px}
    .related-heading{font-family:'Playfair Display',serif;font-size:26px;margin-bottom:28px;line-height:1.2}
    .related-heading em{font-style:italic}
    .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .rel-card{display:block;border:1px solid var(--linea);border-radius:10px;overflow:hidden;background:var(--paper);transition:transform .25s var(--ease-out)}
    @media(hover:hover){.rel-card:hover{transform:translateY(-4px)}}
    .rel-card-img{aspect-ratio:1;background:var(--snow);overflow:clip;display:flex;align-items:center;justify-content:center}
    .rel-card-img img{width:100%;height:100%;object-fit:contain;padding:16px}
    .rel-card-body{padding:12px 14px}
    .rel-card-cat{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ash);margin-bottom:4px}
    .rel-card-name{font-family:'Playfair Display',serif;font-size:14px;line-height:1.3;margin-bottom:6px}
    .rel-card-price{font-size:12px;font-weight:700;color:var(--navy)}
    .rel-card-price span{font-weight:400;color:var(--ash);font-size:10px}

    /* BOTTOM CTA */
    .bottom-cta{background:var(--navy);padding:56px 5vw;text-align:center}
    .bottom-cta h2{font-family:'Playfair Display',serif;font-size:clamp(22px,3vw,34px);color:#fff;margin-bottom:10px}
    .bottom-cta h2 em{font-style:italic;color:rgba(255,255,255,.5)}
    .bottom-cta p{font-size:14px;color:rgba(255,255,255,.5);margin-bottom:28px}
    .btn-wa-cta{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;padding:16px 32px;border-radius:50px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;transition:opacity .2s}
    .btn-wa-cta:hover{opacity:.88}

    /* FOOTER */
    .site-footer{background:var(--tinta);padding:28px 5vw;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
    .footer-brand{font-size:13px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:#fff}
    .footer-links{display:flex;gap:20px}
    .footer-links a{font-size:11px;color:rgba(255,255,255,.4);transition:color .2s}
    .footer-links a:hover{color:rgba(255,255,255,.8)}
    .footer-legal{font-size:10px;color:rgba(255,255,255,.22);letter-spacing:.5px;width:100%;text-align:center}

    /* MOBILE */
    @media(max-width:640px){
      .nav-brand{display:none}
      .btn-ghost-sm{display:none}
      .site-nav{padding:0 16px}
      .related-grid{grid-template-columns:repeat(2,1fr)}
    }
  </style>
</head>
<body>

<nav class="site-nav">
  <a href="/" class="nav-logo">
    <img src="/assets/logo-fw.svg" alt="Fancy Water" height="64" />
    <span class="nav-brand">Fancy Water</span>
  </a>
  <div class="nav-actions">
    <a href="/productos" class="btn-ghost-sm">Ver catálogo</a>
    <a href="${WA}" class="btn-wa-sm" onclick="gtagWhatsApp(this.href);return false;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
      <span>Cotizar</span>
    </a>
  </div>
</nav>

<div class="breadcrumb">
  <a href="/">Inicio</a> &rsaquo; <a href="/guias">Guías</a> &rsaquo; <span>${g.title.substring(0, 50)}…</span>
</div>

<div class="article-wrap">
  <p class="article-label">Guía clínica · Fancy Water</p>
  <h1 class="article-title">${g.title}</h1>
  <p class="article-intro">${g.intro}</p>
  <div class="article-body">
    ${g.content}
  </div>
</div>

<!-- FAQ -->
<section class="guide-faq">
  <div class="guide-faq-inner">
    <p class="pfaq-eyebrow">Preguntas frecuentes</p>
    <h2 class="pfaq-heading">Resolvemos tus <em>dudas</em></h2>
    ${faqHtml(g.faqs)}
  </div>
</section>

<!-- RELATED PRODUCTS -->
<section class="related-section">
  <div class="related-inner">
    <p class="related-eyebrow">Productos relacionados</p>
    <h2 class="related-heading">Disponibles en <em>Fancy Water</em></h2>
    <div class="related-grid">
      ${g.relatedProducts.map(relatedCard).join('')}
    </div>
  </div>
</section>

<!-- BOTTOM CTA -->
<section class="bottom-cta">
  <h2>¿Listo para hacer <em>tu pedido</em>?</h2>
  <p>Precios especiales para clínicas y mayoreo. Stock garantizado en Monterrey.</p>
  <a href="${WA}" class="btn-wa-cta" onclick="gtagWhatsApp(this.href);return false;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
    Cotizar por WhatsApp
  </a>
</section>

<footer class="site-footer">
  <span class="footer-brand">Fancy Water</span>
  <nav class="footer-links">
    <a href="/">Inicio</a>
    <a href="/productos">Catálogo</a>
    <a href="/guias">Guías</a>
    <a href="/#contacto">Contacto</a>
  </nav>
  <p class="footer-legal">© ${year} Fancy Water · Distribuidores Exclusivos VOL:TENA en América · Monterrey, N.L. México</p>
</footer>
<script>
document.querySelectorAll('.pfaq-q').forEach(function(btn){
  btn.addEventListener('click',function(){this.closest('.pfaq-item').classList.toggle('open');});
});
</script>
</body>
</html>`;
}

// ── INDEX PAGE (/guias) ───────────────────────────────────────────────────────

function generateIndexPage() {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Guías de Medicina Estética · Fancy Water</title>
  <meta name="description" content="Guías clínicas para médicos estéticos: toxinas botulínicas, rellenos de ácido hialurónico, lipoenzimas y bioestimuladores PLLA. Contenido educativo de Fancy Water." />
  <link rel="canonical" href="https://www.fancywater.mx/guias" />
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","name":"Guías de Medicina Estética","url":"https://www.fancywater.mx/guias","provider":{"@type":"Organization","name":"Fancy Water","url":"https://www.fancywater.mx"}}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.fancywater.mx/"},{"@type":"ListItem","position":2,"name":"Guías","item":"https://www.fancywater.mx/guias"}]}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png" />
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--navy:#2D3147;--tinta:#1A1A2E;--grafito:#5A5A72;--ash:#9898A6;--paper:#F4F3EF;--snow:#FAFAF8;--bone:#EAE9E4;--linea:#E0DFD9;--ease-out:cubic-bezier(0.23,1,0.32,1)}
    body{font-family:'Inter',sans-serif;background:var(--snow);color:var(--tinta);-webkit-font-smoothing:antialiased}
    a{color:inherit;text-decoration:none}
    img{display:block;max-width:100%;height:auto}
    .site-nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;height:72px;background:rgba(250,250,248,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--linea)}
    .nav-logo{display:flex;align-items:center;gap:12px}
    .nav-logo img{height:64px;width:auto;mix-blend-mode:multiply}
    .nav-brand{font-family:'Inter',sans-serif;font-size:22px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:var(--tinta);white-space:nowrap;line-height:1}
    .nav-actions{display:flex;align-items:center;gap:12px}
    .btn-ghost-sm{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:var(--grafito);padding:8px 16px;border:1px solid var(--linea);border-radius:50px;transition:border-color .2s,color .2s}
    .btn-ghost-sm:hover{border-color:var(--navy);color:var(--navy)}
    .btn-wa-sm{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#fff;padding:9px 18px;border-radius:50px;background:#25D366;display:flex;align-items:center;gap:6px;transition:opacity .2s}
    .breadcrumb{padding:14px 5vw;font-size:11px;letter-spacing:.5px;color:var(--ash);border-bottom:1px solid var(--linea);background:var(--paper)}
    .breadcrumb a{color:var(--ash)}.breadcrumb span{color:var(--tinta);font-weight:500}
    .guides-wrap{max-width:860px;margin:0 auto;padding:56px 5vw 80px}
    .guides-eyebrow{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:16px}
    .guides-title{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,44px);margin-bottom:12px;font-weight:700}
    .guides-desc{font-size:15px;color:var(--grafito);line-height:1.75;margin-bottom:48px;max-width:560px}
    .guides-grid{display:grid;gap:24px}
    .guide-card{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:start;padding:28px;background:var(--paper);border:1px solid var(--linea);border-radius:12px;transition:box-shadow .25s var(--ease-out),transform .25s var(--ease-out)}
    @media(hover:hover){.guide-card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(45,49,71,.08)}}
    .guide-cat{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:var(--navy);font-weight:600;margin-bottom:8px}
    .guide-title{font-family:'Playfair Display',serif;font-size:20px;line-height:1.3;margin-bottom:10px}
    .guide-intro{font-size:13px;color:var(--grafito);line-height:1.7}
    .guide-arrow{font-size:22px;color:var(--ash);align-self:center;flex-shrink:0}
    .site-footer{background:var(--tinta);padding:28px 5vw;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:0}
    .footer-brand{font-size:13px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:#fff}
    .footer-links{display:flex;gap:20px}
    .footer-links a{font-size:11px;color:rgba(255,255,255,.4);transition:color .2s}
    .footer-links a:hover{color:rgba(255,255,255,.8)}
    .footer-legal{font-size:10px;color:rgba(255,255,255,.22);letter-spacing:.5px;width:100%;text-align:center}
    @media(max-width:640px){.nav-brand{display:none}.btn-ghost-sm{display:none}.site-nav{padding:0 16px}.guide-card{grid-template-columns:1fr}}
  </style>
</head>
<body>
<nav class="site-nav">
  <a href="/" class="nav-logo">
    <img src="/assets/logo-fw.svg" alt="Fancy Water" height="64" />
    <span class="nav-brand">Fancy Water</span>
  </a>
  <div class="nav-actions">
    <a href="/productos" class="btn-ghost-sm">Ver catálogo</a>
    <a href="${WA}" class="btn-wa-sm">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
      <span>Cotizar</span>
    </a>
  </div>
</nav>
<div class="breadcrumb">
  <a href="/">Inicio</a> &rsaquo; <span>Guías</span>
</div>
<div class="guides-wrap">
  <p class="guides-eyebrow">Contenido educativo</p>
  <h1 class="guides-title">Guías de<br><em style="font-family:'Playfair Display',serif;font-style:italic">medicina estética</em></h1>
  <p class="guides-desc">Recursos técnicos para médicos y profesionales de la estética. Protocolos, comparativas y guías de selección de productos.</p>
  <div class="guides-grid">
    ${GUIDES.map(g => `
    <a href="/guias/${g.slug}" class="guide-card">
      <div>
        <p class="guide-cat">Guía clínica</p>
        <h2 class="guide-title">${g.title}</h2>
        <p class="guide-intro">${g.intro}</p>
      </div>
      <span class="guide-arrow">→</span>
    </a>`).join('')}
  </div>
</div>
<footer class="site-footer">
  <span class="footer-brand">Fancy Water</span>
  <nav class="footer-links">
    <a href="/">Inicio</a>
    <a href="/productos">Catálogo</a>
    <a href="/guias">Guías</a>
    <a href="/#contacto">Contacto</a>
  </nav>
  <p class="footer-legal">© ${year} Fancy Water · Distribuidores Exclusivos VOL:TENA en América · Monterrey, N.L. México</p>
</footer>
</body>
</html>`;
}

// ── GENERATE ──────────────────────────────────────────────────────────────────

// /guias index
const guiasDir = path.join(BASE, 'guias');
fs.mkdirSync(guiasDir, { recursive: true });
fs.writeFileSync(path.join(guiasDir, 'index.html'), generateIndexPage(), 'utf8');
console.log('✓  /guias/');

// individual guides
GUIDES.forEach(g => {
  const dir = path.join(guiasDir, g.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateGuidePage(g), 'utf8');
  console.log(`✓  /guias/${g.slug}/`);
});

console.log(`\n${GUIDES.length + 1} páginas de guías generadas.`);
