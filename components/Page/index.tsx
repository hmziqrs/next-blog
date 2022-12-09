import Error from "../Error";
import FullScreenLoader from "@components/FullScreenLoader";
import { PageProps } from "./types";

const PageView = ({ loading, error, children } : PageProps): React.ReactNode => {
    if (loading ) {
        return <FullScreenLoader />
    }

    if (error) {
        <Error />
    }

    return children;
}

export default PageView;