import "./NotFound.scss";


function NotFound() {
    return (
        <div className="NotFound">
            <div className="main-store container text-center my-5 download-game w-50">
                <div className="heading text-center">
                    <h3 className="title">404 Not Found</h3>
                </div>





                {/*<p className="regular-text text-centre pb-4">If you have any issues launching the client, visit our Discord or the Help Desk of our forums.</p>*/}
                <p className="regular-text text-center pb-4">Sorry, we couldn't find page you requested...</p>
            </div>
        </div>
    );
}

export default NotFound;
