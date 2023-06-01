"use client"
const  Common = {
    ucWord: (str) => {
        return str.toLowerCase().replace(/\b[a-z]/g, function(letra) {
            return letra.toUpperCase();
        });
    },

    slugify: (str) => str
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '')
}

export default Common;