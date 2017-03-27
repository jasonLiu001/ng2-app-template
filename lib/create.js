/**
 *
 * @summary 生成ng2模板文件
 */
const program = require("commander");
var chalk = require('chalk');
const fse = require('fs-extra');
var path = require('path');

function init(moduleName) {
    //当前目录下创建模块文件夹
    if (!fse.existsSync(moduleName)) {
        fse.mkdirSync(moduleName);
        console.log("模块创建成功！");
    } else {
        return console.error(chalk.red(moduleName + '目录已存在！请更改模块名后重试'));
    }
    //复制模板文件到模块文件夹下
    var workDir = process.cwd();
    var templateDir = path.resolve(__dirname, "template");
    var moduleDir = path.resolve(workDir, moduleName);

    //拷贝文件到对应目录下
    fse.copySync(path.resolve(templateDir, "app.component"), path.resolve(moduleDir, "app", "app.component.ts"));
    fse.copySync(path.resolve(templateDir, "app.module"), path.resolve(moduleDir, "app", "app.module.ts"));
    fse.copySync(path.resolve(templateDir, "app.routing"), path.resolve(moduleDir, "app", "app.routing.ts"));
    fse.copySync(path.resolve(templateDir, "main"), path.resolve(moduleDir, "main.ts"));
    fse.copySync(path.resolve(templateDir, "package"), path.resolve(moduleDir, "package.json"));
    fse.copySync(path.resolve(templateDir, "tsconfig"), path.resolve(moduleDir, "tsconfig.json"));
    fse.copySync(path.resolve(templateDir, "webpack"), path.resolve(moduleDir, "webpack.config.js"));

    //todo:3.修改webpack中的入口文件名称

}

program
    .version("1.0.0")
    .option("-m,--module-name", "请指定需要创建的模块名称")
    .option("-e,--entry-file", "请指定angualr2的入口文件")
    .description("作用：创建后台cms业务模块")
    .action(init);


program.parse(process.argv);