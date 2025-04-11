module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Configurações
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {compress: true},
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        copy: {
            images:{
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/images/'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dev/images/'
                }]
            },
            javascriptDev: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/',
                    src: 'main.js',
                    dest: 'dev/scripts'
                }]
            }
        },

        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development'],
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev'],
            },
            jsDev: {
                files: ['src/scripts/main.js'],
                tasks: ['copy:javascriptDev']
            }
        },

        replace: {
            dev: {
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.js'
                    }
                ]},
                files: [
                    {
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev/'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.js'
                    }]
                },
                files: [
                    {
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        clean: ['prebuild'],

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js']
                }
            }
        }

    })

    //Plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //Tarefas
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'copy:images','copy:javascriptDev', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}