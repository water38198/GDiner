// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    // ...UnoCSS options
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
    presets: [
        presetIcons(),
        presetUno()
    ],
    theme: {
        colors: {
            'primary': '#3D081B',
            'secondary': '#F2EFDD',
            'info':'#910F3F'
        },
        container: {
            center: true,
        },
        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
        }
    }
})