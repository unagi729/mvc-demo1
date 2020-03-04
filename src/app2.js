import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => { // 监听父元素来监听子元素
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    const index = $li.index()
    $tabContent
        .children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click') // 默认第一个已点击