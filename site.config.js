const projects = require('./data/projects')

module.exports = {
  site: {
    title: 'SSG Site',
    description: 'SSG Project',
    basePath: process.cwd()+'\\public',
    projects
  },
  build: {
  	basePath: process.cwd(),
    outputPath:  '.\\public',
  }
}