#!/usr/bin/env node

/**
 * Script para actualizar automáticamente las fechas del sitemap
 * Se ejecuta después del build para mantener el sitemap actualizado
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtener fecha actual en formato YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Rutas de archivos
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const distSitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');

// Función para actualizar fechas en el sitemap
function updateSitemapDates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reemplazar todas las fechas <lastmod> con la fecha actual
    content = content.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Sitemap actualizado: ${filePath}`);
    console.log(`📅 Fecha actualizada: ${today}`);
    return true;
  } catch (error) {
    console.error(`❌ Error actualizando sitemap: ${error.message}`);
    return false;
  }
}

// Actualizar sitemap en public/
if (fs.existsSync(sitemapPath)) {
  updateSitemapDates(sitemapPath);
} else {
  console.warn(`⚠️  Sitemap no encontrado: ${sitemapPath}`);
}

// Actualizar sitemap en dist/ (si existe)
if (fs.existsSync(distSitemapPath)) {
  updateSitemapDates(distSitemapPath);
} else {
  console.warn(`⚠️  Sitemap en dist no encontrado: ${distSitemapPath}`);
}

console.log('\n🚀 Sitemap actualizado correctamente');
