import Link from "next/link";

export default function Custom404() {
    return (
        <div className="box-404">
            <h1>404 - That page does not seem to exist...</h1>
            <img src="https://hollywoodlife.com/wp-content/uploads/2020/10/sacha-baren-cohen-ap-ftr.jpg?w=620" alt="" width="50%" />
            <Link href="/">
                <button className="btn-blue">Go home</button>
            </Link>
        </div>
    );
}
