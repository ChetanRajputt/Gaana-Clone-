// create a custom hook (function) that will be fixed the name

function useFixedString(str, size = 30) {
    if (str.length > size) {
        return str.substr(0, size) + "...";
    }
    return str;
}



export default useFixedString
