import {V} from 'working'

let nextColor = 0
let colors = [
    new pc.Color(1, 0, 0),
    new pc.Color(0, 1, 0),
    new pc.Color(0, 0, 1),
    new pc.Color(1, 1, 0),
    new pc.Color(1, 0, 1),
    new pc.Color(0, 1, 1),
    new pc.Color(1, 0.5, 0),
    new pc.Color(0, 0.5, 1),
    new pc.Color(0.5, 1, 0),
    new pc.Color(0, 1, 0.5),
    new pc.Color(0.5, 1, 0.5),
    new pc.Color(1, 0.5, 0.5),
    new pc.Color(0.5, 1, 0.5)
]

let app = pc.Application.getApplication()

app && app.on('update', function () {
    nextColor = 0
})

let draw = function (start, direction, length, duration, lineBatch) {
    start = start.clone()
    direction = direction.clone()
    let t = 0
    duration = duration || 0
    function draw(dt) {
        t += dt
        if(t >= duration) {
            app.off('update', draw)
        }
        if (!length) {
            app.renderLine(start, direction, colors[nextColor++ % colors.length], colors[nextColor % colors.length], lineBatch)
        } else {
            app.renderLine(start, V(direction).scale(length).add(start), colors[nextColor++ % colors.length], colors[nextColor % colors.length], lineBatch)
        }
    }
    app.on('update', draw)
    draw(0)
}

draw.keep = function(fn, duration) {
    let t = 0
    function draw(dt) {
        t += dt
        if(t >= duration) {
            app.off('update', draw)
        }
        try {
            fn()
        } catch(e) {

        }
    }
    app.on('update', draw)
    draw(0)
}

export default draw
