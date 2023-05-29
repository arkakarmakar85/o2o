"use client"
const  Common = {
    ucWord: (str) => {
        return str.toLowerCase().replace(/\b[a-z]/g, function(letra) {
            return letra.toUpperCase();
        });
    }
}

export default Common;