'use strict'

function activate(context) {
    const markdownItDeflist = require('markdown-it-deflist');

    return {
        extendMarkdownIt(md) {
            // 使用 markdownItDeflist 插件
            return md
                .use(markdownItDeflist);
        }
    };
}

exports.activate = activate;