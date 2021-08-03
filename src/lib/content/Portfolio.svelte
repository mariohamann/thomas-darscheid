<script lang="ts">
  import Card from './components/Card.svelte';
</script>

<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-gray-50 h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Portfolio
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <Card title="Textparty.app" category="video" tags={["Werbung", "Englisch"]} description="In laborum minim incididunt anim et nulla ut nostrud." url="https://www.youtube.com/watch?v=6-oYVz9a5RI"/>
      <Card title="Pinbox.app" category="video" tags={["Werbung", "Englisch"]} description="Tempor sit do excepteur et dolor ullamco amet ut commodo irure commodo irure." url="https://www.youtube.com/watch?v=_EvJXlsVlek"/>
      <Card title="Digitale Bildung Barrierefrei (Standardsprache)" category="video" tags={[]} description="Sit id commodo ad consequat sunt cillum pariatur." url="https://www.youtube.com/watch?v=Fjq5biptLdQ&list=PL7ak7yRUTBURil3NctpIh0d0oN7yVjZis&index=1"/>
      <Card title="Digitale Bildung Barrierefrei (Einfache Sprache)" category="video" tags={[]} description="Sunt consectetur eiusmod ipsum quis aute nulla." url="https://www.youtube.com/watch?v=CzUXy7bdx-U&list=PL7ak7yRUTBURil3NctpIh0d0oN7yVjZis&index=2"/>
      <Card title="Stadt Waldkirch" category="audio" tags={[]} description="Eiusmod tempor qui duis aliquip consequat occaecat eu nisi proident ullamco." url="#"/>
</div>
  </div>
</div>