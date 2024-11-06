import { signIn, signOut, auth } from "@/auth";
import Link from "next/link";
import Form from "next/form";
import logo from "../../assets/logo.webp";
import Image from "next/image";

async function Navbar() {
    const session = await auth();

    return (
        <>
            <header className="header-container">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />

                <div className="bars">
                    <i className="fa-solid fa-bars fa-2x"></i>
                </div>


                <div className="logo-container">
                    <Link href="/">
                        <Image src={logo} height={42} width={151} alt="logo" />
                    </Link>
                </div>

                <div className="nav-links ">
                    {session && session.user ? (
                        <>
                            <Link href="/post">
                                <span className="button-style">create</span>
                            </Link>

                            <Form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: "/" });
                                }}
                            >
                                <button type="submit" className="button-style">Sign Out</button>
                            </Form>
                                
                        </>
                    ) : (
                        <>
                            <Form
                                action={async () => {
                                    "use server";
                                    await signIn("github");
                                }}
                            >
                                <button type="submit" className="button-style">Sign in</button>
                            </Form>
                        </>
                    )}

                    <button>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </button>
                    <button>
                        <Link href="/allpost">
                            <p>Posts</p>
                        </Link>
                    </button>
                    <button>
                        <Link href="/about">
                            <p>Contact</p>
                        </Link>
                    </button>
                    <div className="icons-header">
                        <i className="fa-brands fa-facebook "></i>
                        <i className="fa-brands fa-instagram "></i>
                        <i className="fa-brands fa-youtube "></i>
                        <i className="fa-brands fa-x-twitter "></i>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
