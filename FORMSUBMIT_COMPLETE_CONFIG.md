# ✅ Configuración Completa de FormSubmit para Ticmans

## 📋 Formularios Configurados

Todos los formularios del sitio web han sido configurados para usar **FormSubmit.co**:

### 1. **Call to Action** (`/src/layouts/partials/CallToAction.astro`)
- **Email destino**: `enmamosley@gmail.com`
- **Asunto**: "Nueva consulta desde Ticmans"
- **Origen**: "Call to Action"
- **Redirección**: `https://ticmans.com/gracias`

### 2. **Página de Contacto** (`/src/pages/contact.astro`)
- **Email destino**: `enmamosley@gmail.com`
- **Asunto**: "Nuevo contacto desde Ticmans - Página de Contacto"
- **Origen**: "Página de Contacto"
- **Redirección**: `https://ticmans.com/gracias`
- **Campos**: Nombre, Email, Teléfono, Servicio, Mensaje

### 3. **Banner Principal** (`/src/layouts/partials/HomeBanner.astro`)
- **Email destino**: `enmamosley@gmail.com`
- **Asunto**: "Nueva consulta desde Ticmans - Banner Principal"
- **Origen**: "Banner Principal"
- **Redirección**: `https://ticmans.com/gracias`
- **Campos**: Email

### 4. **Aplicaciones de Trabajo** (`/src/pages/careers/[single].astro`)
- **Email destino**: `enmamosley@gmail.com`
- **Asunto**: "Nueva aplicación de trabajo - Ticmans"
- **Origen**: "Aplicación de Trabajo"
- **Redirección**: `https://ticmans.com/gracias`
- **Campos adicionales**: Posición aplicada

### 5. **Newsletter Footer** (`/src/layouts/partials/Footer.astro`)
- **Email destino**: `enmamosley@gmail.com`
- **Asunto**: "Nueva suscripción al newsletter - Ticmans"
- **Origen**: "Newsletter Footer"
- **Redirección**: `https://ticmans.com/gracias`
- **Campos**: Email

## 🔧 Configuraciones Técnicas Aplicadas

### Atributos FormSubmit en todos los formularios:
```html
<input type="hidden" name="_subject" value="[Asunto específico]" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="https://ticmans.com/gracias" />
<input type="hidden" name="origen" value="[Origen específico]" />
```

### Atributos Astro:
- **`data-astro-reload`**: Previene que el router de Astro intercepte los formularios
- **`method="POST"`**: Método correcto para FormSubmit
- **`required`**: Validación HTML5 en campos obligatorios

### Script Global:
- Handler centralizado en `Base.astro` para todos los formularios de FormSubmit
- Manejo de validación automática
- Compatibilidad con navegación SPA de Astro
- Logs de depuración en consola

## 🚀 Proceso de Activación

### Primera vez:
1. **Usuario envía formulario** → FormSubmit detecta nueva dirección
2. **FormSubmit envía email de confirmación** a `enmamosley@gmail.com`
3. **Hacer clic en enlace de confirmación** para activar
4. **¡Formularios activados!** - Todos los envíos futuros llegarán automáticamente

### Emails que recibirás:

#### Call to Action / Banner:
```
Asunto: Nueva consulta desde Ticmans
Email: usuario@ejemplo.com
Origen: Call to Action
```

#### Página de Contacto:
```
Asunto: Nuevo contacto desde Ticmans - Página de Contacto
Name: Juan Pérez
Email: juan@ejemplo.com
Phone: +52 XXX XXX XXXX
Service: Implementación de Odoo
Message: Necesito información...
Origen: Página de Contacto
```

#### Aplicaciones de trabajo:
```
Asunto: Nueva aplicación de trabajo - Ticmans
Name: María González
Email: maria@ejemplo.com
Posicion: Backend Software Engineer
[otros campos del formulario]
Origen: Aplicación de Trabajo
```

## 🎯 Estado Actual

- **✅ Todos los formularios configurados**
- **✅ Handler global implementado**
- **✅ Página de agradecimiento creada**
- **✅ Prevención de conflictos con Astro Router**
- **✅ Validación HTML5 habilitada**

## 🔍 Depuración

Si algún formulario no funciona:

1. **Abrir consola del navegador** (F12)
2. **Buscar logs**: "Enviando formulario a FormSubmit"
3. **Verificar redirección**: Debería ir a FormSubmit y luego a `/gracias`

## 📞 Próximos Pasos

1. **Probar cada formulario** una vez
2. **Confirmar email de FormSubmit** cuando llegue
3. **Verificar que `/gracias` funciona** correctamente
4. **Actualizar información de contacto** en página de gracias si es necesario

¡Todos los formularios están listos para funcionar! 🎉
