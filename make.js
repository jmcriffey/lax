/* jshint node:true */
'use strict';

var fs = require('fs');

function jsFiles(file) {
    return file.slice(-3) === '.js';
}

function build(path) {
    var indexImports = [];
    var indexExports = [];
    var indexSrc = '';

    fs.readdir(path, function(err, files) {
        files.filter(jsFiles).forEach(function(file) {
            var srcPath = path + '/' + file;
            var varName = file.replace('.js', '');

            indexImports.push(
                'import ' + varName + ' from ' + '\'./' + file + '\';'
            );
            indexExports.push('\t' + varName);

            fs.readFile(srcPath, {encoding: 'utf-8'}, function(err, content) {
                fs.writeFile(file, content, {encoding: 'utf-8'});
            });
        });

        indexSrc =
            indexImports.join('\n') + '\n' + '\n' + '\n' +
            'export default {\n' + indexExports.join(',\n') + '\n};\n';

        fs.writeFile('index.js', indexSrc, {encoding: 'utf-8'});
    });
}

function clean(path) {
    fs.readdir(path, function(err, files) {
        files.filter(jsFiles).filter(function(file) {
            return file !== 'make.js';
        }).forEach(function(file) {
            fs.unlink(file);
        });
    });
}

if (process.argv[2] === 'build') {
    clean('.');
    build('src');
} else if (process.argv[2] === 'clean') {
    clean('.');
}