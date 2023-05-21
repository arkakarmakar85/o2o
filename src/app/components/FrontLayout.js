import FrontFooter from "./FrontFooter";
import FromOtherPageHeader from "./FrontOtherPageHeader";
import Meta from "./Meta";
import SignInDialog from "./SignInDialog";

const FrontLayout = ({children}) => {
    return (
        <div>
            <Meta />
            <div className="sub_header_in sticky_header">
                <div className="container">
                    <h1>About Sparker Directory</h1>
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