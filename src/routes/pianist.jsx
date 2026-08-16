import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function Pianist() {
    return (
        <main>
            <Title>Sarah Collins &bull; Pianist</Title>
            <Header />

            <div class="content">
                <section class="grid reverse top">
                    <div class="image-container">
                        <img class="bottom" src="images/WinterWonderlandSalsCathedral.jpeg" alt="Winter Wonderland Sals Cathedral"></img>
                    </div>
                    <div class="info">
                        <img class="static" style="--x: calc(100% - 130px); --y: calc(100% - 130px);" src="icons/piano.svg" width={120} alt="static"></img>
                        <h1>Pianist</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci consequatur porro neque, sapiente officiis doloremque delectus, dolores ea possimus velit. 
                            Blanditiis commodi cum a numquam dolorem repudiandae quia quam!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
