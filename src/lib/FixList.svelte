<script>
    import { onMount } from "svelte";
    import { error_translates } from "./FixerElement";

    export let lexicon = {};

    onMount(() => {});

    const range = (start, stop, step = 1) =>
        Array(Math.ceil((stop - start + 1) / step))
            .fill(start)
            .map((x, y) => x + y * step);
</script>

<div class="text-center flex-col flex my-2">
    {#each lexicon.corrections as c}
        <button class="btn-neutral py-2" type="button" title={error_translates[c.type]}>
            <pre class="badge-secondary inline">{range(c.start_lexeme, c.end_lexeme)
                    .map(
                        (i) =>
                            lexicon.lexemes[i].word + lexicon.lexemes[i].suffix
                    )
                    .join("")}</pre>

            <span class="mx-2">{" ➡️ "}</span>
            <pre class="badge-primary inline">{c.suggestion?.term}</pre>
        </button>
    {/each}
</div>
