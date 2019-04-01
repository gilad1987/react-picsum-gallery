import {decorate, observable, action} from "mobx";

class GalleryStore {

    isGrayMode = false;
    images = [];
    currentImages = [];
    countGalleryImages = 30;

    async fetchImages(url = 'https://picsum.photos/list') {
        const response = await fetch(url);
        this.images = await response.json();
        this.images.map(image => {
            image.key = Math.random();
            return image;
        });
        this.setRandomImages();
    }

    setRandomImages(num = this.countGalleryImages) {
        const entriesNumber = Math.min(num, this.images.length);
        const indexes = [];
        const images = [];
        let index;

        for (let i = 0; i < entriesNumber; i++) {

            do {
                index = Math.floor(Math.random() * this.images.length);
            } while (indexes.includes(index));

            indexes.push(index);
            images.push(this.images[index]);
        }
        this.currentImages = images;
    }

    toggleGrayMode() {
        this.isGrayMode = !this.isGrayMode;
    }

}

decorate(
    GalleryStore, {
        images: observable,
        currentImages: observable,
        isGrayMode: observable,
        toggleGrayMode: action,
        setRandomImages: action,
    }
);

export default GalleryStore;
