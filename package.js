Package.describe({
  summary: 'Simple HTML5 Charts using the <canvas> tag',
  version: "0.0.9",
  name: "alamont:chartjs",
  git: "https://github.com/alamont/meteor-chartjs.git"
});

Package.onUse(function (api) {
  api.addFiles('lib/chart.min.js', 'client');
  api.export('Chart', 'client');
});
