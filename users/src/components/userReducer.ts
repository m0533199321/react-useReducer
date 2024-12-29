import { User } from "../models/userType"

export type Action = {
    type: 'EDIT_USER' | 'CREATE_USER' | 'GET_USER' | 'DELETE_USER'
    data: Partial<User>
}

export default (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE_USER':
            const user = action.data
            return {
                firstN: user.firstN || '',
                lastN: user.lastN,
                email: user.email,
                password: user.password || '',
                address: user.address,
                phone: user.phone,
            }
        case 'EDIT_USER':
            return {
                firstN: action.data.firstN || '',
                lastN: action.data.lastN,
                email: action.data.email,
                password: action.data.password || '',
                address: action.data.address,
                phone: action.data.phone
            }
        default:
            return state
    }
}
