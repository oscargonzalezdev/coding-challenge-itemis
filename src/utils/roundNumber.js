// funtion to round up a number to the nearest 0.05

export function roundNumber(number) {
    return (Math.ceil(number * 20) / 20)
}