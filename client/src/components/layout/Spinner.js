import React from 'react'
import spinner from './spinner.gif'
import bootstrap from 'react-bootstrap'

export default   () => {
    return (
        <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary spinner-border m-2" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary spinner-border m-2" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success spinner-border m-2" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    )
}
