export default function compareDates(key) {
    return function (a, b) {
        const dateA = a[key] ? new Date(a[key].split("/").reverse().join("-")).getTime() : 0;
        const dateB = b[key] ? new Date(b[key].split("/").reverse().join("-")).getTime() : 0;
        return dateA - dateB;
    }
}