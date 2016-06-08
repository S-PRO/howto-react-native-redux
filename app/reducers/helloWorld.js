/**
 * Created by igor on 08.06.16.
 */

const dummyData = [
    {title: 'Past'},
    {title: 'Present'},
    {title: 'Future'}
];

export const helloWorld = (state = dummyData, action) => {
    switch (action.type){
        case 'FETCH_WORLD_SUCCESS':
            return state;
        default:
            return state;
    }
};