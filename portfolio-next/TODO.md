# TO DO

- [x] Set up Tailwind theme
- [x] Create favicon
- [x] Add site header and navigation
- [x] Reorganize components into pages with router
- [x] Add page transitions
- [x] Add catch all route
- [x] Add hamburger menu for mobile navigation
- [ ] Find a more optimal/best practice solution for hamburger menu
- [x] Add About section
- [x] Add Projects section
- [x] Add Contact section
- [x] Add dark mode
- [ ] Find a more optimal approach to displaying github and linkedin links
- [ ] add contact form
- [ ] Add custom colors to theme
- [ ] Add email service

## Known Issues

- [x] Tailwind custom fonts no longer working
- [x] Favicon not loading
- [x] Fix react hydration error
- [ ] Link transition effects are delayed with theme change

## Questions

### How to configure Tailwind with custom fonts

1.  google fonts or other imported styles can be imported in global styles
2.  If fonts are self-hosted, add the files to ./public/fonts
3.  In the global styles add @font-face for each font you want to use

```css
@layer-base {
  @font-face {
    font-family: 'Neue Montreal Thin';
    src: url('../../public/fonts/PPNeueMontreal-Thin.otf');
  }
  @font-face {
    font-family: 'Neue Montreal Medium';
    font-weight: 500;
    src: url('../../public/fonts/PPNeueMontreal-Medium.otf');
  }
}
```

4. Add font definitions to tailwind.config.cjs

```js
theme: {
  extend: {
    fontFamily: {
      thin: ['Neue Montreal Thin', 'sans-serif'],
      medium: ['Neue Montreal Medium', 'sans-serif']
    }
  }
},
```

### How to configure Tailwind with custom colors

1. Add custom colors to tailwind.config.cjs like so:

```js
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    }
  }
```
