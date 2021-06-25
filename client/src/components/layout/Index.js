import React from 'react'
import {Tracks} from '../tracks/Tracks'
import {SearchTrack} from '../tracks/SearchTrack'
import {Pagination} from '../tracks/Pagination'

export const Index = () => {
    return (
        <React.Fragment>
            <SearchTrack />
            <Tracks />
        </React.Fragment>
    )
}
