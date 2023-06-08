"use client"
const  Common = {
    ucWord: (str) => {
        if(str) {
            return str.toLowerCase().replace(/\b[a-z]/g, function(letra) {
                return letra.toUpperCase();
            });
        } else {
            return ''
        }
        
    },

    slugify: (str) => str
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '')
}

export default Common;