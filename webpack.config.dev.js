const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcRoot = path.resolve(__dirname,'src');
const devPath = path.resolve(__dirname,'dev');
const pageDir = path.resolve(srcRoot,'page');
const mainFile = 'index.js';

function getHtmlArray(entryMap) {
    let htmlArray = [];
    Object.keys(entryMap).forEach((key)=>{
        let fullPathName = path.resolve(pageDir,key);
        let fileName = path.resolve(fullPathName,key + '.html');

        if(fs.existsSync(fileName)) {
            htmlArray.push(new HtmlWebpackPlugin({
                filename: key + '.html',
                template: fileName,
                chunks: [key]
            }));
        }
    });
    return htmlArray;
}

function getEntry(){
    let entryMap = {};
    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName = path.resolve(pageDir,pathname);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName,mainFile);
        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    });

    return entryMap;

}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode: 'development',
    devServer: {
      contentBase: devPath
    },
    entry: entryMap,
    resolve: {
      extensions: ['.js','.jsx']//import引入文件时不需要标明扩展名'.js','.jsx'
    },
    output: {
        path: devPath,
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
                use: [{loader:'babel-loader'}],
                include: srcRoot
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: srcRoot
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader',{
                    /*
                    * sass-resources-loader将options中的sass资源都自动require到所有的sass模块中，而无需在每个文件中手动导入它们
                    * */
                    loader: "sass-resources-loader",
                    options: {
                        resources: srcRoot + '/component/rem_function.scss'
                    }
                }],
                include: srcRoot
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['url-loader?limit=8192'],
                include: srcRoot
            }
        ]
    },
    plugins: [].concat(htmlArray)
};