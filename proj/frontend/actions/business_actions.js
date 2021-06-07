import * as BusinessApiUtil from '../util/business_api_util'

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'

export const receiveBusinesses = businesses => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const receiveBusiness = business => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

export const fetchBusinesses = () => dispatch => {
    return (
        BusinessApiUtil.fetchBusinesses()
            .then((businesses) => dispatch(receiveBusinesses(businesses)))
    )
}

export const fetchBusiness = (business) => dispatch => {
    return (
        BusinessApiUtil.fetchBusiness(business)
            .then((business) => dispatch(receiveBusiness(business)))
    )
}

export const searchBusinesses = (search) => dispatch => {
    return (
        BusinessApiUtil.searcBusinesses(search)
            .then((businesses) => dispatch(receiveBusinesses(businesses)))
    )
}

