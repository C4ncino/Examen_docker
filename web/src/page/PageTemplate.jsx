import React from "react";
import Navbar from "./Navbar";

const PageTemplate = ({ children }) => {
    return (
        <div className="bg-[#222831] flex flex-col min-h-screen">
            <Navbar />

            <main className="grow ">
                {children}
            </main>
        </div>
    );
}

export default PageTemplate;