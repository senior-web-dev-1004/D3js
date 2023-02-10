$(document).ready(async () => {

    async function getDataFromApi() {
        try {
            let response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
            let data = await response.json()
            return data.price
        } catch (err) {
            alert(err)
        }
    }

    let i = 0;
    let priceFlag = 0;
    let tempPrice = 0;
    const margin = { top: 10, right: 30, bottom: 30, left: 30 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    const svg = d3.select('body').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom);

    var highest_price = 68789.63

    setInterval(async () => {
        let current_price = await getDataFromApi()
        if (tempPrice < current_price) {
            tempPrice = current_price
            priceFlag = 1;
        }

        main_cv = current_price / 700
        red_cv = (highest_price - current_price) / 700

        const main_circle_positions = [
            { 'cx': 50, 'cy': 50, 'radius': main_cv },
            { 'cx': 262 - main_cv, 'cy': 50, 'radius': main_cv },
            { 'cx': 50, 'cy': 270 - main_cv, 'radius': main_cv },
            { 'cx': 262 - main_cv, 'cy': 270 - main_cv, 'radius': main_cv },
        ]

        const red_circle_positions = []
        const little_circle_positions = []

        main_circle_positions.forEach(item => {
            let red_circle_position = { 'cx': 318 - item.cx - main_cv, 'cy': 320 - item.cy - main_cv, 'radius': red_cv }
            red_circle_positions.push(red_circle_position);
            let little_circle_radius = Math.abs(main_cv - red_cv)
            let little_circle_position = { 'cx': item.cx, 'cy': 320 - item.cy - main_cv, 'radius': little_circle_radius }
            little_circle_positions.push(little_circle_position);
        })

        let mainData = main_circle_positions[i % 4]
        let redData = red_circle_positions[i % 4]
        let littleData = little_circle_positions[i % 4]

        function appendCircle(selection) {
            selection.append('circle')
                .attr('cx', mainData.cx)
                .attr('cy', mainData.cy)
                .attr('r', mainData.radius)
        }

        function appendRedCircle(selection) {
            selection.append('circle')
                .attr('cx', redData.cx)
                .attr('cy', redData.cy)
                .attr('r', redData.radius)
                .style('fill', 'red')
        }

        function appendLieCircle(selection) {
            if (priceFlag == 1) {
                selection.append('circle')
                    .attr('cx', littleData.cx)
                    .attr('cy', littleData.cy)
                    .attr('r', littleData.radius)
            }
        }
        mask(main_cv)
        function mask() {
            $("svg").empty()
            svg.append('circle')
                .attr('cx', redData.cx)
                .attr('cy', redData.cy)
                .attr('r', redData.radius)
                .style('fill', 'red')
            const defs = svg.append('defs')
            defs.append('clipPath')
                .attr('id', 'circle-clip')
                .call(appendCircle)
                .call(appendLieCircle)
            svg.append('image')
                .attr('xlink:href', './assets/images/1.png')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 318 + 'px')
                .attr('height', 320 + 'px')
                .attr('clip-path', 'url(#circle-clip)')
        }
        i++
        priceFlag = 0;
    }, 2000);
})
