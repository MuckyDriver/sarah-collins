import { onMount, createSignal } from "solid-js"
import "./Audio.css";

export default function AudioPlayer(props) {
    const [isPaused, paused] = createSignal(true)
    let audioFileElement;
    let currentTimer;
    let playButton;
    let duration;
    let percentage;
    let progress;
    let audioPlayerObj;

    onMount(() => {
        let playingLoop;
        audioFileElement.volume = 0.25;

        // Button Handling
        playButton.addEventListener("click", () => {
            if (isPaused()) {
                audioFileElement.play();
            } else {
                audioFileElement.pause();
            }

            audioPlayerObj.classList.toggle("playing")
        })

        // Playing and being paused.
        audioFileElement.addEventListener("playing", () => {
            paused(false)

            playingLoop = setInterval(() => {
                let currentTime = audioFileElement.currentTime
                let dateData = new Date(Math.round(currentTime * 1000))
                let percentage = Math.round((currentTime / audioFileElement.duration) * 100)

                progress.style.setProperty("--percent", `${percentage}%`)
                currentTimer.innerText = `${dateData.getMinutes()}:${(dateData.getSeconds() < 10 ? '0' : '') + dateData.getSeconds()}`;
            }, 100)

            audioPlayerObj.classList.add("playing");
        })

        audioFileElement.addEventListener("pause", () => {
            clearInterval(playingLoop)
            paused(true)

            audioPlayerObj.classList.remove("playing");
        })

        // Updating Duration Data
        function updateDurationData() {
            let dateData = new Date(Math.round(audioFileElement.duration * 1000));
            duration.innerText = `${dateData.getMinutes()}:${dateData.getSeconds()}`;
        }

        audioFileElement.addEventListener("loadedmetadata", () => {updateDurationData()})
        updateDurationData()
    })

    return <div class="audio-container">
        <audio ref={audioFileElement} controls={false} src={props.file} controlslist="nodownload" preload="metadata"></audio>

        <div class="audio-player" ref={audioPlayerObj}>
            <div class="info">
                <span>{props.title}</span>

                <div class="play-timings">
                    <span ref={currentTimer}>0:00</span>
                    <span ref={duration}>0:00</span>
                </div>
            </div>
            <div class="play-progress">
                <button class="play-btn" ref={playButton}>
                    <img src="/icons/play_arrow.svg" alt="i" width="24"></img>
                    <img src="/icons/pause.svg" alt="i" width="24"></img>
                </button>
                <div class="progress-bar" ref={progress}></div>
            </div>
        </div>
    </div>
}