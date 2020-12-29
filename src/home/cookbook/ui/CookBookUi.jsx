import React from 'react'

import PropTypes from 'prop-types'

import memoize from 'memoize-one'

import { Container } from './StyledCookBook'

import Swiper from './Swiper'

import Search from '@c/search/Search'

import HotCate from './HotCate'

import Top10 from './Top10'


const CookbookUi = (props) => {
    const swiper = memoize(list => list.slice(0, 5))
    const hotCate = memoize(list => list.slice(0, 10))

    return (
        <Container>
            <header>美食大全</header>
            <Swiper list={swiper(props.list)}></Swiper>
            <Search
                outerbg="#f5f5f9"
                innerbg="#fff"
                hasborder={true}
            ></Search>
            <HotCate></HotCate>
            <Top10 list={hotCate(props.list)}></Top10>
        </Container>
    )
}

// 函数式组件绑定类型检查
CookbookUi.propTypes = {
    list: PropTypes.array
}

export default CookbookUi