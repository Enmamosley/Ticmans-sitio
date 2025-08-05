# ✅ Sección de Precios con Control de Visibilidad

## 🎛️ Nueva Funcionalidad Agregada

Se ha añadido la opción **`enable`** a la sección de precios para que puedas controlar si se muestra o no en el sitio web.

## 📁 Archivos Modificados

### 1. **Contenido** (`/src/content/sections/pricing.md`)
```yaml
---
enable: true  # ← NUEVA OPCIÓN
title: "Elige un plan de precios que mejor se adapte a ti"
plans_labels:
  - "Mensual"
  - "Anual"
# ... resto del contenido
---
```

### 2. **Componente** (`/src/layouts/partials/PricingSection.astro`)
- Agregado soporte para la propiedad `enable`
- Toda la sección se envuelve en un condicional `{enable && (...)}`

### 3. **Tipos TypeScript** (`/src/types/sections.collections.ts`)
- Agregada `enable: z.boolean()` al schema de `pricingSectionCollection`

## 🔧 Cómo Usar

### Para **MOSTRAR** la sección de precios:
```yaml
---
enable: true
# ... resto del contenido
---
```

### Para **OCULTAR** la sección de precios:
```yaml
---
enable: false
# ... resto del contenido
---
```

## 📍 Dónde se Aplica

La sección de precios aparece en:

1. **Página de inicio** (`/`) - Se ocultará/mostrará automáticamente
2. **Página de precios** (`/pricing`) - Se ocultará/mostrará automáticamente

## ⚡ Comportamiento

- **`enable: true`** → La sección se muestra normalmente
- **`enable: false`** → La sección se oculta completamente (no se renderiza)
- **Si no se especifica** → Por defecto se muestra (`enable = true`)

## 🎯 Casos de Uso

### ✅ Cuándo activarla (`enable: true`):
- Tienes planes de precios definidos
- Ofreces servicios con precios fijos
- Quieres mostrar transparencia en costos

### ❌ Cuándo desactivarla (`enable: false`):
- Solo ofreces servicios personalizados
- Los precios se manejan por cotización
- Estás en proceso de definir precios
- Prefieres que contacten directamente

## 🔄 Cambios Inmediatos

Los cambios se aplican **inmediatamente** al modificar el archivo:
1. Edita `/src/content/sections/pricing.md`
2. Cambia `enable: true` o `enable: false`
3. Guarda el archivo
4. Recarga la página

## 💡 Recomendación para Ticmans

Dado que Ticmans se especializa en:
- **Equipos de computación** (precios variables)
- **Implementación de Odoo** (proyectos personalizados)
- **Renta de equipos** (precios según duración)
- **Soporte técnico** (servicios a medida)

**Sugerencia**: Mantener `enable: false` y enfocarse en:
- Call-to-actions para "Solicitar Cotización"
- Formularios de contacto
- Página de servicios detallada

¡La funcionalidad está lista para usar! 🎉
