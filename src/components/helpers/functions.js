export function getCountMovieInCart(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart ? cart.movie.length : 0;
};

export const calcSubPrice = movie => +movie.count * movie.item.price;

export const calcTotalPrice = movie => {
    return movie.reduce((pV, cur) => {
        return (pV += cur.subPrice);
    }, 0);
};