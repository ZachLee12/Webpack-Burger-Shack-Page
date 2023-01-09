# Webpack-Burger-Shack-Page
A single-page project built with [Webpack](https://webpack.js.org/) that emulates multiple-pages. As you navigate through the pages, new HTML is being injected into the ```DOM```. This project is built with several JavaScript modules (in ```src```). Using only ```index.js``` as the entry point, the output is ```main.js```, which has been bundled by Webpack.

Live demo: https://zachlee12.github.io/Webpack-Burger-Shack-Page/

## Webpack 
Webpack is a powerful module bundler that takes all JavaScript code and its dependencies, and bundles them into a single file that can be run in the browser. It offers a wide range of tools and features that is configurable via the ```webpack.config.js``` file. Although it has a steep learning curve, its flexibility in configurations allow great benefits, especially for large and more complex projects.

## webpack.config.js
In this project, I have configured Webpack to produce an output that has an ```assets``` directory, with subdirectories of the static assets, namely ```fonts``` and ```images```. This is achieved by configuring ```module generators```. The ```module.rules``` array defines a set of conditions that determine which files should be processed by the ```generator```, and the actions that should be taken on those files. 

The result is a more structured and organized ```dist``` directory with subdirectories. 

In this case, for example, I have configured that all images (or files with extensions of '.png,.svg,.jpg,...') should be processed and outputed into the path of ```assets/images/[hash][ext][query]```. 

*Note: ```[hash][ext][query]``` are placeholders for the output file, as follows: 

```[hash]``` : A unique hash generated by Webpack from the chunk contents.

```[ext]``` : The file extension.

```[query]``` : A query string that can be used to specify options or parameters for the file.

```javascript
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]'
                }
            }
```

## Reflection
Learning to configure Webpack brings great advantage to make my project development more flexible. Like its successors, [Snowpack](https://www.snowpack.dev/) and [ViteJS](https://vitejs.dev/), it does not provide certain features by default like Hot Module Reloading (HMR), but the knowledge of configuring Webpack could allow one to use it to its full potential. 

