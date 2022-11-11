import "./Footer.css";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return(
    <section className="footer">
    <p>SEGUINOS EN NUESTRAS REDES:</p>
    <h5>Copyright Anime Stickers©</h5>
    <div>
        <Link> <BsInstagram className="instagram" /> </Link>
        <Link> <BsFacebook className="facebook"/> </Link>
        <Link> <BsWhatsapp className="whatsapp"/> </Link>
    </div>
</section>
    )
}

export default Footer;