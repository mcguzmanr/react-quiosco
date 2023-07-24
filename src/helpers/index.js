export const formatearDinero = cantidad => {
    return new Intl.NumberFormat("en-US",{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(cantidad)
}