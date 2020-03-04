import './app4.css'
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle.on('mouseennter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})