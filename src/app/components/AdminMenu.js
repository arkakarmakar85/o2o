
'use client';
import { useRouter } from 'next/navigation'
const AdminMeta = () => {
   
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
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png" />
                <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png" />
                <link href="admin_section/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="admin_section/css/admin.css" rel="stylesheet" />
                <link href="admin_section/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
                <link href="admin_section/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet" />
                <link href="admin_section/vendor/dropzone.css" rel="stylesheet" />
                <link href="admin_section/css/date_picker.css" rel="stylesheet" />


        
                <link href="admin_section/css/custom.css" rel="stylesheet" />
                
                <link rel="stylesheet" href="admin_section/js/editor/summernote-bs4.css" />
                


                
            </div>
        </>
    );
}

export default AdminMeta;