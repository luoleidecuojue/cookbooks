import styled from 'styled-components'

const CategoryWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: .44rem;
        background-color: #ee742f;

        ul {
            position: relative;
            display: flex;
            width: 1.4rem;
            height: .3rem;
            border: 1px solid #fff;
            border-radius: .15rem;

            li {
                flex: 1;
                line-height: .3rem;
                text-align: center;
                color: #fff;
                transition: all 200ms ease-in;

                &.active {
                    color: #ee742f;
                    z-index: 3;
                }
                
                &.slide {
                    left: 0;
                    position: absolute;
                    width: .7rem;
                    background-color: #fff;
                    height: .3rem;
                    z-index: 2;
                    border-radius: .15rem;
                }

                &.slide.right {
                    left: .7rem;
                }
            }
        }
    }
`

const MenuWrap = styled.div `
    border-top: 1px solid #ccc;
    overflow: hidden;
    display: flex;
    flex: 1;

    aside {
        overflow-y: scroll;
        width: .9rem;
        
        ul {
            li {
                height: .5rem;
                text-align: center;
                line-height: .5rem;

                &.active {
                    background-color: #fff;
                    color: #ee742f;

                    span {
                        display: inline-block;
                        height: 100%;
                        border-bottom: 1px solid #ee742f;
                    }
                }
            }
        }
    }

    section {
        overflow-y: scroll;
        flex: 1;
        paddingL .25rem;
        background: #fff;

        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 33.33333%;
                height: .45rem;
                text-align: center;
            }
        }
    }
`

export {
    CategoryWrap,
    MenuWrap
}