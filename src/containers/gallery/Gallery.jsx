import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Picture from "./Picture";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox, TextField, Button} from "@material-ui/core";
import {decorate, observable, action, computed} from "mobx";

import './gallery.scss';

class Gallery extends Component {

    filter = '';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.galleryStore.fetchImages();
    }

    handelChangeGreyMode = () => {
        this.props.galleryStore.toggleGrayMode();
    }

    handleFilter = (e) => {
        this.filter = e.target.value;
    };

    get images() {
        if (this.filter === '') {
            return this.props.galleryStore.currentImages;
        }

        return this.props.galleryStore.currentImages.filter(image => image.author.toLowerCase().indexOf(this.filter.toLowerCase()) > -1);
    }

    setRandomImages = () => {
        this.props.galleryStore.setRandomImages();
    }

    render() {

        const images = this.images.map(image =>
            <Picture key={image.key}
                     picture={image}
                     isGreyMode={this.props.galleryStore.isGrayMode}/>);

        return (
            <div className="Gallery">
                <header>
                    <TextField
                        id="outlined-name"
                        label="Filter"
                        onChange={this.handleFilter}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                    />

                    <FormControlLabel control={<Checkbox
                        checked={this.props.galleryStore.isGrayMode}
                        onChange={this.handelChangeGreyMode}
                        value="Grey filter"
                    />} label="Grey filter"/>

                    <div>
                        <Button variant="contained" className={'GetImages-button'} color="primary" onClick={this.setRandomImages}>
                            Get images
                        </Button>
                    </div>
                </header>

                <section className="Images">
                    {images.length ? images : 'No result found'}
                </section>


            </div>
        );
    }
}

decorate(Gallery, {
    images: computed,
    filter: observable,
    handleFilter: action,
});

export default inject('galleryStore')(observer(Gallery));
