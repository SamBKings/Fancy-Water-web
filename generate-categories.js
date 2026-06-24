#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

// ── ALL PRODUCTS (subset of fields needed for category cards) ─────────────────

const ALL_PRODUCTS = [
  { slug:'nabota-100u',           name:'Nabota 100U',              price:1500,  img:'nabota.png',            category:'toxinas',         cat:'Toxina Botulínica',            desc:'Tecnología HiPure™ de Daewoong. Gold standard en precisión y consistencia clínica.' },
  { slug:'nabota-200u',           name:'Nabota 200U',              price:1900,  img:'nabota200-solo.jpg',     category:'toxinas',         cat:'Toxina Botulínica',            desc:'Presentación de 200U ideal para clínicas de alto volumen.' },
  { slug:'innotox-100u',          name:'Innotox 100U',             price:1350,  img:'innotox-new.webp',       category:'toxinas',         cat:'Toxina Botulínica · Líquida',  desc:'Primera toxina botulínica líquida del mundo. Sin reconstitución.' },
  { slug:'liztox-100u',           name:'Liztox 100U',              price:900,   img:'listox.png',             category:'toxinas',         cat:'Toxina Botulínica',            desc:'Aprobada KFDA. Excelente relación costo-eficacia para alto volumen.' },
  { slug:'juvederm-voluma',       name:'Juvéderm Voluma',          price:4200,  img:'juvederm.webp',          category:'acido-hialuronico', cat:'Ácido Hialurónico',          desc:'Tecnología Vycross® de Allergan. Duración hasta 24 meses.' },
  { slug:'revolax',               name:'Revolax 1.1ml',            price:1020,  img:'revolax.webp',           category:'acido-hialuronico', cat:'Ácido Hialurónico',          desc:'Fine, Deep y Sub-Q. Alta cohesividad y bajo riesgo de migración.' },
  { slug:'dermalax-implant',      name:'Dermalax Implant Plus',    price:1600,  img:'dermalax-implant.webp',  category:'acido-hialuronico', cat:'AH · Alta Viscosidad',       desc:'2.2 mL para volumetría estructural profunda.' },
  { slug:'elasty',                name:'Elasty 1.1ml',             price:1100,  img:'elasty.jpg',             category:'acido-hialuronico', cat:'Ácido Hialurónico',          desc:'Monofásico en 3 densidades. Distribución homogénea natural.' },
  { slug:'lipo-lab-ppc',          name:'Lipo Lab PPC',             price:1400,  img:'lipolab.jpg',            category:'lipoenzimas',     cat:'Lipoenzima Inyectable',        desc:'Fosfatidilcolina 1,000 mg certificada KFDA. Lipólisis no quirúrgica.' },
  { slug:'voltena-n1-body-serum', name:'VOL:TENA N°1', price:2300,  img:'voltena1-solo.jpg',      category:'lipoenzimas',     cat:'Lipoenzima · VOL:TENA',        desc:'Lipolítico que rompe la membrana del adipocito. 6 viales × 10 mL.' },
  { slug:'pllagen-plla',          name:'Pllagen PLLA',             price:2200,  img:'pllagen.jpg',            category:'bioestimuladores', cat:'Bioestimulador · PLLA',       desc:'PLLA 45 mg + AH 13 mg. Estimula colágeno con resultados hasta 24 meses.' },
  { slug:'estella-plla',          name:'Estella PLLA 200',         price:3500,  img:'estella.jpg',            category:'bioestimuladores', cat:'Bioestimulador · PLLA',       desc:'200 mg PLLA por vial. Microesferas 20–50 μm, mínima formación de nódulos.' },
  { slug:'hyaron-prefilled',      name:'Hyaron Prefilled',         price:1950,  img:'hyaron.jpg',             category:'skin-boosters',   cat:'Skin Booster',                 desc:'AH 25 mg / 2.5 mL. 10 jeringas prellenadas. Hidratación profunda.' },
  { slug:'eyebella',              name:'Eyebella 2ml',             price:700,   img:'eyebella.webp',          category:'skin-boosters',   cat:'Skin Booster · Periocular',    desc:'Polynucleotide PN para ojeras y líneas finas perioculares.' },
  { slug:'ami-eyes',              name:'Ami Eyes 2ml',             price:1300,  img:'ami-eyes.webp',          category:'skin-boosters',   cat:'Skin Booster · PDRN',          desc:'PN/PDRN 1% + Glutatión. Regeneración periocular profunda.' },
  { slug:'voltena-n2-body-filler',name:'VOL:TENA N°2 Body Filler',price:2800,  img:'voltena2-solo.jpg',      category:'voltena',         cat:'Relleno Corporal · VOL:TENA',  desc:'60 cc. Body filler para aumento glúteo y modelado corporal.' },
  { slug:'voltena-n3-cool-gel',   name:'VOL:TENA N°3 Cool Gel',   price:600,   img:'voltena3-solo.png',      category:'voltena',         cat:'Gel Reafirmante · VOL:TENA',   desc:'300 mL gel reductor tópico. Ideal para retail en consultorio.' },
  { slug:'lacto-gel',             name:'Lacto Gel VOL:TENA',       price:520,   img:'lacto.jpg',              category:'voltena',         cat:'Cuidado Íntimo · VOL:TENA',    desc:'1.8 g × 10 aplicadores. pH íntimo equilibrado.' },
  { slug:'liporase',              name:'Liporase · Hialuronidasa', price:1500,  img:'liporase.webp',          category:'otros',           cat:'Seguridad Clínica',            desc:'Hialuronidasa 1,500 IU × 10 viales. Disuelve rellenos de AH.' },
  { slug:'muchcaine',             name:'Muchcaine 500g',           price:750,   img:'muchcaine.webp',         category:'otros',           cat:'Anestésico Tópico',            desc:'Lidocaína 10.56%. Bote 500 g de alto rendimiento.' },
];

// VOL:TENA category also includes pllagen-plla and voltena-n1
const VOLTENA_EXTRA = ['pllagen-plla', 'voltena-n1-body-serum'];

// ── CATEGORY DEFINITIONS ──────────────────────────────────────────────────────

const CATEGORIES = [
  {
    slug: 'productos',
    name: 'Todos los Productos',
    shortName: 'Todos',
    desc: 'Catálogo completo de insumos para medicina estética. Toxinas botulínicas, rellenos dérmicos, lipoenzimas, bioestimuladores, skin boosters y la línea exclusiva VOL:TENA.',
    heroImg: 'nabota.png',
    metaDesc: 'Catálogo completo Fancy Water — toxinas botulínicas, ácido hialurónico, lipoenzimas, bioestimuladores, skin boosters y VOL:TENA. Distribuidores en Monterrey.',
    intro: 'Fancy Water distribuye directamente con fabricantes y distribuidores autorizados en Corea, Estados Unidos y Europa. Todo el catálogo llega con número de lote verificable, cadena de frío garantizada y stock permanente en Monterrey para envío express a toda la república.',
    filter: () => true,
  },
  {
    slug: 'toxinas',
    name: 'Toxinas Botulínicas',
    shortName: 'Toxinas',
    desc: 'Toxinas botulínicas de última generación para neuromodulación estética. Nabota, Innotox, Liztox y más.',
    heroImg: 'nabota.png',
    metaDesc: 'Compra toxinas botulínicas originales en México. Nabota, Innotox, Liztox — distribuidores oficiales en Monterrey. Envío inmediato a toda la república.',
    intro: 'Las toxinas coreanas como Nabota (Daewoong), Innotox (Medytox) y Liztox (Huons) usan el mismo principio activo que Botox —onabotulinumtoxinA purificada— con tecnologías de purificación modernas y aprobaciones regulatorias en múltiples mercados. Nabota es comercializada como Jeuveau® en EE.UU. e Innotox fue la primera toxina botulínica líquida del mundo.',
    filter: p => p.category === 'toxinas',
  },
  {
    slug: 'acido-hialuronico',
    name: 'Ácido Hialurónico',
    shortName: 'AH & Fillers',
    desc: 'Rellenos dérmicos de alta cohesividad para volumetría facial y corrección de arrugas profundas.',
    heroImg: 'juvederm.webp',
    metaDesc: 'Compra rellenos de ácido hialurónico en México. Juvéderm, Revolax, Dermalax, Elasty — distribuidores en Monterrey. Precio especial para clínicas.',
    intro: 'La diferencia clave entre fillers dérmicos está en el grado de reticulación y cohesividad del ácido hialurónico: fillers de baja viscosidad para arrugas superficiales y labios, media viscosidad para surcos y rejuvenecimiento, y alta cohesividad (como Juvéderm Voluma con tecnología Vycross®) para volumetría estructural de pómulos, mentón y mandíbula.',
    filter: p => p.category === 'acido-hialuronico',
  },
  {
    slug: 'lipoenzimas',
    name: 'Lipoenzimas',
    shortName: 'Lipoenzimas',
    desc: 'Lipolíticos inyectables para reducción de grasa localizada y modelado corporal sin cirugía.',
    heroImg: 'lipolab.jpg',
    metaDesc: 'Compra lipoenzimas inyectables en México. Lipo Lab PPC, VOL:TENA N°1 — distribuidores en Monterrey. Precio mayoreo disponible.',
    intro: 'La fosfatidilcolina (PPC) actúa como un detergente biológico que desestabiliza la membrana del adipocito y facilita su eliminación por vía linfática. Lipo Lab PPC tiene certificación KFDA y evidencia clínica robusta; VOL:TENA N°1 es el lipolítico de la línea coreana exclusiva de la que somos distribuidores en América. Protocolo estándar: 4–6 sesiones cada 21 días.',
    filter: p => p.category === 'lipoenzimas',
  },
  {
    slug: 'bioestimuladores',
    name: 'Bioestimuladores',
    shortName: 'PLLA',
    desc: 'Ácido poliláctico (PLLA) para estimulación de colágeno propio y rejuvenecimiento profundo de larga duración.',
    heroImg: 'pllagen.jpg',
    metaDesc: 'Compra bioestimuladores PLLA en México. Pllagen y Estella PLLA — distribuidores en Monterrey. Resultados hasta 24 meses.',
    intro: 'A diferencia de los rellenos convencionales, el PLLA no reemplaza el volumen perdido — estimula la producción propia de colágeno. Las microesferas de PLLA actúan como andamio biológico: generan inflamación controlada que activa fibroblastos, producen colágeno nuevo y se bioabsorben en 9–18 meses. El resultado mejora gradualmente durante meses y puede durar hasta 24 meses.',
    filter: p => p.category === 'bioestimuladores',
  },
  {
    slug: 'skin-boosters',
    name: 'Skin Boosters',
    shortName: 'Skin Boosters',
    desc: 'Hidratación profunda y regeneración cutánea con ácido hialurónico y polinucleótidos inyectables.',
    heroImg: 'hyaron.jpg',
    metaDesc: 'Compra skin boosters en México. Hyaron, Eyebella, Ami Eyes — polinucleótidos y AH para brillo y regeneración. Distribuidores en Monterrey.',
    intro: 'Los skin boosters inyectables usan AH no reticulado (Hyaron) o polinucleótidos derivados de ADN de salmón (Eyebella, Ami Eyes) para hidratación dérmica profunda y regeneración celular. A diferencia de los fillers, no aportan volumen sino calidad de piel: mejora de textura, luminosidad y elasticidad desde la 1ª sesión, con efectos acumulativos en el protocolo completo.',
    filter: p => p.category === 'skin-boosters',
  },
  {
    slug: 'voltena',
    name: 'Línea VOL:TENA',
    shortName: 'VOL:TENA',
    desc: 'Distribuidores exclusivos de la línea completa VOL:TENA en América. Lipolíticos, fillers corporales, bioestimulador PLLA, geles y cuidado íntimo.',
    heroImg: 'voltena1-solo.jpg',
    metaDesc: 'Compra la línea VOL:TENA en México. Distribuidores exclusivos en América — N°1 Lipolítico, N°2 Body Filler, N°3 Cool Gel, Lacto Gel y Pllagen PLLA. Monterrey.',
    intro: 'VOL:TENA es una línea coreana desarrollada para medicina estética corporal integral. Fancy Water es distribuidor exclusivo para todo el continente americano. La línea abarca desde el lipolítico inyectable N°1 y el body filler de ácido hialurónico N°2, hasta el bioestimulador PLLA (Pllagen), el gel reafirmante tópico N°3 y el cuidado íntimo Lacto Gel.',
    filter: p => p.category === 'voltena' || VOLTENA_EXTRA.includes(p.slug),
  },
  {
    slug: 'otros',
    name: 'Otros Productos',
    shortName: 'Otros',
    desc: 'Anestésicos tópicos, enzimas de seguridad y complementos esenciales para el consultorio de medicina estética.',
    heroImg: 'muchcaine.webp',
    metaDesc: 'Compra Liporase hialuronidasa y Muchcaine anestésico en México. Distribuidores en Monterrey. Precio especial para clínicas.',
    intro: 'Liporase (hialuronidasa 1,500 IU) es el antídoto para rellenos de ácido hialurónico y debe estar disponible en CADA sesión de filler — su ausencia en consultorio es un riesgo clínico inaceptable. Muchcaine (lidocaína 10.56%) garantiza el confort del paciente durante procedimientos sensibles con penetración rápida y alto rendimiento por bote.',
    filter: p => p.category === 'otros',
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

const WA_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.52 13.83c-.23.64-1.33 1.22-1.83 1.3-.46.07-1.05.1-1.69-.1a15.6 15.6 0 01-1.53-.57C10.1 15.44 8.5 13.23 8.37 13.06c-.13-.17-1.06-1.4-1.06-2.68s.67-1.9.91-2.16c.24-.26.52-.32.69-.32h.5c.16 0 .38-.06.6.45.22.52.74 1.8.81 1.93.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.45c-.13.14-.26.28-.11.55.15.27.67 1.1 1.43 1.78.98.87 1.81 1.14 2.06 1.27.25.13.4.11.54-.07.15-.18.62-.72.79-.97.17-.25.33-.21.56-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.17 1.24z"/></svg>`;

function fmt(n) { return n.toLocaleString('es-MX'); }

function productCard(p) {
  const wa = 'https://wa.me/528134188472?text=' + encodeURIComponent('Hola Fancy Water, me interesa cotizar: ' + p.name);
  return `
    <div class="cat-product-card">
      <a href="/${p.slug}" class="cat-card-img-link">
        <img src="/assets/products/${p.img}" alt="${p.name}" loading="lazy" />
      </a>
      <div class="cat-card-body">
        <p class="cat-card-cat">${p.cat}</p>
        <h3 class="cat-card-name"><a href="/${p.slug}">${p.name}</a></h3>
        <p class="cat-card-desc">${p.desc}</p>
        <div class="cat-card-footer">
          <div class="cat-card-price"><sup>$</sup>${fmt(p.price)} <span>MXN</span></div>
          <div class="cat-card-actions">
            <a href="/${p.slug}" class="cat-btn-ver">Ver producto</a>
            <a href="${wa}" class="cat-btn-wa" aria-label="Cotizar ${p.name} por WhatsApp"
               onclick="gtagWhatsApp(this.href);return false;">${WA_SVG}</a>
          </div>
        </div>
      </div>
    </div>`;
}

function sidebarCategoryItem(cat, activeCat) {
  const isActive = cat.slug === activeCat.slug;
  return `
      <a href="/${cat.slug}" class="sidebar-cat-item${isActive ? ' active' : ''}">
        <div class="sidebar-cat-img">
          <img src="/assets/products/${cat.heroImg}" alt="${cat.name}" loading="lazy" />
        </div>
        <span>${cat.shortName}</span>
      </a>`;
}

function generateCategoryPage(cat) {
  const products = ALL_PRODUCTS.filter(cat.filter);
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${cat.name} en México · Fancy Water</title>
  <meta name="description" content="${cat.metaDesc}" />
  <link rel="canonical" href="https://www.fancywater.mx/${cat.slug}" />
  <meta property="og:title"       content="${cat.name} · Fancy Water" />
  <meta property="og:description" content="${cat.metaDesc}" />
  <meta property="og:image"       content="https://www.fancywater.mx/assets/products/${cat.heroImg}" />
  <meta property="og:url"         content="https://www.fancywater.mx/${cat.slug}" />
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
  <!-- JSON-LD -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"CollectionPage","name":"${cat.name}","description":"${cat.metaDesc}","url":"https://www.fancywater.mx/${cat.slug}","provider":{"@type":"Organization","name":"Fancy Water","url":"https://www.fancywater.mx"}}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.fancywater.mx/"},{"@type":"ListItem","position":2,"name":"Catálogo","item":"https://www.fancywater.mx/productos"},{"@type":"ListItem","position":3,"name":"${cat.name}","item":"https://www.fancywater.mx/${cat.slug}"}]}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --navy:#2D3147;--tinta:#1A1A2E;--grafito:#5A5A72;--ash:#9898A6;
      --paper:#F4F3EF;--snow:#FAFAF8;--bone:#EAE9E4;--linea:#E0DFD9;
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
      display:flex;align-items:center;gap:6px;transition:opacity .2s;
    }
    .btn-wa-sm:hover{opacity:.88}
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
      align-items:center;justify-content:center;
      display:none;
    }

    /* BREADCRUMB */
    .breadcrumb{
      padding:14px 5vw;font-size:11px;letter-spacing:.5px;color:var(--ash);
      border-bottom:1px solid var(--linea);background:var(--paper);
    }
    .breadcrumb a{color:var(--ash);transition:color .2s}.breadcrumb a:hover{color:var(--navy)}
    .breadcrumb span{color:var(--tinta);font-weight:500}

    /* PAGE LAYOUT */
    .page-body{display:grid;grid-template-columns:240px 1fr;gap:0;min-height:calc(100vh - 116px)}

    /* SIDEBAR */
    .sidebar{
      background:var(--paper);border-right:1px solid var(--linea);
      padding:32px 20px;position:sticky;top:72px;
      height:calc(100vh - 72px);overflow-y:auto;
    }
    .sidebar-heading{
      font-size:9px;letter-spacing:3px;text-transform:uppercase;
      color:var(--ash);margin-bottom:16px;padding:0 4px;
    }
    .sidebar-cat-item{
      display:flex;align-items:center;gap:12px;
      padding:10px 12px;border-radius:12px;
      transition:background .15s,color .15s;margin-bottom:4px;
    }
    .sidebar-cat-item:hover{background:#fff;color:var(--navy)}
    .sidebar-cat-item.active{background:var(--navy);color:#fff}
    .sidebar-cat-item.active span{color:#fff}
    .sidebar-cat-img{
      width:40px;height:40px;border-radius:8px;
      background:#fff;overflow:hidden;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
    }
    .sidebar-cat-item.active .sidebar-cat-img{background:rgba(255,255,255,.15)}
    .sidebar-cat-img img{width:36px;height:36px;object-fit:contain}
    .sidebar-cat-item span{
      font-size:11px;font-weight:600;letter-spacing:.3px;color:var(--tinta);
    }
    .sidebar-cat-item.active span{color:#fff}

    /* MAIN CONTENT */
    .cat-main{padding:40px 40px 80px}
    .cat-header{margin-bottom:40px}
    .cat-eyebrow{
      font-size:10px;letter-spacing:3px;text-transform:uppercase;
      color:var(--ash);margin-bottom:10px;
    }
    .cat-title{
      font-family:'Playfair Display',serif;
      font-size:clamp(28px,3.5vw,44px);font-weight:700;
      color:var(--tinta);margin-bottom:12px;line-height:1.15;
    }
    .cat-title em{font-style:italic;color:var(--navy)}
    .cat-desc{font-size:14px;color:var(--grafito);line-height:1.7;max-width:600px}
    .cat-intro{font-size:13px;color:var(--grafito);line-height:1.75;margin-top:10px;max-width:640px;padding:14px 18px;background:var(--bone);border-radius:8px;border-left:3px solid var(--navy)}
    .cat-count{
      font-size:11px;letter-spacing:1px;color:var(--ash);
      margin-top:8px;
    }

    /* PRODUCT GRID */
    .cat-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
      gap:24px;
    }
    .cat-product-card{
      background:#fff;border-radius:16px;overflow:hidden;
      border:1px solid var(--linea);
      transition:box-shadow .25s var(--ease-out),transform .25s var(--ease-out);
    }
    .cat-product-card:hover{
      box-shadow:0 12px 40px rgba(0,0,0,.08);
      transform:translateY(-3px);
    }
    .cat-card-img-link{
      display:block;background:var(--paper);
      padding:28px;aspect-ratio:1;overflow:hidden;
    }
    .cat-card-img-link img{
      width:100%;height:100%;object-fit:contain;
      transition:transform .4s var(--ease-out);
    }
    .cat-product-card:hover .cat-card-img-link img{transform:scale(1.05)}
    .cat-card-body{padding:20px 20px 16px}
    .cat-card-cat{
      font-size:9px;letter-spacing:2px;text-transform:uppercase;
      color:var(--ash);margin-bottom:6px;
    }
    .cat-card-name{font-size:15px;font-weight:600;margin-bottom:8px;line-height:1.3}
    .cat-card-name a:hover{color:var(--navy)}
    .cat-card-desc{font-size:12px;color:var(--grafito);line-height:1.55;margin-bottom:16px}
    .cat-card-footer{
      display:flex;align-items:center;justify-content:space-between;
      padding-top:14px;border-top:1px solid var(--bone);
    }
    .cat-card-price{
      font-size:20px;font-weight:800;color:var(--navy);line-height:1;
    }
    .cat-card-price sup{font-size:11px;vertical-align:super;font-weight:700}
    .cat-card-price span{font-size:10px;font-weight:400;color:var(--ash);margin-left:2px}
    .cat-card-actions{display:flex;align-items:center;gap:8px}
    .cat-btn-ver{
      font-size:10px;letter-spacing:1px;text-transform:uppercase;font-weight:600;
      color:var(--navy);padding:7px 14px;border-radius:50px;
      border:1px solid var(--navy);transition:background .2s,color .2s;
    }
    .cat-btn-ver:hover{background:var(--navy);color:#fff}
    .cat-btn-wa{
      width:34px;height:34px;border-radius:50%;
      background:#25D366;color:#fff;
      display:flex;align-items:center;justify-content:center;
      transition:opacity .2s,transform .16s;flex-shrink:0;
    }
    .cat-btn-wa:hover{opacity:.85}
    .cat-btn-wa:active{transform:scale(.93)}

    /* BOTTOM CTA */
    .bottom-cta{
      background:var(--navy);padding:64px 5vw;text-align:center;
      grid-column:1/-1;
    }
    .bottom-cta h2{
      font-family:'Playfair Display',serif;
      font-size:clamp(24px,4vw,40px);font-weight:700;color:#fff;margin-bottom:10px;
    }
    .bottom-cta h2 em{font-style:italic;color:rgba(255,255,255,.5)}
    .bottom-cta p{font-size:14px;color:rgba(255,255,255,.5);margin-bottom:28px}
    .btn-wa-cta{
      display:inline-flex;align-items:center;gap:10px;
      background:#25D366;color:#fff;
      padding:16px 32px;border-radius:50px;
      font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
      transition:opacity .2s;
    }
    .btn-wa-cta:hover{opacity:.88}

    /* FOOTER */
    .site-footer{
      background:var(--tinta);padding:28px 5vw;
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;
    }
    .footer-brand{font-size:13px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:#fff}
    .footer-links{display:flex;gap:20px}
    .footer-links a{font-size:11px;color:rgba(255,255,255,.4);transition:color .2s}
    .footer-links a:hover{color:rgba(255,255,255,.8)}
    .footer-legal{font-size:10px;color:rgba(255,255,255,.22);letter-spacing:.5px;width:100%;text-align:center}

    /* MOBILE */
    @media(max-width:900px){
      .page-body{grid-template-columns:1fr}
      .sidebar{
        position:static;height:auto;
        display:flex;gap:8px;overflow-x:auto;
        padding:16px 5vw;border-right:none;
        border-bottom:1px solid var(--linea);
        scrollbar-width:none;
      }
      .sidebar::-webkit-scrollbar{display:none}
      .sidebar-heading{display:none}
      .sidebar-cat-item{flex-direction:column;min-width:64px;padding:8px;gap:6px;margin-bottom:0}
      .sidebar-cat-item span{font-size:9px;text-align:center;letter-spacing:.5px}
      .sidebar-cat-img{width:36px;height:36px}
      .cat-main{padding:24px 5vw 64px}
    }
    @media(max-width:640px){
      .cat-grid{grid-template-columns:repeat(2,1fr);gap:12px}
      .cat-btn-ver{display:none}
      .btn-wa-sm span{display:none}
      .nav-brand{display:none}
      .btn-ghost-sm{display:none}
      .site-nav{padding:0 16px}
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
    <a href="/?cart=1" class="nav-cart-link" aria-label="Ver carrito">
      <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <span class="nav-cart-badge" id="navCartBadge"></span>
    </a>
    <a href="/guias" class="btn-ghost-sm">Guías</a>
    <a href="/productos" class="btn-ghost-sm">Ver catálogo</a>
    <a href="https://wa.me/528134188472?text=Hola%20Fancy%20Water%2C%20me%20interesa%20un%20pedido" class="btn-wa-sm" onclick="gtagWhatsApp(this.href);return false;">
      ${WA_SVG}<span>Cotizar</span>
    </a>
  </div>
</nav>

<div class="breadcrumb">
  <a href="/">Inicio</a> &rsaquo; <a href="/#productos">Catálogo</a> &rsaquo; <span>${cat.name}</span>
</div>

<div class="page-body">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <p class="sidebar-heading">Categorías</p>
    <a href="/productos" class="sidebar-cat-item">
      <div class="sidebar-cat-img" style="background:var(--navy);display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" fill="none" stroke="#fff" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      </div>
      <span>Todos</span>
    </a>
    ${CATEGORIES.map(c => sidebarCategoryItem(c, cat)).join('')}
  </aside>

  <!-- MAIN -->
  <main class="cat-main">
    <div class="cat-header">
      <p class="cat-eyebrow">Catálogo · Fancy Water</p>
      <h1 class="cat-title">${(()=>{const w=cat.name.split(' ');return w.length>1?w.slice(0,-1).join(' ')+' <em>'+w.slice(-1)[0]+'</em>':cat.name;})()}</h1>
      <p class="cat-desc">${cat.desc}</p>
      ${cat.intro ? `<p class="cat-intro">${cat.intro}</p>` : ''}
      <p class="cat-count">${products.length} producto${products.length !== 1 ? 's' : ''}</p>
    </div>

    <div class="cat-grid">
      ${products.map(productCard).join('')}
    </div>
  </main>
</div>

<!-- BOTTOM CTA -->
<section class="bottom-cta">
  <h2>¿Interesado en <em>${cat.shortName}</em>?</h2>
  <p>Escríbenos y recibe tu cotización en minutos. Precios especiales para mayoreo.</p>
  <a href="https://wa.me/528134188472?text=Hola%20Fancy%20Water%2C%20me%20interesan%20sus%20${encodeURIComponent(cat.shortName)}" class="btn-wa-cta" onclick="gtagWhatsApp(this.href);return false;">
    ${WA_SVG} Cotizar ${cat.shortName}
  </a>
</section>

<footer class="site-footer">
  <span class="footer-brand">Fancy Water</span>
  <nav class="footer-links">
    <a href="/">Inicio</a>
    <a href="/#productos">Catálogo</a>
    <a href="/#nosotros">Nosotros</a>
    <a href="/#contacto">Contacto</a>
  </nav>
  <p class="footer-legal">© ${year} Fancy Water · Distribuidores Exclusivos VOL:TENA en América · Monterrey, N.L. México</p>
</footer>
<script>
(function(){try{var c=JSON.parse(localStorage.getItem('fw_cart_v1')||'[]');var n=c.reduce(function(s,i){return s+(i.qty||0);},0);if(n>0){var b=document.getElementById('navCartBadge');b.textContent=n;b.style.display='flex';}}catch(e){}})();
</script>
</body>
</html>`;
}

// ── GENERATE FILES ────────────────────────────────────────────────────────────

const BASE = path.join(__dirname);
let count = 0;

CATEGORIES.forEach(cat => {
  const dir = path.join(BASE, cat.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateCategoryPage(cat), 'utf8');
  console.log(`✓  /${cat.slug}/  (${ALL_PRODUCTS.filter(cat.filter).length} productos)`);
  count++;
});

console.log(`\n${count} páginas de categoría generadas.`);
