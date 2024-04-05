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
            'primary': {
                DEFAULT: '#3D081B',
                'light': 'rgba(61,8,27,.8)',
                '200': 'rgba(61,8,27,.2)',
                'veryLight' : 'rgba(61,8,27,.03)'
            },
            'secondary': {
                DEFAULT: '#F2EFDD',
                'light': 'rgba(242,239,221,.03)'
            },
            'info': {
                DEFAULT: '#910F3F',
                'dark': 'hsl(338, 81%, 20%)'
            }
        },
        container: {
            center: true,
        },
        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
        },
    },
    shortcuts: {
        'customBorder': 'shadow-[0_2px_0_0_#3D081B] border-(3 #3D081B solid)',
        'customBorder-xl': 'shadow-[0_5px_0_0_#3D081B] border-(3 #3D081B solid)',
        
    }
})