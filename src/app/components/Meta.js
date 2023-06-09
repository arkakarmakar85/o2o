
'use client';
import { useRouter } from 'next/navigation'
const Meta = () => {
   
    const router = useRouter()
    console.log(router)
    return (
        <>
            <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="SPARKER - Premium directory and listings template by Ansonika." />
                <meta name="author" content="Ansonika" />
                <title>SPARKER | Premium directory and listings template by Ansonika.</title>
                {/* Favicons*/}
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png" />
                {/* GOOGLE WEB FONT */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
                {/* BASE CSS */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/vendors.css" rel="stylesheet" />
                {/* YOUR CUSTOM CSS */}
                <link href="css/custom.css" rel="stylesheet" />
                


                
            </div>
        </>
    );
}

export default Meta;