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
    slug: 'innotox-toxina-liquida',
    title: 'Innotox 100U: la primera toxina botulínica líquida del mundo',
    metaDesc: 'Innotox (Medytox, Corea) es la primera toxina botulínica líquida del mundo. Guía para médicos: ventajas clínicas, comparativa con Botox y Nabota, indicaciones y protocolo.',
    date: '2026-06-23',
    intro: 'Innotox 100U, fabricado por Medytox (Corea del Sur), fue la primera toxina botulínica líquida del mundo en obtener aprobación regulatoria. Su formulación en solución lista para usar —sin necesidad de reconstitución— representa una ventaja técnica concreta en el consultorio.',
    relatedProducts: [
      { slug:'innotox-100u', name:'Innotox 100U',  price:1350, img:'innotox-new.webp',  cat:'Toxina Botulínica' },
      { slug:'nabota-100u',  name:'Nabota 100U',   price:1500, img:'nabota.png',         cat:'Toxina Botulínica' },
      { slug:'liztox-100u',  name:'Liztox 100U',   price:1280, img:'liztox.webp',        cat:'Toxina Botulínica' },
    ],
    content: `
<p>Innotox 100U, fabricado por <strong>Medytox</strong> (Corea del Sur), fue la primera toxina botulínica líquida del mundo en obtener aprobación regulatoria, primero en Corea (MFDS) y luego en varios mercados asiáticos y latinoamericanos. Su formulación sin necesidad de reconstitución la distingue de todas las toxinas liofilizadas del mercado.</p>

<h2>La diferencia técnica: líquida vs liofilizada</h2>
<p>Las toxinas botulínicas tradicionales —Botox, Nabota, Liztox— se presentan como <strong>polvo liofilizado</strong> que debe reconstituirse con solución salina antes de cada sesión. Esta reconstitución introduce una variable: la concentración final depende del volumen de diluyente que agregue el médico, lo que puede generar inconsistencias entre sesiones o entre clínicas.</p>

<p>Innotox ya viene en <strong>solución lista para usar a 4U/0.1mL</strong>. Esto elimina el paso de reconstitución y la variabilidad asociada, garantizando una dosis consistente en cada inyección.</p>

<h2>Ventajas clínicas concretas</h2>
<ul>
  <li><strong>Dosis exacta garantizada:</strong> No hay riesgo de error en la dilución — cada 0.1 mL contiene siempre 4 unidades.</li>
  <li><strong>Ahorro de tiempo:</strong> No es necesario esperar disolución ni agitar el vial. Se abre y se usa directamente.</li>
  <li><strong>Menor variabilidad inter-sesión:</strong> La consistencia de la formulación líquida facilita reproducir resultados.</li>
  <li><strong>Temperatura de almacenamiento:</strong> Refrigeración entre 2–8°C, igual que las toxinas liofilizadas.</li>
</ul>

<h2>Indicaciones y eficacia</h2>
<p>Innotox tiene el mismo principio activo que Botox: <strong>onabotulinumtoxinA purificada</strong>. Sus indicaciones estéticas son las mismas: glabela, frente, patas de gallo, cuello (bandas platismales), mentón, labio superior y hiperhidrosis. Los estudios clínicos muestran una duración de efecto comparable a Botox (3–6 meses) con inicio de acción entre 2–5 días.</p>

<h2>¿Para qué perfil de médico es Innotox?</h2>
<p>Innotox es especialmente valorada por médicos que buscan <strong>máxima consistencia y control</strong> en sus resultados. Clínicas con alto volumen de aplicaciones diarias también se benefician del ahorro de tiempo en preparación. Para consultorios que ya tienen protocolos establecidos con diluciones personalizadas, Nabota o Liztox pueden ser una alternativa más flexible.</p>
`,
    faqs: [
      { q: '¿Qué hace diferente a Innotox de Botox o Nabota?', a: 'Innotox es la única toxina botulínica en formulación líquida lista para usar, sin reconstitución. Botox, Nabota y Liztox son polvos liofilizados que requieren disolución con solución salina antes de aplicar. Innotox garantiza dosis exacta de 4U/0.1mL sin variabilidad en dilución.' },
      { q: '¿Cuánto dura el efecto de Innotox?', a: 'La duración de Innotox es comparable a Botox: entre 3 y 6 meses según la indicación, dosis y metabolismo del paciente. El inicio de acción es entre 2 y 5 días post-aplicación.' },
      { q: '¿Innotox requiere refrigeración?', a: 'Sí. Innotox se almacena refrigerado entre 2°C y 8°C, igual que las demás toxinas botulínicas. Fancy Water garantiza cadena de frío desde origen hasta entrega.' },
      { q: '¿Dónde comprar Innotox 100U en México?', a: 'Innotox 100U está disponible en Fancy Water. Enviamos desde Monterrey a toda la República Mexicana con cadena de frío garantizada. Pedidos por WhatsApp o en línea en fancywater.mx.' },
    ],
  },

  {
    slug: 'skin-boosters-inyectables',
    title: 'Skin boosters inyectables: Hyaron, Eyebella y Ami Eyes para médicos estéticos',
    metaDesc: 'Guía completa sobre skin boosters inyectables: Hyaron (AH no reticulado), Eyebella y Ami Eyes (PDRN salmón). Mecanismos, diferencias y protocolos para médicos en México.',
    date: '2026-06-23',
    intro: 'Los skin boosters inyectables son una categoría distinta a los rellenos dérmicos: su objetivo no es aportar volumen sino mejorar la calidad intrínseca de la piel — hidratación profunda, luminosidad, elasticidad y regeneración celular — desde adentro.',
    relatedProducts: [
      { slug:'hyaron-prefilled', name:'Hyaron Prefilled',  price:1950, img:'hyaron.jpg',      cat:'Skin Booster · AH' },
      { slug:'eyebella',         name:'Eyebella',          price:2400, img:'eyebella.webp',    cat:'Skin Booster · PDRN' },
      { slug:'ami-eyes',         name:'Ami Eyes',          price:2100, img:'ami-eyes.webp',    cat:'Skin Booster · PDRN' },
    ],
    content: `
<p>Los skin boosters inyectables son una categoría distinta a los rellenos dérmicos. Su objetivo no es aportar volumen sino mejorar la <strong>calidad intrínseca de la piel</strong>: hidratación profunda, luminosidad, elasticidad y regeneración celular. Existen dos familias según el principio activo: AH no reticulado (Hyaron) y PDRN derivado de ADN de salmón (Eyebella, Ami Eyes).</p>

<h2>Hyaron: ácido hialurónico no reticulado</h2>
<p>Hyaron (Dongkook Pharma, Corea) contiene <strong>ácido hialurónico estabilizado de alto peso molecular al 2.5%</strong>, sin reticulación. A diferencia de los fillers, no forma un gel rígido ni aporta proyección: se integra con la dermis y actúa como un <em>reservorio de hidratación</em> que activa la producción endógena de AH y colágeno.</p>

<p>Presentación: jeringas prefilled de 2.5mL listas para usar. Técnica: microbolsas intradérmicas a 1–2mm con aguja 30–32G. Protocolo estándar: 3 sesiones cada 3–4 semanas, mantenimiento trimestral. Indicaciones: piel deshidratada, opaca, flácida; fotografía perioral, cuello y escote.</p>

<h2>Eyebella y Ami Eyes: PDRN (polinucleótidos de salmón)</h2>
<p>Los PDRN (Poly-Deoxyribonucleotides) son fragmentos de ADN extraídos de esperma de salmón, depurados para uso inyectable. Activan los <strong>receptores A2A de adenosina</strong> en los fibroblastos, estimulando la síntesis de colágeno, elastina y factores de crecimiento. El resultado es regeneración tisular real, no solo hidratación.</p>

<p><strong>Eyebella</strong> fue desarrollado específicamente para la zona periocular — área más delicada y compleja del rejuvenecimiento facial. Su formulación PDRN + AH ultra-bajo peso molecular la hace ideal para ojeras, flacidez palpebral y arrugas periorbitales sin riesgo de efecto Tyndall.</p>

<p><strong>Ami Eyes</strong> también es de uso periocular, con alta concentración de PDRN y perfil comprobado de seguridad. Ambos productos se aplican con técnica de papuloterapia o retrotracing con aguja 30–33G.</p>

<h2>Comparativa rápida</h2>
<table>
  <tr><th></th><th>Hyaron</th><th>Eyebella / Ami Eyes</th></tr>
  <tr><td>Activo</td><td>AH no reticulado 2.5%</td><td>PDRN de salmón</td></tr>
  <tr><td>Mecanismo</td><td>Hidratación + estimulación AH endógeno</td><td>Regeneración celular vía adenosina</td></tr>
  <tr><td>Zona primaria</td><td>Rostro, cuello, escote</td><td>Periocular (específicamente)</td></tr>
  <tr><td>Inicio visible</td><td>Desde 1ª sesión</td><td>Desde 2ª–3ª sesión</td></tr>
</table>
`,
    faqs: [
      { q: '¿Los skin boosters son lo mismo que los rellenos de ácido hialurónico?', a: 'No. Los fillers dérmicos usan AH reticulado de alta viscosidad para aportar volumen y proyección estructural. Los skin boosters usan AH no reticulado (Hyaron) o PDRN (Eyebella, Ami Eyes) para mejorar la calidad de la piel: hidratación profunda, luminosidad y regeneración celular, sin añadir volumen.' },
      { q: '¿Qué son los PDRN y cómo funcionan?', a: 'Los PDRN (Poly-Deoxyribonucleotides) son fragmentos de ADN de esperma de salmón purificados para uso médico. Activan los receptores A2A de adenosina en fibroblastos, estimulando producción de colágeno, elastina y factores de crecimiento. El resultado es regeneración tisular real en 4–8 semanas.' },
      { q: '¿Cuántas sesiones de Hyaron o Eyebella se necesitan?', a: 'El protocolo estándar es de 3 sesiones iniciales cada 3–4 semanas, seguidas de mantenimiento cada 3 meses. Los primeros cambios son visibles desde la 1ª sesión con Hyaron; Eyebella muestra resultados más graduales a partir de la 2ª–3ª sesión.' },
      { q: '¿Dónde comprar Hyaron, Eyebella y Ami Eyes en México?', a: 'Los tres productos están disponibles en Fancy Water. Enviamos desde Monterrey a toda la República con cadena de frío garantizada.' },
    ],
  },

  {
    slug: 'hialuronidasa-emergencias-esteticas',
    title: 'Liporase (hialuronidasa): protocolo de reversal y emergencias en medicina estética',
    metaDesc: 'Guía de uso de Liporase (hialuronidasa 1,500 IU) en México: disolución de fillers de ácido hialurónico, protocolo de emergencia vascular y dosis por indicación.',
    date: '2026-06-23',
    intro: 'La hialuronidasa es el antídoto específico para los rellenos de ácido hialurónico. Liporase (1,500 IU por vial) debe estar disponible en cada sesión de filler: no tenerla en consultorio es un riesgo clínico inaceptable, independientemente del nivel de experiencia del médico.',
    relatedProducts: [
      { slug:'liporase',        name:'Liporase',          price:1500, img:'liporase.webp',         cat:'Seguridad Clínica' },
      { slug:'juvederm-voluma', name:'Juvéderm Voluma',   price:4200, img:'juvederm.webp',          cat:'Ácido Hialurónico' },
      { slug:'revolax',         name:'Revolax 1.1ml',      price:1020, img:'revolax.webp',           cat:'Ácido Hialurónico' },
    ],
    content: `
<p>La hialuronidasa es el <strong>antídoto específico para los rellenos de ácido hialurónico</strong>. Liporase (1,500 IU por vial) debe estar disponible en cada sesión de filler: no tenerla en consultorio es un riesgo clínico inaceptable, independientemente del nivel de experiencia del médico o la zona que se trate.</p>

<h2>¿Cómo funciona la hialuronidasa?</h2>
<p>La hialuronidasa es una enzima que hidroliza el ácido hialurónico —tanto reticulado como no reticulado— rompiendo los enlaces glucosídicos entre las unidades de N-acetilglucosamina y ácido glucurónico. El resultado es la <strong>disolución completa del filler de AH</strong> en minutos a horas, dependiendo de la concentración inyectada y el grado de reticulación del producto.</p>

<h2>Indicaciones clínicas</h2>
<p><strong>1. Emergencia vascular (prioridad máxima)</strong><br>
La oclusión vascular por filler es la complicación más grave en medicina estética. Si se sospecha compromiso arterial —blanqueamiento cutáneo, dolor desproporcionado, livideces— se debe inyectar hialuronidasa de inmediato en altas dosis (300–1,500 IU por zona) sin esperar confirmación diagnóstica. El tiempo es crítico: la ventana para prevenir necrosis es de horas.</p>

<p><strong>2. Corrección de resultado estético</strong><br>
Sobrecorrección, migración de producto, efecto Tyndall, asimetría, nódulos. Dosis menores (15–75 IU por zona) aplicadas con precisión disuelven selectivamente el exceso sin afectar el AH endógeno de forma significativa.</p>

<p><strong>3. Dissolución planificada</strong><br>
Antes de cambiar un tratamiento, eliminar acumulaciones antiguas, o preparar la zona para un nuevo protocolo.</p>

<h2>Protocolo de reconstitución</h2>
<p>Disolver Liporase (1,500 IU) en 1–10 mL de solución salina 0.9% según la dosis objetivo. Para emergencia vascular usar alta concentración (1,500 IU en 1–2 mL). Para corrección estética, baja concentración (150–300 IU en 2–5 mL) con técnica de micropapuloterapia lineal sobre el área tratada.</p>

<h2>¿Por qué tener Liporase aunque no hayas tenido complicaciones?</h2>
<p>Las complicaciones vasculares no se predicen por nivel de experiencia: ocurren incluso con médicos altamente capacitados. La diferencia entre un incidente manejado y una necrosis con secuelas permanentes puede ser tener o no tener hialuronidasa lista en ese momento.</p>
`,
    faqs: [
      { q: '¿Liporase disuelve cualquier filler de ácido hialurónico?', a: 'Sí. La hialuronidasa disuelve todos los fillers de ácido hialurónico, tanto reticulado (Juvéderm, Revolax, Dermalax, Restylane, etc.) como no reticulado (skin boosters como Hyaron). No actúa sobre fillers de PLLA, hidroxiapatita cálcica u otros materiales no-AH.' },
      { q: '¿Cuánto tiempo tarda Liporase en disolver un filler?', a: 'En emergencias vasculares, la respuesta es rápida: entre 20–60 minutos con dosis altas. Para correcciones estéticas planificadas, el filler se absorbe en 24–72 horas. El resultado final se evalúa a los 7–14 días.' },
      { q: '¿Dosis de hialuronidasa para emergencia vascular?', a: 'En sospecha de oclusión vascular, la dosis estándar es 300–1,500 IU por zona afectada, inyectadas inmediatamente sin esperar confirmación. Es preferible usar dosis altas y disolver más filler del necesario que sub-dosificar en una emergencia real.' },
      { q: '¿Dónde comprar Liporase en México?', a: 'Liporase (1,500 IU) está disponible en Fancy Water. Distribución desde Monterrey a toda la república. Es un producto de seguridad clínica fundamental — recomendamos tener siempre stock en consultorio.' },
    ],
  },

  {
    slug: 'como-elegir-toxina-botulinica',
    title: 'Cómo elegir toxina botulínica en México: Nabota, Innotox, Liztox y Botox',
    metaDesc: 'Guía comparativa para médicos: cómo elegir entre toxinas botulínicas disponibles en México — Nabota, Innotox, Liztox y Botox según indicación, perfil de paciente y costo.',
    date: '2026-06-23',
    intro: 'México tiene acceso a cuatro toxinas botulínicas de referencia: Botox (Allergan), Nabota (Daewoong), Innotox (Medytox) y Liztox (Huons). Todas son onabotulinumtoxinA purificada con mecanismo de acción idéntico — la diferencia está en el fabricante, la tecnología de purificación, el formato y el precio.',
    relatedProducts: [
      { slug:'nabota-100u',  name:'Nabota 100U',  price:1500, img:'nabota.png',       cat:'Toxina Botulínica' },
      { slug:'innotox-100u', name:'Innotox 100U', price:1350, img:'innotox-new.webp', cat:'Toxina Botulínica' },
      { slug:'liztox-100u',  name:'Liztox 100U',  price:1280, img:'liztox.webp',      cat:'Toxina Botulínica' },
    ],
    content: `
<p>México tiene acceso a cuatro toxinas botulínicas de referencia ampliamente utilizadas: Botox (Allergan/AbbVie), Nabota (Daewoong), Innotox (Medytox) y Liztox (Huons). Todas son <strong>onabotulinumtoxinA purificada</strong> con mecanismo de acción idéntico sobre la placa neuromuscular. La diferencia está en el fabricante, la tecnología de purificación, el formato y el precio.</p>

<h2>Las cuatro toxinas en detalle</h2>

<p><strong>Botox (Allergan/AbbVie) — EE.UU.</strong><br>
El estándar de referencia mundial con más de 30 años de evidencia clínica acumulada. La toxina más prescrita globalmente. Disponible en 50U y 100U. Precio más alto del mercado. Indicada cuando el paciente tiene historial documentado de respuesta óptima específica o cuando se requiere para indicaciones terapéuticas complejas (espasticidad, hiperhidrosis severa, bruxismo).</p>

<p><strong>Nabota (Daewoong) — Corea</strong><br>
Aprobada como Jeuveau® por la FDA (EE.UU., 2019) y como Nuceiva® por la EMA (Europa, 2020). Tecnología HiPure™ de alta pureza. Resultados clínicamente equivalentes a Botox para indicaciones estéticas. La mejor relación calidad-precio para clínicas de alto volumen. Disponible en 100U y 200U.</p>

<p><strong>Innotox (Medytox) — Corea</strong><br>
La única toxina en formulación <em>líquida</em> lista para usar (4U/0.1mL). Elimina el paso de reconstitución y la variabilidad de dilución. Ideal para médicos que priorizan máxima consistencia y reproducibilidad en sus resultados.</p>

<p><strong>Liztox (Huons) — Corea</strong><br>
Formulación liofilizada con tecnología propia de purificación. MFDS-aprobada. Precio más accesible entre las opciones coreanas. Buena opción para clínicas que buscan reducir costo operativo sin sacrificar calidad clínica.</p>

<h2>Tabla comparativa</h2>
<table>
  <tr><th>Toxina</th><th>Fabricante</th><th>Formato</th><th>Perfil de uso</th></tr>
  <tr><td>Botox</td><td>Allergan (EE.UU.)</td><td>Liofilizado 50U/100U</td><td>Referencia histórica, terapéutica</td></tr>
  <tr><td>Nabota</td><td>Daewoong (KR)</td><td>Liofilizado 100U/200U</td><td>Alto volumen, mejor costo-eficacia</td></tr>
  <tr><td>Innotox</td><td>Medytox (KR)</td><td>Líquido 100U</td><td>Máxima consistencia, sin reconstitución</td></tr>
  <tr><td>Liztox</td><td>Huons (KR)</td><td>Liofilizado 100U</td><td>Costo accesible, calidad clínica comprobada</td></tr>
</table>

<h2>Recomendación práctica</h2>
<p>Para la mayoría de indicaciones estéticas de rutina, <strong>Nabota o Innotox</strong> ofrecen el mejor balance entre evidencia clínica internacional (aprobaciones FDA/EMA) y precio. Liztox es una alternativa sólida para reducir costo. Botox se justifica cuando el paciente lo solicita específicamente o para indicaciones terapéuticas complejas con protocolo establecido.</p>
`,
    faqs: [
      { q: '¿Cuál es la diferencia principal entre toxinas coreanas y Botox?', a: 'El principio activo es el mismo: onabotulinumtoxinA purificada. La diferencia está en el fabricante, la tecnología de purificación y el precio. Nabota, Innotox y Liztox tienen aprobaciones regulatorias en múltiples países y resultados clínicamente equivalentes a Botox para uso estético.' },
      { q: '¿Qué toxina botulínica tiene mejor relación calidad-precio en México?', a: 'Nabota 100U ofrece la mejor relación calidad-precio para uso estético de alto volumen: está aprobada por FDA (como Jeuveau®) y EMA (como Nuceiva®), con resultados equivalentes a Botox. Liztox es la opción más económica. Innotox es premium por su formato líquido sin reconstitución.' },
      { q: '¿Se puede mezclar toxinas botulínicas en la misma sesión?', a: 'No se recomienda. No existen estudios comparativos de seguridad para el uso simultáneo de distintas marcas de toxina en la misma sesión. Lo adecuado es usar una sola marca por sesión y documentar el producto utilizado.' },
      { q: '¿Dónde comprar toxinas botulínicas coreanas en México?', a: 'Nabota 100U, Nabota 200U, Innotox 100U y Liztox 100U están disponibles en Fancy Water. Enviamos con cadena de frío garantizada desde Monterrey a toda la República Mexicana.' },
    ],
  },

  {
    slug: 'voltena-linea-corporal',
    title: 'VOL:TENA: la línea coreana completa para remodelación corporal',
    metaDesc: 'Guía sobre la línea VOL:TENA (Corea): N°1 lipolítico, N°2 body filler, Pllagen PLLA, N°3 gel reafirmante y Lacto Gel. Fancy Water es distribuidor exclusivo en América.',
    date: '2026-06-23',
    intro: 'VOL:TENA es una línea de medicina estética coreana diseñada específicamente para remodelación corporal integral. Fancy Water es distribuidor exclusivo para todo el continente americano. La línea cubre desde lipolíticos inyectables hasta bioestimuladores, fillers corporales y cuidado tópico.',
    relatedProducts: [
      { slug:'voltena-n1-body-serum',  name:'VOL:TENA N°1',    price:2300, img:'voltena1-solo.jpg',  cat:'Lipoenzima · VOL:TENA' },
      { slug:'voltena-n2-body-filler', name:'VOL:TENA N°2',    price:3800, img:'voltena2-solo.jpg',  cat:'Body Filler · VOL:TENA' },
      { slug:'pllagen-plla',           name:'Pllagen PLLA',     price:2200, img:'pllagen.jpg',         cat:'Bioestimulador · PLLA' },
    ],
    content: `
<p>VOL:TENA es una línea de medicina estética coreana diseñada para <strong>remodelación corporal integral</strong>. Fancy Water es el distribuidor exclusivo para todo el continente americano. La línea cubre el ciclo completo de tratamiento corporal: desde la reducción de adiposidad localizada hasta la restitución de volumen, la estimulación de colágeno y el mantenimiento tópico.</p>

<h2>VOL:TENA N°1 — Lipolítico inyectable</h2>
<p>El N°1 es un lipolítico basado en fosfatidilcolina (PPC) con deoxicolato de sodio. Actúa sobre adipocitos subcutáneos mediante un mecanismo de lisis de membrana, facilitando la eliminación de grasa localizada por vía linfática. Indicado para doble mentón, abdomen, flancos, cara interna de brazos y muslos.</p>

<p>Protocolo: 4–6 sesiones cada 21 días. Presentación: ampolleta de 10 mL lista para usar.</p>

<h2>VOL:TENA N°2 — Body Filler de ácido hialurónico</h2>
<p>El N°2 es un filler de ácido hialurónico de alta viscosidad formulado para <strong>volumetría corporal</strong>: glúteos, caderas y corrección de asimetrías. A diferencia de los fillers faciales, su reticulación y cohesividad están optimizadas para soportar el tejido corporal más denso y resistir la compresión mecánica del movimiento.</p>

<h2>Pllagen PLLA — Bioestimulador de la línea VOL:TENA</h2>
<p>Pllagen combina 45 mg de PLLA con 13 mg de AH como vehículo. Las microesferas de ácido poli-L-láctico actúan como andamio biológico: estimulan fibroblastos para producción de colágeno nuevo. Ideal para restitución de colágeno en zonas tratadas previamente con lipolíticos — cierra el ciclo del protocolo corporal.</p>

<h2>VOL:TENA N°3 — Gel Reafirmante Tópico</h2>
<p>Formulación tópica complementaria para potenciar y mantener los resultados inyectables. Combina activos reafirmantes con acción drenante. Se aplica entre sesiones como mantenimiento domiciliario.</p>

<h2>Lacto Gel — Cuidado íntimo</h2>
<p>Gel íntimo de la línea VOL:TENA con activos restauradores de la microbiota y el pH vaginal. Indicado como complemento en procedimientos de rejuvenecimiento íntimo.</p>

<h2>El protocolo corporal completo</h2>
<p>La potencia de VOL:TENA está en usar la línea como un <strong>protocolo secuencial</strong>: N°1 para reducir adiposidad → N°2 si se requiere restitución de volumen → Pllagen para estimular colágeno → N°3 para mantenimiento. Este enfoque integral diferencia la propuesta de cualquier producto puntual del mercado.</p>
`,
    faqs: [
      { q: '¿Qué incluye la línea VOL:TENA?', a: 'VOL:TENA tiene 5 productos: N°1 (lipolítico inyectable), N°2 (body filler de AH para volumetría corporal), Pllagen PLLA (bioestimulador), N°3 (gel reafirmante tópico) y Lacto Gel (cuidado íntimo). Fancy Water es distribuidor exclusivo en América.' },
      { q: '¿VOL:TENA N°1 es igual a Lipo Lab PPC?', a: 'Ambos son lipolíticos basados en fosfatidilcolina, pero son formulaciones de laboratorios distintos. Lipo Lab PPC es de Pharmaresearch Products (KFDA). VOL:TENA N°1 es de la línea coreana exclusiva de Fancy Water. El mecanismo de acción es similar; la elección depende de la disponibilidad y preferencia clínica.' },
      { q: '¿Dónde puedo comprar VOL:TENA en México?', a: 'Fancy Water es el distribuidor exclusivo de VOL:TENA para América. Toda la línea está disponible en fancywater.mx con envío desde Monterrey a toda la República Mexicana.' },
      { q: '¿Se puede combinar VOL:TENA N°1 con Pllagen en el mismo protocolo?', a: 'Sí, y de hecho es el protocolo recomendado: N°1 reduce la adiposidad localizada y Pllagen estimula colágeno nuevo para reafirmar la zona tratada. Se aplican en sesiones distintas separadas por 3–4 semanas.' },
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

  {
    slug: 'juvederm-voluma-vycross',
    title: 'Juvéderm Voluma y tecnología Vycross: volumetría facial estructural para médicos',
    metaDesc: 'Guía sobre Juvéderm Voluma (Allergan) y tecnología Vycross en México: indicaciones para pómulos, mentón y mandíbula, duración hasta 24 meses y diferencias con otros fillers.',
    date: '2026-06-23',
    intro: 'Juvéderm Voluma de Allergan/AbbVie es el filler de ácido hialurónico de referencia para volumetría facial estructural profunda. Su tecnología Vycross® combina cadenas largas y cortas de AH para lograr la mayor cohesividad y duración del mercado — hasta 24 meses en pómulos.',
    relatedProducts: [
      { slug:'juvederm-voluma',   name:'Juvéderm Voluma',      price:4200, img:'juvederm.webp',        cat:'Ácido Hialurónico' },
      { slug:'revolax',           name:'Revolax 1.1ml',         price:1020, img:'revolax.webp',          cat:'Ácido Hialurónico' },
      { slug:'dermalax-implant',  name:'Dermalax Implant Plus', price:1600, img:'dermalax-implant.webp', cat:'AH · Alta Viscosidad' },
    ],
    content: `
<p>Juvéderm Voluma de Allergan/AbbVie es el filler de ácido hialurónico de referencia para <strong>volumetría facial estructural profunda</strong>. Su tecnología Vycross® lo distingue de cualquier otro filler del mercado: fue el primer HA aprobado por la FDA para restauración de volumen en mejillas (2013) y es el producto con mayor evidencia clínica en esta indicación.</p>

<h2>¿Qué es la tecnología Vycross?</h2>
<p>La mayoría de los fillers de AH usan reticulación <em>monofásica</em>: se reticulan cadenas de AH del mismo peso molecular para formar una red homogénea. Vycross® usa reticulación <em>cruzada de cadenas largas y cortas</em> en proporción optimizada. Esto produce tres ventajas concretas:</p>
<ul>
  <li><strong>Mayor cohesividad:</strong> el gel resiste mejor la deformación mecánica — ideal para zonas con movimiento y presión como pómulos y mentón.</li>
  <li><strong>Menor cantidad de BDDE:</strong> el agente reticulante (BDDE) queda más eficientemente incorporado, reduciendo el exceso libre y mejorando el perfil de tolerabilidad.</li>
  <li><strong>Mayor duración:</strong> la estructura reticulada resiste mejor la degradación enzimática. Voluma dura hasta 24 meses en pómulos — la mayor duración documentada entre fillers de AH.</li>
</ul>

<h2>Indicaciones para Juvéderm Voluma</h2>
<p>Voluma fue diseñado para inyección supraperióstica o submuscular profunda, donde se requiere soporte estructural real:</p>
<ul>
  <li><strong>Pómulos y arco cigomático:</strong> restauración de volumen perdido, proyección y definición del tercio medio.</li>
  <li><strong>Mentón:</strong> alargamiento, proyección anterior, corrección de asimetría sagital.</li>
  <li><strong>Mandíbula:</strong> definición del ángulo mandibular, corrección de pérdida de definición en jawline.</li>
  <li><strong>Sien:</strong> corrección de depresión temporal, factor de envejecimiento frecuentemente ignorado.</li>
</ul>

<h2>Comparativa con otras opciones de alta viscosidad</h2>
<table>
  <tr><th></th><th>Juvéderm Voluma</th><th>Dermalax Implant Plus</th></tr>
  <tr><td>Tecnología</td><td>Vycross® (Allergan)</td><td>Reticulación monofásica (Across, KR)</td></tr>
  <tr><td>G prime</td><td>Alto (alta proyección)</td><td>Alto</td></tr>
  <tr><td>Duración</td><td>Hasta 24 meses</td><td>12–18 meses</td></tr>
  <tr><td>Evidencia clínica</td><td>Aprobación FDA, estudios de 24m</td><td>KFDA, amplio uso en Asia</td></tr>
  <tr><td>Perfil de uso</td><td>Referencia histórica, máxima duración</td><td>Excelente alternativa costo-eficaz</td></tr>
</table>

<h2>Consideraciones técnicas</h2>
<p>Voluma se aplica con técnica de bolus o fanning supraperióstico con cánula o aguja 27G. La hidratación post-inyección puede hacer que el gel se expanda ligeramente en las primeras 48 horas — considerar al planificar la dosis. Como todo filler de AH, es reversible con hialuronidasa (Liporase) en caso necesario.</p>
`,
    faqs: [
      { q: '¿Cuánto dura Juvéderm Voluma?', a: 'Juvéderm Voluma tiene la mayor duración documentada entre fillers de ácido hialurónico: hasta 24 meses en pómulos en estudios clínicos. La duración real varía según la zona (mentón y mandíbula suelen durar 12–18 meses) y el metabolismo del paciente.' },
      { q: '¿Qué hace diferente a Vycross de la reticulación convencional?', a: 'Vycross combina cadenas largas y cortas de AH en un proceso de reticulación cruzada. Esto genera mayor cohesividad, mejor incorporación del agente reticulante (BDDE) y mayor resistencia a la degradación enzimática — resultando en mayor duración y proyección frente a fillers de reticulación monofásica.' },
      { q: '¿Juvéderm Voluma se puede usar en labios?', a: 'No es la indicación de Voluma. Para labios se usan fillers de menor viscosidad y G prime más bajo (Juvéderm Ultra, Revolax Fine/Deep). Voluma está diseñado para volumetría estructural profunda en pómulos, mentón y mandíbula.' },
      { q: '¿Dónde comprar Juvéderm Voluma en México?', a: 'Juvéderm Voluma (Allergan/AbbVie) está disponible en Fancy Water. Producto original con lote verificable, cadena de frío garantizada y envío desde Monterrey a toda la República.' },
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
