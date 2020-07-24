import React, { createContext, useReducer } from 'react'

export const TweetContext = createContext();

const initialState = {
    numOfLikes: 100,
    numOfRetweets: 88,
    isLiked: false,
    isRetweeted: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'like':
            return {
                ...state,
                numOfLikes: state.isLiked ? state.numOfLikes - 1 : state.numOfLikes + 1,
                isLiked: !state.isLiked
            }
        case 'retweet':
            return {
                ...state,
                numOfRetweets: state.isRetweeted ? state.numOfRetweets-1 : state.numOfRetweets + 1,
                isRetweeted: !state.isRetweeted
            }
    }
}

export const TweetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const like = () => {
        dispatch({
            type: 'like'
        })
    }

    const retweet = () => {
        dispatch({
            type: 'retweet'
        })
    }

    return (
        <TweetContext.Provider
        value={{
            state,
            actions: {
                like, retweet
            }
        }} >
            {children}
        </TweetContext.Provider>
    )
}