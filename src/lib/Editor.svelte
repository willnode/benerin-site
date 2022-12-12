<style>
    .editor {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
        min-height: 200px;
        white-space: pre-wrap;
    }
</style>

<script>
    import { onMount, onDestroy } from "svelte";
    import { restoreSelection, saveSelection } from "./selection";

    let lastUpdate = Date.now();
    let curVersion = 1;
    let curText = "";
    let curTime = Date.now();
    let lastVersion = 1;
    let updateBeacon = null;

    onMount(() => {
        const editor = document.querySelector(".editor");
        if (sessionStorage.getItem("text")) {
            editor.innerHTML = sessionStorage.getItem("text");
        }
        updateBeacon = setInterval(() => {
            lastUpdate = Date.now();
            if (curVersion !== lastVersion && Date.now() - curTime > 1000) {
                lastVersion = curVersion;
                editor.designMode = "off";
                sessionStorage.setItem("text", editor.innerHTML);
                fetch("https://api.benerin.co/v1/fix?word="+encodeURIComponent(curText), {
                    method: "GET",
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    var sel = saveSelection(editor);
                    editor.innerHTML = data.data;
                    setTimeout(() => {
                        restoreSelection(editor, sel);
                    editor.designMode = "on";
                    }, 100);
                });
            }
        }, 1000);
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
<div class="editor" contenteditable>

</div>

<div>
    {#if curVersion !== lastVersion}
        <div class="text-center text-gray-500">
            <i>Wait for update...</i>
        </div>
    {/if}
</div>