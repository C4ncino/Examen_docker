import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <section className="body-font mt-[1%] mx-10">
                <div className="container my-auto mx-auto flex flex-row items-center justify-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-300">Paquetería 
                        <br className="hidden lg:inline-block"/> Dockerizada!
                    </h1>
                    <header className="text-gray-600 body-font h-24 container px-20 p flex flex-wrap flex-col md:flex-row items-center">

                        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center text-[#EEEEEE]">
                            <Link to="/" className="mr-5 hover:text-gray-500 text-2xl">Home</Link>
                            <Link to="/stats" className="mr-5 hover:text-gray-500 text-2xl">Stats</Link>
                        </nav>

                    </header>
                </div>
            </section>
        </>

    );
}

export default Navbar;
