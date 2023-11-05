// navigator.clipboard API

const writeToClipboard = async () => {
    try {
        const userText = prompt('Enter a text: ', '');
        await navigator.clipboard.writeText(userText);
        console.log('Text copied to theh clipboard');
    } catch (err) {
        console.error(err);
    }
};

const readFromClipboard = async () => {
    try {
        const clipboardText = await navigator.clipboard.readText();
        console.log(clipboardText);
    } catch (err) {
        console.error(err);
    }
};

writeToClipboard();
readFromClipboard();

// Ref: https://stackoverflow.com/questions/56306153/domexception-on-calling-navigator-clipboard-readtext