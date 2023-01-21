# TO DO

- [x] Set up Tailwind theme
- [ ] Create favicon
- [ ] Add site header and navigation
- [ ] Add hamburger menu for mobile navigation
- [ ] Add About section
- [ ] Add Projects section
- [ ] Add Contact section
- [ ] Add autoscroll
- [ ] Add dark mode
- [ ] Add custom colors to theme
- [ ] Add email service

## Questions

### How to configure Tailwind with custom fonts
  1.  google fonts or other imported styles can be imported in global styles
  2.  If fonts are self-hosted, add the files to ./public/fonts
  3.  In the global styles add @font-face for each font you want to use
   
  ```css
  @layer-base {
    @font-face {
      font-family: "Neue Montreal Thin";
      src: url("../../public/fonts/PPNeueMontreal-Thin.otf");
    }
    @font-face {
      font-family: "Neue Montreal Medium";
      font-weight: 500;
      src: url("../../public/fonts/PPNeueMontreal-Medium.otf");
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