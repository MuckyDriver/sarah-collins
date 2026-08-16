import { A } from "@solidjs/router";
import "./Footer.css";

export default function Footer() {
    return <footer>
        <div class="socials">
            <A target="_blank" href="https://www.facebook.com/RandomBird/"><i class="fa fa-facebook-square" aria-hidden="true"></i></A>
            <A target="_blank" href="https://www.youtube.com/@sarahcollins6378"><i class="fa fa-youtube-play" aria-hidden="true"></i></A>
            <A target="_blank" href="https://soundcloud.com/sara-63"><i class="fa fa-soundcloud" aria-hidden="true"></i></A>
            <A target="_blank" href="https://www.instagram.com/DJRandombird"><i class="fa fa-instagram" aria-hidden="true"></i></A>
        </div>
        <div style="padding-bottom: 1em;">
            &copy; {new Date().getUTCFullYear()} &bull; Website by 
            <A target="_blank" href="https://projects.dhcweblogistics.net">DHCWeblogistics</A>
        </div>
        <div>
            Credit to 
            {" "}<A href="https://fontawesome.com/v4/icons/" target="_blank">FontAwesome</A>{" "}
            and
            {" "}<A href="https://fonts.google.com/icons" target="_blank">Google Material Icons</A>{" "}
            for the icons used in the website.
        </div>
    </footer>
}