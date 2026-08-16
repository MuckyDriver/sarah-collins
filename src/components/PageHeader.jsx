import "./PageHeader.css";

export default function PageHeader(props) {
    return <div class="page-header">
        <img src={props.image || "images/PlayingAtHoratioGarden2023.jpeg"}></img>
        <div class="overlay"></div>
        <div class="heading">
            <h1>{props.text || "Heading Text Here"}</h1>
        </div>
    </div>
}