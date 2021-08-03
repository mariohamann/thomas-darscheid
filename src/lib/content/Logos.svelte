<script lang="ts">
	// import { page } from '$app/stores';
	import ph from '../assets/img/ph.svg';
	import jicki from '../assets/img/jicki.svg';
</script>

<!-- Logo Cloud -->
<div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
        Zu hören unter anderem bei
    </p>
    <div class="mt-6 grid grid-cols-2 gap-8 lg:grid-cols-2">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img class="max-h-12" src={jicki} alt="Jick – Sprachduschen">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <img class="h-12" src={ph} alt="PH Radio 88,4">
        </div>
    </div>
    </div>
</div>