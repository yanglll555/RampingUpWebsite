const fs = require('fs')
const path = require('path')
const xmlreader = require('xmlreader');

export default function () {
    const nuxtInstance = this

    nuxtInstance.nuxt.hook('sitemap:generate:done', () => {
        const outputPath = nuxtInstance.options.generate.dir
        const data = fs.readFileSync(path.join(outputPath, 'sitemap.xml'))
        const str = data.toString('utf-8')
        xmlreader.read(str, (err, res) => {
            if (err) return
            const list = []
            res.urlset.url.each((i, u) => {
                list.push(u.loc.text())
            });
            fs.writeFileSync(path.join(outputPath, 'sitemap.txt'), list.join('\r\n'))
        })
    })
}

