<script lang="ts">
	import Header from '$lib/content/Header.svelte';
	import Logos from '$lib/content/Logos.svelte';
	import Portfolio from '$lib/content/Portfolio.svelte';
	import Features from '$lib/content/Features.svelte';
	import Profile from '$lib/content/Profile.svelte';
	import Cta from '$lib/content/Cta.svelte';
	import Footer from '$lib/content/Footer.svelte';
	import '../app.css';
	import "../styles/tailwind-output.css";
</script>

<div class="bg-white font-serif">
  <header>
    <Header />
  </header>

  <main>
    
	<Logos />
    <Portfolio />
    <Features />
	<Profile />
	<Cta />
  </main>
  <Footer />
</div>

<style>
</style>
