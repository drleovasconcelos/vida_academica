import { Link, Outlet } from "react-router-dom"
import { ImagemLayout } from "./style"


export const Layout = () => {
    return(
        <>
            <header>
                <ImagemLayout>
                    <img src="ttps://image.tmdb.org/t/p/w500" alt="" />
                </ImagemLayout>
                


                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/filmes"}>Filmes</Link>
                        </li>
                        <li>
                            <Link to={"/series"}>Séries</Link>
                        </li>
                    </ul>
                </nav>

            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className="footer">
                <p>Todos os direitos reservados</p>
            </footer>
        </>
    )
}