export default function(config, env) {
  config.loader('fonts', function(cfg) {
    cfg.test = /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/;
    cfg.loader = 'file-loader'
    return cfg
  })
  return config;
}