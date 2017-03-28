/**
 *
 * @summary 生成ng2模板文件
 */
const program = require("commander");
var chalk = require('chalk');
const fse = require('fs-extra');
var path = require('path');
var exec = require('child_process').exec;

var execCallback = function (error, stdout, stderr) {
    if (error) console.log("exec error: " + error);
    if (stdout) console.log("Result: " + stdout);
    if (stderr) console.log("shell error: " + stderr);
};

function init(moduleName) {
    //当前目录下创建模块文件夹
    if (!fse.existsSync(moduleName)) {
        fse.mkdirSync(moduleName);
        console.log("Step1 => 模块创建成功！");
    } else {
        return console.error(chalk.red(moduleName + '目录已存在！请更改模块名后重试'));
    }
    //复制模板文件到模块文件夹下
    var workDir = process.cwd();
    var templateDir = path.resolve(__dirname, "template");
    var moduleDir = path.resolve(workDir, moduleName);
    fse.copySync(templateDir, moduleDir);

    //切换目录到模块目录，安装npm依赖
    process.chdir(moduleDir);//切换到模块所在目录
    const cmd = "cnpm install";
    console.log('Step2 => 正在安装模块依赖..请稍等...');
    exec(cmd, execCallback);
}

program
    .version("1.0.0")
    .option("-m,--module-name", "请指定需要创建的模块名称")
    .option("-e,--entry-file", "请指定angualr2的入口文件")
    .description("作用：创建后台cms业务模块")
    .action(init);


program.parse(process.argv);