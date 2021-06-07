
export const fetchBusinesses = () => {
    return (
        $.ajax({
            url: `/api/businesses/`,
            method: 'GET',
        })
    )
}
export const fetchBusiness = businessId => {
    return (
        $.ajax({
            url: `/api/businesses/${businessId}`,
            method: 'GET',
        })
    )
}

export const searchBusinesses = search => {
    return (
        $.ajax({
            url: `/api/businesses?query=${search}`,
            method: 'GET',
        })
    )
}