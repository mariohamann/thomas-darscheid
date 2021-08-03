<script>
    export let title;
    export let description;
</script>

<div>
    <div>
        <span class="flex items-center justify-center h-12 w-12 bg-white bg-opacity-10">
        <slot></slot>
        </span>
    </div>
    <div class="mt-6">
        <h3 class="text-lg font-medium text-white">{title}</h3>
        <p class="mt-2 text-base text-secondary-100">{description}</p>
    </div>
</div>