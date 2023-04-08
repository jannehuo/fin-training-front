export default (config, env, helpers) => {
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        'https://fin-training-service.herokuapp.com'
      ),
    })
  );
};
