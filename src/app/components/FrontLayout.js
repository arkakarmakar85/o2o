import Head from "next/head";
import FrontFooter from "./FrontFooter";
import FromOtherPageHeader from "./FrontOtherPageHeader";
import Meta from "./Meta";
import SignInDialog from "./SignInDialog";

const FrontLayout = ({children}) => {
    return (
        <div>
            <Head>
            <meta charSet="utf-8" />
             
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="SPARKER - Premium directory and listings template by Ansonika." />
            <meta name="author" content="Ansonika" />
            <title>{process.env.NEXT_PUBLIC_BASE_APP_NAME} | Premium directory and listings template by {process.env.NEXT_PUBLIC_BASE_APP_NAME}.</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
                  
      
            <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png" />
            <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png" />
            <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png" />
            <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png" /> 
            </Head>
            

            
            <div className="sub_header_in sticky_header">
                <div className="container">
                    <h1>About {process.env.NEXT_PUBLIC_BASE_APP_NAME} Directory</h1>
                </div>
            </div>

            <div id="page">
                <FromOtherPageHeader />
                {children}
                <FrontFooter />
            </div>
            <SignInDialog />
        </div>
    );
}

export default FrontLayout;