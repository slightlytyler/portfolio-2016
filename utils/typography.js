import Typography from 'typography';

const options = {
  baseFontSize: '32px',
  baseLineHeight: '48px',
  bodyFontFamily: '"Roboto", "Segoe UI", Helvetica, Arial, sans-serif',
  headerFontFamily: '"Roboto", "Segoe UI", Helvetica, Arial, sans-serif',
  bodyWeight: 200,
  headerWeight: 400,
  boldWeight: 600,
  modularScales: [
    {
      "scale": "diminished fourth"
    }
  ]
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography;