# Configuración de FormSubmit para Ticmans

## ✅ Integración Completada

Se ha integrado **FormSubmit.co** en el componente CallToAction del sitio web de Ticmans. 

## 📧 Configuración Requerida

### 1. Actualizar Email de Destino

En el archivo `src/layouts/partials/CallToAction.astro`, línea 34, debes cambiar:

```astro
action="https://formsubmit.co/your-email@example.com"
```

Por tu email real:

```astro
action="https://formsubmit.co/contacto@ticmans.com"
```

### 2. Configurar URL de Redirección

En la línea 40, actualiza la URL de redirección:

```astro
<input type="hidden" name="_next" value="https://tu-dominio.com/gracias" />
```

Reemplaza `https://tu-dominio.com` por tu dominio real.

## 🔧 Características Configuradas

- **✅ Validación de email**: Campo requerido
- **✅ Protección anti-spam**: Captcha deshabilitado (FormSubmit maneja esto)
- **✅ Formato de email**: Template en formato tabla
- **✅ Asunto personalizado**: "Nueva consulta desde Ticmans"
- **✅ Página de agradecimiento**: `/gracias` creada
- **✅ Identificación de origen**: Campo oculto "Call to Action"

## 📋 Datos que se Capturan

1. **Email del usuario**
2. **Origen**: "Call to Action" 
3. **Asunto**: "Nueva consulta desde Ticmans"
4. **Timestamp**: Automático por FormSubmit

## 🚀 Pasos para Activar

1. **Primer envío**: La primera vez que alguien envíe el formulario, FormSubmit te enviará un email de confirmación a la dirección configurada.

2. **Confirmar email**: Haz clic en el enlace de confirmación para activar el servicio.

3. **¡Listo!**: Después de confirmar, todos los formularios se enviarán automáticamente.

## 🔄 Próximos Pasos Recomendados

### Opcional: Formulario de Contacto Más Completo

Si quieres capturar más información, puedes agregar campos adicionales:

```astro
<!-- Nombre -->
<input type="text" name="nombre" placeholder="Tu nombre" required />

<!-- Teléfono -->
<input type="tel" name="telefono" placeholder="Tu teléfono" />

<!-- Empresa -->
<input type="text" name="empresa" placeholder="Nombre de tu empresa" />

<!-- Mensaje -->
<textarea name="mensaje" placeholder="¿En qué te podemos ayudar?" rows="4"></textarea>
```

### Configuración Avanzada de FormSubmit

Puedes agregar más opciones:

```astro
<!-- Autorespuesta al usuario -->
<input type="hidden" name="_autoresponse" value="Gracias por contactar a Ticmans. Te responderemos pronto." />

<!-- CC a otro email -->
<input type="hidden" name="_cc" value="ventas@ticmans.com" />
```

## 📞 Soporte

Si necesitas ayuda con la configuración:
- Documentación oficial: https://formsubmit.co/
- El servicio es gratuito hasta 1000 envíos/mes

## ⚠️ Importante

Recuerda actualizar los datos de contacto en la página de agradecimiento (`/gracias`) con tu información real:
- WhatsApp
- Email de contacto
- Cualquier otro dato de contacto relevante
