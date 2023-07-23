<script>
    import { onMount, onDestroy } from "svelte";
    import { FixerElement } from "./FixerElement";
    import { restoreSelection, saveSelection } from "./selection";
    import FixList from "./FixList.svelte";

    let lastUpdate = Date.now();
    let curVersion = 1;
    let curText = "";
    let curTime = Date.now();
    let lastVersion = 1;
    let updateBeacon = null;
    let responseData = null;

    onMount(() => {
        /**
         * @type {HTMLDivElement}
         */
        const editor = document.querySelector(".editor");
        if (sessionStorage.getItem("text")) {
            editor.innerHTML = sessionStorage.getItem("text");
            curText = editor.innerText;
        }
        updateBeacon = setInterval(() => {
            lastUpdate = Date.now();
            if (curVersion !== lastVersion && Date.now() - curTime > 200) {
                lastVersion = curVersion;
                fetch(
                    "https://api.benerin.co/v1/check?text=" +
                        encodeURIComponent(curText),
                    {
                        method: "GET",
                    }
                )
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        var sel = saveSelection(editor);
                        editor.innerHTML = data.rendered;
                        responseData = data;
                        // init all fixer elements
                        const fixerElements = document.querySelectorAll("u-x");
                        fixerElements.forEach(
                            (/** @type {HTMLElement} */ el) => {
                                var newItem = new FixerElement();
                                newItem.setAttribute(
                                    "data-type",
                                    el.getAttribute("data-type")
                                );
                                newItem.setAttribute(
                                    "data-suggestion",
                                    el.getAttribute("data-suggestion")
                                );
                                newItem.innerText = el.innerText;
                                el.parentNode.replaceChild(newItem, el);
                            }
                        );

                        setTimeout(() => {
                            editor.focus();
                            restoreSelection(editor, sel);
                            sessionStorage.setItem("text", editor.innerHTML);
                        }, 10);
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
</script>

<div
    class="editor"
    contenteditable
    data-gramm="false"
    placeholder={curText ? "" : "Ketik konten"}
/>

<div>
    {#if curVersion !== lastVersion}
        <div class="text-center text-gray-500">
            <i>Wait for update...</i>
        </div>
    {:else if responseData && responseData.structure}
        <div class="text-center text-gray-500">
            <i>Correction lists:</i>
        </div>
        {#each responseData.structure as lexicon}
            <FixList lexicon={lexicon} />
        {/each}
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
