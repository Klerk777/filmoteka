import { Loading } from "notiflix";

export function loadingSpiner() {
    Loading.standard('Loading...', {
        backgroundColor: 'rgba(0,0,0,0.8)',
        svgColor: '$accentColor',
        messageColor: '$accentColor',
    });
}