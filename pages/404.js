import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <section className="bg-light ">
                <div className="not-found d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h1 className="display-1 font-weight-bold">
                            You Are Lost!
                        </h1>
                        <h2 className="h1 font-weight-bold">Page Not Found!</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFoundPage;