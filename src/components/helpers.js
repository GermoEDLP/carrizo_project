export const capitalize = (phrase) => {
    if(!phrase) return;
    const words = phrase.split(' ');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}