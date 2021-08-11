<script>

	import { onMount } from 'svelte';

    let audioElements;
    let currentAudio

    onMount(async () => {
        audioElements = [
            {
                audio: new Audio('assets/a.m4a'),
                times: [0.5, 1.7, 2.5, 3.2, 4]
            },
            {
                audio: new Audio('assets/b.m4a'),
                times: [1, 1.7, 2.3, 3.2, 3.9]
            }
        ];
        audioElements[0].audio.addEventListener('loadeddata', () => {
            let duration = audioElements[0].audio.duration;
            // The duration variable now holds the duration (in seconds) of the audio clip
            console.log(duration)
        })
        currentAudio = audioElements[0];
	});


    function play(element){
        clearTimeout;

        if(currentAudio.audio.paused){
            currentAudio = audioElements[element];
            currentAudio.audio.currentTime = 0;
            currentAudio.audio.play();
        }
        
        else{
            let n = 0;

            while (currentAudio.times[n] < currentAudio.audio.currentTime && n < currentAudio.times.length) {
                n++;
            }

            let delay = (currentAudio.times[n] - currentAudio.audio.currentTime) * 1000;

            setTimeout(() => {
                currentAudio.audio.pause();
                currentAudio = audioElements[element];
                currentAudio.audio.currentTime = currentAudio.times[n];
                currentAudio.audio.play();
            }, delay);
        }

        // When ended, set all currentTimes to 0
        currentAudio.audio.onended = (event) => {
            audioElements.forEach(element => {
                element.audio.currentTime = 0;
            });
        }
    }

    // function playTime(){
    //     audioElements[1].audio.currentTime = audioElements[1].times[4]
    //     audioElements[1].audio.play();
    // }

</script>

<div>
    <button on:click={() => play(0)}>Play A</button>
    <button on:click={() => play(1)}>Play B</button>
</div>