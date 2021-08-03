<script lang="ts">
	import image from '../assets/img/thomas-stats.jpg';
    const aClass = 'underline hover:opacity-75 focus:opacity-75';
</script>

<!-- Stats section -->
<div class="relative bg-gray-900">
    <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
    <div class="h-full w-full xl:grid xl:grid-cols-2">
        <div class="h-full xl:relative xl:col-start-2">
        <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src={image} alt="Thomas singend">
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
        </div>
    </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
    <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-semibold tracking-wide uppercase">
        <span class="bg-gradient-to-r from-secondary-300 to-primary-300 bg-clip-text text-transparent">Profil</span>
        </h2>
        <p class="mt-3 text-3xl font-extrabold text-white">Sprecher, Sänger und Produzent</p>
        <p class="mt-5 text-lg text-gray-300">Ich lebe mit meiner Familie in Freiburg im Breisgau und bin neben meiner Tätigkeit als Sprecher Geschäftsführer der <a class={aClass} href="https://www.support-team.de">Support Team GmbH</a> und Sänger in mehreren Formationen (z. B. <a class={aClass} href="https://haiducken.de">Die Haiducken</a>,  <a class={aClass} href="http://artists.waterpiperecords.de/soulsistersblond/">Soul Sisters Blond</a>, <a class={aClass} href="https://theater.freiburg.de/de_DE/spielplan/neujahrskonzert.16317613">The Philharmonic Blues Brothers</a> oder Famous Black Raincoat).</p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
        <p>
            <span class="block text-2xl font-bold text-white">Ausbildung</span>
            <span class="mt-1 block text-base text-gray-300">Ich genoss eine vielfältige und professionelle Stimm-Ausbildung bei den Regensburger Domspatzen und während meines Studiums.</span>
        </p>

        <p>
            <span class="block text-2xl font-bold text-white">Stimme</span>
            <span class="mt-1 block text-base text-gray-300">Ein warmer, dynamischer und facettenreicher Bariton mit tiefen Tiefen und hohen Höhen.</span>
        </p>

        <p>
            <span class="block text-2xl font-bold text-white">Erfahrung</span>
            <span class="mt-1 block text-base text-gray-300">Von Gedicht-Rezitation über Radio-Moderation bis hin zum Werbespot-Voiceover kann ich auf vielfältige Erfahrung zurückblicken.</span>
        </p>

        <p>
            <span class="block text-2xl font-bold text-white">Equipment</span>
            <span class="mt-1 block text-base text-gray-300">Neumann 800, XY-Röhrenvorverstärker und Technics Recording-Interface sorgen für kristallklaren Sound für Ihre Produktion.</span>
        </p>
        </div>
    </div>
    </div>
</div>