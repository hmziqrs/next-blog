import Error from "../Error";
import FullScreenLoader from "../FullScreenLoader";
import { PageProps } from "./types";

const PageView = ({ loading, error, children } : PageProps): JSX.Element => {
    if (loading ) {
        return <FullScreenLoader />
    }

    if (error) {
        <Error />
    }

    return children;
}

export default PageView;