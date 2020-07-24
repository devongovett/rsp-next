module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.unshift({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });

    return config;
  }
};
