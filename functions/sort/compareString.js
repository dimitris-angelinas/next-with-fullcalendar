export default function compareString(a,b) {
    const res = a.localeCompare(b)
    if(res > 0) return 1
    if(res < 0) return -1
    return 0
}