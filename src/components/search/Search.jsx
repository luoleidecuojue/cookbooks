import React, { Component } from 'react'

import { Container } from './StyledSearch'

import imgSearch from '@a/images/search.png'
// import { Container } from '../../home/cookbook/StyledCookBook'

export default class Search extends Component {
    render() {
        return (
            <Container {...this.props}>
                <div>
                    <img src = {imgSearch} alt = ' ' />
                    <span>想吃什么搜这里，如川菜</span>
                </div>
            </Container>
        )
    }
}
