export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    // Edit this palette to update the site's shared colors.
    colors: { violet: '#5B2DA8', ink: '#100D1B', surf: '#1B1530', surf2: '#251D3D', line: '#3B3155', main: '#FFFFFF', muted: '#C5BED5', accent: '#B69AFF', cyan: '#D0C1FF', ok: '#76C7A4', bad: '#F87171',
      cta: '#C6AEFF', ctaHover: '#D7C7FF' },
    fontFamily: { head: ['Bricolage Grotesque', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }
  } },
  plugins: []
}
