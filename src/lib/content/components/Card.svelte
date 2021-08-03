<script>
    export let category;
    export let title;
    export let description;
    export let url;
    export let tags;
</script>

<a href={url} target="blank" class="flex flex-col shadow-lg overflow-hidden hover:shadow-xl focus:shadow-xl transition-shadow">
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <div class="block">
                <h3 class="text-xl font-semibold text-gray-900">
                    {title}
                </h3>
                <p class="mt-3 text-base text-gray-500">
                    {description}
                </p>
            </div>
        </div>
        <div class="mt-4 flex justify-between">
            <div class="flex items-center space-x-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {#if category == 'video'}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" /></svg>
                    Video
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" /></svg>
                    Audio
                {/if}
                </span>
                {#each tags as tag}
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {tag}
                </span>
                {/each}
            </div>
            <div class="mt-3 flex-grow-0 flex justify-end space-x-1 italic text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </div>
        </div>
    </div>
</a>