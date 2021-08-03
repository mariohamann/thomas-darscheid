<script lang="ts">
  import Feature from './components/Feature.svelte';
</script>

<!-- Gradient Feature Section -->
<div class="bg-gradient-to-r from-secondary-800 to-primary-700">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
    <h2 class="text-3xl font-extrabold text-white tracking-tight">
        Angebot
    </h2>
    <p class="mt-4 max-w-3xl text-lg text-secondary-100">
        Gerne gebe ich Ihnen meine Stimme – und wenn Sie möchten erhalten Sie ein komplettes Rundumsorglos-Paket!
    </p>
    <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <Feature title="Texte" description="Gesprochene Sprache unterscheidet sich fundamental von Schriftsprache. Gerne unterstütze ich Sie daher bei der Erstellung eines natürlich klingenden Textes.">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </Feature>
        <Feature title="Audio-Produktion" description="Sie haben kein Tonstudio zur Hand? Gerne nehme ich in meinem eigenen Studio auf und liefere Ihnen eine fertig produzierte Audio-Datei, die auf ihre Bedürfnisse angepasst ist.">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sliders-v" class="w-6 h-6 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M160 168v-48c0-13.3-10.7-24-24-24H96V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v88H24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h40v312c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V192h40c13.3 0 24-10.7 24-24zm-32-8H32v-32h96v32zm152 160h-40V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v312h-40c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h40v88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-88h40c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm-8 64h-96v-32h96v32zm152-224h-40V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-40c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h40v248c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V256h40c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm-8 64h-96v-32h96v32z"></path></svg>
        </Feature>
        <Feature title="Gesang" description="Als ausgebildeter und erfahrener Sänger fühle mich in sehr vielen Genres wohl – wenn benötigt können daher auch gesungene Elemente integriert werden.">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
        </Feature>
        <Feature title="Moderation" description="Ob auf der Bühne oder im Radio – auch live als Moderator sorge ich für einen angemessenen Rahmen und führe durch Programm und Inhalt.">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
        </Feature>
        <Feature title="Englisch" description="Amet aliqua eiusmod magna esse exercitation exercitation pariatur. Id non minim excepteur eiusmod.">
            <svg  class="h-6 w-6 text-white" aria-hidden="true" data-prefix="fal" data-icon="flag-usa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M472.5 0c-7 0-14.3 1.5-21.2 4.6-50.5 22.7-87.8 30.3-119.1 30.3C266.1 34.9 227.7.4 151.4.4 119.8.4 81.2 6.9 32 23.6V16c0-8.8-7.2-16-16-16S0 7.2 0 16v488c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V403.6c44.2-15.8 81.6-22 114.5-22 81.2 0 137.8 34.4 219.1 34.4 35.3 0 75.1-6.5 123.7-25 14-5.4 22.8-17.9 22.8-31.2V33.4C512 13 493.4 0 472.5 0zM256 54.3c58.3 17.5 113.9 21.8 208.3-20.5 9.4-4.2 15.7-.5 15.7 5.6v52.4c-98.8 41.7-153.2 28.3-224 16.1V54.3zm0 86c34.5 6.1 64.2 12 98.8 12 35.2 0 75.8-7 125.2-26.3v61.6c-103.5 33.4-162.8 18.4-224 4v-51.3zM32 57.2c46-16.7 85.3-24.8 119.4-24.8 27.7 0 50.5 5.5 72.6 12.1v140c-51.1-10.4-108.6-14.8-192 10.4V57.2zm0 171.1c100.6-32.4 159.1-19.2 220.4-4.7 57.5 13.6 120.2 30 227.7-2.4v54.5c-100.5 32.4-159 19.2-220.4 4.7-61-14.4-124.5-28.6-227.7 2.5v-54.6zM365.5 384c-75.6 0-133-34.4-219.1-34.4-36.7 0-74.4 6.5-114.5 19.8v-53.1c100.6-32.4 159-19.2 220.3-4.7 58.8 13.8 120.5 29.9 227.7-2.4v50.3c-.8 2.5-58.8 24.5-114.4 24.5zM96 64c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm72 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm-72 24c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm72 32c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"/></svg>
        </Feature>
    </div>
    </div>
</div>