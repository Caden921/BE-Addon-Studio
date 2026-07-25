const packName = document.getElementById("packName");
const itemName = document.getElementById("itemName");
const identifier = document.getElementById("identifier");

const textureFile = document.getElementById("textureFile");

const previewImage = document.getElementById("previewImage");
const previewText = document.getElementById("previewText");

const output = document.getElementById("output");

const uuidButton = document.getElementById("generateUUID");
const addonButton = document.getElementById("generateAddon");

let packUUID = "";
let resourceUUID = "";

function log(text) {
    output.value += text + "\n";
    output.scrollTop = output.scrollHeight;
}

function randomHex(length) {

    const chars = "0123456789abcdef";

    let result = "";

    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;

}

function generateUUID() {

    return (
        randomHex(8) + "-" +
        randomHex(4) + "-" +
        "4" + randomHex(3) + "-" +
        "8" + randomHex(3) + "-" +
        randomHex(12)
    );

}

textureFile.addEventListener("change", () => {

    const file = textureFile.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

        previewImage.src = event.target.result;

        previewImage.style.display = "block";

        previewText.textContent = file.name;

        log("✔ PNG Loaded");

    };

    reader.readAsDataURL(file);

});

uuidButton.addEventListener("click", () => {

    packUUID = generateUUID();

    resourceUUID = generateUUID();

    output.value = "";

    log("✔ UUID Generated");
    log("");
    log("Behavior Pack UUID");
    log(packUUID);
    log("");
    log("Resource Pack UUID");
    log(resourceUUID);

});

addonButton.addEventListener("click", () => {

    output.value = "";

    if (packName.value.trim() === "") {
        log("❌ Pack Name is empty");
        return;
    }

    if (itemName.value.trim() === "") {
        log("❌ Item Name is empty");
        return;
    }

    if (identifier.value.trim() === "") {
        log("❌ Identifier is empty");
        return;
    }

    if (textureFile.files.length === 0) {
        log("❌ PNG not selected");
        return;
    }

    log("✔ Pack Name OK");
    log("✔ Item Name OK");
    log("✔ Identifier OK");
    log("✔ Texture OK");
    log("");
    log("🚧 .mcaddon generation will be added next.");

});