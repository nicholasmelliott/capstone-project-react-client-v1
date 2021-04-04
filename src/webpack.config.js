module.exports = {
    ...
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

    devServer: {
        compress: true,
        disableHostCheck: true
     }      
};