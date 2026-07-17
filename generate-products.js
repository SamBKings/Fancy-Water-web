#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    slug: 'nabota-100u',
    name: 'Nabota 100U',
    category: 'Toxina Botulínica',
    price: 1500,
    img: 'nabota.png',
    fabricante: 'Daewoong · Corea',
    composicion: 'Toxina Botulínica Tipo A (DWP-450)',
    presentacion: '100 U / Vial · 1 Vial por caja',
    formato: 'Polvo secado al vacío',
    nota: 'Una de las toxinas coreanas con mayor reconocimiento global, validada en múltiples mercados regulados. Comercializada como Jeuveau™ en EE.UU. y Nuceiva™ en Europa.',
    indicaciones: ['Líneas glabelares moderadas a severas','Frente y patas de gallo','Mentón y cuello (técnica Nefertiti)','Sonrisa gingival'],
    beneficios: ['Tecnología HiPure™ de alta pureza proteica','Comercializada como Jeuveau™ (FDA) y Nuceiva™ (EMA)','Mínima difusión al músculo adyacente','Resultado natural y predecible'],
    uso: ['Reconstituir con SS 0.9% sin preservantes (1.25–2.5 mL)','Aguja de 30G a 33G para precisión','Almacenar entre 2–8 °C','Iniciar con dosis conservadora y titular'],
    metaDesc: 'Compra Nabota 100U original en México. Toxina botulínica Tipo A de Daewoong, tecnología HiPure™. Distribuidores en Monterrey. Envío inmediato a toda la república.',
  },
  {
    slug: 'nabota-200u',
    name: 'Nabota 200U',
    category: 'Toxina Botulínica',
    price: 1900,
    img: 'nabota200-solo.jpg',
    fabricante: 'Daewoong · Corea',
    composicion: 'Toxina Botulínica Tipo A (DWP-450)',
    presentacion: '200 U / Vial · 1 Vial por caja',
    formato: 'Polvo secado al vacío',
    nota: 'Presentación de 200 unidades, ideal para tratamientos de mayor superficie o uso clínico intensivo. Misma calidad y pureza HiPure™ que la versión 100U.',
    indicaciones: ['Líneas glabelares moderadas a severas','Frente y patas de gallo','Mentón y cuello (técnica Nefertiti)','Sonrisa gingival'],
    beneficios: ['Tecnología HiPure™ de alta pureza proteica','Mayor rendimiento por vial: ideal para alto volumen','Mínima difusión al músculo adyacente','Resultado natural y predecible'],
    uso: ['Reconstituir con SS 0.9% sin preservantes (2.5–5 mL según dilución deseada)','Aguja de 30G a 33G para precisión','Almacenar entre 2–8 °C','Iniciar con dosis conservadora y titular'],
    metaDesc: 'Compra Nabota 200U original en México. Toxina botulínica Daewoong 200 unidades, tecnología HiPure™. Mayor rendimiento por vial. Envío desde Monterrey.',
  },
  {
    slug: 'innotox-100u',
    name: 'Innotox 100U',
    category: 'Toxina Botulínica · Presentación Líquida',
    price: 1350,
    img: 'innotox-new.webp',
    fabricante: 'Medytox · Corea',
    composicion: 'Toxina Botulínica Tipo A',
    presentacion: '100 U / Vial · 4 U por 0.1 mL',
    formato: 'Líquido — sin reconstitución',
    nota: 'Primera toxina botulínica líquida del mundo. Su formulación elimina la variabilidad de la reconstitución manual y mejora la trazabilidad del tratamiento.',
    indicaciones: ['Líneas glabelares y frontales','Patas de gallo · líneas perioculares','Hiperhidrosis axilar y palmar','Bruxismo y maseteros'],
    beneficios: ['Sin riesgo de error en la reconstitución','Dosificación más precisa y reproducible','Inicio de acción rápido (3–5 días)','Duración promedio de 4–6 meses'],
    uso: ['Aplicación intramuscular con aguja 30G–32G','Refrigerar entre 2–8 °C, no congelar','Una vez abierto utilizar en menos de 24 h','Dosis estándar: 4 U por punto de inyección'],
    metaDesc: 'Compra Innotox 100U en México. La primera toxina botulínica líquida del mundo de Medytox. Sin reconstitución, máxima precisión. Distribuidores en Monterrey.',
  },
  {
    slug: 'liztox-100u',
    name: 'Liztox 100U',
    category: 'Toxina Botulínica',
    price: 900,
    img: 'listox.png',
    fabricante: 'Huons · Corea',
    composicion: 'Clostridium Botulinum Toxin Tipo A',
    presentacion: '100 U / Vial',
    formato: 'Polvo liofilizado — reconstituir con SS 0.9%',
    nota: 'Opción confiable para clínicas de alto volumen. Duración estándar de 3 a 4 meses con resultados naturales. Aprobada por KFDA.',
    indicaciones: ['Arrugas dinámicas frontales','Bruxismo · hipertrofia de maseteros','Líneas perioculares y peribucales','Lifting de cejas no quirúrgico'],
    beneficios: ['Excelente relación costo-eficacia','Aprobada por KFDA','Bajo perfil inmunogénico','Inicio rápido y duración consistente'],
    uso: ['Reconstituir con 2.5 mL de SS 0.9% sin conservadores','Aplicar dentro de las primeras 4 h post-reconstitución','Aguja 30G a 32G para inyección IM','Almacenar reconstituido en refrigeración'],
    metaDesc: 'Compra Liztox 100U en México. Toxina botulínica Huons aprobada KFDA. Excelente costo-eficacia para clínicas de alto volumen. Envío desde Monterrey.',
  },
  {
    slug: 'juvederm-voluma',
    name: 'Juvéderm Voluma',
    category: 'Ácido Hialurónico · Volumetría Facial',
    price: 4200,
    img: 'juvederm.webp',
    fabricante: 'Allergan / AbbVie',
    composicion: 'Ácido Hialurónico Vycross® con lidocaína',
    presentacion: '2 × 1 mL por caja',
    formato: 'Jeringa prellenada estéril',
    nota: 'El estándar internacional de la volumetría facial. Tecnología Vycross® que combina cadenas largas y cortas de AH para máxima durabilidad y cohesividad.',
    indicaciones: ['Restauración volumétrica de pómulos','Definición de mentón y mandíbula','Corrección de mediofacial','Volumetría profunda en pacientes maduros'],
    beneficios: ['Estándar de oro mundial en volumetría','Tecnología Vycross® de alta cohesividad','Duración hasta 24 meses','Lidocaína integrada para confort del paciente'],
    uso: ['Inyección supraperióstica con cánula 22G–25G','Técnica de bolos profundos','Aplicación lenta para evitar irregularidades','Masaje moldeador inmediato'],
    metaDesc: 'Compra Juvéderm Voluma original en México. Relleno dérmico Allergan con tecnología Vycross®, duración hasta 24 meses. Distribuidor oficial. Envío desde Monterrey.',
  },
  {
    slug: 'revolax',
    name: 'Revolax 1.1ml',
    category: 'Ácido Hialurónico',
    price: 1020,
    img: 'revolax.webp',
    fabricante: 'Across · Corea',
    composicion: 'Ácido Hialurónico reticulado con lidocaína',
    presentacion: '1.1 mL por jeringa',
    formato: 'Jeringa prellenada estéril',
    nota: 'Familia coreana de gran reputación internacional disponible en tres densidades. Cubre todas las indicaciones con un solo sistema de reticulación de alta cohesividad.',
    indicaciones: ['Fine: arrugas finas y peribucales','Deep: surcos profundos y aumento labial','Sub-Q: volumen profundo y contorno facial','Reestructuración facial completa'],
    beneficios: ['Familia con gran reputación internacional','Reticulación monofásica de alta cohesividad','Bajo riesgo de migración','Resultados duraderos y naturales'],
    uso: ['Fine: dérmica superficial (aguja 30G)','Deep: dérmica profunda (aguja 27G)','Sub-Q: supraperióstica con cánula 22G','Aplicación lenta y por capas'],
    metaDesc: 'Compra Revolax en México. Relleno dérmico coreano Across en tres densidades: Fine, Deep y Sub-Q. Distribuidores en Monterrey. Envío inmediato a toda la república.',
  },
  {
    slug: 'dermalax-implant',
    name: 'Dermalax Implant Plus',
    category: 'Ácido Hialurónico · Alta Viscosidad',
    price: 1600,
    img: 'dermalax-implant.webp',
    fabricante: 'Across · Corea',
    composicion: 'Ácido Hialurónico reticulado con lidocaína · alta cohesividad',
    presentacion: '2.2 mL por jeringa — presentación Implant Plus',
    formato: 'Jeringa prellenada estéril',
    nota: 'Formulado específicamente para volumetría estructural profunda. Su alta viscosidad proporciona proyección y sustento en zonas óseas sin riesgo de migración.',
    indicaciones: ['Volumización de pómulos y arco cigomático','Definición de mentón y mandíbula','Restauración del triángulo invertido facial','Corrección de deficiencias óseas leves a moderadas'],
    beneficios: ['Alta cohesividad: ideal para soporte estructural','Lidocaína integrada para mayor confort','Reticulación BDDE controlada de larga duración','Resultado volumétrico natural y duradero'],
    uso: ['Técnica supraperióstica con cánula 22G o aguja 23G','Aplicar en bolos profundos sobre el periostio','Masaje inmediato para moldear y distribuir','Aspirar antes de cada bolo para evitar inyección intravascular'],
    metaDesc: 'Compra Dermalax Implant Plus en México. Relleno de ácido hialurónico de alta viscosidad para volumetría facial estructural. Distribuidores en Monterrey.',
  },
  {
    slug: 'elasty',
    name: 'Elasty 1.1ml',
    category: 'Ácido Hialurónico · Monofásico',
    price: 1100,
    img: 'elasty.jpg',
    fabricante: 'Hugel-affiliate · Corea',
    composicion: 'Ácido Hialurónico monofásico con lidocaína',
    presentacion: '1.1 mL por jeringa',
    formato: 'Jeringa prellenada estéril',
    nota: 'Filler monofásico con tecnología que asegura distribución homogénea y resultado natural en movimiento dinámico. Disponible en tres densidades complementarias.',
    indicaciones: ['G Plus: pómulos, mentón, mandíbula','D Plus: surcos nasolabiales y marioneta','F Plus: labios y líneas finas','Rejuvenecimiento facial integral'],
    beneficios: ['Tecnología monofásica: distribución homogénea','Resultado natural en movimiento','Tres densidades complementarias','Excelente integración tisular'],
    uso: ['G Plus: supraperióstica con cánula 22G','D Plus: dérmica profunda con aguja 27G','F Plus: dérmica superficial con aguja 30G','Masaje suave post-aplicación para moldear'],
    metaDesc: 'Compra Elasty 1.1ml en México. Relleno de ácido hialurónico monofásico Hugel en tres densidades. Distribuidores en Monterrey. Envío inmediato.',
  },
  {
    slug: 'lipo-lab-ppc',
    name: 'Lipo Lab PPC',
    category: 'Lipoenzima Inyectable',
    price: 1400,
    img: 'lipolab.jpg',
    fabricante: 'KFDA certificado · Corea',
    composicion: 'Fosfatidilcolina 1,000 mg',
    presentacion: '10 mL × 10 viales por caja',
    formato: 'Solución inyectable de uso médico',
    nota: 'Una de las lipoenzimas más reconocidas internacionalmente. Aprobada por KFDA con evidencia clínica robusta para lipólisis no quirúrgica.',
    indicaciones: ['Doble mentón · papada','Abdomen, flancos y cintura','Cara interna de brazos y muslos','Espalda y rodillas'],
    beneficios: ['Reducción focalizada de grasa localizada','Acción dual: emulsifica y elimina el adipocito','Resultados visibles desde la 2ª sesión','Bajo perfil de efectos secundarios'],
    uso: ['Sesiones cada 21–28 días: promedio 4–6 sesiones','Inyección subcutánea profunda con aguja 30G','Distribución en cuadrícula con separación de 1.5 cm','Respetar dosis máxima por sesión según área'],
    metaDesc: 'Compra Lipo Lab PPC en México. Lipoenzima inyectable fosfatidilcolina 1000mg certificada KFDA. Distribuidores en Monterrey. Precio especial para clínicas.',
  },
  {
    slug: 'voltena-n1-body-serum',
    name: 'VOL:TENA N°1',
    category: 'Lipoenzima Corporal · VOL:TENA',
    price: 2300,
    img: 'voltena1-solo.jpg',
    fabricante: 'VOL:TENA · Corea',
    composicion: 'Complejo lipolítico inyectable',
    presentacion: '10 mL × 6 viales por caja',
    formato: 'Suero inyectable',
    nota: 'Lipolítico que rompe la membrana del adipocito y favorece su eliminación natural. Resultados visibles desde la 2ª sesión. Exclusivo para profesionales de la medicina estética.',
    indicaciones: ['Doble mentón · papada','Abdomen y flancos','Brazos, espalda y rodillas','Modelado facial: bola de Bichat'],
    beneficios: ['Reducción visible de adiposidad localizada','Mejora del contorno facial y corporal','Estimulación de drenaje linfático','Inflamación post-tratamiento mínima'],
    uso: ['Protocolo de 4–6 sesiones cada 21 días','Inyección subcutánea con cánula o aguja 27G–30G','Marcar áreas y respetar dosis máxima por zona','Combinar con masaje linfático posterior'],
    metaDesc: 'Compra VOL:TENA N°1 en México. Lipolítico corporal inyectable de Corea. Distribuidores exclusivos para América. Precio mayoreo disponible.',
  },
  {
    slug: 'voltena-n2-body-filler',
    name: 'VOL:TENA N°2 Body Filler',
    category: 'Relleno Corporal · VOL:TENA',
    price: 2800,
    img: 'voltena2-solo.jpg',
    fabricante: 'VOL:TENA · Corea',
    composicion: 'Ácido Hialurónico reticulado',
    presentacion: '60 cc por unidad',
    formato: 'Gel inyectable de gran volumen',
    nota: 'Body filler de alta cohesividad para remodelado corporal. Alternativa segura al implante quirúrgico cuando la corrección es moderada.',
    indicaciones: ['Aumento glúteo no quirúrgico','Modelado de pantorrillas','Corrección de depresiones corporales','Aumento de pectorales masculinos'],
    beneficios: ['Aumento corporal sin cirugía','Alta cohesividad y proyección sostenida','Baja migración del producto','Resultado inmediato y reversible con hialuronidasa'],
    uso: ['Aplicación profunda con cánula de gran calibre (18G–21G)','Anestesia tumescente recomendada','Distribución en abanico para naturalidad','Reposo de 7 días posterior al tratamiento'],
    metaDesc: 'Compra VOL:TENA N°2 Body Filler en México. Relleno corporal de ácido hialurónico para glúteos y modelado corporal. Distribuidor exclusivo en América.',
  },
  {
    slug: 'voltena-n3-cool-gel',
    name: 'VOL:TENA N°3 Cool Gel',
    category: 'Gel Corporal · VOL:TENA',
    price: 600,
    img: 'voltena3-solo.png',
    fabricante: 'VOL:TENA · Corea',
    composicion: 'Gel cosmético de uso tópico',
    presentacion: '300 mL / 10.14 fl.oz.',
    formato: 'Gel reductor — uso domiciliario y clínico',
    nota: 'Producto cosmético complementario que prolonga los resultados de los tratamientos clínicos VOL:TENA. Excelente producto de retail en consultorio.',
    indicaciones: ['Mantenimiento entre sesiones clínicas','Tonificación post-parto','Sensación reafirmante en abdomen, glúteos y muslos','Coadyuvante en tratamientos de celulitis'],
    beneficios: ['Sensación inmediata de frescor reafirmante','Prolonga resultados de tratamientos clínicos','Apto para uso diario en casa','Excelente producto de retail en consultorio'],
    uso: ['Aplicar sobre piel limpia y seca, masajear hasta absorción','2 veces al día en las áreas a tratar','Compatible con post-tratamiento corporal','Evitar contacto con mucosas y heridas abiertas'],
    metaDesc: 'Compra VOL:TENA N°3 Cool Gel en México. Gel reductor y reafirmante coreano para uso post-procedimiento y domiciliario. Distribuidor exclusivo en América.',
  },
  {
    slug: 'lacto-gel',
    name: 'Lacto Gel VOL:TENA',
    category: 'Cuidado Íntimo · VOL:TENA',
    price: 520,
    img: 'lacto.jpg',
    fabricante: 'VOL:TENA · Corea',
    composicion: 'Filtrado de Lactobacillus fermentum + extractos vegetales',
    presentacion: '1.8 g × 10 unidades por caja',
    formato: 'Gel íntimo — aplicador prellenado desechable',
    nota: 'Cuidado íntimo domiciliario que complementa la línea VOL:TENA. Su fórmula suave hidrata y respeta la microbiota natural de la zona íntima.',
    indicaciones: ['Flujo excesivo con olor fuerte','Sequedad que causa molestias durante la intimidad','Picazón y resequedad de zonas sensibles','Mantenimiento del equilibrio del pH íntimo'],
    beneficios: ['Mantiene el equilibrio óptimo del pH','Ingredientes naturales: Centella, regaliz, manzanilla','Aplicador individual prellenado: higiénico y práctico','Cuidado suave sin alterar la flora beneficiosa'],
    uso: ['Lavar bien las manos antes de la aplicación','Retirar el embalaje, sujetar el émbolo y quitar la tapa','Aplicar el gel en las áreas necesarias según se requiera'],
    metaDesc: 'Compra Lacto Gel VOL:TENA en México. Gel íntimo femenino con ácido láctico para equilibrio del pH. Distribuidor exclusivo de VOL:TENA en América.',
  },
  {
    slug: 'pllagen-plla',
    name: 'Pllagen PLLA',
    category: 'Bioestimulador · Ácido Poliláctico',
    price: 2200,
    img: 'pllagen.jpg',
    fabricante: 'VOL:TENA · Corea',
    composicion: 'PLLA 45 mg + Ácido Hialurónico no reticulado 13 mg',
    presentacion: 'Vial 1: polvo 157 mg + Vial 2: suero booster 5 mL · 5 sets/caja',
    formato: 'Kit doble vial: microesfera 20–50 μm',
    nota: 'PLLA de origen natural (maíz fermentado), biocompatible y biodegradable. Combina volumen inicial con regeneración progresiva de colágeno propio.',
    indicaciones: ['Líneas finas, arrugas profundas y de expresión','Pérdida de volumen y elasticidad facial','Regeneración profunda y nutrición intensa de la piel','Mejora de cicatrices de acné y calidad cutánea'],
    beneficios: ['Estimula la producción natural de colágeno','Volumen de aparición gradual y sutil','Efectos duraderos: hasta 24 meses','Reconstitución rápida (~3 min) con hidratación intensa AH'],
    uso: ['Mezclar polvo liofilizado con el suero booster','Mesoterapia con aguja 31–33G / 4 mm a 1–2 mm de profundidad','0.02–0.03 cc por punto · intervalo 0.5–1 cm'],
    metaDesc: 'Compra Pllagen PLLA en México. Bioestimulador ácido poliláctico VOL:TENA para colágeno y regeneración. Distribuidor exclusivo en América. Precio para clínicas.',
  },
  {
    slug: 'estella-plla',
    name: 'Estella PLLA 200',
    category: 'Bioestimulador · Ácido Poliláctico',
    price: 3500,
    img: 'estella.jpg',
    fabricante: 'Kuber Science · Corea',
    composicion: 'Ácido poli-L-Láctico (PLLA) · PM 70,000–90,000 Da',
    presentacion: '514 mg / vial · contenido PLLA 200 mg',
    formato: 'Polvo liofilizado — reconstituir con 8–10 mL SWFI',
    nota: 'PLLA de cuarta generación. Sus microesferas esféricas uniformes (20–50 μm) reducen la formación de nódulos y estimulan colágeno propio con efectos hasta 24 meses.',
    indicaciones: ['Regeneración de la piel del rostro','Corrección de arrugas y pliegues faciales','Pérdida de volumen y elasticidad','Cicatrices y mejora de la calidad cutánea'],
    beneficios: ['Alto contenido de PLLA: 200 mg por vial','Microesferas 20–50 μm: menor formación de nódulos','Reconstitución rápida en ~10 min con vórtex','Volumen y efecto duraderos: más de 24 meses'],
    uso: ['Reconstituir con 8–10 mL de SWFI (~10 min con vórtex)','Inyección en la capa dérmica del área a tratar','Efecto visible a partir de 4 semanas'],
    metaDesc: 'Compra Estella PLLA 200 en México. Bioestimulador de ácido poliláctico Kuber Science, 200mg por vial. Efectos hasta 24 meses. Distribuidores en Monterrey.',
  },
  {
    slug: 'hyaron-prefilled',
    name: 'Hyaron Prefilled',
    category: 'Skin Booster · Ácido Hialurónico',
    price: 1950,
    img: 'hyaron.jpg',
    fabricante: 'Dongkook Pharmaceutical · Corea',
    composicion: 'Hialuronato de Sodio 25 mg / 2.5 mL',
    presentacion: '2.5 mL × 10 jeringas prellenadas',
    formato: 'Jeringa prellenada estéril',
    nota: 'Skin booster premium con AH de alta pureza. Excelente para pacientes que buscan calidad de piel y luminosidad sin cambio volumétrico.',
    indicaciones: ['Rejuvenecimiento facial general','Cuello y escote','Dorso de manos','Preparación pre-evento (glow inmediato)'],
    beneficios: ['Hidratación profunda con AH no reticulado','Mejora textura, elasticidad y luminosidad','Resultado natural sin volumen adicional','Apto para todo tipo de piel'],
    uso: ['Protocolo de 3 sesiones cada 2–4 semanas','Mesoterapia con técnica de pápula o nappage','Aguja 32G o pistola de inyección automática','Recomendado en otoño-invierno para mejores resultados'],
    metaDesc: 'Compra Hyaron Prefilled en México. Skin booster ácido hialurónico Dongkook 25mg prellenado × 10 jeringas. Hidratación profunda. Distribuidores en Monterrey.',
  },
  {
    slug: 'eyebella',
    name: 'Eyebella 2ml',
    category: 'Skin Booster · Periocular',
    price: 700,
    img: 'eyebella.webp',
    fabricante: 'Made in Korea',
    composicion: 'Polynucleotide (PN) 10 mg/mL',
    presentacion: '2 mL por jeringa',
    formato: 'Skin booster especializado periocular',
    nota: 'Polinucleótido formulado específicamente para el área periocular, una de las más delicadas del rostro. Regenera, hidrata y reduce ojeras con precisión.',
    indicaciones: ['Contorno de ojos · ojeras','Líneas finas perioculares','Pliegue palpebral inferior','Mejora general de la calidad de piel'],
    beneficios: ['Regeneración celular específica zona periocular','Mejora visible de ojeras y líneas finas','Aumento de espesor dérmico','Acción antiinflamatoria y antioxidante'],
    uso: ['Protocolo de 3–4 sesiones cada 15 días','Inyección intradérmica superficial con aguja 32G','Técnica de microbolos o retrotrazado','Refrigerar entre 2–8 °C antes de su uso'],
    metaDesc: 'Compra Eyebella 2ml en México. Skin booster periocular con polinucleótidos para ojeras y contorno de ojos. Distribuidores en Monterrey. Precio clínica.',
  },
  {
    slug: 'ami-eyes',
    name: 'Ami Eyes 2ml',
    category: 'Skin Booster · Periocular con PDRN',
    price: 1300,
    img: 'ami-eyes.webp',
    fabricante: 'Quiver Medic · Corea',
    composicion: 'Polinucleótido (PN/PDRN) 1% · 20 mg/2 mL + Glutatión',
    presentacion: '1 × 2 mL por jeringa prellenada',
    formato: 'Skin booster periocular — mesoterapia',
    nota: 'Formulado específicamente para el área periocular. El PDRN de ADN de salmón purificado activa la síntesis de colágeno y elastina sin generar nódulos ni retención linfática.',
    indicaciones: ['Ojeras y palidez periocular','Líneas finas y arrugas alrededor del ojo','Pérdida de grosor dérmico en párpados','Puffiness y cansancio del contorno ocular'],
    beneficios: ['Estimula síntesis de colágeno y elastina celular','Sin AH reticulado: sin riesgo de nódulos ni edema','Acción antiinflamatoria y antioxidante con glutatión','Resultados progresivos y naturales: hasta 6 meses'],
    uso: ['Protocolo de 3–4 sesiones cada 15 días','Inyección intradérmica superficial con aguja 32G','Técnica de microbolos o retrotrazado lineal','Refrigerar entre 2–8 °C · usar antes de 24 h tras abrir'],
    metaDesc: 'Compra Ami Eyes 2ml en México. Skin booster periocular PDRN + Glutatión Quiver Medic para ojeras y contorno. Distribuidores en Monterrey.',
  },
  {
    slug: 'voltena-xpn',
    name: 'VOL:TENA XPN',
    category: 'Skin Booster · VOL:TENA',
    price: 1900,
    img: 'xpn-jeringa.jpg',
    imgs: ['xpn-jeringa.jpg', 'xpn-caja.jpg', 'xpn-caja-jeringa.jpg'],
    imgAlts: ['VOL:TENA XPN — jeringa prellenada', 'VOL:TENA XPN — caja', 'VOL:TENA XPN — presentación completa'],
    fabricante: 'VOL:TENA · Corea',
    composicion: 'Polinucleótido (PN) 20 mg/mL 2% + Ácido Hialurónico No Reticulado 5 mg/mL 0.5%',
    presentacion: 'Jeringa prellenada 2.5 mL · 1 por caja',
    formato: 'Solución inyectable — dermis superior/media',
    nota: 'XPN es un potenciador cutáneo premium impulsado por 2% de Polinucleótidos (PN) y 0.5% de Ácido Hialurónico No Reticulado — un dúo diseñado para revitalizar la piel cansada, envejecida o deshidratada desde el interior. Actúa a nivel celular promoviendo la regeneración natural mientras aporta hidratación profunda y duradera. Formulado con pH compatible con la piel y viscosidad optimizada para minimizar molestias durante la aplicación.',
    indicaciones: ['Textura irregular, líneas finas y pérdida de elasticidad','Opacidad, fatiga o falta de luminosidad','Deshidratación y sequedad cutánea','Reparación post-tratamiento y fotoenvejecimiento'],
    beneficios: ['PN 2%: estimulación de colágeno y regeneración celular profunda','Hidratación inmediata y duradera — mejora turgencia y suavidad','Acción antiinflamatoria y protección contra radicales libres','Presión osmótica equilibrada: mínimo estrés tisular · fórmula suave'],
    uso: ['Protocolo de 3 sesiones con intervalo de 2 semanas','Mesoterapia intradérmica con aguja 32G · técnica de pápula','Conservar entre 1–30 °C, proteger de la luz y no congelar','Resultados duraderos: 6–12 meses tras el ciclo completo'],
    metaDesc: 'Compra VOL:TENA XPN en México. Skin booster Polinucleótido PN 2% + Ácido Hialurónico 0.5%. Lanzamiento 10 de julio. Precio especial para clínicas. Distribuidor exclusivo.',
    upcoming: true,
    launchDate: '10 de julio, 2026',
  },
  {
    slug: 'gouri',
    name: 'Gouri PCL 1ml',
    category: 'Skin Booster · Bioestimulador PCL',
    price: 2300,
    img: 'gouri.jpg',
    fabricante: 'DEXLEVO Inc. · Corea',
    composicion: 'Polycaprolactona (PCL) solubilizada 21% (210 mg/mL) · Tecnología CESABP · Sin micropartículas sólidas · Sin HA ni BDDE',
    presentacion: 'Jeringa prellenada estéril · 1 × 1 mL',
    formato: 'Implante inyectable líquido biodegradable',
    nota: 'Gouri es el primer implante de PCL líquido del mundo, desarrollado por DEXLEVO mediante su tecnología propietaria CESABP (Collagenesis-Enabled Solubilized Active and Biodegradable Polymer). A diferencia de los bioestimuladores con micropartículas (Sculptra, Radiesse), su formulación completamente solubilizada permite distribución uniforme en la dermis sin riesgo de nódulos ni granulomas. Activa fibroblastos dérmicos para estimular la síntesis de colágeno tipo I (neocolagénesis), produciendo un lifting y recontouring facial progresivo y natural. Ensayos clínicos Fase 1 y 2 con más de 200 pacientes avalan su seguridad. Certificación CE 2764, GMP coreano e ISO 13485.',
    indicaciones: ['Laxitud cutánea leve a moderada','Pérdida de firmeza y elasticidad facial','Arrugas finas y pliegues superficiales','Textura irregular, opacidad y fotoenvejecimiento','Rejuvenecimiento facial global (mejillas, periocular, perioral, mandíbula)'],
    beneficios: ['Primer PCL líquido del mundo: sin partículas, mayor tolerabilidad','Neocolagénesis progresiva: resultados visibles desde la 1ª–2ª semana','Efecto lifting y recontouring natural sin efecto volumizador inmediato','Biodegradación gradual por hidrólisis en 6–24 meses: sin acumulación de residuos','Mínima inflamación y hematomas vs. técnicas multipunción tradicionales'],
    uso: ['Protocolo de 3 sesiones separadas 4 semanas c/u; mantenimiento cada 3–6 meses','Técnica de cánula (preferida): 2 puntos de entrada por hemicara, 6 vectores direccionales de 0.33 mL','Técnica alternativa: 5 puntos bioestimuladores por hemicara','Plano dérmico profundo o subdérmico; 1 mL (1 jeringa) por sesión facial completa','No requiere masaje post-inyección; dispersión espontánea por naturaleza líquida del PCL'],
    metaDesc: 'Compra Gouri PCL 1ml en México. Primer PCL líquido del mundo de DEXLEVO. Estimula colágeno sin micropartículas, efecto lifting hasta 12 meses. Distribuidor en Monterrey.',
  },
  {
    slug: 'priere',
    name: 'Priere Lip Filler',
    category: 'Ácido Hialurónico · Relleno Labial',
    price: 1300,
    img: 'priere.png',
    fabricante: 'FacePharm Korea Co., Ltd. · Corea',
    composicion: 'Hialuronato de Sodio 26 mg/mL · Tecnología HLD™ (High-Low molecular Density cross-linking) · Lidocaína 0.3% · BDDE minimizado',
    presentacion: '1 × 1 mL jeringa prellenada (versión Tulip: 1.1 mL)',
    formato: 'Gel inyectable monofásico de alta cohesión',
    nota: 'Priere es un relleno dérmico de FacePharm Korea caracterizado por su tecnología HLD™, que combina HA de alto y bajo peso molecular con reticulación BDDE minimizada para lograr un gel de alta cohesión y densidad superior. La racionalización del agente reticulante mejora el perfil de biocompatibilidad durante la degradación enzimática natural. Con 26 mg/mL de HA y lidocaína al 0.3% integrada, ofrece volumen labial preciso, alta cohesión que previene la migración y un confort notablemente mejorado durante el procedimiento. La versión Priere Tulip incluye una coloración rosada natural. Aprobado KFDA para exportación.',
    indicaciones: ['Aumento y definición de volumen labial','Perfilado y contorno del arco de Cupido','Corrección de líneas perilabiales finas','Rejuvenecimiento del labio por pérdida de volumen asociada al envejecimiento','Relleno de zonas mediofaciales con alta demanda de cohesión'],
    beneficios: ['Alta concentración HA 26 mg/mL: mayor durabilidad vs. fillers de baja concentración','Tecnología HLD™: reticulación de HA alto y bajo PM que aumenta cohesión sin exceso de BDDE','Lidocaína 0.3% integrada: reduce significativamente el dolor durante la inyección','Alta cohesión: mantiene la forma deseada y previene migración post-tratamiento','Durabilidad estimada: 6–12 meses según metabolismo individual · Aprobado KFDA'],
    uso: ['Inyección intradérmica o submucosa con aguja 27G–30G o cánula fina','Técnica retrógrada lineal o multipunción para labios','Cantidad: 0.5–1.1 mL según volumen y simetría deseada','Retoque a las 2–4 semanas si se requiere corrección adicional','Mantenimiento cada 6–12 meses; evitar calor y presión las primeras 48 h'],
    metaDesc: 'Compra Priere Lip Filler en México. HA 26mg/mL tecnología HLD™ de FacePharm Korea. Alta cohesión, lidocaína 0.3%, labios naturales y duraderos. Distribuidor en Monterrey.',
  },
  {
    slug: 'vita-d',
    name: 'Vita-D Inj',
    category: 'Mesoterapia · Vitamina D3',
    price: 2400,
    img: 'vita-d.jpg',
    fabricante: 'Grado Médico Farmacéutico',
    composicion: 'Colecalciferol (Vitamina D3) 200,000 UI/mL · Triglicéridos de cadena media · dl-alfa-tocoferol (antioxidante)',
    presentacion: '10 ampollas × 1 mL · 2,000,000 UI total por caja',
    formato: 'Solución oleosa inyectable intramuscular',
    nota: 'Vita-D Inj es una preparación inyectable de colecalciferol (Vitamina D3) a alta dosis (200,000 UI/mL) con aplicaciones tanto en corrección de déficit vitamínico como en medicina estética avanzada. Investigaciones recientes demuestran que la vitamina D3 activa receptores nucleares VDR en fibroblastos dérmicos, modulando la síntesis y organización del colágeno, inhibiendo la transición miofibroblástica (con efecto reductor sobre cicatrices hipertróficas y queloides) y reforzando la integridad de la barrera cutánea. La formulación oleosa con triglicéridos de cadena media garantiza alta estabilidad y absorción sostenida. Requiere supervisión médica con monitoreo de niveles séricos de vitamina D y calcio.',
    indicaciones: ['Corrección de déficit de vitamina D (hipovitaminosis D)','Soporte en neocolagénesis y función fibroblástica dérmica','Adyuvante en tratamiento de cicatrices hipertróficas y queloides','Mejora de barrera cutánea y respuesta inmune de la piel','Pacientes con absorción oral insuficiente que requieren corrección rápida del déficit'],
    beneficios: ['Alta biodisponibilidad IM: corrección rápida y sostenida de niveles séricos de vitamina D','Activa receptores VDR en fibroblastos: regula síntesis y reorganización del colágeno','Inhibe TGF-β: limita formación excesiva de matriz extracelular y cicatrices hipertróficas','Refuerza barrera epidérmica, equilibrio inmune cutáneo y migración de queratinocitos','Alta dosis (200,000 UI) permite intervalo prolongado entre aplicaciones (mensual)'],
    uso: ['Vía intramuscular exclusivamente (no IV ni SC)','Adultos: 200,000 UI por dosis · adultos mayores: 100,000 UI con mayor monitoreo','Frecuencia típica: 1 dosis mensual durante 3 meses según déficit diagnosticado','Monitorizar 25-OH vitamina D y calcemia durante el tratamiento','Prescripción y administración exclusiva por profesional médico · precaución en hipercalcemia'],
    metaDesc: 'Compra Vita-D Inj en México. Colecalciferol 200,000 UI inyectable IM para déficit de vitamina D, síntesis de colágeno y barrera cutánea. 10 ampollas × 1mL.',
  },
  {
    slug: 'liporase',
    name: 'Liporase · Hialuronidasa',
    category: 'Enzima · Seguridad Clínica',
    price: 1500,
    img: 'liporase.webp',
    fabricante: 'Daewon Pharm · Corea',
    composicion: 'Hialuronidasa 1,500 IU',
    presentacion: '10 viales por caja',
    formato: 'Polvo liofilizado — IM / SC',
    nota: 'Producto esencial de seguridad clínica. Su disponibilidad en consultorio es obligatoria para profesionales que aplican rellenos de ácido hialurónico.',
    indicaciones: ['Disolución de rellenos de ácido hialurónico','Corrección de migraciones y nódulos','Manejo de oclusión vascular (urgencia)','Edema persistente post-filler'],
    beneficios: ['Disuelve rellenos de AH en minutos','Esencial para manejo de complicaciones vasculares','Permite corregir sobrecorrecciones','Indispensable en cualquier consultorio de estética'],
    uso: ['Reconstituir con SS 0.9% justo antes del uso','Realizar siempre prueba de sensibilidad previa','Dosis según volumen y tipo de filler a disolver','Tener disponible en cada sesión de filler'],
    metaDesc: 'Compra Liporase hialuronidasa en México. 1500 IU por vial, 10 viales por caja. Esencial para seguridad clínica con rellenos dérmicos. Distribuidores en Monterrey.',
  },
  {
    slug: 'muchcaine',
    name: 'Muchcaine 500g',
    category: 'Anestésico Tópico',
    price: 750,
    img: 'muchcaine.webp',
    fabricante: 'Made in Korea',
    composicion: 'Lidocaína 10.56%',
    presentacion: 'Bote de 500 g',
    formato: 'Crema anestésica tópica de alto rendimiento',
    nota: 'Anestésico tópico esencial en todo consultorio estético. Su alta concentración de lidocaína garantiza confort durante procedimientos sensibles.',
    indicaciones: ['Pre-tratamiento con rellenos y toxinas','Microneedling y peelings','Depilación láser','Tatuaje y micropigmentación'],
    beneficios: ['Alta concentración de lidocaína (10.56%)','Confort del paciente durante el procedimiento','Alto rendimiento: bote de 500 g','Penetración rápida y efectiva'],
    uso: ['Aplicar capa generosa 30–45 min antes del procedimiento','Cubrir con plástico oclusivo para mejor efecto','Retirar y limpiar antes del procedimiento','No aplicar sobre mucosas o piel lesionada'],
    metaDesc: 'Compra Muchcaine 500g en México. Crema anestésica tópica con lidocaína 10.56% para procedimientos estéticos. Bote de 500g. Distribuidores en Monterrey.',
  },
];

// ── HTML TEMPLATE ─────────────────────────────────────────────────────────────

function priceFormat(n) {
  return n.toLocaleString('es-MX');
}

function listItems(arr) {
  return arr.map(i => `<li>${i}</li>`).join('\n              ');
}

function waLink(name) {
  return 'https://wa.me/528134188472?text=' +
    encodeURIComponent('Hola Fancy Water, me interesa cotizar: ' + name);
}

function faqItems(p) {
  return [
    {
      q: `¿Qué es ${p.name} y para qué se usa?`,
      a: `${p.nota} Sus principales indicaciones son: ${p.indicaciones.join('; ')}.`
    },
    {
      q: `¿Cuáles son los beneficios de ${p.name}?`,
      a: p.beneficios.join('. ') + '.'
    },
    {
      q: `¿Cómo se aplica ${p.name}?`,
      a: p.uso.join('. ') + '.'
    },
    {
      q: `¿Dónde comprar ${p.name} en México?`,
      a: `${p.name} está disponible en Fancy Water, distribuidores exclusivos en México y América. Enviamos desde Monterrey, Nuevo León, a toda la República Mexicana con stock permanente y cadena de frío garantizada. Puedes hacer tu pedido en línea en fancywater.mx o contactarnos por WhatsApp al +52 813 418 8472.`
    }
  ];
}

function faqJsonLd(p) {
  const items = faqItems(p);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  }, null, 2).replace(/`/g, "'");
}

function faqHtml(p) {
  return faqItems(p).map(item => `
    <div class="pfaq-item">
      <button class="pfaq-q" type="button">
        ${item.q}
        <span class="pfaq-icon"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="1" x2="5" y2="9"/><line x1="1" y1="5" x2="9" y2="5"/></svg></span>
      </button>
      <div class="pfaq-a"><div class="pfaq-a-inner"><p>${item.a}</p></div></div>
    </div>`).join('');
}

function getCatGroup(p) {
  const c = p.category.toLowerCase();
  if (c.includes('toxina')) return 'toxinas';
  if (c.includes('hialurónico') || c.includes('hialuronico') || c.includes('relleno corporal')) return 'fillers';
  if (c.includes('lipoenzima') || c.includes('lipolítico') || c.includes('lipolitico')) return 'lipoenzimas';
  if (c.includes('plla') || c.includes('bioestimulador')) return 'bioestimuladores';
  if (c.includes('skin') || c.includes('booster') || c.includes('periocular') || c.includes('pdrn')) return 'skinboosters';
  if (c.includes('voltena') || c.includes('vol:tena')) return 'voltena';
  return 'otros';
}

function getRelated(current) {
  const group = getCatGroup(current);
  const same = PRODUCTS.filter(p => p.slug !== current.slug && getCatGroup(p) === group);
  const others = PRODUCTS.filter(p => p.slug !== current.slug && getCatGroup(p) !== group);
  return [...same, ...others].slice(0, 3);
}

function relatedCard(r) {
  return `
    <a href="/${r.slug}" class="rel-card">
      <div class="rel-card-img">
        <img src="/assets/products/${r.img}" alt="${r.name}" loading="lazy" />
      </div>
      <div class="rel-card-body">
        <p class="rel-card-cat">${r.category.split('·')[0].trim()}</p>
        <h3 class="rel-card-name">${r.name}</h3>
        <p class="rel-card-price">$${priceFormat(r.price)} <span>MXN</span></p>
      </div>
    </a>`;
}

function generatePage(p) {
  const wa = waLink(p.name);
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.name} en México · Fancy Water</title>
  <meta name="description" content="${p.metaDesc}" />
  <link rel="canonical" href="https://www.fancywater.mx/${p.slug}" />
  <meta property="og:type"        content="product" />
  <meta property="og:url"         content="https://www.fancywater.mx/${p.slug}" />
  <meta property="og:title"       content="${p.name} · Fancy Water" />
  <meta property="og:description" content="${p.metaDesc}" />
  <meta property="og:image"       content="https://www.fancywater.mx/assets/products/${p.img}" />
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
  <!-- JSON-LD Product -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "${p.name}",
    "description": "${p.nota.replace(/"/g, '\\"')}",
    "image": "https://www.fancywater.mx/assets/products/${p.img}",
    "brand": { "@type": "Brand", "name": "${p.fabricante.split('·')[0].trim()}" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MXN",
      "price": "${p.price}",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Fancy Water" },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "MX",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "180",
          "currency": "MXN"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "MX"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      }
    }
  }
  </script>
  <script type="application/ld+json">
  ${faqJsonLd(p)}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.fancywater.mx/"},{"@type":"ListItem","position":2,"name":"Catálogo","item":"https://www.fancywater.mx/productos"},{"@type":"ListItem","position":3,"name":"${p.name}","item":"https://www.fancywater.mx/${p.slug}"}]}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --navy:#2D3147; --tinta:#1A1A2E; --grafito:#5A5A72; --ash:#9898A6;
      --paper:#F4F3EF; --snow:#FAFAF8; --bone:#EAE9E4; --linea:#E0DFD9;
      --ease-out:cubic-bezier(0.23,1,0.32,1);
    }
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:var(--snow);color:var(--tinta);-webkit-font-smoothing:antialiased}
    a{color:inherit;text-decoration:none}
    img{display:block;max-width:100%;height:auto}
    ul{list-style:none}

    /* NAV */
    .site-nav{
      position:sticky;top:0;z-index:100;
      display:flex;align-items:center;justify-content:space-between;
      padding:0 5vw;height:72px;
      background:rgba(250,250,248,.92);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--linea);
    }
    .nav-logo{display:flex;align-items:center;gap:12px}
    .nav-logo img{height:64px;width:auto;mix-blend-mode:multiply}
    .nav-brand{
      font-family:'Inter',sans-serif;font-size:22px;font-weight:800;
      letter-spacing:4px;text-transform:uppercase;color:var(--tinta);
      white-space:nowrap;line-height:1;
    }
    .nav-actions{display:flex;align-items:center;gap:12px}
    .btn-ghost-sm{
      font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;
      color:var(--grafito);padding:8px 16px;border:1px solid var(--linea);border-radius:50px;
      transition:border-color .2s,color .2s;
    }
    .btn-ghost-sm:hover{border-color:var(--navy);color:var(--navy)}
    .btn-wa-sm{
      font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;
      color:#fff;padding:9px 18px;border-radius:50px;background:#25D366;
      display:flex;align-items:center;gap:6px;
      transition:opacity .2s,transform .16s;
    }
    .btn-wa-sm:hover{opacity:.88}
    .btn-wa-sm:active{transform:scale(.96)}
    .nav-cart-link{
      position:relative;width:40px;height:40px;border-radius:50%;
      border:1px solid var(--linea);display:flex;align-items:center;justify-content:center;
      color:var(--tinta);transition:border-color .2s,color .2s;flex-shrink:0;
    }
    .nav-cart-link:hover{border-color:var(--navy);color:var(--navy)}
    .nav-cart-badge{
      position:absolute;top:-3px;right:-3px;
      width:16px;height:16px;border-radius:50%;
      background:var(--navy);color:#fff;
      font-size:9px;font-weight:700;
      display:flex;align-items:center;justify-content:center;
      display:none;
    }

    /* BREADCRUMB */
    .breadcrumb{
      padding:14px 5vw;font-size:11px;letter-spacing:.5px;color:var(--ash);
      border-bottom:1px solid var(--linea);background:var(--paper);
    }
    .breadcrumb a{color:var(--ash);transition:color .2s}
    .breadcrumb a:hover{color:var(--navy)}
    .breadcrumb span{color:var(--tinta);font-weight:500}

    /* PRODUCT HERO */
    .product-hero{
      display:grid;grid-template-columns:1fr 1fr;
      min-height:calc(100vh - 100px);
    }
    .product-img-col{
      background:var(--paper);
      display:flex;align-items:center;justify-content:center;
      padding:64px 48px;position:sticky;top:68px;
      height:calc(100vh - 68px);
    }
    .product-img-col img{
      max-height:520px;width:auto;max-width:100%;
      object-fit:contain;
    }
    .product-info-col{
      padding:64px 5vw 64px 48px;
      display:flex;flex-direction:column;justify-content:center;
    }
    .product-category{
      font-size:10px;letter-spacing:3px;text-transform:uppercase;
      color:var(--ash);margin-bottom:16px;
    }
    .product-name{
      font-family:'Playfair Display',serif;
      font-size:clamp(32px,4vw,52px);font-weight:700;
      line-height:1.1;color:var(--tinta);margin-bottom:12px;
    }
    .product-brand{
      font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
      color:var(--grafito);margin-bottom:32px;
    }
    .product-price-block{
      background:var(--paper);border-radius:16px;
      padding:24px 28px;margin-bottom:28px;
    }
    .price-label{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ash);margin-bottom:8px}
    .price-value{
      font-family:'Inter',sans-serif;font-size:40px;font-weight:800;
      color:var(--navy);line-height:1;margin-bottom:6px;
    }
    .price-value sup{font-size:20px;vertical-align:super;font-weight:700}
    .price-value span{font-size:16px;font-weight:400;color:var(--grafito);margin-left:4px}
    .price-note{font-size:10px;color:var(--ash);letter-spacing:.5px}
    .cta-stack{display:flex;flex-direction:column;gap:12px;margin-bottom:28px}
    .btn-wa-main{
      display:flex;align-items:center;justify-content:center;gap:10px;
      background:#25D366;color:#fff;
      padding:16px 28px;border-radius:50px;
      font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;
      transition:opacity .2s,transform .16s;
    }
    .btn-wa-main:hover{opacity:.88}
    .btn-wa-main:active{transform:scale(.97)}
    .btn-catalog{
      display:flex;align-items:center;justify-content:center;
      border:1px solid var(--linea);color:var(--navy);
      padding:15px 28px;border-radius:50px;
      font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase;
      transition:border-color .2s,background .2s;
    }
    .btn-catalog:hover{border-color:var(--navy);background:var(--paper)}
    .trust-pills{display:flex;flex-wrap:wrap;gap:8px}
    .trust-pill{
      font-size:10px;letter-spacing:.5px;color:var(--grafito);
      padding:5px 12px;border:1px solid var(--bone);border-radius:50px;
    }

    /* DETAILS SECTION */
    .product-details-section{background:var(--paper);padding:80px 5vw}
    .details-inner{max-width:1100px;margin:0 auto}
    .section-eyebrow{
      font-size:10px;letter-spacing:3px;text-transform:uppercase;
      color:var(--ash);margin-bottom:12px;
    }
    .section-heading{
      font-family:'Playfair Display',serif;
      font-size:clamp(26px,3vw,36px);font-weight:700;
      color:var(--tinta);margin-bottom:48px;line-height:1.2;
    }
    .section-heading em{font-style:italic;color:var(--navy)}
    .nota-clinica{
      background:#fff;border-radius:16px;padding:32px 36px;
      margin-bottom:48px;border-left:3px solid var(--navy);
    }
    .nota-clinica p{font-size:15px;line-height:1.75;color:var(--grafito)}
    .specs-grid{
      display:grid;grid-template-columns:repeat(2,1fr);gap:24px;
    }
    .spec-card{
      background:#fff;border-radius:16px;padding:28px 32px;
    }
    .spec-card h3{
      font-size:10px;letter-spacing:3px;text-transform:uppercase;
      color:var(--ash);margin-bottom:20px;
    }
    .spec-table{width:100%;border-collapse:collapse}
    .spec-table tr{border-bottom:1px solid var(--bone)}
    .spec-table tr:last-child{border-bottom:none}
    .spec-table dt,.spec-table th{
      font-size:10px;letter-spacing:1px;text-transform:uppercase;
      color:var(--ash);padding:10px 0 10px;width:36%;vertical-align:top;
    }
    .spec-table dd,.spec-table td{
      font-size:13px;color:var(--tinta);padding:10px 0;
      line-height:1.5;vertical-align:top;
    }
    .spec-list{display:flex;flex-direction:column;gap:10px}
    .spec-list li{
      font-size:13px;line-height:1.5;color:var(--tinta);
      padding-left:18px;position:relative;
    }
    .spec-list li::before{
      content:'';position:absolute;left:0;top:8px;
      width:5px;height:5px;border-radius:50%;background:var(--navy);
    }

    /* GALLERY */
    .product-gallery{display:flex;flex-direction:column;align-items:center;gap:12px;padding:40px 5vw 0;position:sticky;top:72px}
    .gallery-main{width:100%;max-width:460px;aspect-ratio:1;background:var(--paper);border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative}
    .gallery-main img{width:100%;height:100%;object-fit:contain;padding:32px;transition:opacity .2s}
    .gallery-thumbs{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
    .gallery-thumb{width:64px;height:64px;border-radius:8px;border:1.5px solid var(--linea);overflow:hidden;cursor:pointer;transition:border-color .2s;background:var(--paper)}
    .gallery-thumb:hover{border-color:var(--grafito)}
    .gallery-thumb.active{border-color:var(--navy)}
    .gallery-thumb img{width:100%;height:100%;object-fit:contain;padding:6px}
    .badge-launch{position:absolute;top:14px;left:14px;padding:5px 14px;border-radius:50px;font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;background:#C9A96E;color:#fff;z-index:2}

    /* LAUNCH NOTE */
    .launch-note{display:flex;align-items:center;gap:8px;background:rgba(201,169,110,.1);border:1px solid rgba(201,169,110,.3);border-radius:8px;padding:10px 14px;margin-top:8px;font-size:11px;letter-spacing:.5px;color:#A07840}
    .launch-note svg{flex-shrink:0}
    .btn-wa-launch{
      display:flex;align-items:center;justify-content:center;gap:10px;
      background:#25D366;color:#fff;
      padding:15px 28px;border-radius:50px;border:none;cursor:pointer;
      font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;
      transition:opacity .2s,transform .16s;width:100%;margin-bottom:10px;
    }
    .btn-wa-launch:hover{opacity:.88}
    .btn-wa-launch:active{transform:scale(.97)}

    /* QTY + CART */
    .qty-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}
    .qty-label{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ash);flex-shrink:0}
    .qty-ctrl{display:flex;align-items:center;gap:0;border:1px solid var(--linea);border-radius:50px;overflow:hidden}
    .qty-ctrl button{
      width:36px;height:36px;background:none;border:none;cursor:pointer;
      font-size:18px;color:var(--navy);line-height:1;
      transition:background .15s;
    }
    .qty-ctrl button:hover{background:var(--paper)}
    .qty-ctrl span{min-width:32px;text-align:center;font-size:14px;font-weight:600;color:var(--tinta)}
    .btn-add-cart{
      display:flex;align-items:center;justify-content:center;gap:10px;
      background:var(--navy);color:#fff;
      padding:15px 28px;border-radius:50px;border:none;cursor:pointer;
      font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;
      transition:opacity .2s,transform .16s;width:100%;margin-bottom:10px;
    }
    .btn-add-cart:hover{opacity:.85}
    .btn-add-cart:active{transform:scale(.97)}
    .btn-add-cart.added{background:#25D366}
    .cart-feedback{
      font-size:11px;letter-spacing:.5px;color:var(--grafito);
      text-align:center;display:none;
    }
    .cart-feedback a{color:var(--navy);text-decoration:underline;text-underline-offset:2px}

    /* BOTTOM CTA */
    .bottom-cta{
      background:var(--navy);padding:80px 5vw;text-align:center;
    }
    .bottom-cta p.eyebrow{
      font-size:10px;letter-spacing:3px;text-transform:uppercase;
      color:rgba(255,255,255,.45);margin-bottom:16px;
    }
    .bottom-cta h2{
      font-family:'Playfair Display',serif;
      font-size:clamp(28px,4vw,44px);font-weight:700;
      color:#fff;margin-bottom:12px;
    }
    .bottom-cta h2 em{font-style:italic;color:rgba(255,255,255,.55)}
    .bottom-cta .sub{
      font-size:14px;color:rgba(255,255,255,.55);margin-bottom:36px;
    }
    .btn-wa-cta{
      display:inline-flex;align-items:center;gap:10px;
      background:#25D366;color:#fff;
      padding:18px 36px;border-radius:50px;
      font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
      transition:opacity .2s,transform .16s;
    }
    .btn-wa-cta:hover{opacity:.88}
    .btn-wa-cta:active{transform:scale(.97)}

    /* FOOTER */
    .site-footer{
      background:var(--tinta);padding:32px 5vw;
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;
    }
    .footer-brand{
      font-family:'Inter',sans-serif;font-size:13px;font-weight:800;
      letter-spacing:4px;text-transform:uppercase;color:#fff;
    }
    .footer-links{display:flex;gap:24px}
    .footer-links a{font-size:11px;color:rgba(255,255,255,.4);letter-spacing:1px;transition:color .2s}
    .footer-links a:hover{color:rgba(255,255,255,.8)}
    .footer-legal{font-size:10px;color:rgba(255,255,255,.25);letter-spacing:.5px;width:100%;text-align:center;margin-top:8px}

    /* FAQ */
    .product-faq{background:var(--paper);padding:72px 5vw}
    .pfaq-eyebrow{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:12px}
    .pfaq-heading{font-family:'Playfair Display',serif;font-size:30px;line-height:1.2;margin-bottom:40px}
    .pfaq-heading em{font-style:italic}
    .pfaq-list{max-width:720px;margin:0 auto}
    .pfaq-item{border-bottom:1px solid var(--linea)}
    .pfaq-q{width:100%;background:none;border:none;text-align:left;padding:18px 0;font-size:14px;font-weight:600;color:var(--tinta);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:'Inter',sans-serif}
    .pfaq-icon{flex-shrink:0;transition:transform .3s var(--ease-out)}
    .pfaq-item.open .pfaq-icon{transform:rotate(45deg)}
    .pfaq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s var(--ease-out)}
    .pfaq-a-inner{overflow:hidden}
    .pfaq-a-inner p{padding-bottom:18px;font-size:13px;color:var(--grafito);line-height:1.75}
    .pfaq-item.open .pfaq-a{grid-template-rows:1fr}

    /* RELATED PRODUCTS */
    .related-section{background:var(--snow);padding:64px 5vw;border-top:1px solid var(--bone)}
    .related-eyebrow{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--ash);margin-bottom:10px}
    .related-heading{font-family:'Playfair Display',serif;font-size:28px;margin-bottom:32px;line-height:1.2}
    .related-heading em{font-style:italic}
    .related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    .rel-card{display:block;border:1px solid var(--linea);border-radius:10px;overflow:hidden;background:var(--paper);transition:transform .25s var(--ease-out),box-shadow .25s}
    @media(hover:hover){.rel-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(45,49,71,.08)}}
    .rel-card-img{aspect-ratio:1;background:var(--snow);overflow:clip;display:flex;align-items:center;justify-content:center}
    .rel-card-img img{width:100%;height:100%;object-fit:contain;padding:16px}
    .rel-card-body{padding:14px 16px}
    .rel-card-cat{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ash);margin-bottom:4px}
    .rel-card-name{font-family:'Playfair Display',serif;font-size:15px;line-height:1.3;margin-bottom:8px}
    .rel-card-price{font-size:13px;font-weight:700;color:var(--navy)}
    .rel-card-price span{font-weight:400;color:var(--ash);font-size:10px}
    @media(max-width:640px){.related-grid{grid-template-columns:repeat(2,1fr)}}

    /* MOBILE */
    @media(max-width:900px){
      .product-hero{grid-template-columns:1fr}
      .product-img-col{position:relative;height:auto;padding:48px 5vw 32px;top:0}
      .product-img-col img{max-height:340px}
      .product-info-col{padding:32px 5vw 64px}
      .specs-grid{grid-template-columns:1fr}
    }
    @media(max-width:640px){
      .product-name{font-size:32px}
      .price-value{font-size:32px}
      .site-footer{flex-direction:column;align-items:flex-start}
      .btn-wa-sm span{display:none}
      .nav-brand{display:none}
      .btn-ghost-sm{display:none}
      .site-nav{padding:0 16px}
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="site-nav">
  <a href="/" class="nav-logo">
    <img src="/assets/logo-fw.svg" alt="Fancy Water" height="64" />
    <span class="nav-brand">Fancy Water</span>
  </a>
  <div class="nav-actions">
    <a href="/?cart=1" class="nav-cart-link" id="navCartLink" aria-label="Ver carrito">
      <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <span class="nav-cart-badge" id="navCartBadge"></span>
    </a>
    <a href="/guias" class="btn-ghost-sm">Guías</a>
    <a href="/#productos" class="btn-ghost-sm">Ver catálogo</a>
    <a href="${wa}" class="btn-wa-sm" onclick="gtagWhatsApp(this.href); return false;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
      <span>Cotizar</span>
    </a>
  </div>
</nav>

<!-- BREADCRUMB -->
<div class="breadcrumb">
  <a href="/">Inicio</a> &rsaquo; <a href="/#productos">Catálogo</a> &rsaquo; <span>${p.name}</span>
</div>

<!-- PRODUCT HERO -->
<section class="product-hero">
  <div class="product-img-col${p.imgs ? ' product-gallery' : ''}">
    ${p.imgs ? `
    <div class="gallery-main">
      <img id="galleryMain" src="/assets/products/${p.imgs[0]}" alt="${p.imgAlts ? p.imgAlts[0] : p.name}" fetchpriority="high" />
      ${p.upcoming ? `<span class="badge-launch">Próximamente · 10 Jul</span>` : ''}
    </div>
    <div class="gallery-thumbs">
      ${p.imgs.map((img, i) => `<div class="gallery-thumb${i === 0 ? ' active' : ''}" onclick="setGallery(this,'${img}')"><img src="/assets/products/${img}" alt="${p.imgAlts ? p.imgAlts[i] : p.name + ' ' + (i+1)}" loading="lazy" /></div>`).join('')}
    </div>` : `
    <img src="/assets/products/${p.img}" alt="${p.name} — ${p.fabricante}" fetchpriority="high" />`}
  </div>
  <div class="product-info-col">
    <p class="product-category">${p.category}</p>
    <h1 class="product-name">${p.name}</h1>
    <p class="product-brand">${p.fabricante}</p>

    <div class="product-price-block">
      <p class="price-label">${p.upcoming ? 'Precio especial de lanzamiento' : 'Precio minorista'}</p>
      <div class="price-value"><sup>$</sup>${priceFormat(p.price)}<span>MXN</span></div>
      ${p.upcoming ? `<div class="launch-note"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Precio especial disponible hasta el ${p.launchDate}. Reserva tu pedido ahora por WhatsApp.</div>` : `<p class="price-note">IVA no incluido · Precio sujeto a cambio sin previo aviso</p>`}
    </div>

    <div class="cta-stack">
      ${p.upcoming ? `
      <a href="${wa}" class="btn-wa-launch" onclick="gtagWhatsApp(this.href); return false;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
        Reservar precio de lanzamiento
      </a>` : `
      <div class="qty-row">
        <span class="qty-label">Cantidad</span>
        <div class="qty-ctrl">
          <button type="button" onclick="changeQty(-1)" aria-label="Reducir">−</button>
          <span id="qtyVal">1</span>
          <button type="button" onclick="changeQty(1)" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button class="btn-add-cart" id="addCartBtn" type="button" onclick="addToCart()">
        <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        Agregar al carrito
      </button>
      <p class="cart-feedback" id="cartFeedback">
        ✓ Agregado — <a href="/?cart=1">Ver carrito en la tienda →</a>
      </p>`}
      <a href="${wa}" class="btn-wa-main" onclick="gtagWhatsApp(this.href); return false;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
        Cotizar por WhatsApp
      </a>
      <a href="/#productos" class="btn-catalog">Ver catálogo completo</a>
    </div>

    <div class="trust-pills">
      <span class="trust-pill">✓ 100% Original</span>
      <span class="trust-pill">✓ Cadena de frío garantizada</span>
      <span class="trust-pill">✓ Envío desde Monterrey</span>
      <span class="trust-pill">✓ Entrega 1–3 días hábiles</span>
    </div>
  </div>
</section>

<!-- TECHNICAL DETAILS -->
<section class="product-details-section">
  <div class="details-inner">
    <p class="section-eyebrow">Información clínica</p>
    <h2 class="section-heading">Ficha técnica<br><em>${p.name}</em></h2>

    <div class="nota-clinica">
      <p>${p.nota}</p>
    </div>

    <div class="specs-grid">
      <div class="spec-card">
        <h3>Especificaciones</h3>
        <table class="spec-table">
          <tr><th>Composición</th><td>${p.composicion}</td></tr>
          <tr><th>Presentación</th><td>${p.presentacion}</td></tr>
          <tr><th>Formato</th><td>${p.formato}</td></tr>
          <tr><th>Fabricante</th><td>${p.fabricante}</td></tr>
        </table>
      </div>

      <div class="spec-card">
        <h3>Indicaciones</h3>
        <ul class="spec-list">
              ${listItems(p.indicaciones)}
        </ul>
      </div>

      <div class="spec-card">
        <h3>Beneficios</h3>
        <ul class="spec-list">
              ${listItems(p.beneficios)}
        </ul>
      </div>

      <div class="spec-card">
        <h3>Instrucciones de uso</h3>
        <ul class="spec-list">
              ${listItems(p.uso)}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="product-faq">
  <div class="pfaq-list">
    <p class="pfaq-eyebrow">Preguntas frecuentes</p>
    <h2 class="pfaq-heading">Todo sobre<br><em>${p.name}</em></h2>
    ${faqHtml(p)}
  </div>
</section>

<!-- RELATED PRODUCTS -->
<section class="related-section">
  <div>
    <p class="related-eyebrow">Productos relacionados</p>
    <h2 class="related-heading">También te puede <em>interesar</em></h2>
    <div class="related-grid">
      ${getRelated(p).map(r => relatedCard(r)).join('')}
    </div>
  </div>
</section>

<!-- BOTTOM CTA -->
<section class="bottom-cta">
  <p class="eyebrow">Fancy Water · Distribuidores Oficiales</p>
  <h2>¿Te interesa <em>${p.name}</em>?</h2>
  <p class="sub">Cotiza en minutos. Precios especiales para mayoreo.</p>
  <a href="${wa}" class="btn-wa-cta" onclick="gtagWhatsApp(this.href); return false;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>
    Cotizar ahora por WhatsApp
  </a>
</section>

<!-- FOOTER -->
<footer class="site-footer">
  <span class="footer-brand">Fancy Water</span>
  <nav class="footer-links">
    <a href="/">Inicio</a>
    <a href="/#productos">Catálogo</a>
    <a href="/#nosotros">Nosotros</a>
    <a href="/#contacto">Contacto</a>
  </nav>
  <p class="footer-legal">© ${new Date().getFullYear()} Fancy Water · Distribuidores Exclusivos VOL:TENA en América · Monterrey, N.L. México</p>
</footer>

<script>
// Show cart count from localStorage
(function(){
  try{
    var c=JSON.parse(localStorage.getItem('fw_cart_v1')||'[]');
    var n=c.reduce(function(s,i){return s+(i.qty||0);},0);
    if(n>0){var b=document.getElementById('navCartBadge');b.textContent=n;b.style.display='flex';}
  }catch(e){}
})();
</script>
<script>
var _qty = 1;
function changeQty(d) {
  _qty = Math.max(1, _qty + d);
  document.getElementById('qtyVal').textContent = _qty;
}
function addToCart() {
  var CART_KEY = 'fw_cart_v1';
  try {
    var cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    var existing = cart.find(function(i) { return i.name === '${p.name.replace(/'/g, "\\'")}'; });
    if (existing) { existing.qty += _qty; } else { cart.push({ name: '${p.name.replace(/'/g, "\\'")}', price: ${p.price}, qty: _qty }); }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    var btn = document.getElementById('addCartBtn');
    btn.classList.add('added');
    btn.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Agregado al carrito';
    document.getElementById('cartFeedback').style.display = 'block';
  } catch(e) { window.location.href = '/?cart=1'; }
}
</script>
<script>
document.querySelectorAll('.pfaq-q').forEach(function(btn){
  btn.addEventListener('click',function(){
    this.closest('.pfaq-item').classList.toggle('open');
  });
});
</script>
<script>
function setGallery(thumb, img) {
  var main = document.getElementById('galleryMain');
  if (!main) return;
  main.style.opacity = '0';
  setTimeout(function(){ main.src = '/assets/products/' + img; main.style.opacity = '1'; }, 150);
  document.querySelectorAll('.gallery-thumb').forEach(function(t){ t.classList.remove('active'); });
  thumb.classList.add('active');
}
</script>
</body>
</html>`;
}

// ── GENERATE FILES ────────────────────────────────────────────────────────────

const BASE = path.join(__dirname);
let count = 0;

PRODUCTS.forEach(p => {
  const dir = path.join(BASE, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generatePage(p), 'utf8');
  console.log(`✓  /${p.slug}/`);
  count++;
});

console.log(`\n${count} páginas generadas.`);
