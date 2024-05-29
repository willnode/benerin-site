<script>
    import { onMount, onDestroy } from "svelte";
    import { restoreSelection, saveSelection } from "./selection";

    let lastUpdate = Date.now();
    let curVersion = 1;
    let curText = "";
    let resultText = "";
    let curTime = Date.now();
    let lastVersion = 1;
    let updateBeacon = null;
    let responseData = null;
    let responseErr = null;
    let responseFetching = false;
    let taskStemming = true;
    let taskSpellcheck = false;

    onMount(() => {
        /**
         * @type {HTMLDivElement}
         */
        const editor = document.querySelector("#editor");
        if (sessionStorage.getItem("text")) {
            editor.innerHTML = sessionStorage.getItem("text");
            curText = editor.innerText;
        }
        updateBeacon = setInterval(() => {
            lastUpdate = Date.now();
            if (curVersion !== lastVersion && Date.now() - curTime > 500) {
                lastVersion = curVersion;
                responseData = null;
                responseErr = null;
                responseFetching = true;
                fetch("https://api.benerin.web.id/", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        text: curText,
                        tasks: [
                            taskStemming && "stemming",
                            taskSpellcheck && "spellcheck",
                            "tokenize",
                        ].filter(x => x),
                    }),
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        resultText = data.text;
                        responseData = data;
                    })
                    .catch((err) => {
                        responseErr = err;
                    })
                    .finally(() => {
                        responseFetching = false;
                    });
            }
        }, 100);
        editor.addEventListener("input", (e) => {
            curText = editor.innerText;
            curVersion++;
            curTime = Date.now();
        });
    });

    onDestroy(() => {
        clearInterval(updateBeacon);
    });

    let updateVersion = (e) => {
        curVersion++;
        curTime = Date.now();
    };
</script>

<input
    type="checkbox"
    bind:checked={taskSpellcheck}
    on:change={updateVersion}
/>
Spellcheck
<input type="checkbox" bind:checked={taskStemming} on:change={updateVersion} />
Stemming

<div
    class="editor m-2"
    id="editor"
    contenteditable={true}
    data-gramm="false"
    placeholder={curText ? "" : "Ketik konten"}
/>

<div class="editor m-2" data-gramm="false" placeholder={resultText} />

<div>
    {#if curVersion !== lastVersion}
        <div class="text-center text-gray-500">
            <i>Menunggu selesai mengetik...</i>
        </div>
    {:else if responseErr}
        <div class="text-center text-gray-500">
            <i>Ada kesalahan teknis...</i>
            <p class="font-mono">{responseErr}</p>
        </div>
    {:else if responseFetching}
        <div class="text-center text-gray-500">
            <i>Menunggu data...</i>
        </div>
    {:else}
        <div class="text-center text-gray-500">
            <i>...</i>
        </div>
    {/if}
</div>

<style>
    .editor {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        min-height: 200px;
        white-space: pre-wrap;
        font-size: 2em;
    }

    .editor::before {
        content: attr(placeholder);
        color: #ccc;
        pointer-events: none;
    }

    .editor :global(u-x) {
        text-decoration: underline;
        color: lightcoral;
        cursor: pointer;
    }

    :global(.u-x-tooltip) {
        display: none;
        padding: 0.5em 1em;
    }

    :global(.u-x-tooltip) :global(b) {
        background: rgb(8, 8, 8);
        white-space: pre;
    }
    :global(.u-x-tooltip.show) {
        display: block;
        background: rgb(45, 45, 45);
        color: rgb(255, 255, 255);
    }
</style>
