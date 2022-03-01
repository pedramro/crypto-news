export const GET_ALL_NEWS = 'GET_ALL_NEWS';

export const getAllNews = (news) => {
    return {
        type: GET_ALL_NEWS,
        payload: news
    }
}