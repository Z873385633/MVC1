import './app4.css'
import $ from 'jquery'

const $Circle = $('.app4 .circle');
$Circle.on('mouseenter', () => {
    $Circle.addClass('active')
}).on('mouseleave', () => {
    $Circle.removeClass('active')
})