import React, {Component} from 'react';
import './App.scss';
import GalleryStore from "./containers/gallery/gallery.store";
import {Provider} from "mobx-react";
import Gallery from "./containers/gallery/Gallery";

const stores = {
    galleryStore: new GalleryStore()
};

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Gallery/>
            </Provider>
        );
    }
}

export default App;
